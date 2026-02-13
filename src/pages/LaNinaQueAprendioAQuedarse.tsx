import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import heroImg from "@/assets/nina-callada-hero.jpg";
import ebookImg from "@/assets/nina-callada-ebook.png";
import manosImg from "@/assets/nina-callada-manos.jpg";
import elenaImg from "@/assets/nina-callada-elena.jpg";
import dividerImg from "@/assets/nina-callada-divider.jpg";
import ninaImg from "@/assets/nina-callada-nina.jpg";
import logoImg from "@/assets/logo-historias-mente.png";
import autorImg from "@/assets/javier-vieira-nuevo.png";

/* ─── Fade-in on scroll ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("nc-visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useFadeIn();
  return <div ref={ref} className={`nc-fade ${className}`}>{children}</div>;
};

/* ─── CTA Button ─── */
const CTAButton = ({ className = "" }: { className?: string }) => (
  <div className={`text-center ${className}`}>
    <a
      href="https://pay.hotmart.com/T104423623N"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-10 py-4 font-bold uppercase tracking-widest text-sm md:text-base transition-all duration-300 hover:shadow-lg"
      style={{ background: "#d4a843", color: "#111", borderRadius: 4, fontFamily: "'DM Sans', sans-serif" }}
      onMouseEnter={e => { (e.target as HTMLElement).style.background = "#e8c547"; }}
      onMouseLeave={e => { (e.target as HTMLElement).style.background = "#d4a843"; }}
    >
      QUIERO SANAR MI HISTORIA
    </a>
    <p className="mt-3 text-xs md:text-sm" style={{ color: "#999" }}>📖 Ebook digital — Descarga inmediata</p>
  </div>
);

/* ─── Floating Button ─── */
const FloatingCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("nc-hero");
      const footer = document.getElementById("nc-footer");
      if (!hero || !footer) return;
      const scrollY = window.scrollY;
      const pastHero = scrollY > hero.offsetHeight;
      const atFooter = scrollY + window.innerHeight >= footer.offsetTop;
      setShow(pastHero && !atFooter);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-3 md:p-4" style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.3)" }}>
      <a
        href="https://pay.hotmart.com/T104423623N"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[90%] max-w-[500px] text-center font-bold uppercase tracking-wider py-4 transition-all duration-300"
        style={{ background: "#d4a843", color: "#111", borderRadius: 4, fontFamily: "'DM Sans', sans-serif" }}
      >
        QUIERO MI LIBRO →
      </a>
    </div>
  );
};

/* ─── Page styles ─── */
const PageStyles = () => (
  <style>{`
    .nc-fade { opacity: 0; transform: translateY(30px); transition: opacity .7s ease-out, transform .7s ease-out; }
    .nc-visible { opacity: 1; transform: translateY(0); }
    .nc-serif { font-family: 'Playfair Display', 'Cormorant Garamond', serif; }
    .nc-body { font-family: 'DM Sans', 'Montserrat', sans-serif; }
    .nc-dark { background: #111; color: #fff; }
    .nc-light { background: #fff; color: #1a1a1a; }
    .nc-gold { color: #d4a843; }
    .nc-section { padding: 80px 24px; }
    @media (min-width: 768px) { .nc-section { padding: 120px 40px; } }
    .nc-container { max-width: 800px; margin: 0 auto; }
    .nc-wide { max-width: 1200px; margin: 0 auto; }
    .nc-body-text { font-size: 16px; line-height: 1.8; }
    @media (min-width: 768px) { .nc-body-text { font-size: 18px; line-height: 1.9; } }
  `}</style>
);

/* ═══════════════════════════════════════
   SECCIÓN 1 — HERO
   ═══════════════════════════════════════ */
const HeroSection = () => (
  <section id="nc-hero" className="nc-dark relative flex items-center justify-center min-h-screen overflow-hidden">
    <img src={heroImg} alt="Mujer solitaria en pasillo oscuro" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
    <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
      <img src={logoImg} alt="Historias de la Mente" className="mx-auto mb-8 h-12 md:h-16 w-auto" />
      <h1 className="nc-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        La niña que aprendió<br />a quedarse callada
      </h1>
      <p className="nc-body text-base md:text-lg mb-6 opacity-90 max-w-xl mx-auto">
        El libro que te devuelve a la niña<br className="hidden sm:block" /> que dejaste sola para sobrevivir.
      </p>
      <p className="nc-serif italic text-lg md:text-xl mb-8 nc-gold">
        "¿Y si el problema nunca fue él?"
      </p>
      <p className="nc-body text-xs md:text-sm mb-10 opacity-60">
        Javier Vieira — Psicólogo Especialista
      </p>
      <CTAButton />
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECCIÓN 2 — EL GOLPE DE REALIDAD
   ═══════════════════════════════════════ */
const GolpeSection = () => (
  <section className="nc-light nc-section">
    <div className="nc-container text-center nc-body nc-body-text" style={{ color: "#1a1a1a" }}>
      <FadeIn>
        <h2 className="nc-serif text-2xl md:text-4xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
          Esto no es un libro de autoayuda.
          <span className="block w-24 h-1 mx-auto mt-4" style={{ background: "#d4a843" }} />
        </h2>
      </FadeIn>
      <div className="space-y-8 mt-12 max-w-xl mx-auto">
        <FadeIn><p className="text-lg md:text-xl">Es el libro que explica por qué elegiste a ese hombre.</p></FadeIn>
        <FadeIn><p className="text-lg md:text-xl">Por qué te quedaste.</p></FadeIn>
        <FadeIn><p className="text-lg md:text-xl">Por qué volviste.</p></FadeIn>
        <FadeIn><p className="text-lg md:text-xl font-semibold">Y por qué nada de eso fue tu culpa.</p></FadeIn>
      </div>
      <FadeIn className="mt-16">
        <blockquote className="nc-serif italic text-xl md:text-2xl leading-relaxed nc-gold max-w-2xl mx-auto">
          Tu cerebro no busca lo bueno.<br />
          Busca lo familiar.<br />
          Y lo familiar era el dolor.
        </blockquote>
      </FadeIn>
      <div className="mt-12"><CTAButton /></div>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECCIÓN 3 — IDENTIFICACIÓN
   ═══════════════════════════════════════ */
const IdentSection = () => {
  const items = [
    'Dices "no pasa nada" cuando sí pasa.',
    'La palabra "no" te hace temblar las manos.',
    "Te despiertas a las 3am con el corazón acelerado. Sin saber por qué.",
    "Sientes un vacío más antiguo que tu última relación.",
    "Te sientes responsable de las emociones de todos. Menos las tuyas.",
    'Alguien te dijo "eres demasiado sensible". Y te lo creíste.',
  ];
  return (
    <section className="nc-dark nc-section">
      <div className="nc-container">
        <FadeIn>
          <h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 nc-gold text-center">¿Te reconoces?</h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <img src={manosImg} alt="Manos sobre el corazón" className="hidden md:block w-1/3 rounded-lg object-cover" style={{ maxHeight: 450 }} loading="lazy" />
          <div className="flex-1 space-y-8 nc-body nc-body-text">
            {items.map((item, i) => (
              <FadeIn key={i}>
                <p><span className="nc-gold font-bold mr-3 text-xl">✦</span>{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn className="mt-16">
          <p className="nc-serif italic text-lg md:text-xl text-center leading-relaxed nc-gold max-w-2xl mx-auto">
            Si algo te apretó el pecho al leer esto,<br />
            esa no eres tú exagerando.<br />
            <strong>Es tu niña interior, reconociéndose.</strong>
          </p>
        </FadeIn>
        <div className="mt-12"><CTAButton /></div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   SECCIÓN 4 — LA CIENCIA
   ═══════════════════════════════════════ */
const CienciaSection = () => (
  <section className="nc-light nc-section">
    <div className="nc-container nc-body nc-body-text" style={{ color: "#1a1a1a" }}>
      <FadeIn>
        <h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12" style={{ color: "#1a1a1a" }}>
          No es debilidad. Es neurobiología.
        </h2>
      </FadeIn>
      <div className="space-y-8 max-w-xl">
        <FadeIn><p>Tu cerebro se construyó para sobrevivir, no para ser feliz.</p></FadeIn>
        <FadeIn><p>Los circuitos emocionales se instalan en los primeros años de vida.</p></FadeIn>
        <FadeIn><p>Si nadie acudió cuando lloraste, tu cerebro aprendió a no esperar.</p></FadeIn>
        <FadeIn><p className="font-semibold">Esa programación sigue activa hoy.</p></FadeIn>
      </div>
      <FadeIn className="mt-12">
        <div className="p-6 md:p-8 rounded" style={{ borderLeft: "4px solid #d4a843", background: "#f5f5f5" }}>
          <p className="nc-serif italic text-base md:text-lg leading-relaxed" style={{ color: "#222" }}>
            La negligencia emocional produce en el cerebro infantil<br />
            un daño comparable al del abuso físico.<br />
            No deja moretones.<br />
            <strong>Pero deja marcas.</strong>
          </p>
        </div>
      </FadeIn>
      <FadeIn className="mt-12">
        <img src={ninaImg} alt="Niña sola en un pasillo" className="mx-auto rounded-lg max-h-[450px] object-cover" loading="lazy" />
      </FadeIn>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECCIÓN 5 — EL ESPEJO (Elena micro)
   ═══════════════════════════════════════ */
const ElenaSection = () => (
  <section className="nc-dark nc-section">
    <div className="nc-container nc-body nc-body-text">
      <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-10 nc-gold">Elena tiene 47 años.</h2></FadeIn>
      <FadeIn><img src={elenaImg} alt="Elena sola en la cocina" className="w-full rounded-lg mb-10 max-h-[400px] object-cover" loading="lazy" /></FadeIn>
      <div className="space-y-6">
        <FadeIn><p>Carrera brillante. Apartamento con vistas.<br />Y una capacidad sobrehumana para que nadie note<br />que por dentro está destrozada.</p></FadeIn>
        <FadeIn><p>Tres relaciones. El mismo patrón.<br />La misma pregunta que no se atrevía a hacer.</p></FadeIn>
        <FadeIn><p>Hasta que un terapeuta le dijo:</p></FadeIn>
      </div>
      <FadeIn className="mt-10">
        <blockquote className="nc-serif italic text-xl md:text-2xl nc-gold text-center leading-relaxed max-w-2xl mx-auto">
          "¿Y si el problema nunca fue él,<br />
          sino una niña de siete años<br />
          que sigue tomando tus decisiones?"
        </blockquote>
      </FadeIn>
      <div className="mt-12"><CTAButton /></div>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECCIÓN 6 — QUÉ INCLUYE EL LIBRO
   ═══════════════════════════════════════ */
const ContenidoSection = () => {
  const chapters = [
    { num: "01", title: "DESCUBRIR", desc: "Por qué reaccionas así. No estás loca. Es tu sistema nervioso de cinco años." },
    { num: "02", title: "ENTENDER", desc: "Las tres fracturas de la infancia. Los roles que inventaste. Las creencias que heredaste." },
    { num: "03", title: "CONECTAR", desc: "Técnicas reales para encontrar a tu niña interior. Visualización. Escritura. Regulación corporal." },
    { num: "04", title: "SANAR", desc: "Silenciar al crítico interno. Construir la madre que no tuviste. Aprender a decir \"no\"." },
    { num: "05", title: "RENACER", desc: "Dejar de sobrevivir. Empezar a vivir. Sin negar la herida." },
  ];
  return (
    <section className="nc-light nc-section">
      <div className="nc-wide nc-body nc-body-text" style={{ color: "#1a1a1a" }}>
        <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 text-center md:text-left" style={{ color: "#1a1a1a" }}>Lo que este libro hace por ti</h2></FadeIn>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <FadeIn className="md:w-2/5 flex justify-center">
            <img src={ebookImg} alt="Mockup del ebook" className="max-w-[280px] md:max-w-[340px] w-full rounded-lg" loading="lazy" />
          </FadeIn>
          <div className="md:w-3/5 space-y-8">
            {chapters.map((ch) => (
              <FadeIn key={ch.num}>
                <div>
                  <span className="nc-serif text-4xl md:text-5xl font-bold nc-gold mr-4 align-top">{ch.num}</span>
                  <h3 className="nc-serif text-lg md:text-xl font-bold nc-gold inline">{ch.title}</h3>
                  <p className="mt-2 opacity-80">{ch.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn className="mt-12">
          <div className="p-6 rounded text-center" style={{ border: "2px solid #d4a843" }}>
            <p className="nc-body font-semibold nc-gold text-sm md:text-base">
              + Programa práctico de 12 semanas &nbsp;·&nbsp; + Ejercicios paso a paso &nbsp;·&nbsp; + Glosario clínico accesible &nbsp;·&nbsp; 141 páginas
            </p>
          </div>
        </FadeIn>
        <div className="mt-10"><CTAButton /></div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   SECCIÓN 7 — FRASES QUE GOLPEAN
   ═══════════════════════════════════════ */
const FrasesSection = () => {
  const quotes = [
    "Esa niña que decidió complacer, desaparecer o hacerse cargo no era débil.\nEra extraordinariamente inteligente.",
    "No naciste creyendo que no mereces.\nEso fue instalado.",
    "Poner un límite no es agresión.\nEs decirle a tu niña: a ti no te toca nadie.",
    "El permiso para ser mala en algo\nes la puerta de entrada al placer.",
  ];
  return (
    <section className="nc-dark nc-section">
      <div className="nc-wide">
        <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 nc-gold text-center">Algunas verdades de este libro</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <FadeIn key={i}>
              <div className="p-6 rounded" style={{ background: "#1f1f1f", borderLeft: "4px solid #d4a843" }}>
                <p className="nc-serif italic text-base md:text-lg leading-relaxed whitespace-pre-line">"{q}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   SECCIÓN 8 — PARA QUIÉN ES
   ═══════════════════════════════════════ */
const ParaQuienSection = () => {
  const items = [
    "Saliste de una relación con un narcisista y algo sigue roto",
    "Repites patrones y no entiendes por qué",
    "De niña aprendiste que tus emociones eran un problema",
    "Funcionas en piloto automático",
    "El vacío no se llena con nada",
    "Quieres ciencia, no frases motivacionales",
    "Estás lista para dejar de sobrevivir",
  ];
  return (
    <section className="nc-light nc-section">
      <div className="nc-container nc-body nc-body-text" style={{ color: "#1a1a1a" }}>
        <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-10" style={{ color: "#1a1a1a" }}>Este libro es para ti si:</h2></FadeIn>
        <div className="space-y-5 mb-12">
          {items.map((item, i) => (
            <FadeIn key={i}>
              <p><span className="nc-gold font-bold text-xl mr-3">✓</span>{item}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn><CTAButton /></FadeIn>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   SECCIÓN 9 — SOBRE EL AUTOR
   ═══════════════════════════════════════ */
const AutorSection = () => (
  <section className="nc-dark nc-section">
    <div className="nc-wide">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <FadeIn className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto" style={{ border: "3px solid #d4a843" }}>
            <img src={autorImg} alt="Javier Vieira" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </FadeIn>
        <div className="nc-body nc-body-text">
          <FadeIn><h2 className="nc-serif text-2xl md:text-3xl font-bold mb-6 nc-gold">Javier Vieira</h2></FadeIn>
          <FadeIn>
            <p className="mb-4">
              Psicólogo Especialista en abuso narcisista y trauma de apego.<br />
              Creador de Historias de la Mente.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="mb-6 opacity-90">
              Este libro nació de una convicción:<br />
              necesitas más que información sobre el narcisista.<br />
              Necesitas un camino de vuelta a ti misma.
            </p>
          </FadeIn>
          <FadeIn><img src={logoImg} alt="Historias de la Mente" className="h-10 opacity-60" loading="lazy" /></FadeIn>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECCIÓN 10 — CIERRE EMOCIONAL + CTA
   ═══════════════════════════════════════ */
const CTAFinalSection = () => (
  <section className="nc-light nc-section">
    <div className="nc-container text-center">
      <FadeIn>
        <p className="nc-serif italic text-2xl md:text-3xl leading-relaxed mb-6" style={{ color: "#1a1a1a" }}>
          Tu niña interior lleva toda la vida<br />esperando a que alguien la escuche.
        </p>
        <p className="nc-serif italic text-2xl md:text-3xl leading-relaxed mb-10" style={{ color: "#1a1a1a" }}>
          <strong>Ese alguien eres tú.</strong>
        </p>
      </FadeIn>
      <FadeIn>
        <p className="nc-body mb-10" style={{ color: "#555" }}>
          141 páginas. 5 capítulos. 12 semanas de programa.<br />
          Ejercicios prácticos. Base neurocientífica.
        </p>
      </FadeIn>
      <FadeIn><CTAButton /></FadeIn>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECCIÓN 11 — FOOTER
   ═══════════════════════════════════════ */
const FooterNC = () => (
  <footer id="nc-footer" className="nc-dark py-12 px-6 text-center" style={{ borderTop: "1px solid rgba(212,168,67,0.2)" }}>
    <p className="text-sm mb-4" style={{ color: "#888" }}>
      © {new Date().getFullYear()} Historias de la Mente — Javier Vieira<br />
      Ebook digital distribuido a través de Hotmart.
    </p>
    <div className="flex justify-center gap-6 mb-4">
      <a href="#" className="nc-gold hover:opacity-80 transition-opacity" aria-label="TikTok">TikTok</a>
      <a href="#" className="nc-gold hover:opacity-80 transition-opacity" aria-label="Instagram">Instagram</a>
      <a href="#" className="nc-gold hover:opacity-80 transition-opacity" aria-label="YouTube">YouTube</a>
    </div>
    <div className="flex justify-center gap-4">
      <Link to="/privacy" className="text-xs hover:underline" style={{ color: "#666" }}>Privacidad</Link>
      <Link to="/terms" className="text-xs hover:underline" style={{ color: "#666" }}>Términos</Link>
    </div>
  </footer>
);

/* ─── MAIN PAGE ─── */
const LaNinaQueAprendioAQuedarse = () => (
  <>
    <Helmet>
      <title>La Niña Que Aprendió a Quedarse Callada | Javier Vieira</title>
      <meta name="description" content="Un viaje hacia tu niña interior para sanar las heridas del narcisismo. Ebook digital por el Psic. Javier Vieira de Historias de la Mente." />
      <meta property="og:title" content="La Niña Que Aprendió a Quedarse Callada | Javier Vieira" />
      <meta property="og:description" content="Un viaje hacia tu niña interior para sanar las heridas del narcisismo. Ebook digital por el Psic. Javier Vieira." />
      <meta property="og:type" content="product" />
      <link rel="canonical" href="https://historiasdelamente.com/la-nina-que-aprendio-a-quedarse-callada" />
    </Helmet>
    <PageStyles />
    <div className="nc-body">
      <HeroSection />
      <GolpeSection />
      <IdentSection />
      <CienciaSection />
      <ElenaSection />
      <ContenidoSection />
      <FrasesSection />
      <ParaQuienSection />
      <AutorSection />
      <CTAFinalSection />
      <FooterNC />
      <FloatingCTA />
    </div>
  </>
);

export default LaNinaQueAprendioAQuedarse;
