import { useEffect } from "react";
import { CheckCircle, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import bannerHero from "@/assets/apego-detox-fecha-banner.png";

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
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0C0C0C] to-black text-white font-['Poppins',sans-serif]">
      <div className="max-w-6xl mx-auto animate-fade-in">
        
        {/* Top Banner Hero */}
        <div className="relative w-full">
          <img 
            src={bannerHero} 
            alt="Esta fecha marcará un antes y a la después en tu vida" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Section */}

        {/* Content Section */}
        <div className="px-4 sm:px-6 py-8 md:py-12 space-y-8 md:space-y-12 max-w-5xl mx-auto">
          
          {/* Título de bienvenida móvil */}
          <div className="text-center space-y-3 md:hidden">
            <div className="flex justify-center mb-3">
              <Sparkles className="w-16 h-16 text-[#FFD400] animate-pulse" />
            </div>
            <h1 className="text-4xl font-black golden-text">
              ¡FELICIDADES!
            </h1>
            <p className="text-2xl text-white font-black">
              YA ESTÁS REGISTRADA
            </p>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-7 h-7 text-[#FFD400]" />
              <p className="text-lg golden-text font-bold">
                Tu cupo está 100% reservado
              </p>
            </div>
          </div>
          
          {/* Qué recibirás */}
          <div className="card-premium space-y-6 md:space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD400] blur-[100px] opacity-20 animate-pulse"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center golden-text relative z-10 px-2">
              ✨ En minutos recibes tu acceso ✨
            </h2>
            
            <div className="flex justify-center">
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-[#1A1A1A] rounded-xl sm:rounded-2xl border-2 border-[#FFD400]/40 hover:border-[#FFD400]/70 transition-all duration-300 hover-lift max-w-xl relative z-10 w-full">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#FFD400] flex-shrink-0" />
                <div className="text-left">
                  <p className="font-black text-white text-base sm:text-xl md:text-2xl mb-1 sm:mb-2">Por correo electrónico</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">El enlace permanente de Google Meet</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFD400]/20 via-[#FFD400]/10 to-[#FFD400]/20 border-2 border-[#FFD400]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center relative z-10">
              <p className="text-base sm:text-lg md:text-2xl text-white font-bold">
                <span className="golden-text font-black">El mismo enlace</span> para todas las clases
              </p>
              <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-xl">Guárdalo y entra con un solo clic</p>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-6 md:space-y-8 relative">
            <div className="absolute -left-32 top-1/2 w-64 h-64 bg-[#FFD400] blur-[100px] opacity-10"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center golden-text px-2">
              📅 Tus horarios según tu país
            </h2>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 relative z-10">
              {schedules.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#0C0C0C] border-2 border-[#FFD400]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#FFD400]/60 transition-all duration-300 hover-lift hover:shadow-[0_0_30px_rgba(255,212,0,0.3)]"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#FFD400] mt-1 flex-shrink-0" />
                    <h3 className="text-white font-black text-base sm:text-lg md:text-xl leading-tight">
                      {item.countries}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#FFD400] mt-1 flex-shrink-0" />
                    <p className="text-gray-200 font-bold text-sm sm:text-base md:text-lg">
                      {item.schedule}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center px-4">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium">
                ✨ Recibirás recordatorios automáticos con tu hora exacta
              </p>
            </div>
          </div>

          {/* Mensaje de cierre */}
          <div className="card-premium space-y-6 sm:space-y-8 text-center relative overflow-hidden">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFD400] blur-[120px] opacity-10"></div>
            <p className="text-lg sm:text-xl md:text-3xl text-white font-bold leading-relaxed relative z-10 px-2">
              Guarda el enlace de Google Meet que te llega ahora
            </p>
            <p className="text-xl sm:text-xl md:text-2xl golden-text font-black relative z-10 px-2">
              ✨ Entra cuando quieras con un solo clic ✨
            </p>
            
            <div className="border-t-2 border-[#FFD400]/30 pt-6 sm:pt-8 relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-3 px-2">
                Te abrazo muy fuerte.
              </p>
              <p className="text-xl sm:text-2xl md:text-4xl golden-text font-black mb-4 sm:mb-6 px-2">
                Esto es el comienzo de tu libertad. 🦋
              </p>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-2">
                Con todo mi amor,
              </p>
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl mt-3">
                Javier Vieira
              </p>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2">
                Historias de la Mente
              </p>
            </div>
          </div>

          {/* Botón volver */}
          <div className="text-center pt-6 sm:pt-8 pb-8">
            <Button
              onClick={() => navigate("/")}
              className="btn-cta-primary px-8 sm:px-12 py-5 sm:py-8 text-base sm:text-xl md:text-2xl font-black w-full sm:w-auto"
            >
              VOLVER AL INICIO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraciasApegoDetox;
