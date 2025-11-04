import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/apego-detox-hero.jpg";
import comboImage from "@/assets/apego-detox-combo.png";
import tabletaImage from "@/assets/apego-detox-tableta.png";
import libroImage from "@/assets/apego-detox-libro.png";
import modeloImage from "@/assets/apego-detox-modelo.png";

const ApegoDetox = () => {
  useEffect(() => {
    // Load Hotmart script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      function importHotmart(){ 
        var imported = document.createElement('script'); 
        imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
        document.head.appendChild(imported); 
        var link = document.createElement('link'); 
        link.rel = 'stylesheet'; 
        link.type = 'text/css'; 
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css'; 
        document.head.appendChild(link);
      } 
      importHotmart();
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container max-w-5xl mx-auto text-center space-y-8 relative z-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold golden-text leading-tight font-apple">
            APEGO DETOX
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-apple">
            El Camino a Tu Libertad Emocional
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-apple">
            Un programa transformador con clases guiadas, tareas semanales y acompañamiento en vivo para liberarte del narcisista y volver a ti.
          </p>
          
          <div className="relative pt-6">
            <div className="absolute -inset-2 bg-gradient-to-r from-golden via-golden-light to-golden rounded-xl opacity-30 blur-lg animate-pulse"></div>
            <Button 
              onClick={scrollToPayment}
              size="lg"
              className="relative px-10 py-8 text-xl font-bold rounded-xl font-apple bg-gradient-to-r from-golden to-golden-light hover:from-golden-light hover:to-golden text-black shadow-golden ring-2 ring-golden/70 hover:ring-golden transition-all duration-300"
            >
              QUIERO INICIAR MI DETOX AHORA
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="container max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold golden-text font-apple leading-tight">
              Tu Transformación Comienza Aquí
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-apple max-w-4xl mx-auto">
              Durante un mes descubrirás cómo romper el lazo con el narcisista, sanar tu vínculo emocional y reconectar con tu identidad perdida. Todo mediante clases grabadas, lives en cámara, comunidad privada y ejercicios guiados.
            </p>
          </div>

          {/* Modules */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Card className="card-premium hover-lift border-golden/20 hover:border-golden/40 animate-scale-in">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-golden/20 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-golden" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold golden-text font-apple mb-3">
                      Módulo 1: Enfrenta el Narcisismo
                    </h3>
                    <p className="text-muted-foreground font-apple leading-relaxed">
                      Identifica los patrones, entiende la dinámica y aprende a detectar las señales de manipulación. Recupera tu claridad mental.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift border-golden/20 hover:border-golden/40 animate-scale-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-golden/20 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-golden" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold golden-text font-apple mb-3">
                      Módulo 2: Sanando tu Vínculo
                    </h3>
                    <p className="text-muted-foreground font-apple leading-relaxed">
                      Desintoxica tu apego, recupera tu poder y reconstruye tu identidad. Vuelve a sentirte completa, libre y en paz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Mockups Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold golden-text font-apple leading-tight">
              Todo Lo Que Recibirás
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-apple max-w-3xl mx-auto">
              Acceso completo a recursos digitales, clases en vivo, comunidad privada y material descargable.
            </p>
          </div>

          {/* Combo Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative max-w-4xl w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-golden via-amber-400 to-golden rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src={comboImage} 
                alt="Combo completo Apego Detox"
                className="relative w-full h-auto rounded-2xl shadow-golden hover-lift"
              />
            </div>
          </div>

          {/* Grid with other images */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-golden/20 rounded-2xl blur-xl"></div>
                <img 
                  src={tabletaImage} 
                  alt="Plataforma digital Apego Detox"
                  className="relative w-full h-auto rounded-xl shadow-golden hover-lift"
                />
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="absolute -inset-4 bg-golden/20 rounded-2xl blur-xl"></div>
                <img 
                  src={libroImage} 
                  alt="Libro Apego Detox"
                  className="relative w-full h-auto rounded-xl shadow-golden hover-lift"
                />
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="absolute -inset-6 bg-gradient-to-r from-golden via-amber-400 to-golden rounded-full opacity-20 blur-3xl"></div>
              <img 
                src={modeloImage} 
                alt="Transforma tu vida con Apego Detox"
                className="relative w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment-section" className="py-20 px-6 bg-gradient-subtle">
        <div className="container max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold golden-text font-apple leading-tight">
              Comienza Hoy Tu Libertad Emocional
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-apple max-w-3xl mx-auto">
              No esperes más para recuperar tu paz interior y reconectar con tu esencia.
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              onClick={() => false} 
              href="https://pay.hotmart.com/W102751360L?checkoutMode=2" 
              className="hotmart-fb hotmart__button-checkout inline-block"
            >
              <img 
                src='https://static.hotmart.com/img/btn-buy-green.png' 
                alt="Comprar Apego Detox"
                className="hover-lift"
              />
            </a>
          </div>

          <Card className="card-premium border-golden/30 shadow-golden max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold golden-text font-apple">
                  ¿Por qué Apego Detox?
                </h3>
                <ul className="text-left space-y-3 text-muted-foreground font-apple">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                    <span>Clases grabadas disponibles 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                    <span>Lives semanales con Javier Vieira</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                    <span>Comunidad privada de apoyo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                    <span>Ejercicios prácticos guiados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                    <span>Material descargable y plantillas</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApegoDetox;
