import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import heroImage from "@/assets/apego-detox-hero.jpg";
import bannerHero from "@/assets/apego-detox-banner-hero.png";
import javierImage from "@/assets/javier-vieira.png";
import mujerCelular from "@/assets/mujer-celular-sintomas.png";
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
      <section className="relative bg-black">
        {/* Contenedor de texto */}
        <div className="bg-black py-12 md:py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 mt-8 md:mt-12">
              <span className="block text-white">NO LO EXTRAÑAS A ÉL.</span>
              <span className="block text-white">EXTRAÑAS LA VERSIÓN</span>
              <span className="block text-yellow-400">QUE NUNCA EXISTIÓ.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-3xl mx-auto mt-6">
              Y mientras tu cerebro siga creyendo que "fue amor intenso", vas a seguir comparándolo con todos, revisando sus redes, memorizando su número "por si acaso". Pero 2,847 mujeres ya rompieron el trauma bonding. En 4 semanas puedes ser tú.
            </p>
            
            {/* Botón CTA verde lima neón */}
            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#B8E600] text-black font-bold text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.5)] hover:shadow-[0_0_40px_rgba(204,255,0,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer mt-8 md:mt-10 w-full sm:w-auto max-w-md sm:max-w-none mx-auto animate-pulse"
            >
              <span>QUIERO LIBERARME AHORA</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Texto debajo del botón */}
            <p className="mt-4 text-xs sm:text-sm md:text-base text-yellow-400 font-semibold">
              <span className="inline-block animate-pulse">⚡</span> Solo 20 cupos disponibles esta semana
            </p>
          </div>
        </div>
      </section>

      {/* Nueva Sección de Síntomas */}
      <section className="bg-zinc-900 py-12 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Imagen circular arriba de todo */}
          <div className="relative w-full flex justify-center mb-12 md:mb-16 lg:mb-20 -mt-12 md:-mt-16 lg:-mt-20">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Círculo decorativo con glow */}
              <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 bg-gradient-to-br from-yellow-400/20 via-yellow-400/10 to-transparent rounded-full blur-sm z-0 animate-pulse"></div>
              
              {/* Imagen principal */}
              <img 
                src={mujerCelular} 
                alt="Mujer experimentando síntomas de trauma bonding" 
                className="w-full h-full rounded-full border-4 sm:border-6 md:border-8 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.3)] md:shadow-[0_0_60px_rgba(255,215,0,0.4)] object-cover relative z-10"
              />
            </div>
          </div>

          {/* Títulos */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white text-center leading-tight mb-3 md:mb-4 lg:mb-6 px-4">
            ¿Esto te está pasando?
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 text-center leading-snug mb-8 md:mb-12 lg:mb-16 px-4 max-w-4xl mx-auto">
            Si marcaste 3 o más... tu cerebro está químicamente enganchado a tu abusador
          </p>

          {/* Grid de síntomas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto px-4">
            
            {/* Card 1 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Lo borras de todas partes, pero memorizas su número 'por si acaso'
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Sabes que te mintió/engañó/humilló... pero lo justificas internamente
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Sientes que NADIE te va a amar con esa intensidad de nuevo
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Cualquier canción, lugar o fecha te hace colapsar emocionalmente
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Comparas a todos los hombres con él (aunque fue tu peor relación)
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Tu familia/amigas están cansadas de escucharte hablar de él
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Has intentado 'olvidarlo' 20 veces... y siempre recaes
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-zinc-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4 hover:bg-zinc-700 hover:scale-[1.02] transition-all duration-300 w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#CCFF00] font-bold shrink-0 leading-none">✓</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed flex-1">
                Sientes vergüenza de seguir pensando en alguien que te trató tan mal
              </p>
            </div>
          </div>

          {/* Card de cierre */}
          <div className="bg-black border-2 md:border-3 border-yellow-400 p-6 sm:p-8 md:p-10 lg:p-12 mt-8 md:mt-12 lg:mt-16 mx-4 rounded-xl md:rounded-2xl text-center max-w-4xl mx-auto">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight">
              No eres débil. No eres codependiente. No 'te gusta sufrir'.
            </p>
            <p className="text-yellow-400 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold italic mb-3 md:mb-4 leading-snug">
              Tu cerebro está experimentando el mismo proceso químico que una adicción a la cocaína.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
              Y como cualquier adicción, necesita un protocolo científico para superarlo.
            </p>
          </div>

          {/* Botón CTA final */}
          <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 px-4">
            <a
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#B8E600] text-black font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 lg:px-16 lg:py-7 rounded-full shadow-[0_0_30px_rgba(204,255,0,0.6)] hover:shadow-[0_0_50px_rgba(204,255,0,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto max-w-2xl"
            >
              <span>DAME ACCESO AL PROGRAMA</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Nueva Sección: TODO LO QUE INCLUYE */}
      <section className="bg-black py-16 px-4 md:py-24 md:px-6 lg:py-32 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Título Principal */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center leading-tight mb-4 md:mb-6">
            TODO LO QUE INCLUYE APEGO DETOX
          </h2>
          
          {/* Subtítulo */}
          <p className="text-yellow-400 text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto">
            Las respuestas reales a las preguntas que siempre me hacen
          </p>

          {/* Grid de Beneficios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            
            {/* Card 1 */}
            <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4">
              <div className="bg-yellow-400 text-black text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                1
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                LIBRO DIGITAL 'APAGÓN EMOCIONAL'
              </h3>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mb-3">
                (Valor: $15 USD)
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                El libro que responde lo que realmente necesitas saber. Sin rodeos, sin 'perdónalo', sin 'trabaja en ti'.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cómo dejarlo sin sentir que te arrancas el alma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Por qué sigues revisando su WhatsApp aunque sabes que te hace daño</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>La diferencia entre amor real y adicción emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Por qué él te eligió a ti (y cómo evitar que vuelva a pasar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Qué hacer cuando te busca después de meses de silencio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cómo responderle (o no responderle) cuando te escribe</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4">
              <div className="bg-yellow-400 text-black text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                2
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                PSICOEDUCACIÓN 24/7 EN VIDEO
              </h3>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mb-3">
                (Valor: $75 USD)
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                12 módulos en video donde te explico TODO lo que ningún psicólogo te dice en consulta.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cómo vengarte del narcisista (sin que él se dé cuenta)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Las 3 frases que SIEMPRE funcionan para desarmarlo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Por qué el contacto cero NO funciona si no entiendes esto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Qué hacer si trabajan juntos o tienen hijos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cómo saber si realmente era narcisista o solo un hijo de puta normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>La táctica del 'hoovering': cuando vuelve arrepentido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cómo no caer cuando te promete que cambió</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Señales de que NUNCA va a cambiar (aunque llore)</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4">
              <div className="bg-yellow-400 text-black text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                3
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                TALLERES GRUPALES EN VIVO
              </h3>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mb-3">
                (Valor: $200 USD)
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                4 horas semanales x 4 semanas conmigo en vivo. Aquí hablamos sin filtros de lo que realmente quieres preguntarme.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Cómo hago para no responderle cuando está borracho?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Es normal que todavía fantasee con que vuelva?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Cómo le explico a mi familia que no es tan fácil dejarlo?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Puedo mandarle un último mensaje de despedida?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Cómo me vengo sin parecer despechada?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Cuándo voy a dejar de llorar por él?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>"¿Por qué ya está con otra y yo sigo destrozada?"</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4">
              <div className="bg-yellow-400 text-black text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                4
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                COMUNIDAD PRIVADA 24/7
              </h3>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mb-3">
                (Acceso de por vida)
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                El grupo donde las 3am cuando quieres escribirle, nos escribes a nosotras primero.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Mujeres que NO te dirán "ya supéralo"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Alguien despierto cuando colapses a medianoche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cero juicios si recaíste y le escribiste</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Ayuda para bloquear su número otra vez</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Traducción de sus mensajes confusos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Qué responder cuando te dice "podemos ser amigos"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Apoyo cuando veas que subió foto con otra</span>
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4">
              <div className="bg-yellow-400 text-black text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                5
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                TAREAS DIARIAS EN PDF
              </h3>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mb-3">
                (Valor: $50 USD)
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                Ejercicios de 15 minutos diarios. No teoría abstracta. Acciones concretas que desactivan el apego.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>La carta que escribes pero NUNCA envías (y por qué funciona)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>El ejercicio de los "dos futuros" (con él vs sin él en 5 años)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Cómo borrar sus fotos sin sentir que lo pierdes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Qué hacer con los regalos que te dio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>El ritual de cierre que necesitas hacer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Plan de emergencia para crisis nocturnas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Audio guiado para dormir sin pensar en él</span>
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4">
              <div className="bg-yellow-400 text-black text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                6
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                OPCIÓN DE SESIONES 1 A 1
              </h3>
              <p className="text-yellow-400 text-base md:text-lg font-semibold mb-3">
                (Acceso prioritario)
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                Si tu caso es complejo, tienes acceso directo a sesiones privadas conmigo.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Ideal si hay abuso físico o económico de por medio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Si tienen hijos juntos y no puedes hacer contacto cero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Si trabajas con él o comparten círculo social</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Si te sientes en peligro si lo dejas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Si estás embarazada y no sabes qué hacer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Si necesitas estrategia legal (separación, custodia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CCFF00] shrink-0">✓</span>
                  <span>Si tienes pánico de quedarte sola</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Card Especial de Precio */}
          <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border-4 border-yellow-400 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto mt-10 md:mt-16">
            
            <p className="text-white text-xl md:text-2xl font-bold mb-3">
              VALOR REAL DE TODO ESTO:
            </p>
            
            <p className="text-gray-500 text-3xl md:text-4xl font-black line-through mb-4">
              $365 USD
            </p>
            
            <p className="text-white text-lg md:text-xl mb-6">
              PERO HOY NO PAGAS ESO.
            </p>
            
            <p className="text-yellow-400 text-2xl md:text-3xl font-bold mb-2">
              INVERSIÓN REAL:
            </p>
            
            <p className="text-[#CCFF00] text-5xl md:text-6xl lg:text-7xl font-black mb-3">
              $25 USD
            </p>
            
            <p className="text-gray-400 text-base md:text-lg italic mb-4">
              (Menos que 3 cenas que te pagó para manipularte)
            </p>
            
            <p className="text-gray-500 text-xs md:text-sm italic opacity-60 mb-8">
              (Pago mensual - Menos que una sesión de terapia)
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="bg-black/50 px-4 py-2 rounded-full text-white text-sm md:text-base inline-flex items-center gap-2">
                ✓ Garantía de 7 días
              </span>
              <span className="bg-black/50 px-4 py-2 rounded-full text-white text-sm md:text-base inline-flex items-center gap-2">
                ✓ Solo 15 cupos este mes
              </span>
              <span className="bg-black/50 px-4 py-2 rounded-full text-white text-sm md:text-base inline-flex items-center gap-2">
                ✓ Acceso inmediato
              </span>
            </div>

            {/* Botón CTA */}
            <a
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3 bg-[#CCFF00] hover:bg-[#B8E600] text-black font-extrabold text-lg sm:text-xl md:text-2xl px-12 py-6 md:px-16 md:py-7 rounded-full shadow-[0_0_40px_rgba(204,255,0,0.7)] hover:shadow-[0_0_60px_rgba(204,255,0,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer w-full md:w-auto max-w-2xl"
            >
              <span>SÍ, QUIERO LIBERARME AHORA</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4 text-center text-gray-400 text-sm">
        <p>© 2025 Historias de la Mente. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="/terminos" className="hover:text-[#FFD400] transition-colors">Términos y Condiciones</a>
          <a href="/privacidad" className="hover:text-[#FFD400] transition-colors">Política de Privacidad</a>
          <a href="/cookies" className="hover:text-[#FFD400] transition-colors">Política de Cookies</a>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-[#FFD400] p-4 md:p-6 z-50 shadow-[0_-10px_50px_rgba(255,212,0,0.3)]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm md:text-base">
              Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de cookies.
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={acceptCookies}
                className="bg-[#CCFF00] hover:bg-[#B8E600] text-black font-bold px-6 py-2"
              >
                Aceptar
              </Button>
              <a 
                href="/cookies" 
                className="text-[#FFD400] hover:text-[#FFD400]/80 font-semibold px-4 py-2 flex items-center"
              >
                Más info
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApegoDetox;
