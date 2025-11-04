import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/apego-detox-hero.jpg";
import comboImage from "@/assets/apego-detox-combo.png";
import tabletaImage from "@/assets/apego-detox-tableta.png";
import libroImage from "@/assets/apego-detox-libro.png";
import javierImage from "@/assets/javier-vieira.png";

const ApegoDetox = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

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

    // Check cookies acceptance
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setShowCookieBanner(true);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black font-['Montserrat']">
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            APEGO DETOX
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            El Camino a Tu Libertad Emocional
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Rompe el lazo con el narcisista, desintoxica tu mente y vuelve a ser quien realmente eres.
          </p>
          
          <Button 
            onClick={scrollToPayment}
            className="bg-[#FDB913] text-black font-bold text-lg px-16 py-6 h-auto rounded-lg hover:shadow-[0_8px_24px_rgba(253,185,19,0.5)] hover:scale-105 transition-all duration-300"
          >
            INICIAR MI DETOX AHORA
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Descripción del Programa */}
      <section className="bg-[#1a1a1a] py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
            Comprende por qué sigues volviendo a quien te destruye, sana el vínculo traumático que te ata y recupera la paz que perdiste.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            <strong className="font-bold text-[#FDB913]">Apego Detox</strong> es un programa intensivo que te enseña paso a paso a romper el ciclo del narcisista, desintoxicar tu mente y volver a conectar con la mujer fuerte que eras antes de él.
          </p>
        </div>
      </section>

      {/* Materiales y Mockups */}
      <section className="py-20 md:py-28 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FDB913]">
            Todo lo que Necesitas para Tu Transformación
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative bg-black rounded-2xl p-4 border-2 border-[#FDB913] shadow-[0_20px_60px_rgba(253,185,19,0.4)]">
                <img 
                  src={comboImage} 
                  alt="Programa APEGO DETOX en múltiples dispositivos" 
                  loading="lazy"
                  className="w-full hover:scale-105 transition-transform duration-300"
                  style={{filter: 'drop-shadow(0 10px 25px rgba(253,185,19,0.3))'}}
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#FDB913]">Descubre que no estás sola</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cada encuentro en vivo es una experiencia terapéutica donde te verás reflejada en otras mujeres y comenzarás a reconstruir la confianza que el narcisista quebró.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    Aquí no solo escuchas: <strong className="text-white">te liberas, te expresas y sanas acompañada.</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#FDB913]">Material Escrito Exclusivo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Material escrito exclusivo para realizar tus tareas y aplicar lo aprendido semana a semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src={tabletaImage} 
                alt="Programa en tablet" 
                loading="lazy"
                className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300"
                style={{filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))'}}
              />
            </div>
            <div className="text-center">
              <img 
                src={libroImage} 
                alt="Workbook APEGO DETOX" 
                loading="lazy"
                className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300"
                style={{filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7 Módulos del Programa */}
      <section id="modulos" className="py-20 md:py-28 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FDB913]">
            7 Módulos para Tu Libertad Emocional
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Módulo 1 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">01</span>
                <h3 className="text-2xl font-semibold text-white">Comprendiendo el Narcisismo</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Descubre los patrones ocultos y por qué te enganchaste.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Características del narcisista encubierto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>El ciclo de idealización y devaluación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Por qué tu empatía se convirtió en tu trampa</span>
                </li>
              </ul>
            </div>

            {/* Módulo 2 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">02</span>
                <h3 className="text-2xl font-semibold text-white">Rompiendo el Vínculo Traumático</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Entiende el lazo invisible que te mantiene atada.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Qué es el trauma bonding y cómo funciona</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Las razones neurológicas del apego tóxico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Primeros pasos para romper la dependencia</span>
                </li>
              </ul>
            </div>

            {/* Módulo 3 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">03</span>
                <h3 className="text-2xl font-semibold text-white">Reprogramando tu Mente</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Cambia las creencias que sostienen el apego.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Identifica creencias limitantes sobre el amor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Técnicas de reestructuración cognitiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Afirmaciones y nuevos patrones mentales</span>
                </li>
              </ul>
            </div>

            {/* Módulo 4 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">04</span>
                <h3 className="text-2xl font-semibold text-white">Desintoxicación Emocional</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Limpia la toxicidad acumulada en tu sistema.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Proceso de duelo consciente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Gestión de recaídas emocionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Herramientas de regulación emocional</span>
                </li>
              </ul>
            </div>

            {/* Módulo 5 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">05</span>
                <h3 className="text-2xl font-semibold text-white">Reconexión con tu Identidad</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Reencuentra a la mujer que eras antes de él.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Recupera tus valores y pasiones perdidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Reconstruye tu autoestima desde cero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Define quién quieres ser ahora</span>
                </li>
              </ul>
            </div>

            {/* Módulo 6 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">06</span>
                <h3 className="text-2xl font-semibold text-white">Nuevos Límites, Nueva Dignidad</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Establece fronteras que protejan tu paz.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Cómo decir NO sin culpa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Contacto cero: estrategia y sostén</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Límites saludables en futuras relaciones</span>
                </li>
              </ul>
            </div>

            {/* Módulo 7 */}
            <div className="bg-black p-8 rounded-xl border border-gray-700 hover:border-[#FDB913] hover:shadow-[0_8px_24px_rgba(253,185,19,0.25)] hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#FDB913]">07</span>
                <h3 className="text-2xl font-semibold text-white">Plan de Reinvención Personal</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Diseña tu nueva vida con propósito y poder.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Visión de futuro: quién serás en 6 meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Plan de acción tangible y realista</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB913] mt-1">•</span>
                  <span>Compromiso contigo misma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="py-20 md:py-28 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cada Día Que Pasa Atrapada en Este Ciclo es un Día Menos de Tu Vida
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Ya perdiste suficiente tiempo. Es momento de un cambio real.
          </p>
          <a 
            href="https://pay.hotmart.com/W102751360L"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FDB913] text-black font-bold text-lg px-16 py-6 rounded-lg hover:shadow-[0_8px_24px_rgba(253,185,19,0.5)] hover:scale-105 transition-all duration-300"
          >
            YA BASTA, QUIERO SALIR
          </a>
        </div>
      </section>

      {/* Sección de Precio y Autor */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-[#FDB913] via-[#FFD54F] to-[#FDB913]">
        <div className="max-w-6xl mx-auto">
          {/* Bloque de Precio Principal */}
          <div className="bg-black rounded-3xl p-12 mb-16 shadow-[0_20px_60px_rgba(253,185,19,0.4)] border-4 border-[#FDB913]">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#FDB913] text-black px-8 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
                ⚡ OFERTA EXCLUSIVA
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#FDB913] mb-4">
                Transforma Tu Vida Hoy
              </h2>
              <p className="text-2xl text-gray-300 mb-8">
                No esperes a estar más rota para pedir ayuda
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-[#FDB913] to-[#FFD54F] p-1 rounded-2xl">
                <div className="bg-black rounded-2xl px-12 py-8">
                  <p className="text-gray-400 text-xl mb-2 line-through">Precio regular: $97 USD</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-7xl md:text-8xl font-black text-[#FDB913]">$24.97</span>
                    <div className="text-left">
                      <p className="text-2xl text-white font-bold">USD</p>
                      <p className="text-xl text-gray-400">mensuales</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#FDB913] font-semibold">
                    💳 Cancela cuando quieras • Sin compromisos
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-[#1a1a1a] rounded-xl p-6 border-2 border-[#FDB913]">
                <h3 className="text-2xl font-bold text-[#FDB913] mb-4">✓ Lo Que Recibes:</h3>
                <ul className="space-y-3 text-white text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>7 módulos completos de transformación profunda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Lives semanales en vivo con Javier Vieira</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Comunidad privada de apoyo 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Workbooks descargables con ejercicios guiados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Acceso ilimitado desde cualquier dispositivo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border-2 border-[#FDB913]">
                <h3 className="text-2xl font-bold text-[#FDB913] mb-4">✓ Lo Que Lograrás:</h3>
                <ul className="space-y-3 text-white text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Romperás el trauma bonding de raíz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Recuperarás tu identidad y poder personal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Aprenderás a poner límites sin culpa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Desactivarás la ansiedad del contacto cero</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-2xl">•</span>
                    <span>Volverás a creer en ti misma y en tu futuro</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://pay.hotmart.com/W102751360L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FDB913] text-black font-black text-2xl px-20 py-8 rounded-2xl hover:shadow-[0_15px_40px_rgba(253,185,19,0.6)] hover:scale-105 transition-all duration-300 animate-pulse"
              >
                SÍ, QUIERO RECUPERAR MI VIDA POR $24.97
              </a>
              <p className="text-gray-400 mt-4 text-sm">
                🔒 Pago seguro • Garantía de 7 días • Cancela cuando quieras
              </p>
            </div>
          </div>

          {/* Sección de Javier Vieira */}
          <div className="bg-black rounded-3xl p-8 md:p-12 border-2 border-[#FDB913] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FDB913] mb-4">
                ¿Quién Te Guiará en Este Proceso?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Javier Vieira Calle
                </h3>
                <p className="text-xl text-[#FDB913] font-semibold mb-6">
                  Creador de Historias de la Mente
                </p>
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Creador de <strong className="text-white">Historias de la Mente</strong> en TikTok, donde acompaña a miles de mujeres en su proceso de liberación del abuso narcisista.
                  </p>
                  <p>
                    A través de conferencias poderosas y vivenciales, ayuda a mujeres que desean liberarse del trauma bonding para recuperar su poder, reconectar con su esencia y volver a la paz interior.
                  </p>
                  <p className="text-[#FDB913] font-semibold">
                    Su enfoque es directo, humano y transformador: romper el ciclo, poner límites y reconstruir la propia dignidad.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] rounded-full opacity-30 blur-2xl animate-pulse"></div>
                  <img 
                    src={javierImage} 
                    alt="Javier Vieira - Creador de APEGO DETOX"
                    className="relative w-full max-w-md mx-auto rounded-2xl shadow-[0_20px_60px_rgba(253,185,19,0.3)]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border-2 border-[#FDB913]">
                <p className="text-2xl md:text-3xl text-white italic leading-relaxed">
                  "Sé exactamente cómo te sientes ahora mismo. La confusión, la vergüenza, el miedo. He trabajado con cientos de mujeres en tu situación, y te puedo decir con certeza: <span className="text-[#FDB913] font-bold">no estás loca, no eres débil, y sí hay una salida.</span>"
                </p>
                <p className="text-xl text-gray-400 mt-6">
                  — Javier Vieira
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Acordeón */}
      <section id="faq" className="py-20 md:py-28 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FDB913]">
            Preguntas Frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-6 bg-[#1a1a1a]">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                ¿Cuál es la duración del programa?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                El programa está diseñado para completarse en 7 semanas, con un módulo por semana. Sin embargo, tienes acceso de por vida, así que puedes avanzar a tu propio ritmo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-6 bg-[#1a1a1a]">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                ¿Qué pasa si no puedo asistir en vivo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Todo el contenido queda grabado y disponible en la plataforma. No hay sesiones obligatorias en vivo; puedes estudiar cuando mejor te convenga.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-6 bg-[#1a1a1a]">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                ¿Puedo acceder desde mi celular?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Sí, completamente. La plataforma es responsive y funciona perfectamente en celular, tablet y computadora.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-700 rounded-lg px-6 bg-[#1a1a1a]">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                ¿Incluye materiales escritos para tareas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Sí, cada módulo incluye un workbook descargable en PDF con ejercicios prácticos, reflexiones guiadas y hojas de trabajo para aplicar lo aprendido.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section id="payment-section" className="py-20 md:py-28 px-4 bg-[#FDB913]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Comienza Tu Detox Emocional Hoy
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto leading-relaxed">
            No permitas que otro día pase atrapada en el ciclo. 
            Tu libertad emocional te está esperando.
          </p>
          <a 
            href="https://pay.hotmart.com/W102751360L"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-[#FDB913] font-bold text-lg px-16 py-6 rounded-lg hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300"
          >
            ACCEDER AL PROGRAMA AHORA
          </a>
        </div>
      </section>

      {/* Footer Legal */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-[#FDB913] font-semibold text-lg mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-[#FDB913] transition-colors">Inicio</a></li>
                <li><a href="#modulos" className="hover:text-[#FDB913] transition-colors">Módulos</a></li>
                <li><a href="#faq" className="hover:text-[#FDB913] transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#FDB913] font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/cookies" className="hover:text-[#FDB913] transition-colors">Política de Cookies</a></li>
                <li><a href="/privacy" className="hover:text-[#FDB913] transition-colors">Política de Privacidad</a></li>
                <li><a href="/terms" className="hover:text-[#FDB913] transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#FDB913] font-semibold text-lg mb-4">Contacto</h3>
              <p className="text-gray-400 mb-4">
                ¿Tienes preguntas? Estamos aquí para ayudarte.
              </p>
              <a href="mailto:contacto@historiasdelamente.com" className="text-[#FDB913] hover:underline">
                contacto@historiasdelamente.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Historias de la Mente. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Banner de Cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm text-white p-6 shadow-2xl z-50 border-t-2 border-[#FDB913]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base">
              Este sitio utiliza cookies para mejorar tu experiencia y para anuncios personalizados en Facebook y TikTok. Al continuar, aceptas nuestras políticas.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <Button 
                onClick={acceptCookies}
                className="px-6 py-2 bg-[#FDB913] text-black font-semibold rounded-lg hover:bg-[#e5a710] transition-colors"
              >
                Aceptar Todo
              </Button>
              <Button 
                onClick={acceptCookies}
                variant="outline"
                className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Gestionar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApegoDetox;
