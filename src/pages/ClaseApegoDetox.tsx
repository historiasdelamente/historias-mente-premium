import { useState, useEffect, useRef, useCallback } from "react";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ============ CONFIGURACIÓN ============
const PURCHASE_LINK = "https://pay.hotmart.com/W102751360L?bid=1769546384779";
const REVEAL_TIME_SECONDS = 1200; // 20 minutos
// ========================================

// Tipos para la API de YouTube
interface YTPlayer {
  getCurrentTime: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

interface YTPlayerEvent {
  data: number;
  target: YTPlayer;
}

interface YTPlayerOptions {
  events?: {
    onReady?: () => void;
    onStateChange?: (event: YTPlayerEvent) => void;
  };
}

interface YTNamespace {
  Player: new (elementId: string, options?: YTPlayerOptions) => YTPlayer;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    ENDED: number;
    BUFFERING: number;
  };
}

declare global {
  interface Window {
    YT: YTNamespace;
    onYouTubeIframeAPIReady: () => void;
  }
}

// Frases motivacionales rotativas
const motivationalPhrases = [
  { before: "Esta es ", highlight: "TU señal", after: " para liberarte" },
  { before: "Mereces una vida ", highlight: "sin ansiedad", after: " constante" },
  { before: "El cambio empieza con ", highlight: "una decisión", after: "" },
  { before: "Miles de mujeres ya ", highlight: "rompieron el ciclo", after: "" },
  { before: "Hoy puede ser el día en que ", highlight: "todo cambia", after: "" },
];

const ClaseApegoDetox = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [isAPIReady, setIsAPIReady] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<number | null>(null);
  const hasRevealedRef = useRef(false);

  // Rotación de frases motivacionales
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % motivationalPhrases.length);
        setPhraseVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(phraseInterval);
  }, []);

  // Cargar la API de YouTube
  useEffect(() => {
    // Si ya existe la API, marcarla como lista
    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
      return;
    }

    // Cargar el script de la API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Callback cuando la API esté lista
    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Verificar el tiempo del video
  const checkVideoTime = useCallback(() => {
    if (hasRevealedRef.current) return;
    
    if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
      const currentTime = playerRef.current.getCurrentTime();
      if (currentTime >= REVEAL_TIME_SECONDS) {
        setShowCTA(true);
        hasRevealedRef.current = true;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }
  }, []);

  // Inicializar el reproductor cuando la API esté lista
  useEffect(() => {
    if (!isAPIReady) return;

    playerRef.current = new window.YT.Player("youtube-player", {
      events: {
        onStateChange: (event: YTPlayerEvent) => {
          // Cuando el video empieza a reproducirse (1 = PLAYING)
          if (event.data === 1) {
            // Iniciar intervalo para verificar tiempo
            if (!intervalRef.current && !hasRevealedRef.current) {
              intervalRef.current = window.setInterval(checkVideoTime, 1000);
            }
          }
        },
        onReady: () => {
          // Verificar si ya está en un tiempo >= 15 min
          checkVideoTime();
        },
      },
    });

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAPIReady, checkVideoTime]);

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
      
      {/* ========== HEADER MÍNIMO ========== */}
      <header className="py-4 px-4 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="text-lg font-semibold text-white">
            Historias de la Mente
          </a>
          <span className="text-sm text-[#FFD200] font-medium hidden sm:block">
            Apego Detox
          </span>
        </div>
      </header>

      {/* ========== VIDEO SECTION (PRIMERO) ========== */}
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video Container - Responsivo 16:9 */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#FFD200]/20 shadow-2xl shadow-black/50 bg-black">
            <iframe
              id="youtube-player"
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/wSCjqC72DBI?si=ghYRTH23ecadIQ6Z&enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Bloque CTA - aparece a los 20 minutos */}
          <div className={`mt-6 text-center transition-all duration-700 ${
            showCTA 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
          }`}>
            <a
              href={PURCHASE_LINK}
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout');
                }
                setTimeout(() => {
                  window.location.href = PURCHASE_LINK;
                }, 500);
              }}
              className="inline-block px-8 sm:px-12 py-5 sm:py-6 bg-[#FFD200] text-black text-lg sm:text-xl md:text-2xl font-bold rounded-2xl animate-soft-glow hover:scale-105 transition-transform"
            >
              COMIENZA AQUÍ: LIBÉRATE DEL APEGO
            </a>

            {/* Microcopy */}
            <p className="text-sm sm:text-base text-gray-400 mt-4">
              Acceso inmediato • Paso a paso • Enfoque práctico
            </p>
          </div>

          {/* Textos motivacionales rotativos */}
          <div className="text-center mt-6 min-h-[60px] flex items-center justify-center">
            <p 
              className={`text-lg md:text-xl text-gray-300 transition-opacity duration-500 ${
                phraseVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {motivationalPhrases[currentPhrase].before}
              <span className="text-[#FFD200] font-semibold">
                {motivationalPhrases[currentPhrase].highlight}
              </span>
              {motivationalPhrases[currentPhrase].after}
            </p>
          </div>

          {/* Texto de espera (solo visible antes de los 15 min) */}
          <p className={`text-center text-gray-400 mt-6 text-base md:text-lg transition-all duration-500 ${
            showCTA ? "opacity-0 h-0 mt-0 overflow-hidden" : "opacity-100"
          }`}>
            Mira la clase completa. <span className="text-[#FFD200]">A los 20 minutos se abre el acceso.</span>
          </p>
        </div>
      </section>

      {/* ========== BENEFICIOS ========== */}
      <section className="py-16 md:py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Qué vas a <span className="text-[#FFD200]">lograr</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Esto es lo que cambia cuando trabajas el apego emocional de verdad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-[#151515] border border-white/5 rounded-2xl hover:border-[#FFD200]/30 transition-all group"
              >
                <div className="w-10 h-10 bg-[#FFD200]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFD200]/20 transition-colors">
                  <Check className="w-5 h-5 text-[#FFD200]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARA QUIÉN ES ========== */}
      <section className="py-16 md:py-20 px-4">
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

      {/* ========== FAQ ========== */}
      <section className="py-16 md:py-20 px-4 bg-[#0d0d0d]">
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
      <footer className="py-10 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-3">
            © Historias de la Mente — Apego Detox
          </p>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Contenido educativo. No reemplaza acompañamiento profesional.
          </p>
        </div>
      </footer>

      {/* ========== BARRA STICKY INFERIOR (SOLO CUANDO CTA VISIBLE) ========== */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 transition-all duration-500 ${
          showCTA ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <p className="text-white font-medium text-sm sm:text-base truncate">
            ¿Lista para romper el ciclo?
          </p>
          <a
            href={PURCHASE_LINK}
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
              }
              setTimeout(() => {
                window.location.href = PURCHASE_LINK;
              }, 500);
            }}
            className="px-5 py-3 bg-[#FFD200] text-black font-bold rounded-xl hover:bg-[#FFD200]/90 transition-all flex-shrink-0 text-sm sm:text-base"
          >
            Comprar
          </a>
        </div>
      </div>

      {/* ========== CSS ANIMACIÓN SOFT-GLOW ========== */}
      <style>{`
        @keyframes soft-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 210, 0, 0.25), 
                        0 0 40px rgba(255, 210, 0, 0.15);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 210, 0, 0.4), 
                        0 0 60px rgba(255, 210, 0, 0.25);
            transform: scale(1.02);
          }
        }
        
        .animate-soft-glow {
          animation: soft-glow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ClaseApegoDetox;
