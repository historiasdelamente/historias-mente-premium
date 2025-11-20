import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import heroImage from "@/assets/apego-detox-hero.jpg";
import bannerHero from "@/assets/apego-detox-banner-hero.png";
import javierImage from "@/assets/javier-vieira.png";
import { Video, Calendar, FileText, Mail, Users, Gift, CheckCircle2, Clock, Heart, Shield, Sparkles, ArrowRight, Star, Zap, TrendingUp, Brain, Target } from "lucide-react";

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

  const whatsappLink = "https://wa.me/573041234567?text=Quiero%20información%20sobre%20Apego%20Detox";
  const hotmartLink = "https://pay.hotmart.com/W102751360L";

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif] overflow-x-hidden">
      
      {/* Banner Superior */}
      <div className="relative w-full">
        <img 
          src={bannerHero} 
          alt="Sé que quieres irte... pero algo dentro de ti no te deja" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 1️⃣ HERO PRINCIPAL */}
      <section 
        className="relative min-h-[60vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0C0C0C] to-black py-12 md:py-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 leading-tight text-white uppercase">
            <span className="block">Es el momento de romper lo que no ves…</span>
            <span className="block mt-3 md:mt-4 text-[#FFD400]">
              y comenzar a sanar lo que sí sientes.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Aquí entiendes por qué no has podido soltar… y cómo dejar de volver a quien te rompe.
          </p>
          
          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFD400] text-black font-black text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full hover:shadow-[0_20px_60px_rgba(255,212,0,0.6)] hover:scale-105 transition-all duration-300 animate-pulse"
          >
            QUIERO LIBERARME AHORA 🔥
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </a>

          <p className="mt-6 text-sm md:text-base text-gray-400">
            ⚡ Solo 20 cupos disponibles esta semana
          </p>
        </div>
      </section>

      {/* 2️⃣ QUÉ INCLUYE EL PROGRAMA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-[#0C0C0C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 md:mb-6 text-[#FFD400]">
            Todo Lo Que Incluye Tu Transformación
          </h2>
          <p className="text-center text-gray-300 text-base md:text-lg mb-12 md:mb-16 max-w-3xl mx-auto">
            Un acompañamiento completo, paso a paso, para liberarte del narcisista
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Item 1 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 md:p-8 rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-5 md:mb-6">
                <Video className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                2 Lives Semanales
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                <strong className="text-[#FFD400]">240 minutos de acompañamiento total:</strong> Espacios en vivo conmigo, 
                Javier Vieira, donde trabajaremos juntas la desconexión emocional, el trauma del abandono y las 
                herramientas reales para romper el vínculo narcisista.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 md:p-8 rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-5 md:mb-6">
                <Calendar className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                Clases Grabadas
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Acceso 24/7 para que repitas el contenido y avances a tu ritmo. Disponible desde cualquier dispositivo.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 md:p-8 rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-5 md:mb-6">
                <FileText className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                Tareas Terapéuticas Guiadas
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Ejercicios escritos con seguimiento psicológico para que observes tu evolución semana a semana.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 md:p-8 rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-5 md:mb-6">
                <Mail className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                Refuerzo vía Email
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Recordatorios, reflexiones y ejercicios de reprogramación emocional directo a tu correo.
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 md:p-8 rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-5 md:mb-6">
                <Users className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                Acompañamiento en Vivo
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Espacios de apoyo donde compartes tus avances y experiencias con otras mujeres que te entienden.
              </p>
            </div>

            {/* Item 6 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] p-6 md:p-8 rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#EFA2A2] rounded-full flex items-center justify-center mb-5 md:mb-6">
                <Gift className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#EFA2A2]">
                3 Bonos Exclusivos
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#EFA2A2] flex-shrink-0 mt-1" />
                  <span>Mini curso "Rompe el contacto sin recaer"</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#EFA2A2] flex-shrink-0 mt-1" />
                  <span>Audio-guía "Reprograma tu mente en 7 días"</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#EFA2A2] flex-shrink-0 mt-1" />
                  <span>Diario de autoobservación terapéutica (PDF)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ ANTES Y DESPUÉS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#0C0C0C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 md:mb-16 text-[#FFD400]">
            Tu Transformación Comienza Aquí
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* ANTES */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/30 border-2 border-red-800/50 rounded-2xl p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😔</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-400">Antes de Apego Detox</h3>
              </div>
              
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-sm md:text-base">Vives en ansiedad esperando un mensaje</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-sm md:text-base">Justificas lo injustificable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-sm md:text-base">Te culpas por no ser suficiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-sm md:text-base">Sientes que sin él no puedes seguir</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-sm md:text-base">Perdiste tu identidad en la relación</span>
                </li>
              </ul>
            </div>

            {/* DESPUÉS */}
            <div className="bg-gradient-to-br from-[#FFD400]/20 to-[#FFD400]/10 border-2 border-[#FFD400] rounded-2xl p-6 md:p-10 shadow-[0_20px_60px_rgba(255,212,0,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FFD400]">Después de Apego Detox</h3>
              </div>
              
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFD400] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-semibold">Recuperas tu paz interior</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFD400] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-semibold">Sabes poner límites sin culpa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFD400] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-semibold">Te sientes libre y en control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFD400] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-semibold">Vuelves a ser tú, sin miedo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFD400] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-semibold">Construyes relaciones sanas y auténticas</span>
                </li>
              </ul>

              <div className="mt-8">
              <a 
                href={hotmartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-[#FFD400] text-black font-bold text-sm md:text-base px-6 py-4 rounded-xl hover:shadow-[0_15px_40px_rgba(255,212,0,0.5)] hover:scale-105 transition-all duration-300"
              >
                QUIERO ESE CAMBIO AHORA
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ SECCIÓN DE AUTORIDAD - JAVIER VIEIRA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0C0C0C] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 md:mb-16 text-[#FFD400]">
            ¿Quién Te Guiará en Este Proceso?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] rounded-3xl p-6 md:p-12 border-2 border-[#FFD400]/30">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD400] via-[#EFA2A2] to-[#FFD400] rounded-full opacity-30 blur-3xl animate-pulse"></div>
                <img 
                  src={javierImage} 
                  alt="Javier Vieira - Creador de Historias de la Mente"
                  className="relative w-full max-w-sm mx-auto rounded-2xl shadow-[0_30px_80px_rgba(255,212,0,0.4)]"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-5 md:space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Javier Vieira Calle
              </h3>
              <p className="text-lg md:text-xl text-[#EFA2A2] font-semibold">
                Creador de Historias de la Mente
              </p>
              
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Soy Javier Vieira, psicólogo especializado en <strong className="text-white">apego, autoestima y autoimagen.</strong>
                </p>
                <p>
                  Acompaño a mujeres a liberarse de relaciones traumáticas y recuperar su identidad. 
                  A través de <strong className="text-[#FFD400]">Historias de la Mente</strong>, más de 50.000 mujeres 
                  han dado su primer paso hacia su libertad emocional.
                </p>
              </div>

              <div className="bg-black/50 border-l-4 border-[#FFD400] rounded-r-xl p-4 md:p-6">
                <p className="text-base md:text-lg text-white italic leading-relaxed">
                  <strong className="text-[#FFD400]">"Tu historia no termina en el dolor. Comienza cuando decides soltar."</strong>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/30 rounded-lg px-4 py-2">
                  <Users className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-sm text-gray-300">+50K mujeres</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/30 rounded-lg px-4 py-2">
                  <Brain className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-sm text-gray-300">Psicólogo certificado</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/30 rounded-lg px-4 py-2">
                  <Heart className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-sm text-gray-300">Especialista en trauma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ TESTIMONIOS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 md:mb-6 text-[#FFD400]">
            Historias de Mujeres Que Se Liberaron
          </h2>
          <p className="text-center text-gray-400 text-base md:text-lg mb-12 md:mb-16">
            Ellas decidieron que ya era suficiente. Ahora viven en paz.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonio 1 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] border border-[#FFD400]/20 rounded-2xl p-6 md:p-8 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#FFD400] text-[#FFD400]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                "Pensé que nunca iba a poder soltarlo, pero Javier me mostró que no era amor, era trauma. 
                <strong className="text-white"> Hoy duermo en paz.</strong>"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EFA2A2] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Andrea G.</p>
                  <p className="text-gray-500 text-xs">Colombia</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] border border-[#FFD400]/20 rounded-2xl p-6 md:p-8 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#FFD400] text-[#FFD400]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                "Apego Detox me devolvió la dignidad. <strong className="text-white">Por primera vez me siento libre.</strong> 
                Ya no espero su mensaje, ya no justifico su ausencia."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EFA2A2] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">María J.</p>
                  <p className="text-gray-500 text-xs">México</p>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] border border-[#FFD400]/20 rounded-2xl p-6 md:p-8 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#FFD400] text-[#FFD400]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                "Nunca imaginé que alguien entendiera tan bien lo que viví con un narcisista. 
                <strong className="text-white"> Este programa salvó mi vida.</strong>"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EFA2A2] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Laura M.</p>
                  <p className="text-gray-500 text-xs">España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD400] text-black font-bold text-sm md:text-base px-8 md:px-12 py-4 md:py-5 rounded-full hover:shadow-[0_20px_60px_rgba(255,212,0,0.6)] hover:scale-105 transition-all duration-300"
            >
              QUIERO SER LA PRÓXIMA HISTORIA 💫
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 6️⃣ BLOQUE DE BENEFICIOS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-[#0C0C0C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 md:mb-6 text-[#FFD400]">
            Lo Que Lograrás Con Apego Detox
          </h2>
          <p className="text-center text-gray-400 text-base md:text-lg mb-12 md:mb-16 max-w-3xl mx-auto">
            No son solo palabras. Son resultados reales que transformarán tu vida.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Beneficio 1 */}
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FFD400] to-[#EFA2A2] rounded-full flex items-center justify-center mb-5">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                Rompes el Vínculo Traumático
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Entenderás la ciencia detrás del trauma bonding y aprenderás a cortar ese lazo que te ata al narcisista.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FFD400] to-[#EFA2A2] rounded-full flex items-center justify-center mb-5">
                <Brain className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                Reprogramas Tu Mente
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Desactivas los patrones mentales que te hacen volver, y creas nuevos circuitos de pensamiento saludables.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FFD400] to-[#EFA2A2] rounded-full flex items-center justify-center mb-5">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                Fortaleces Autoestima y Límites
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Aprendes a decir NO sin culpa, a valorarte y a crear límites que protejan tu bienestar emocional.
              </p>
            </div>

            {/* Beneficio 4 */}
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FFD400] to-[#EFA2A2] rounded-full flex items-center justify-center mb-5">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                Recuperas Tu Paz Interior
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Dejas de vivir en ansiedad constante. Vuelves a dormir tranquila, sin revisar el teléfono cada segundo.
              </p>
            </div>

            {/* Beneficio 5 */}
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] rounded-2xl border border-[#FFD400]/20 hover:border-[#FFD400] hover:shadow-[0_20px_60px_rgba(255,212,0,0.2)] transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FFD400] to-[#EFA2A2] rounded-full flex items-center justify-center mb-5">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                Construyes Relaciones Seguras
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Aprendes a identificar señales de alerta temprano y a crear vínculos saludables basados en respeto mutuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ GARANTÍA Y COMPROMISO */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#0C0C0C]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#FFD400] rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-[0_30px_80px_rgba(255,212,0,0.3)]">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-black" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-[#FFD400]">
              100% Acompañamiento Garantizado
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-8 max-w-3xl mx-auto">
              Creemos tanto en este proceso que <strong className="text-[#FFD400]">te acompañamos hasta que logres sentirte libre.</strong>
            </p>
            
            <div className="bg-black/50 border-l-4 border-[#FFD400] rounded-r-2xl p-6 md:p-8 mb-8 md:mb-10 text-left max-w-2xl mx-auto">
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                <strong className="text-white">Este no es un curso.</strong> Es una experiencia terapéutica guiada paso a paso. 
                No estás sola en esto. Estaré contigo en cada sesión en vivo, en cada email de refuerzo, en cada momento de duda.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400] rounded-lg px-4 md:px-6 py-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD400]" />
                <span className="text-white text-sm md:text-base font-semibold">Acceso de por vida</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400] rounded-lg px-4 md:px-6 py-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD400]" />
                <span className="text-white text-sm md:text-base font-semibold">Sin compromisos</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400] rounded-lg px-4 md:px-6 py-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD400]" />
                <span className="text-white text-sm md:text-base font-semibold">Cancela cuando quieras</span>
              </div>
            </div>

            <p className="text-[#EFA2A2] text-lg md:text-xl font-semibold italic">
              "Tu bienestar es mi compromiso. Tu libertad es mi misión."
            </p>
          </div>
        </div>
      </section>

      {/* 8️⃣ CIERRE CON URGENCIA EMOCIONAL */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0C0C0C] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRDQwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-white leading-tight">
            El Dolor No Se Va Solo.
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-[#FFD400] leading-tight">
            Se Transforma Cuando Tú Decides Hacerlo.
          </p>
          
          <div className="bg-gradient-to-br from-[#FFD400] to-[#EFA2A2] rounded-3xl p-8 md:p-12 mb-8 md:mb-12 shadow-[0_30px_80px_rgba(255,212,0,0.4)]">
            <div className="bg-black rounded-2xl p-6 md:p-10">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Inversión Mensual:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <span className="text-gray-400 text-base sm:text-lg md:text-xl line-through">$97 USD</span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#FFD400]">$24.97</span>
                <span className="text-white text-lg sm:text-xl md:text-2xl">USD/mes</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">
                💳 Cancela cuando quieras • Sin compromisos
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                ⚡ Solo 20 cupos disponibles esta semana
              </p>
            </div>
          </div>

          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFD400] text-black font-black text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-6 md:py-7 lg:py-8 rounded-full hover:shadow-[0_30px_80px_rgba(255,212,0,0.7)] hover:scale-105 transition-all duration-300 animate-pulse mb-6"
          >
            QUIERO COMENZAR MI DESINTOXICACIÓN EMOCIONAL ❤️
            <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
          </a>

          <p className="text-sm md:text-base text-gray-400">
            🔒 Pago 100% seguro • Garantía de 7 días • Acceso inmediato
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="text-[#FFD400] font-bold text-lg mb-4">Historias de la Mente</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ayudando a mujeres a liberarse del abuso narcisista y recuperar su poder personal.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#FFD400] font-semibold text-base mb-4">Navegación</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="text-gray-400 hover:text-[#FFD400] transition-colors">Inicio</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD400] transition-colors">Contáctanos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#FFD400] font-semibold text-base mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-gray-400 hover:text-[#FFD400] transition-colors">Política de Privacidad</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-[#FFD400] transition-colors">Términos y Condiciones</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-[#FFD400] transition-colors">Política de Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#FFD400] font-semibold text-base mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@historiasdelamente.com" className="text-gray-400 hover:text-[#FFD400] transition-colors">info@historiasdelamente.com</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD400] transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Historias de la Mente. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* BANNER DE COOKIES */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/98 backdrop-blur-lg text-white p-4 md:p-6 shadow-2xl z-50 border-t-2 border-[#FFD400]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm md:text-base text-center md:text-left">
              Este sitio utiliza cookies para mejorar tu experiencia. Al continuar, aceptas nuestras políticas.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <Button 
                onClick={acceptCookies}
                className="px-6 py-2 bg-[#FFD400] text-black font-bold rounded-lg hover:bg-[#FFD400]/90 transition-colors text-sm"
              >
                Aceptar
              </Button>
              <a href="/cookies">
                <Button 
                  variant="outline"
                  className="px-6 py-2 border-[#FFD400] text-[#FFD400] hover:bg-[#FFD400] hover:text-black transition-colors text-sm"
                >
                  Más info
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApegoDetox;