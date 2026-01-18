import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/gracias-hero-futurista.png";
import javierImage from "@/assets/javier-vieira.png";

const ClaseApegoDetox = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!nombre.trim() || !email.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('submit-clase-meet', {
        body: { nombre, email, source: 'clase-apego-detox' }
      });

      if (error) throw error;
      navigate('/gracias-apego-detox');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <span className="text-sm font-medium" style={{ color: '#D4AF37' }}>
              🔥 CLASE GRATUITA DE LANZAMIENTO
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-white">Clase</span>{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Apego Detox
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto">
            El método que te liberará del apego emocional tóxico
          </p>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
            Descubre cómo miles de mujeres han logrado superar relaciones narcisistas y recuperar su poder personal
          </p>

          {/* Date/Time */}
          <div 
            className="inline-block px-8 py-4 rounded-2xl mb-10"
            style={{ 
              background: 'rgba(212, 175, 55, 0.1)',
              border: '2px solid #D4AF37',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
            }}
          >
            <p className="text-lg md:text-xl font-semibold text-white">
              <span style={{ color: '#D4AF37' }}>Este Miércoles</span> • 1:00 PM Colombia
            </p>
            <p className="text-sm text-white/60 mt-1">Clase en vivo por Google Meet</p>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={scrollToForm}
              className="px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                color: '#000',
                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)'
              }}
            >
              🎯 RESERVAR MI LUGAR GRATIS
            </button>
            <p className="text-sm text-white/50 mt-4">⚡ Cupos limitados</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-white">¿Te sientes </span>
            <span style={{ color: '#D4AF37' }}>atrapada</span>
            <span className="text-white"> en una relación tóxica?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "No puedes dejar de pensar en él aunque sabes que te hace daño",
              "Sientes que sin él no puedes ser feliz",
              "Has intentado dejarlo pero siempre vuelves",
              "Tu autoestima está por el suelo",
              "Sientes ansiedad cuando no te responde",
              "Has perdido tu identidad en la relación"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="text-2xl">😔</span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-white/70 mt-12">
            Si te identificas con algo de esto, <span style={{ color: '#D4AF37' }}>esta clase es para ti</span>.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-white">En esta clase </span>
            <span style={{ color: '#D4AF37' }}>aprenderás</span>
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Estrategias probadas que han transformado la vida de más de 5,000 mujeres
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Entender el Apego",
                description: "Descubre por qué tu mente te mantiene atada a alguien que te hace daño"
              },
              {
                icon: "💔",
                title: "Romper el Ciclo",
                description: "El método Apego Detox para liberarte de patrones tóxicos de una vez por todas"
              },
              {
                icon: "✨",
                title: "Recuperar tu Poder",
                description: "Técnicas para reconstruir tu autoestima y volver a ser tú misma"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
              >
                <span className="text-5xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#D4AF37' }}>
            Tu instructor
          </p>
          
          <div 
            className="w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden"
            style={{ 
              border: '4px solid #D4AF37',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
            }}
          >
            <img 
              src={javierImage} 
              alt="Javier Vieira" 
              className="w-full h-full object-cover"
            />
          </div>

          <h3 
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Javier Vieira
          </h3>
          <p className="text-lg mb-2" style={{ color: '#D4AF37' }}>
            Creador del Método Apego Detox
          </p>
          <p className="text-white/60 mb-6">
            Experto en Liberación del Narcisismo
          </p>

          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Llevo años ayudando a mujeres a liberarse del apego emocional tóxico. 
            Mi método ha transformado la vida de miles de personas que hoy viven 
            libres y en paz consigo mismas.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registro" className="py-20 px-6" style={{ background: '#111' }}>
        <div className="max-w-xl mx-auto">
          <div 
            className="p-8 md:p-12 rounded-3xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0,0,0,0.5) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}
          >
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">🎯</span>
              <h2 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Reserva tu lugar
              </h2>
              <p className="text-white/60">Es 100% gratis • Cupos limitados</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                  color: '#000',
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)'
                }}
              >
                {isSubmitting ? 'Reservando...' : '🚀 QUIERO MI LUGAR GRATIS'}
              </button>
            </form>

            <p className="text-center text-white/40 text-sm mt-6">
              🔒 Tu información está segura y no la compartiremos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-white/10">
        <a href="/" style={{ color: '#D4AF37' }} className="hover:underline">
          Historias de la Mente
        </a>
        <p className="text-white/40 text-sm mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default ClaseApegoDetox;
