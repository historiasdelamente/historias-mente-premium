import { Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import CookiePreferencesModal from './CookiePreferencesModal';

const CookieConsentBanner = () => {
  const {
    preferences,
    showBanner,
    showModal,
    setShowModal,
    handleAcceptAll,
    handleEssentialOnly,
    handleSaveCustom,
    openPreferences,
  } = useCookieConsent();

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
          <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-2xl shadow-[0_-10px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(212,175,55,0.15)] p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-[#D4AF37]/20 rounded-lg flex-shrink-0">
                <Cookie className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Usamos cookies para mejorar tu experiencia
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Este sitio utiliza cookies propias y de terceros para análisis y publicidad personalizada. 
                  Puedes aceptar todas, solo las esenciales, o personalizar tu elección.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button
                onClick={openPreferences}
                className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-300 border border-gray-700 rounded-full hover:border-[#D4AF37]/50 hover:text-white transition-all duration-300"
              >
                <Settings className="w-4 h-4" />
                Personalizar
              </button>
              
              <button
                onClick={handleEssentialOnly}
                className="px-5 py-2.5 text-sm font-medium text-gray-300 border border-gray-700 rounded-full hover:border-[#D4AF37]/50 hover:text-white transition-all duration-300"
              >
                Solo esenciales
              </button>
              
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 text-sm font-bold text-black bg-[#D4AF37] rounded-full hover:bg-[#f4d03f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 sm:ml-auto"
              >
                ✓ Aceptar todas
              </button>
            </div>

            {/* Link to cookie policy */}
            <div className="text-center sm:text-left">
              <Link 
                to="/cookies" 
                className="text-xs text-[#D4AF37] hover:text-[#f4d03f] underline underline-offset-2 transition-colors"
              >
                Ver nuestra Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveCustom}
        currentPreferences={preferences}
      />
    </>
  );
};

export default CookieConsentBanner;
