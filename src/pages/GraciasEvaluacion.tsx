import { useEffect, useState } from 'react';
import { CheckCircle, Mail, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { WHATSAPP_COMMUNITY_URL } from '@/config/links';

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

          <h1 className="text-4xl md:text-5xl font-bold mb-4 golden-text">
            ¡Tu Evaluación Fue Enviada!
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            Revisa tu correo en los próximos 10 minutos
          </p>

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
      <section className="py-8 px-4 bg-secondary/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center golden-text">
          Mientras Esperas, Descubre:
        </h2>
      </section>

      {/* CTA Cards */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Taller Card */}
          <div className="card-premium p-8 rounded-3xl hover-lift relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              GRATIS
            </div>

            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-orange-600/20 to-orange-700/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-6xl">🎓</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Taller Gratuito:<br />
                Cómo Salir de una Relación con un Narcisista
              </h3>

              <ul className="space-y-3 mb-8 text-muted-foreground">
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
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
            >
              💬 Reservar Mi Cupo
            </Button>
          </div>

          {/* Libro Card */}
          <div className="card-premium p-8 rounded-3xl hover-lift overflow-hidden">
            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-orange-600/20 to-orange-700/20 rounded-2xl flex items-center justify-center mb-6">
                <img 
                  src="/apagon-emocional.png" 
                  alt="Portada Apagón Emocional"
                  className="h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-6xl">📖</span>';
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Libro:<br />
                Apagón Emocional
              </h3>

              <p className="text-lg text-muted-foreground mb-4">
                Recupera tu energía y claridad mental
              </p>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-muted-foreground">4.8/5</span>
              </div>

              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Herramientas prácticas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Ejercicios de sanación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Historias reales</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleAmazonClick}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
            >
              Ver en Amazon →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraciasEvaluacion;
