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
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F5] via-white to-[#F5F5DC]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#8B7355] leading-tight">
            Clases En Vivo de<br />
            <span className="text-[#C4A77D]">Apego Detox</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6B5B4B] max-w-3xl mx-auto">
            Libérate del narcisista en tiempo real. Acompañamiento directo para romper el ciclo.
          </p>
        </div>
      </section>

      {/* Texto Emocional */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-[#6B5B4B] leading-relaxed text-center">
            No estás sola. En estas sesiones en vivo aplicarás el método <span className="font-semibold text-[#C4A77D]">Apagón Emocional</span> con mi guía directa. 
            Cada clase es un paso hacia tu libertad emocional. Un espacio seguro donde puedes preguntar, compartir y transformarte.
          </p>
        </div>
      </section>

      {/* Horarios Multi-País */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B7355] mb-4">
              Horarios por País
            </h2>
            <p className="text-lg text-[#6B5B4B]">
              Elige el horario que mejor se adapte a ti
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schedules.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#E8DCC8] hover:border-[#C4A77D] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#C4A77D] mt-1 flex-shrink-0" />
                  <h3 className="text-[#8B7355] font-semibold leading-tight">
                    {item.countries}
                  </h3>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8A9A7B] mt-1 flex-shrink-0" />
                  <p className="text-[#6B5B4B] font-medium">
                    {item.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#6B5B4B] max-w-2xl mx-auto leading-relaxed">
              Usa{" "}
              <a
                href="https://time.is/Bogotá"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A77D] hover:text-[#8B7355] underline"
              >
                https://time.is/Bogotá
              </a>{" "}
              o{" "}
              <a
                href="https://time.is/Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A77D] hover:text-[#8B7355] underline"
              >
                https://time.is/Madrid
              </a>{" "}
              si tienes dudas. ¡Siempre tendrás el recordatorio exacto en tu celular!
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-[#FFF5F5]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#E8DCC8]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B7355] text-center mb-6">
              Reserva Tu Lugar
            </h2>
            <p className="text-center text-[#6B5B4B] mb-8">
              Completa el formulario y te enviaremos el enlace de acceso
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-[#8B7355] font-semibold">
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre completo"
                  required
                  className="border-[#E8DCC8] focus:border-[#C4A77D] text-[#6B5B4B]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#8B7355] font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="border-[#E8DCC8] focus:border-[#C4A77D] text-[#6B5B4B]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C4A77D] hover:bg-[#8B7355] text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300"
              >
                {isSubmitting ? "Enviando..." : "Quiero Mi Lugar en las Clases"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#8B7355] text-white text-center">
        <p className="text-sm">
          © 2025 Historias de la Mente • Javier Vieira
        </p>
      </footer>

      {/* Botón Flotante */}
      <a
        href="#formulario"
        className="fixed bottom-8 right-8 bg-[#C4A77D] hover:bg-[#8B7355] text-white px-6 py-3 rounded-full shadow-2xl font-semibold transition-all duration-300 hover:scale-105 z-50"
      >
        Reservar Ahora
      </a>
    </div>
  );
};

export default ApegoDetoxClasesEnVivo;
