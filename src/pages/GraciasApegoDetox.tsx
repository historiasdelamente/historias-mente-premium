import { useEffect } from "react";
import { CheckCircle, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/clase-registrada-hero.png";

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
        
        {/* Hero Image */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10"></div>
          <img 
            src={heroImage} 
            alt="Ya estás registrada en la clase" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center space-y-4 px-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFD400] blur-3xl opacity-50 animate-pulse"></div>
                  <Sparkles className="relative w-20 h-20 md:w-28 md:h-28 text-[#FFD400]" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black golden-text drop-shadow-2xl">
                ¡FELICIDADES!
              </h1>
              <p className="text-3xl md:text-5xl lg:text-6xl text-white font-black drop-shadow-xl">
                YA ESTÁS REGISTRADA
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-[#FFD400]" />
                <p className="text-2xl md:text-3xl golden-text font-bold">
                  Tu cupo está 100% reservado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-12 md:py-16 space-y-12 max-w-5xl mx-auto">
          
          {/* Qué recibirás */}
          <div className="card-premium space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD400] blur-[100px] opacity-20 animate-pulse"></div>
            <h2 className="text-3xl md:text-5xl font-black text-center golden-text relative z-10">
              ✨ En minutos recibes tu acceso ✨
            </h2>
            
            <div className="flex justify-center">
              <div className="flex items-center gap-4 p-6 bg-[#1A1A1A] rounded-2xl border-2 border-[#FFD400]/40 hover:border-[#FFD400]/70 transition-all duration-300 hover-lift max-w-xl relative z-10">
                <Mail className="w-10 h-10 md:w-12 md:h-12 text-[#FFD400] flex-shrink-0" />
                <div>
                  <p className="font-black text-white text-xl md:text-2xl mb-2">Por correo electrónico</p>
                  <p className="text-base md:text-lg text-gray-300">El enlace permanente de Google Meet</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFD400]/20 via-[#FFD400]/10 to-[#FFD400]/20 border-2 border-[#FFD400]/40 rounded-2xl p-6 text-center relative z-10">
              <p className="text-lg md:text-2xl text-white font-bold">
                <span className="golden-text font-black">El mismo enlace</span> para todas las clases
              </p>
              <p className="text-gray-300 mt-2 text-base md:text-xl">Guárdalo y entra con un solo clic</p>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-8 relative">
            <div className="absolute -left-32 top-1/2 w-64 h-64 bg-[#FFD400] blur-[100px] opacity-10"></div>
            <h2 className="text-3xl md:text-5xl font-black text-center golden-text">
              📅 Tus horarios según tu país
            </h2>

            <div className="grid gap-6 md:grid-cols-2 relative z-10">
              {schedules.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#0C0C0C] border-2 border-[#FFD400]/30 rounded-2xl p-6 hover:border-[#FFD400]/60 transition-all duration-300 hover-lift hover:shadow-[0_0_30px_rgba(255,212,0,0.3)]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#FFD400] mt-1 flex-shrink-0" />
                    <h3 className="text-white font-black text-lg md:text-xl leading-tight">
                      {item.countries}
                    </h3>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 md:w-7 md:h-7 text-[#FFD400] mt-1 flex-shrink-0" />
                    <p className="text-gray-200 font-bold text-base md:text-lg">
                      {item.schedule}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-lg md:text-xl font-medium">
                ✨ Recibirás recordatorios automáticos con tu hora exacta
              </p>
            </div>
          </div>

          {/* Mensaje de cierre */}
          <div className="card-premium space-y-8 text-center relative overflow-hidden">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFD400] blur-[120px] opacity-10"></div>
            <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed relative z-10">
              Guarda el enlace de Google Meet que te llega ahora
            </p>
            <p className="text-xl md:text-2xl golden-text font-black relative z-10">
              ✨ Entra cuando quieras con un solo clic ✨
            </p>
            
            <div className="border-t-2 border-[#FFD400]/30 pt-8 relative z-10">
              <p className="text-2xl md:text-3xl text-white font-bold mb-3">
                Te abrazo muy fuerte.
              </p>
              <p className="text-2xl md:text-4xl golden-text font-black mb-6">
                Esto es el comienzo de tu libertad. 🦋
              </p>
              <p className="text-gray-300 text-lg md:text-xl mb-2">
                Con todo mi amor,
              </p>
              <p className="text-white font-black text-xl md:text-2xl mt-3">
                Javier Vieira
              </p>
              <p className="text-gray-400 text-base md:text-lg mt-2">
                Historias de la Mente
              </p>
            </div>
          </div>

          {/* Botón volver */}
          <div className="text-center pt-8 pb-8">
            <Button
              onClick={() => navigate("/")}
              className="btn-cta-primary px-12 py-8 text-xl md:text-2xl font-black"
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
