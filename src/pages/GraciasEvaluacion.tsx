import { useEffect, useState } from 'react';
import { CheckCircle, Mail, AlertTriangle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { WHATSAPP_COMMUNITY_URL } from '@/config/links';
import libroContactoCero from '@/assets/libro-contacto-cero.png';

const GraciasEvaluacion = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('evaluacion_email');
    const savedNombre = localStorage.getItem('evaluacion_nombre');
    
    if (savedEmail) setEmail(savedEmail);
    if (savedNombre) setNombre(savedNombre);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_COMMUNITY_URL, '_blank');
  };

  const handleCitaPsicologicaClick = () => {
    window.open('https://wa.me/573001681053?text=Quiero%20una%20cita%20psicol%C3%B3gica%2C%20necesito%20recuperarme', '_blank');
  };

  const handleAmazonClick = () => {
    window.open('https://www.amazon.com/dp/B0DJSSK8YN', '_blank');
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
          <div className="max-w-md mx-auto mb-16 p-8 rounded-2xl card-premium border-2 border-primary/30">
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
        </div>
      </section>

      {/* Transition Title */}
      <section className="py-8 px-4 bg-gradient-to-r from-golden/10 to-golden-light/10">
        <h2 className="text-3xl md:text-4xl font-bold text-center golden-text font-apple">
          Mientras Esperas, Descubre:
        </h2>
      </section>

      {/* CTA Cards */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Cita Psicológica Card */}
          <div className="card-premium p-8 rounded-3xl hover-lift relative overflow-hidden border-2 border-golden/50">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-golden to-golden-light text-black px-4 py-2 rounded-full text-sm font-bold">
              PRIORITARIO
            </div>

            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-golden/20 to-golden-light/20 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-24 h-24 text-golden" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground font-apple">
                Cita Psicológica<br />
                Personalizada
              </h3>

              <ul className="space-y-3 mb-8 text-muted-foreground font-apple">
                <li className="flex items-start gap-2">
                  <span className="text-golden mt-1">✓</span>
                  <span>Atención profesional inmediata</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-golden mt-1">✓</span>
                  <span>Plan de recuperación personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-golden mt-1">✓</span>
                  <span>Apoyo especializado en narcisismo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-golden mt-1">✓</span>
                  <span>Sesión individual</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleCitaPsicologicaClick}
              className="w-full bg-gradient-to-r from-golden to-golden-light hover:from-golden-light hover:to-golden text-black text-lg py-6 font-bold font-apple shadow-golden"
            >
              💬 Agendar Cita Ahora
            </Button>
          </div>

          {/* Taller Card */}
          <div className="card-premium p-8 rounded-3xl hover-lift relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              GRATIS
            </div>

            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-6xl">🎓</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground font-apple">
                Taller Gratuito:<br />
                Cómo Salir de una Relación con un Narcisista
              </h3>

              <ul className="space-y-3 mb-8 text-muted-foreground font-apple">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Estrategias probadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Plan paso a paso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Acompañamiento profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Sesión en vivo</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 font-apple"
            >
              💬 Reservar Mi Cupo
            </Button>
          </div>

          {/* Libro Contacto Cero Card */}
          <div className="card-premium p-8 rounded-3xl hover-lift overflow-hidden border-2 border-orange-500/50">
            <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              NUEVO
            </div>

            <div className="mb-6">
              <div className="w-full h-64 rounded-2xl flex items-center justify-center mb-6 overflow-hidden bg-black/80">
                <img 
                  src={libroContactoCero} 
                  alt="Libro Apagón Emocional - Contacto Cero"
                  className="h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-foreground font-apple">
                Libro:<br />
                Apagón Emocional
              </h3>

              <p className="text-lg font-semibold text-orange-600 mb-2 font-apple">
                Sanación Profunda, Nuevo Comienzo
              </p>

              <p className="text-base text-muted-foreground mb-4 font-apple">
                La guía definitiva para el Contacto Cero
              </p>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-muted-foreground">4.9/5</span>
              </div>

              <ul className="space-y-3 mb-8 text-muted-foreground font-apple">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Estrategia de Contacto Cero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Recuperación emocional profunda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Herramientas de sanación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Ejercicios prácticos</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleAmazonClick}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 font-apple font-bold"
            >
              📖 Ver en Amazon →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraciasEvaluacion;
