import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Clock } from "lucide-react";
import heroImage from "@/assets/clase-header-hero.png";
import javierPhoto from "@/assets/javier-vieira-nuevo.png";

const ClaseMeet = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre.trim() || !formData.email.trim()) {
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-clase-meet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Redirigir a la página de agradecimiento
        setTimeout(() => {
          navigate("/gracias-clase");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SECCIÓN 1 - HERO */}
      <section className="bg-[#0a0a0a] px-4 sm:px-6 py-6 sm:py-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Título Principal */}
          <h1 className="font-['Playfair_Display',Georgia,serif] font-bold leading-[1.2] mb-4 sm:mb-5 text-white tracking-tight">
            <span className="block text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              ¿Tiene que destruirte para que aceptes
            </span>
            <span className="block text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              que{' '}
              <span className="text-[#F4C430] drop-shadow-[0_2px_4px_rgba(244,196,48,0.4)]">NUNCA</span>
              {' '}te amó?
            </span>
          </h1>
          
          {/* Subtítulo */}
          <div className="mb-5 sm:mb-6">
            <p className="font-['Lato',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-light leading-[1.6] text-white/90">
              Deja de ser su sombra. <span className="text-[#F4C430] font-medium">Recupera tu brillo</span>, tu belleza y tu vida hoy mismo.
            </p>
          </div>

          {/* Imagen Circular de la Mujer */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div 
              className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] rounded-full border-4 border-[#F4C430] overflow-hidden"
              style={{ boxShadow: '0 8px 24px rgba(244, 196, 48, 0.3)' }}
            >
              <img 
                src={heroImage} 
                alt="Mujer pensativa" 
                className="w-full h-full object-cover object-[70%_20%]"
              />
            </div>
          </div>

          {/* Botón CTA Principal */}
          <button
            onClick={scrollToForm}
            className="w-[90%] max-w-[380px] mx-auto block font-['Montserrat',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1A1A1A] py-4 px-8 rounded-[50px] border-none cursor-pointer transition-all duration-300 hover:scale-105 mb-5 animate-[pulse_2s_ease-in-out_infinite]"
            style={{ 
              background: 'linear-gradient(135deg, #F4C430 0%, #E6B800 100%)',
              boxShadow: '0 6px 20px rgba(244, 196, 48, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(244, 196, 48, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 196, 48, 0.4)';
            }}
          >
            RESERVA TU LUGAR GRATIS
          </button>

          {/* Información de Fecha/Hora */}
          <div className="flex items-center justify-center gap-2 text-[14px] sm:text-[16px] font-semibold text-[#F4C430]">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430]" />
            <span>Accede a la clase ya mismo, está por empezar</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - IDENTIFICACIÓN DEL DOLOR */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 text-white">
            ¿Te suena familiar?
          </h2>
          
          <div className="space-y-6">
            {[
              "Vuelves una y otra vez, aunque sabes que te hace daño",
              'Justificas su comportamiento esperando que "esta vez sea diferente"',
              "Te sientes atrapada en un ciclo del que no sabes cómo salir",
              "Has intentado alejarte, pero algo siempre te hace regresar"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 bg-black/50 p-4 sm:p-6 rounded-lg hover:bg-black/70 transition-all duration-300">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37] flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg md:text-xl text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - LA PROMESA */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 text-white">
            En esta clase <span className="text-[#D4AF37]">GRATUITA</span> descubrirás:
          </h2>
          
          <div className="space-y-6 mb-12">
            {[
              "Por qué vuelves una y otra vez (y cómo romper el ciclo definitivamente)",
              'La trampa invisible del "tal vez cambie" que te mantiene atrapada',
              "El error #1 que cometen el 90% al intentar alejarse del narcisista",
              "El protocolo de Contacto Cero que realmente funciona",
              "Cómo recuperar tu identidad después del apagón emocional"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#1a1a1a] p-4 sm:p-6 rounded-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-1 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#D4AF37]">
            Esto no es teoría. Es el método que ha ayudado a cientos de mujeres a liberarse.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 - AUTORIDAD */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 text-white">
            Quién te guiará en esta clase
          </h2>
          
          <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-12 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={javierPhoto} 
                alt="Javier Vieira" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#D4AF37] flex-shrink-0"
              />
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-[#D4AF37] mb-2">
                  Javier Vieira
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Conferencista de Transformación Personal
                </p>
                <p className="text-base sm:text-lg text-gray-400 mb-4">
                  Experto en Liberación del Narcisismo
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Te ayudo a salir del narcisismo con una técnica única: el Apagón Emocional. Un método probado que ha transformado la vida de cientos de mujeres atrapadas en relaciones tóxicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - FORMULARIO */}
      <section id="formulario" className="py-16 px-4 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-white">
            Asegura Tu Cupo Ahora - Es <span className="text-[#D4AF37]">GRATIS</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-center mb-8 text-gray-300">
            ⚠️ Cupos limitados por sesión. Regístrate ahora y elige tu horario.
          </p>

          <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.3)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black text-white text-base sm:text-lg rounded-lg border-2 border-gray-700 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black text-white text-base sm:text-lg rounded-lg border-2 border-gray-700 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-black font-black text-lg sm:text-xl py-4 sm:py-5 rounded-full hover:bg-[#f4d03f] hover:shadow-[0_20px_60px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "ENVIANDO..." : "SÍ, QUIERO MI LUGAR GRATIS"}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-600/20 border border-green-500 text-green-400 p-4 rounded-lg text-center">
                  ¡Registro exitoso! Revisa tu email para el enlace de acceso.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-600/20 border border-red-500 text-red-400 p-4 rounded-lg text-center">
                  Hubo un error. Por favor intenta nuevamente.
                </div>
              )}

              <p className="text-sm text-gray-400 text-center">
                Al registrarte recibirás el enlace de acceso a Google Meet por correo electrónico.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - CIERRE URGENTE */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-relaxed">
            Esta clase es completamente gratuita, pero los cupos son limitados.
          </p>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-4 text-gray-300">
            No esperes a que sea demasiado tarde.
          </p>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-300">
            No esperes a que cambie.
          </p>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-12 text-[#D4AF37]">
            Da el primer paso hoy.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-[#D4AF37] text-black font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:bg-[#f4d03f] hover:shadow-[0_20px_60px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
          >
            RESERVAR MI LUGAR AHORA
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-bold text-[#D4AF37] mb-2">
            Historias de la Mente
          </p>
          <p className="text-sm text-gray-400">
            © 2025 Historias de la Mente. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ClaseMeet;