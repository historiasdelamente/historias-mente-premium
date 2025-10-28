import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-historias-mente.png";

const Unsubscribe = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStay = () => {
    navigate("/");
  };

  const handleUnsubscribe = async () => {
    setIsProcessing(true);
    const email = searchParams.get("email");
    const id = searchParams.get("id");
    
    // Aquí se procesaría la desuscripción real con los parámetros
    // Por ahora solo simulamos un pequeño delay
    setTimeout(() => {
      window.location.href = `https://historiasdelamente.com/unsubscribe?email=${email || ""}&id=${id || ""}`;
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <img 
            src={logoImage} 
            alt="Historias de la Mente" 
            className="h-16 md:h-20 mx-auto golden-glow"
          />
        </header>

        {/* Main Image */}
        <div className="flex justify-center">
          <div className="relative inline-block">
            <img
              src="/mujeres-sanadoras.png"
              alt="Sanación"
              className="w-full max-w-md rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.3)] border border-golden/20"
            />
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center space-y-6 px-4">
          <h1 className="text-3xl md:text-4xl font-bold golden-text">
            ¿Estás segura de que quieres irte?
          </h1>
          
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              Entiendo que este camino de sanación puede sentirse agotador. A veces los emails, las historias, los recordatorios... pueden ser demasiado.
            </p>
            
            <p>
              Y está bien si necesitas espacio.
            </p>
            
            <p>
              Pero si hay una parte de ti que todavía quiere recuperar quien realmente eres, que quiere liberarse de las cadenas del abuso narcisista, que quiere volver a confiar en sí misma...
            </p>
            
            <p className="font-semibold text-golden">
              Estoy aquí para acompañarte.
            </p>
            
            <p>
              Sin juicios. Sin presión. A tu ritmo.
            </p>
            
            <p>
              La sanación no es lineal. Está bien dar pasos atrás. Está bien tomarse un respiro.
            </p>
            
            <p className="font-semibold text-foreground">
              Pero no te rindas contigo misma.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button
            onClick={handleStay}
            className="btn-cta-primary text-base md:text-lg px-8 py-6 h-auto w-full sm:w-auto"
          >
            Quiero quedarme y seguir sanando
          </Button>
          
          <Button
            onClick={handleUnsubscribe}
            disabled={isProcessing}
            variant="outline"
            className="btn-cta-secondary text-base md:text-lg px-8 py-6 h-auto w-full sm:w-auto"
          >
            {isProcessing ? "Procesando..." : "Desuscribirme"}
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground/70 px-4 pt-8">
          <p>Pase lo que pase, te deseo sanación y paz. Mereces ser feliz.</p>
        </footer>
      </div>
    </div>
  );
};

export default Unsubscribe;
