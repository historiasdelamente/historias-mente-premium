import { useEffect } from "react";
import { CheckCircle, Mail, MessageCircle, Clock, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GraciasApegoDetox = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schedules = [
    { countries: "Colombia, Ecuador, Perú, Panamá", schedule: "Martes 8:00 p.m. | Jueves 1:00 p.m." },
    { countries: "México (CDMX), Costa Rica, Centroamérica", schedule: "Martes 7:00 p.m. | Jueves 12:00 p.m." },
    { countries: "Venezuela, Bolivia, Chile, Paraguay", schedule: "Martes 8:00 p.m. | Jueves 2:00 p.m." },
    { countries: "Argentina, Uruguay", schedule: "Martes 9:00 p.m. | Jueves 3:00 p.m." },
    { countries: "España", schedule: "Miércoles 2:00 a.m. | Jueves 7:00 p.m." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0C0C0C] to-black text-white font-['Poppins',sans-serif] py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        
        {/* Header con icono */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD400] blur-2xl opacity-30 animate-pulse"></div>
              <CheckCircle className="relative w-24 h-24 text-[#FFD400]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black golden-text">
            ¡Bienvenida, preciosa!
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold">
            Tu cupo ya está 100% reservado ✨
          </p>
        </div>

        {/* Qué recibirás */}
        <div className="card-premium space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-center">
            En minutos te llega:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-[#FFD400]/20">
              <Mail className="w-6 h-6 text-[#FFD400] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white mb-1">Por correo electrónico</p>
                <p className="text-sm text-gray-400">El enlace permanente de Google Meet</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-[#FFD400]/20">
              <MessageCircle className="w-6 h-6 text-[#FFD400] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white mb-1">Por WhatsApp</p>
                <p className="text-sm text-gray-400">Recordatorios automáticos con tu hora local</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFD400]/10 border border-[#FFD400]/30 rounded-xl p-4 text-center">
            <p className="text-gray-300">
              <span className="font-bold golden-text">El mismo enlace</span> para todas las clases. Guárdalo y entra con un solo clic.
            </p>
          </div>
        </div>

        {/* Horarios */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black text-center">
            Tus horarios según tu país
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {schedules.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[#FFD400]/20 rounded-xl p-5 hover:border-[#FFD400]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#FFD400] mt-1 flex-shrink-0" />
                  <h3 className="text-white font-bold leading-tight">
                    {item.countries}
                  </h3>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FFD400] mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-medium">
                    {item.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 italic">
              El recordatorio siempre vendrá con tu hora exacta, no te preocupes <Heart className="inline w-5 h-5 text-red-500" />
            </p>
          </div>
        </div>

        {/* Mensaje de cierre */}
        <div className="card-premium space-y-6 text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Guarda el enlace de Google Meet que te llega ahora y entra cuando quieras con un solo clic.
          </p>
          
          <div className="border-t border-[#FFD400]/20 pt-6">
            <p className="text-xl text-white mb-2">
              Te abrazo muy fuerte.
            </p>
            <p className="text-lg golden-text font-bold mb-4">
              Esto es el comienzo de tu libertad.
            </p>
            <p className="text-gray-400">
              Con todo mi amor,
            </p>
            <p className="text-white font-bold mt-2">
              Javier Vieira
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Historias de la Mente
            </p>
          </div>
        </div>

        {/* Botón volver */}
        <div className="text-center pt-8">
          <Button
            onClick={() => navigate("/")}
            className="btn-cta-primary px-8 py-6 text-lg"
          >
            VOLVER AL INICIO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GraciasApegoDetox;
