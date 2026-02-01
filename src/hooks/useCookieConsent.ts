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
  const [requiresGDPR, setRequiresGDPR] = useState(true); // Default to true (safe)
  const [isLoading, setIsLoading] = useState(true);

  // Initialize on mount with geo-detection
  useEffect(() => {
    const initializeConsent = async () => {
      const stored = getStoredConsent();
      
      if (stored) {
        // User has already given consent
        setPreferences(stored);
        loadConsentedScripts();
        setIsLoading(false);
        return;
      }
      
      // No stored consent - detect country
      try {
        const country = await detectUserCountry();
        const needsGDPR = requiresGDPRConsent(country);
        
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
      } catch {
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
