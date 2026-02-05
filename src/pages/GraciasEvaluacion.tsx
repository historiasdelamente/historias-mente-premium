import { useEffect, useState } from 'react';
import { CheckCircle, Mail, AlertTriangle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import libroContactoCero from '@/assets/libro-contacto-cero.png';
import citaPsicologica from '@/assets/cita-psicologica.png';

const GraciasEvaluacion = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('evaluacion_email');
    const savedNombre = localStorage.getItem('evaluacion_nombre');
    
    if (savedEmail) setEmail(savedEmail);
    if (savedNombre) setNombre(savedNombre);
  }, []);

  const handleCitaPsicologicaClick = () => {
    window.open('https://wa.me/573001681053?text=Quiero%20una%20cita%20psicol%C3%B3gica%2C%20necesito%20recuperarme', '_blank');
  };

  const handleLibroClick = () => {
    window.open('https://apagonemocional.historiasdelamente.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-green-500/10 border-2 border-green-500">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text font-apple">
            ¡Tu Evaluación Fue Enviada!
          </h1>

          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-foreground font-semibold font-apple">
              📧 Recibirás tu análisis completo en tu correo en los próximos 10 minutos
            </p>
            <p className="text-lg text-muted-foreground font-apple">
              ⚡ <strong>IMPORTANTE:</strong> Abre el correo inmediatamente cuando llegue para conocer tu resultado
            </p>
          </div>

          {/* Email Box */}
          <div className="max-w-md mx-auto mb-12 p-8 rounded-2xl card-premium border-2 border-primary/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Tu análisis será enviado a:</h3>
            </div>
            
            <p className="text-2xl font-bold text-primary mb-6 break-all">
              {email || 'tu-email@ejemplo.com'}
            </p>

            <div className="flex items-center justify-center gap-2 text-yellow-500">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-sm font-medium">Revisa también SPAM</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <p className="text-lg font-semibold text-foreground">Desliza hacia abajo</p>
            <p className="text-base text-muted-foreground">Hay algo importante para ti ⬇️</p>
            <ChevronDown className="w-8 h-8 text-golden" />
          </div>
        </div>
      </section>

      {/* Transition Title */}
      <section className="py-8 px-4 bg-gradient-to-r from-golden/10 to-golden-light/10">
        <h2 className="text-3xl md:text-4xl font-bold text-center golden-text font-apple">
          Mientras Esperas, Descubre:
        </h2>
      </section>

      {/* CTA Cards */}
      <section className="py-10 md:py-14 px-4 flex-1">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Cita Psicológica Card */}
          <div className="card-premium p-5 md:p-6 rounded-2xl hover-lift relative overflow-hidden border border-primary/40">
            <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              PRIORITARIO
            </div>

            <div className="mb-4">
              <div className="w-full h-36 md:h-44 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={citaPsicologica} 
                  alt="Cita Psicológica Personalizada"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground font-apple">
                Cita Psicológica Personalizada
              </h3>

              <ul className="space-y-1.5 mb-4 text-sm text-muted-foreground font-apple">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Atención profesional inmediata</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Plan de recuperación personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Apoyo especializado en narcisismo</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleCitaPsicologicaClick}
              className="w-full bg-gradient-to-r from-primary to-primary hover:opacity-90 text-primary-foreground text-sm md:text-base py-4 font-bold font-apple"
            >
              💬 Agendar Cita Ahora
            </Button>
          </div>

          {/* Libro Contacto Cero Card */}
          <div className="card-premium p-5 md:p-6 rounded-2xl hover-lift overflow-hidden border border-orange-500/40 relative">
            <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              NUEVO
            </div>

            <div className="mb-4">
              <div className="w-full h-36 md:h-44 rounded-xl flex items-center justify-center mb-4 overflow-hidden bg-black/80">
                <img 
                  src={libroContactoCero} 
                  alt="Libro Apagón Emocional - Contacto Cero"
                  className="h-full object-contain"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-1 text-foreground font-apple">
                Libro: Apagón Emocional
              </h3>

              <p className="text-sm font-semibold text-orange-500 mb-1 font-apple">
                La guía definitiva para el Contacto Cero
              </p>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-muted-foreground">4.9/5</span>
              </div>

              <ul className="space-y-1.5 mb-4 text-sm text-muted-foreground font-apple">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  <span>Estrategia de Contacto Cero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  <span>Recuperación emocional profunda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  <span>Herramientas de sanación</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleLibroClick}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm md:text-base py-4 font-apple font-bold"
            >
              🔥 Comienza Tu Sanación Ahora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraciasEvaluacion;
