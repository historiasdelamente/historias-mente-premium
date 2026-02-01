import { useState, useEffect, useCallback } from 'react';
import {
  CookiePreferences,
  defaultPreferences,
  getStoredConsent,
  hasConsentBeenGiven,
  acceptAllCookies,
  acceptEssentialOnly,
  saveCustomPreferences,
  loadConsentedScripts,
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
}

export const useCookieConsent = (): UseCookieConsentReturn => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const stored = getStoredConsent();
    
    if (stored) {
      setPreferences(stored);
      // Load scripts based on stored preferences
      loadConsentedScripts();
    } else {
      // Show banner if no consent has been given
      // Small delay for smooth animation
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
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
  };
};
