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
    <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-[#FFD400]" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black">
            ¡Gracias por Registrarte!
          </h1>
          <p className="text-xl md:text-2xl golden-text">
            Tu lugar está reservado
          </p>
        </div>

        <div className="card-premium space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            Revisa tu correo electrónico. Te hemos enviado toda la información para acceder a las clases en vivo de <span className="font-bold golden-text">Apego Detox</span>.
          </p>
          <p className="text-base text-gray-400">
            Si no ves el correo en tu bandeja de entrada, revisa la carpeta de spam o promociones.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400">
            Te esperamos con todo preparado para tu transformación.
          </p>
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
