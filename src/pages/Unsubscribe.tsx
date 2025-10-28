import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-historias-mente.png";
import heroImage from "@/assets/unsubscribe-hero.jpg";
import { Heart, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-golden/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto space-y-10 md:space-y-12">
          {/* Logo centered and larger */}
          <header className="text-center animate-fade-in">
            <img 
              src={logoImage} 
              alt="Historias de la Mente" 
              className="h-24 md:h-32 mx-auto golden-glow hover-scale transition-all duration-300"
            />
          </header>

          {/* Title with dramatic effect */}
          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-golden" />
              <Heart className="w-6 h-6 text-golden animate-pulse" />
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-golden" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold golden-text leading-tight px-4">
              ¿Estás segura de que<br />quieres irte?
            </h1>
          </div>

          {/* Photo - smaller and more subtle */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-golden/20 via-golden/5 to-transparent rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-transform duration-500" />
              <img
                src={heroImage}
                alt="Historias de la Mente"
                className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.3)] border border-golden/20 transform group-hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center space-y-6 px-4 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <div className="text-lg md:text-xl text-foreground/90 leading-relaxed space-y-5">
              <p className="text-muted-foreground">
                Entiendo que este camino de sanación puede sentirse agotador. A veces los emails, las historias, los recordatorios... pueden ser demasiado.
              </p>
              
              <p className="text-muted-foreground font-medium">
                Y está bien si necesitas espacio.
              </p>
              
              <p className="text-foreground">
                Pero si hay una parte de ti que todavía quiere recuperar quien realmente eres, que quiere liberarse de las cadenas del abuso narcisista, que quiere volver a confiar en sí misma...
              </p>
              
              <p className="text-2xl md:text-3xl font-bold golden-text my-8">
                Estoy aquí para acompañarte.
              </p>
              
              <p className="text-muted-foreground">
                Sin juicios. Sin presión. A tu ritmo.
              </p>
              
              <p className="text-muted-foreground">
                La sanación no es lineal. Está bien dar pasos atrás. Está bien tomarse un respiro.
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-foreground mt-8">
                Pero no te rindas contigo misma.
              </p>
            </div>
          </div>

          {/* Buttons with epic styling */}
          <div className="flex flex-col items-center gap-6 px-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={handleStay}
              className="btn-cta-primary text-lg md:text-xl px-10 py-7 h-auto w-full sm:w-auto min-w-[300px] shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="mr-2 w-5 h-5" />
              Quiero quedarme y seguir sanando
            </Button>
            
            <div className="relative">
              <div className="text-sm text-muted-foreground/60 mb-3">o si realmente necesitas irte...</div>
              <Button
                onClick={handleUnsubscribe}
                disabled={isProcessing}
                variant="outline"
                className="btn-cta-secondary text-base md:text-lg px-8 py-5 h-auto w-full sm:w-auto min-w-[280px] hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300"
              >
                {isProcessing ? "Procesando..." : "Desuscribirme"}
              </Button>
            </div>
          </div>

          {/* Footer with heart */}
          <footer className="text-center text-base md:text-lg text-muted-foreground/80 px-4 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-golden/30" />
              <Sparkles className="w-4 h-4 text-golden/50" />
              <div className="h-px w-8 bg-golden/30" />
            </div>
            <p className="italic">Pase lo que pase, te deseo sanación y paz.<br />Mereces ser feliz.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Unsubscribe;
