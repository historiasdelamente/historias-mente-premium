import { useState, useEffect } from "react";
import { Play, Check, ArrowDown, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ============ CONFIGURACIÓN EDITABLE ============
const PURCHASE_LINK = "https://TU-LINK-DE-COMPRA-AQUI.com";
// ================================================

const ClaseApegoDetox = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyBar(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    { title: "Romper el ciclo", description: "Salir del patrón que te mantiene atada" },
    { title: "Dejar de justificar", description: "Reconocer lo que no está bien sin excusas" },
    { title: "Recuperar tu claridad", description: "Pensar sin la niebla emocional" },
    { title: "Volver a ti", description: "Reconectar con quien eras antes" },
    { title: "Aprender límites", description: "Decir 'no' sin sentir culpa" },
    { title: "Tomar decisiones sin miedo", description: "Actuar desde la seguridad, no el pánico" },
  ];

  const forWhom = [
    "Si dices 'ya no vuelvo'… y vuelves",
    "Si te cuesta soltar aunque sabes que te hace daño",
    "Si tu mente entiende, pero tu cuerpo se queda enganchado",
    "Si te culpas por sentir lo que sientes",
    "Si quieres un paso a paso real",
  ];

  const faqs = [
    {
      question: "¿Esto es para mí si ya intenté soltar?",
      answer: "Sí. Este programa está diseñado precisamente para quienes han intentado muchas veces. Te da las herramientas que te faltaban para que esta vez sea diferente.",
    },
    {
      question: "¿Qué pasa después de ver la clase?",
      answer: "La clase te da el entendimiento. El programa completo te da el proceso paso a paso para aplicar lo que aprendiste y lograr el cambio real.",
    },
    {
      question: "¿Es contenido práctico o solo motivación?",
      answer: "Es 100% práctico. Cada módulo tiene ejercicios, reflexiones y pasos concretos. Nada de frases vacías.",
    },
    {
      question: "¿Cuánto tiempo toma ver cambios?",
      answer: "Muchas mujeres reportan claridad desde la primera semana. Los cambios profundos vienen con la práctica constante durante 21-30 días.",
    },
    {
      question: "¿Cómo accedo al programa?",
      answer: "Al hacer clic en el botón de compra, accedes inmediatamente a la plataforma con todo el contenido disponible desde el primer momento.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ========== HEADER STICKY ========== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold text-white">
            Historias de la Mente
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <button onClick={() => scrollToSection("video")} className="hover:text-white transition-colors">
              Ver Clase
            </button>
            <button onClick={() => scrollToSection("beneficios")} className="hover:text-white transition-colors">
              Qué vas a lograr
            </button>
            <button onClick={() => scrollToSection("comprar")} className="hover:text-white transition-colors">
              Comprar
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">
              Preguntas
            </button>
          </nav>

          <a
            href={PURCHASE_LINK}
            className="hidden sm:inline-flex px-4 py-2 bg-[#FFD200] text-black text-sm font-semibold rounded-lg hover:bg-[#FFD200]/90 transition-all"
          >
            Comprar ahora
          </a>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD200]/10 border border-[#FFD200]/30 rounded-full text-[#FFD200] text-sm mb-8">
            <Play className="w-4 h-4" />
            Clase Apego Detox
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            NO ES AMOR.
            <br />
            <span className="text-[#FFD200]">ES APEGO EMOCIONAL.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Si lo entiendes, dejas de culparte.
            <br className="hidden sm:block" />
            Y si lo trabajas, dejas de volver.
          </p>

          {/* Microcopy */}
          <p className="text-sm text-gray-500 mb-8">
            Esta clase es el primer paso de Apego Detox.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("video")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-all group"
          >
            Ver la clase ahora
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Clase en video", "Paso a paso", "Enfoque psicológico", "Acompañamiento"].map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VIDEO SECTION ========== */}
      <section id="video" className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/v7XHwI6AXVY?si=f1_qAex-hrCQinnU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Text below video */}
          <p className="text-center text-gray-400 mt-8 text-lg">
            Cuando termines la clase, baja y haz clic en el botón.
            <br />
            <span className="text-[#FFD200]">Ahí empieza el cambio.</span>
          </p>
        </div>
      </section>

      {/* ========== BENEFICIOS ========== */}
      <section id="beneficios" className="py-16 md:py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Qué vas a <span className="text-[#FFD200]">lograr</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Esto es lo que cambia cuando trabajas el apego emocional de verdad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-[#151515] border border-white/5 rounded-2xl hover:border-[#FFD200]/30 transition-all group"
              >
                <div className="w-10 h-10 bg-[#FFD200]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFD200]/20 transition-colors">
                  <Check className="w-5 h-5 text-[#FFD200]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARA QUIÉN ES ========== */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            ¿Para quién es <span className="text-[#FFD200]">esto</span>?
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Esta clase es para ti si...
          </p>

          <div className="space-y-4">
            {forWhom.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-[#111] border border-white/5 rounded-xl"
              >
                <div className="w-6 h-6 bg-[#FFD200] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BLOQUE DE COMPRA ========== */}
      <section id="comprar" className="py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#FFD200]/20 rounded-3xl text-center overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD200]/5 via-transparent to-[#FFD200]/5 pointer-events-none" />
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10">
              COMIENZA AQUÍ:
              <br />
              <span className="text-[#FFD200]">LIBÉRATE DEL APEGO</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-md mx-auto relative z-10">
              Si te quedas solo con entender, repites.
              <br />
              Si lo trabajas, sales.
            </p>

            {/* BOTÓN PULSANTE */}
            <a
              href={PURCHASE_LINK}
              className="inline-block px-10 py-5 bg-[#FFD200] text-black text-lg sm:text-xl font-bold rounded-2xl relative z-10 animate-pulse-glow hover:scale-105 transition-transform"
            >
              QUIERO ENTRAR A APEGO DETOX
            </a>

            {/* Trust text */}
            <p className="text-sm text-gray-500 mt-6 relative z-10">
              Acceso inmediato • Contenido guiado • Enfoque práctico
            </p>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Preguntas <span className="text-[#FFD200]">frecuentes</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Lo que más nos preguntan antes de entrar.
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#151515] border border-white/5 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © Historias de la Mente — Apego Detox
          </p>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Contenido educativo. No reemplaza un proceso terapéutico profesional.
          </p>
        </div>
      </footer>

      {/* ========== BARRA STICKY INFERIOR ========== */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 transition-all duration-300 ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <p className="text-white font-medium hidden sm:block">¿Lista para salir del ciclo?</p>
          <p className="text-white font-medium sm:hidden">¿Lista?</p>
          <a
            href={PURCHASE_LINK}
            className="px-6 py-3 bg-[#FFD200] text-black font-bold rounded-xl hover:bg-[#FFD200]/90 transition-all flex-shrink-0"
          >
            Comprar ahora
          </a>
        </div>
      </div>

      {/* ========== CSS PARA ANIMACIÓN PULSE-GLOW ========== */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 210, 0, 0.3), 0 0 40px rgba(255, 210, 0, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 210, 0, 0.5), 0 0 60px rgba(255, 210, 0, 0.3);
            transform: scale(1.04);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ClaseApegoDetox;
