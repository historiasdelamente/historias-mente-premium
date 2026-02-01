import { useState, useEffect, useCallback } from 'react';
import {
  CookiePreferences,
  defaultPreferences,
  getStoredConsent,
  acceptAllCookies,
  acceptEssentialOnly,
  saveCustomPreferences,
  loadConsentedScripts,
  detectUserCountry,
  requiresGDPRConsent,
} from '@/utils/cookieConsent';

interface UseCookieConsentReturn {
  preferences: CookiePreferences;
  showBanner: boolean;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleAcceptAll: () => void;
  handleEssentialOnly: () => void;
  handleSaveCustom: (analytics: boolean, marketing: boolean) => void;
  openPreferences: () => void;
  requiresGDPR: boolean;
  isLoading: boolean;
}

export const useCookieConsent = (): UseCookieConsentReturn => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Check sessionStorage first for cached country to set initial state correctly
  const getCachedGDPRStatus = (): boolean => {
    if (typeof window === 'undefined') return true;
    const cached = sessionStorage.getItem('userCountry');
    if (cached) {
      return requiresGDPRConsent(cached);
    }
    return true; // Default to true until we know
  };
  
  const [requiresGDPR, setRequiresGDPR] = useState<boolean>(getCachedGDPRStatus);
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    // If we have cached consent OR cached country, we're not loading
    if (typeof window === 'undefined') return true;
    const storedConsent = getStoredConsent();
    const cachedCountry = sessionStorage.getItem('userCountry');
    return !storedConsent && !cachedCountry;
  });

  // Initialize on mount with geo-detection
  useEffect(() => {
    const initializeConsent = async () => {
      const stored = getStoredConsent();
      
      if (stored) {
        // User has already given consent
        setPreferences(stored);
        loadConsentedScripts();
        // Check cached country for GDPR status
        const cachedCountry = sessionStorage.getItem('userCountry');
        if (cachedCountry) {
          setRequiresGDPR(requiresGDPRConsent(cachedCountry));
        }
        setIsLoading(false);
        return;
      }
      
      // Check if we have cached country already
      const cachedCountry = sessionStorage.getItem('userCountry');
      if (cachedCountry) {
        const needsGDPR = requiresGDPRConsent(cachedCountry);
        setRequiresGDPR(needsGDPR);
        
        if (!needsGDPR) {
          // Non-GDPR country - auto-accept
          const newPrefs = acceptAllCookies();
          setPreferences(newPrefs);
        } else {
          setShowBanner(true);
        }
        setIsLoading(false);
        return;
      }
      
      // No stored consent and no cache - detect country
      try {
        const country = await detectUserCountry();
        console.log('[GDPR] Detected country:', country);
        const needsGDPR = requiresGDPRConsent(country);
        console.log('[GDPR] Requires GDPR consent:', needsGDPR);
        
        setRequiresGDPR(needsGDPR);
        
        if (needsGDPR) {
          // GDPR country - show banner after delay
          setTimeout(() => {
            setShowBanner(true);
            setIsLoading(false);
          }, 1000);
        } else {
          // Non-GDPR country (LATAM, etc.) - auto-accept all
          const newPrefs = acceptAllCookies();
          setPreferences(newPrefs);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('[GDPR] Error detecting country:', error);
        // On error, assume GDPR required (safer)
        setTimeout(() => {
          setShowBanner(true);
          setIsLoading(false);
        }, 1000);
      }
    };
    
    initializeConsent();
  }, []);

  const handleAcceptAll = useCallback(() => {
    const newPrefs = acceptAllCookies();
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const handleEssentialOnly = useCallback(() => {
    const newPrefs = acceptEssentialOnly();
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const handleSaveCustom = useCallback((analytics: boolean, marketing: boolean) => {
    const newPrefs = saveCustomPreferences(analytics, marketing);
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const openPreferences = useCallback(() => {
    setShowModal(true);
  }, []);

  return {
    preferences,
    showBanner,
    showModal,
    setShowModal,
    handleAcceptAll,
    handleEssentialOnly,
    handleSaveCustom,
    openPreferences,
    requiresGDPR,
    isLoading,
  };
};
