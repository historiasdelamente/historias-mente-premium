import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GraciasApegoDetox = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F5] via-white to-[#F5F5DC] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-[#8A9A7B]" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B7355]">
            ¡Gracias por Registrarte!
          </h1>
          <p className="text-xl md:text-2xl text-[#6B5B4B]">
            Tu lugar está reservado
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E8DCC8] space-y-4">
          <p className="text-lg text-[#6B5B4B] leading-relaxed">
            Revisa tu correo electrónico. Te hemos enviado toda la información para acceder a las clases en vivo de <span className="font-semibold text-[#C4A77D]">Apego Detox</span>.
          </p>
          <p className="text-base text-[#6B5B4B]">
            Si no ves el correo en tu bandeja de entrada, revisa la carpeta de spam o promociones.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[#6B5B4B]">
            Te esperamos con todo preparado para tu transformación.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-[#C4A77D] hover:bg-[#8B7355] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GraciasApegoDetox;
