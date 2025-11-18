import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Clock, MapPin } from "lucide-react";

const ApegoDetoxClasesEnVivo = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre.trim() || !email.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook-test/apegodetox", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
        }),
      });

      if (response.ok) {
        navigate("/gracias-apego-detox");
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schedules = [
    {
      countries: "Colombia, Ecuador, Perú, Panamá",
      schedule: "Martes 8:00 p.m. | Jueves 1:00 p.m.",
    },
    {
      countries: "México CDMX, Costa Rica, Guatemala, El Salvador, Nicaragua",
      schedule: "Martes 7:00 p.m. | Jueves 12:00 p.m.",
    },
    {
      countries: "Venezuela, Bolivia, Paraguay, Chile",
      schedule: "Martes 8:00 p.m. | Jueves 2:00 p.m.",
    },
    {
      countries: "Argentina, Uruguay",
      schedule: "Martes 9:00 p.m. | Jueves 3:00 p.m.",
    },
    {
      countries: "España peninsular",
      schedule: "Miércoles 2:00 a.m. | Jueves 7:00 p.m.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 bg-gradient-to-b from-black via-[#0C0C0C] to-black">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            Clases En Vivo de<br />
            <span className="golden-text">Apego Detox</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Libérate del narcisista en tiempo real. Acompañamiento directo para romper el ciclo.
          </p>
        </div>
      </section>

      {/* Texto Emocional */}
      <section className="py-16 px-4 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            No estás sola. En estas sesiones en vivo aplicarás el método <span className="font-bold golden-text">Apagón Emocional</span> con mi guía directa. 
            Cada clase es un paso hacia tu libertad emocional. Un espacio seguro donde puedes preguntar, compartir y transformarte.
          </p>
        </div>
      </section>

      {/* Horarios Multi-País */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-[#0C0C0C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Horarios por País
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Elige el horario que mejor se adapte a ti
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schedules.map((item, index) => (
              <div
                key={index}
                className="card-premium hover-lift group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#FFD400] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
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

          <div className="mt-12 text-center">
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Usa{" "}
              <a
                href="https://time.is/Bogotá"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD400] hover:text-[#FFC700] underline story-link"
              >
                https://time.is/Bogotá
              </a>{" "}
              o{" "}
              <a
                href="https://time.is/Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD400] hover:text-[#FFC700] underline story-link"
              >
                https://time.is/Madrid
              </a>{" "}
              si tienes dudas. ¡Siempre tendrás el recordatorio exacto en tu celular!
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="py-20 px-4 bg-[#0C0C0C]">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD400] via-[#FFC700] to-[#FFD400] rounded-3xl opacity-20 blur-xl"></div>
            
            <div className="relative bg-black rounded-3xl p-8 md:p-12 border-2 border-[#FFD400]/30">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-6 golden-text">
                Reserva Tu Lugar
              </h2>
              <p className="text-center text-gray-400 mb-8 text-lg">
                Completa el formulario y te enviaremos el enlace de acceso
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-white font-semibold">
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                    className="bg-[#1A1A1A] border-[#FFD400]/30 focus:border-[#FFD400] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="bg-[#1A1A1A] border-[#FFD400]/30 focus:border-[#FFD400] text-white placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cta-primary py-6 text-lg"
                >
                  {isSubmitting ? "Enviando..." : "QUIERO MI LUGAR EN LAS CLASES 🔥"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-[#FFD400]/20 text-center">
        <p className="text-gray-400">
          © 2025 Historias de la Mente • <span className="golden-text">Javier Vieira</span>
        </p>
      </footer>

      {/* Botón Flotante */}
      <a
        href="#formulario"
        className="fixed bottom-8 right-8 bg-[#FFD400] hover:bg-[#FFC700] text-black px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(255,212,0,0.5)] font-black transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      >
        Reservar Ahora 🔥
      </a>
    </div>
  );
};

export default ApegoDetoxClasesEnVivo;
