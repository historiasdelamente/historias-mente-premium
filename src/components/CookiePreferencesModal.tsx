import { useState } from 'react';
import { X, Shield, BarChart3, Target } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { CookiePreferences } from '@/utils/cookieConsent';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (analytics: boolean, marketing: boolean) => void;
  currentPreferences: CookiePreferences;
}

const CookiePreferencesModal = ({
  isOpen,
  onClose,
  onSave,
  currentPreferences,
}: CookiePreferencesModalProps) => {
  const [analytics, setAnalytics] = useState(currentPreferences.analytics);
  const [marketing, setMarketing] = useState(currentPreferences.marketing);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(analytics, marketing);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.2)] animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/20">
          <h2 className="text-xl font-bold text-white">Configurar Cookies</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Essential Cookies */}
          <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-[#D4AF37]/20">
            <div className="p-2 bg-[#D4AF37]/20 rounded-lg">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">Cookies Esenciales</h3>
                <span className="text-xs text-[#D4AF37] bg-[#D4AF37]/20 px-2 py-1 rounded-full">
                  Siempre activas
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
              </p>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-gray-800">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <BarChart3 className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">Cookies de Análisis</h3>
                <Switch
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                  className="data-[state=checked]:bg-[#D4AF37]"
                />
              </div>
              <p className="text-sm text-gray-400">
                Google Analytics - Nos ayudan a entender cómo usas el sitio para mejorarlo.
              </p>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-gray-800">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Target className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">Cookies de Marketing</h3>
                <Switch
                  checked={marketing}
                  onCheckedChange={setMarketing}
                  className="data-[state=checked]:bg-[#D4AF37]"
                />
              </div>
              <p className="text-sm text-gray-400">
                Meta Pixel, TikTok Pixel - Para mostrarte anuncios relevantes en redes sociales.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#D4AF37]/20">
          <button
            onClick={handleSave}
            className="w-full bg-[#D4AF37] text-black font-bold py-3 px-6 rounded-full hover:bg-[#f4d03f] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferencesModal;
