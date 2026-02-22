import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

/* ═══════════════════════════════════════
   HERO VIDEO (YT IFrame API, vertical 9:16)
   ═══════════════════════════════════════ */
/* YT types handled globally */

const HeroVideo = () => {
  const [showPlayBtn, setShowPlayBtn] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player("ehi-yt-player", {
        videoId: "qCBLqA48wlE",
        playerVars: { autoplay: 1, mute: 0, loop: 0, controls: 0, rel: 0, playsinline: 1, modestbranding: 1, showinfo: 0 },
        events: {
          onReady: (e: any) => {
            setTimeout(() => {
              if (e.target.getPlayerState && e.target.getPlayerState() !== 1) setShowPlayBtn(true);
            }, 1500);
          },
          onStateChange: (e: any) => {
            if (e.data === 1) {
              setShowPlayBtn(false);
              const dur = e.target.getDuration();
              if (dur > 0) {
                const iv = setInterval(() => {
                  const t = e.target.getCurrentTime();
                  if (t >= dur - 0.5) { e.target.pauseVideo(); clearInterval(iv); }
                }, 250);
              }
            }
          },
        },
      });
    };

    const w = window as any;
    if (w.YT && w.YT.Player) { initPlayer(); return; }
    const prev = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => { prev?.(); initPlayer(); };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(s);
    }
  }, []);

  const handlePlay = () => { playerRef.current?.playVideo?.(); setShowPlayBtn(false); };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 360, margin: "0 auto", aspectRatio: "9/16", border: "1px solid rgba(200,168,92,0.35)", borderRadius: 14, overflow: "hidden", boxShadow: "0 0 60px rgba(200,168,92,0.12)" }}>
      <div id="ehi-yt-player" style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%" }} />
      {/* Overlay to block YT UI */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: showPlayBtn ? "auto" : "none" }} onClick={showPlayBtn ? handlePlay : undefined}>
        {showPlayBtn && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.45)", cursor: "pointer" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,168,92,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 0, height: 0, borderLeft: "22px solid #000", borderTop: "13px solid transparent", borderBottom: "13px solid transparent", marginLeft: 4 }} />
            </div>
            <span style={{ marginTop: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "var(--ivory-dim)" }}>Toca para reproducir</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════ */
const BUY_LINK = "https://pay.hotmart.com/B104580032H?bid=1771778098565";

/* ═══════════════════════════════════════
   IMAGE PLACEHOLDER
   ═══════════════════════════════════════ */
const ImagePlaceholder = ({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) => (
  <div
    className={className}
    style={{
      background: "var(--bg-card)",
      border: "1px dashed rgba(200,168,92,0.3)",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 20,
      color: "rgba(200,168,92,0.5)",
      fontStyle: "italic",
      fontSize: 13,
      fontFamily: "'DM Sans', sans-serif",
      ...style,
    }}
  >
    {text}
  </div>
);

/* ═══════════════════════════════════════
   REVEAL HOOK (IntersectionObserver)
   ═══════════════════════════════════════ */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Reveal = ({ children, className = "", style = {}, delay = 0 }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; delay?: number }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════
   FAQ ITEM
   ═══════════════════════════════════════ */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(200,168,92,0.15)", padding: "20px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="faq-q"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "var(--ivory)", fontSize: 18, textAlign: "left", padding: 0 }}
      >
        <span>{q}</span>
        <span style={{ color: "var(--gold)", fontSize: 28, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "none", flexShrink: 0, marginLeft: 16 }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: "hidden", transition: "max-height 0.5s ease", paddingTop: open ? 16 : 0 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--ivory-dim)", fontSize: 16, lineHeight: 1.9 }}>{a}</p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════ */
const ElHiloInvisible = () => {
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowMobileBar(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>El Hilo Invisible — Javier Vieira | Historias de la Mente</title>
        <meta name="description" content="Entiende tu apego. Sana tus vínculos. Libérate para amar. El nuevo libro digital de Javier Vieira." />
      </Helmet>

      {/* ── INLINE STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --bg-deep: #06060F;
          --bg-card: #0E0E1C;
          --gold: #C8A85C;
          --gold-light: #E1BE69;
          --gold-glow: rgba(200,168,92,0.10);
          --ivory: #F3EFE7;
          --ivory-dim: rgba(243,239,231,0.75);
          --muted-ehi: #777788;
          --black: #000000;
        }

        html { scroll-behavior: smooth }

        .ehi-page ::selection { background: var(--gold); color: var(--black) }

        /* scrollbar */
        .ehi-page ::-webkit-scrollbar { width: 6px }
        .ehi-page ::-webkit-scrollbar-track { background: var(--bg-deep) }
        .ehi-page ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px }

        /* grain */
        .ehi-page::before {
          content: '';
          position: fixed; inset: 0; z-index: 9999;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px;
        }

        /* reveal */
        .reveal { opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(.22,1,.36,1) }
        .reveal.visible { opacity: 1; transform: translateY(0) }

        /* animations */
        @keyframes gentlePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(200,168,92,0.4) }
          50% { box-shadow: 0 0 0 12px rgba(200,168,92,0) }
        }

        .faq-q:hover { color: var(--gold) !important; transition: color 0.2s }

        /* benefit card hover */
        .ehi-benefit:hover {
          border-color: rgba(200,168,92,0.35) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(200,168,92,0.08);
        }

        .ehi-testimonial:hover { border-color: rgba(200,168,92,0.30) !important }
      `}</style>

      <div className="ehi-page" style={{ background: "var(--bg-deep)", color: "var(--ivory)", fontFamily: "'DM Sans', sans-serif", position: "relative" }}>

        {/* ════════════════════════════════════
            SECTION 1 — HERO
            ════════════════════════════════════ */}
        <section style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column" }}>
          {/* BG placeholder + overlay */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <ImagePlaceholder
              text="Mujer colombiana de Medellín, 25-30 años, cabello oscuro ondulado, piel dorada, sentada en cama al amanecer con sábanas blancas, mirando su celular con expresión preocupada. Luz natural cálida desde ventana."
              style={{ width: "100%", height: "100%", borderRadius: 0, border: "none" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,6,15,0.55) 0%, rgba(6,6,15,0.40) 40%, rgba(6,6,15,0.85) 85%, rgba(6,6,15,1) 100%)" }} />
          </div>

          {/* Top bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 32px", zIndex: 10 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontSize: 20 }}>Historias de la Mente</span>
            <a
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: "1px solid var(--gold)", color: "var(--gold)", borderRadius: 9999, padding: "8px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, textDecoration: "none", transition: "all 0.3s" }}
            >
              Comprar ahora
            </a>
          </div>

          {/* Center content */}
          <div style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: 128, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
            {/* Badge */}
            <span style={{ border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px" }}>
              NUEVO · LIBRO DIGITAL · JAVIER VIEIRA
            </span>

            {/* Headline */}
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(48px, 8vw, 96px)", color: "var(--ivory)", lineHeight: 1, marginTop: 24, maxWidth: 800 }}>
              El hilo invisible<br />que te jala de vuelta.
            </h1>

            {/* Gold line */}
            <div style={{ width: 80, height: 1, background: "var(--gold)", margin: "32px auto" }} />

            {/* Subheadline */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--ivory-dim)", fontSize: "clamp(18px, 2.5vw, 24px)", maxWidth: 480 }}>
              Entiende tu apego.<br />Sana tus vínculos.<br />Libérate para amar.
            </p>

            {/* Video embed */}
            {/* Video vertical 9:16 */}
            <div style={{ marginTop: 40 }}>
              <HeroVideo />
            </div>

            {/* CTA */}
            <a
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 40, display: "inline-block", background: "var(--gold)", color: "var(--black)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18, padding: "20px 56px", borderRadius: 9999, textDecoration: "none", animation: "gentlePulse 2.5s infinite", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.transform = ""; }}
            >
              QUIERO MI LIBRO — $27 →
            </a>

            {/* Microcopy */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-ehi)", fontSize: 14, marginTop: 12 }}>
              📥 Acceso inmediato · 🔒 Pago seguro · ↩ Garantía 7 días
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 2 — PAIN MIRROR
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-card)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 64, alignItems: "center" }} className="md-grid-2">
            {/* Image */}
            <ImagePlaceholder
              text="Mujer colombiana de pie junto a ventana al atardecer, mano apoyada en el vidrio, expresión melancólica y distante, contraluz naranja."
              style={{ height: 280, borderRadius: 16, border: "1px solid rgba(200,168,92,0.2)" }}
              className="ehi-pain-img"
            />
            {/* Text */}
            <Reveal>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "var(--gold)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>¿TE SUENA FAMILIAR?</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.15, marginBottom: 32 }}>
                Sabes que no te hace bien.<br />Y aun así no puedes soltar.
              </h2>
              {[
                "Revisas su perfil aunque prometiste no hacerlo.",
                "Cancelas tus planes por si acaso él llama.",
                "Pides perdón aunque la culpa no fue tuya.",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <span style={{ color: "var(--gold)", fontSize: 12, marginTop: 6, flexShrink: 0 }}>◆</span>
                  <span style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 18 }}>{t}</span>
                </div>
              ))}
              <div style={{ width: 60, height: 1, background: "var(--gold)", opacity: 0.4, margin: "32px 0" }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontSize: 24 }}>
                Este libro fue escrito exactamente para ti.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 3 — REFRAME
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-deep)", padding: "128px 24px", position: "relative" }}>
          {/* Decorative quote */}
          <span className="hidden md:block" style={{ position: "absolute", top: 32, left: 32, fontFamily: "'Cormorant Garamond', serif", fontSize: 144, color: "var(--gold)", opacity: 0.08, pointerEvents: "none", lineHeight: 1 }}>"</span>
          <Reveal style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.1, marginBottom: 40 }}>
              No estás loca.<br />No eres débil.<br />Tienes un patrón.
            </h2>
            <p style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.9, maxWidth: 580, margin: "0 auto" }}>
              Cada relación que viviste dejó una huella real en tu cerebro. Una ruta neuronal que se activa sola. Un hilo que jala sin que lo notes, que te devuelve siempre al mismo dolor.
            </p>
            <div style={{ width: 80, height: 1, background: "var(--gold)", margin: "40px auto 24px" }} />
            <p style={{ fontWeight: 500, color: "var(--gold)", fontSize: 20 }}>
              La ciencia del apego lo explica todo.<br />Y este libro te lo muestra.
            </p>
          </Reveal>
        </section>

        {/* ════════════════════════════════════
            SECTION 4 — THE BOOK
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-card)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 64, alignItems: "center" }} className="md-grid-2">
            {/* Book visuals */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <ImagePlaceholder text="Portada del libro El Hilo Invisible" style={{ width: 260, minHeight: 360, borderRadius: 8, filter: "drop-shadow(0 30px 80px rgba(200,168,92,0.25))", transform: "rotate(-3deg)", transition: "all 0.4s", zIndex: 2 }} />
              <ImagePlaceholder text="Flat lay editorial: libro abierto, taza de café, flores secas, luz lateral cálida." style={{ width: 220, minHeight: 200, borderRadius: 12, border: "1px solid rgba(200,168,92,0.2)", position: "absolute", bottom: -20, right: "10%", zIndex: 1 }} />
            </div>
            {/* Content */}
            <Reveal>
              <p style={{ fontWeight: 500, color: "var(--gold)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>EL LIBRO</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(40px, 6vw, 60px)", lineHeight: 1, marginTop: 12, marginBottom: 8 }}>El Hilo Invisible</h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontSize: 20, marginBottom: 32 }}>Entiende tu apego · Sana tus vínculos · Libérate para amar</p>
              <div style={{ width: 60, height: 1, background: "var(--gold)", marginBottom: 32 }} />
              {[
                ["COMPRENDER", "Por qué amas así (y no es tu culpa)"],
                ["RECONOCER", "Los cuatro mapas del corazón"],
                ["DESPERTAR", "El amor que confundiste con necesidad"],
                ["SENTIR", "El cuerpo que recuerda lo que la mente olvida"],
                ["SANAR", "El arte de mirarte desde dentro"],
                ["SOLTAR", "Libre para amar sin perderte"],
              ].map(([ch, title], i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontWeight: 600, color: "var(--gold)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", minWidth: 110, flexShrink: 0, marginTop: 3 }}>{ch}</span>
                  <span style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 16 }}>{title}</span>
                </div>
              ))}
              <p style={{ color: "var(--muted-ehi)", fontSize: 14, marginTop: 24 }}>+ Programa de 12 semanas · Glosario · Recursos</p>
              <a
                href={BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: 32, border: "1px solid var(--gold)", color: "var(--gold)", borderRadius: 9999, padding: "12px 32px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >
                Quiero este libro →
              </a>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 5 — TRANSFORMATION
            ════════════════════════════════════ */}
        <section style={{ position: "relative", minHeight: 500, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <ImagePlaceholder
              text="Misma mujer colombiana, afuera en hora dorada, ojos cerrados, rostro alzado, sonrisa en paz. Cabello suelto, vestido blanco fluido. Sensación de liberación."
              style={{ width: "100%", height: "100%", borderRadius: 0, border: "none" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(6,6,15,0.60), rgba(6,6,15,0.75))" }} />
          </div>
          <Reveal style={{ position: "relative", zIndex: 10, padding: "128px 24px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#fff", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, marginBottom: 32 }}>
              Del dolor<br />al amor libre.
            </h2>
            <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "0 auto 32px" }} />
            <p style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 20, maxWidth: 480, margin: "0 auto", lineHeight: 2 }}>
              No más amar desde el miedo.<br />No más elegir lo que duele.<br />Solo tú — completa, libre, entera.
            </p>
          </Reveal>
        </section>

        {/* ════════════════════════════════════
            SECTION 6 — BENEFITS GRID
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-deep)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(36px, 5vw, 48px)" }}>Lo que vas a lograr</h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {[
                ["🧠", "Entenderás tu patrón", "Por qué siempre vuelves al mismo lugar."],
                ["💔", "Reconocerás el trauma bonding", "Por qué soltar duele más de lo que debería."],
                ["🌿", "Sanarás la raíz", "La herida de niña que sigue eligiendo por ti."],
                ["💪", "Escucharás tu cuerpo", "Las señales físicas que llevas años ignorando."],
                ["🔓", "Cerrarás ciclos", "Sin romperte. Sin perder quién eres."],
                ["❤️", "Elegirás diferente", "Desde la libertad, no desde el miedo."],
              ].map(([icon, title, body], i) => (
                <Reveal key={i} delay={i * 100}>
                  <div
                    className="ehi-benefit"
                    style={{ background: "var(--bg-card)", border: "1px solid rgba(200,168,92,0.12)", borderRadius: 20, padding: 36, transition: "all 0.35s" }}
                  >
                    <span style={{ fontSize: 36, display: "block", marginBottom: 20 }}>{icon}</span>
                    <h3 style={{ fontWeight: 600, color: "var(--ivory)", fontSize: 18, marginBottom: 8 }}>{title}</h3>
                    <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 16, lineHeight: 1.7 }}>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 7 — AUTHOR
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-card)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="md-grid-author">
            {/* Photo */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ImagePlaceholder
                text="Javier Vieira, psicólogo colombiano, late 30s, sonrisa cálida y directa, blazer casual, luz natural suave."
                style={{ width: 240, height: 240, borderRadius: "50%", border: "2px solid var(--gold)", boxShadow: "0 0 0 8px rgba(200,168,92,0.08), 0 0 60px rgba(200,168,92,0.15)" }}
              />
            </div>
            {/* Bio */}
            <Reveal>
              <p style={{ fontWeight: 500, color: "var(--gold)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>QUIÉN ESCRIBE ESTO</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(36px, 5vw, 48px)", marginBottom: 4 }}>Javier Vieira</h2>
              <p style={{ fontWeight: 300, color: "var(--gold)", fontSize: 14, marginBottom: 24 }}>Psicólogo Clínico · Lic. 293219 COLPSIC</p>
              <div style={{ width: 50, height: 1, background: "var(--gold)", marginBottom: 24 }} />
              <p style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 16, lineHeight: 1.9, marginBottom: 12 }}>
                Más de una década acompañando a mujeres que repiten patrones relacionales dolorosos. Especialista en abuso narcisista, trauma de apego y vinculación traumática.
              </p>
              <p style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 16, lineHeight: 1.9 }}>
                Creador del programa Apego Detox y fundador de Historias de la Mente — donde acompaño a miles de mujeres en su proceso de sanación.
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
                {["TikTok @historias.de.la.mente", "Instagram @historias.de.la.mente"].map((s, i) => (
                  <span key={i} style={{ border: "1px solid rgba(200,168,92,0.4)", color: "var(--gold)", borderRadius: 9999, padding: "8px 16px", fontSize: 14, fontWeight: 500 }}>{s}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 8 — TESTIMONIALS
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-deep)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(36px, 5vw, 48px)" }}>Ellas ya lo leyeron</h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {[
                ["Llevaba 3 años intentando entender por qué siempre volvía con él. En el capítulo 2 lo entendí todo. Lloré dos horas. Fueron las más liberadoras.", "Valentina R. · Bogotá"],
                ["No es autoayuda típica. Es psicología real que puedes sentir en el cuerpo. El programa de 12 semanas me cambió la vida.", "María José T. · Madrid"],
                ["Escribe como habla — directo, sin rodeos, pero con una ternura que te hace sentir acompañada. Ojalá lo hubiera leído antes.", "Catalina M. · Medellín"],
              ].map(([quote, author], i) => (
                <Reveal key={i} delay={i * 100}>
                  <div
                    className="ehi-testimonial"
                    style={{ background: "var(--bg-card)", border: "1px solid rgba(200,168,92,0.12)", borderRadius: 20, padding: 36, transition: "all 0.3s" }}
                  >
                    <p style={{ color: "var(--gold)", fontSize: 14, marginBottom: 20 }}>★★★★★</p>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", fontSize: 64, lineHeight: 0.5, opacity: 0.25, display: "block", marginBottom: 16 }}>"</span>
                    <p style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 16, fontStyle: "italic", lineHeight: 1.8, marginBottom: 24 }}>{quote}</p>
                    <p style={{ fontWeight: 600, color: "var(--gold)", fontSize: 14 }}>— {author}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 9 — PRICE + MAIN CTA
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-card)", padding: "96px 24px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(36px, 5vw, 60px)", maxWidth: 600, margin: "0 auto" }}>
              El hilo que te une a ti misma nunca se rompió.
            </h2>
            <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 18, marginTop: 16 }}>Solo necesitas aprender a verlo.</p>
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: 500, margin: "0 auto", background: "var(--bg-deep)", border: "1px solid rgba(200,168,92,0.35)", borderRadius: 24, padding: "52px 36px", boxShadow: "0 0 80px rgba(200,168,92,0.10)" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontSize: 28, textAlign: "center", marginBottom: 4 }}>El Hilo Invisible</h3>
              <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 14, textAlign: "center", marginBottom: 32 }}>Libro Digital · PDF · Acceso Inmediato</p>
              <div style={{ width: "100%", height: 1, background: "rgba(200,168,92,0.2)", marginBottom: 32 }} />

              {/* Pricing */}
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 16, textDecoration: "line-through", marginBottom: 4 }}>Precio regular: $37 USD</p>
                <p style={{ fontWeight: 800, color: "var(--gold)", fontSize: 72, lineHeight: 1 }}>$27</p>
                <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 14, marginTop: 4 }}>USD · Pago único · Tuyo para siempre</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 9999, padding: "6px 16px", marginTop: 12, fontWeight: 500, fontSize: 14, color: "#4ade80" }}>
                  🟢 Precio de lanzamiento — Por tiempo limitado
                </span>
              </div>

              <div style={{ width: "100%", height: 1, background: "rgba(200,168,92,0.2)", margin: "32px 0" }} />

              {/* Includes */}
              <div style={{ marginBottom: 40 }}>
                {[
                  "127 páginas de psicología aplicada",
                  "6 capítulos + casos clínicos reales",
                  "Programa de 12 semanas incluido",
                  "Glosario de apego y recursos",
                  "Descarga inmediata en PDF",
                  "Garantía total de 7 días",
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                    <span style={{ color: "var(--gold)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontWeight: 300, color: "var(--ivory-dim)", fontSize: 16 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Main CTA */}
              <a
                href={BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", width: "100%", textAlign: "center", background: "var(--gold)", color: "var(--black)", fontWeight: 700, fontSize: 20, padding: "24px 0", borderRadius: 16, textDecoration: "none", animation: "gentlePulse 2.5s infinite", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.transform = "scale(1.02)"; }}
                onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.transform = ""; }}
              >
                QUIERO TRANSFORMAR MI APEGO →
              </a>

              {/* Security */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, marginTop: 20, flexWrap: "wrap" }}>
                {["🔒 Pago 100% seguro", "💳 Tarjeta · PSE · PayPal", "↩ Garantía 7 días"].map((t, i) => (
                  <span key={i} style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 12 }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ════════════════════════════════════
            SECTION 10 — FAQ
            ════════════════════════════════════ */}
        <section style={{ background: "var(--bg-deep)", padding: "96px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--ivory)", fontSize: "clamp(36px, 5vw, 48px)" }}>Tus preguntas</h2>
            </Reveal>
            <FAQItem q="¿En qué formato recibo el libro?" a="En PDF de alta calidad. Lo recibes inmediatamente por correo tras tu pago. Compatible con celular, tablet y computadora." />
            <FAQItem q="¿Necesito saber de psicología para leerlo?" a="No. Está escrito para cualquier mujer que quiera entenderse. Ciencia real con lenguaje directo y cercano." />
            <FAQItem q="¿Y si no es lo que esperaba?" a="Tienes 7 días de garantía total. Escribes y te devolvemos el 100% de tu dinero. Sin preguntas, sin dramas." />
            <FAQItem q="¿Es lo mismo que el programa Apego Detox?" a="No. El libro es una obra independiente y completa en sí misma. Apego Detox es el programa de acompañamiento profundo. El libro es el primer paso perfecto." />
            <FAQItem q="¿Puedo leerlo si todavía estoy en la relación?" a="Especialmente entonces. Entender tu patrón de apego no requiere que hayas salido ya. De hecho puede darte la claridad que necesitas para decidir." />
          </div>
        </section>

        {/* ════════════════════════════════════
            FOOTER
            ════════════════════════════════════ */}
        <footer style={{ background: "#03030A", borderTop: "1px solid rgba(200,168,92,0.15)", padding: "64px 24px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontSize: 28, marginBottom: 8 }}>Historias de la Mente</h3>
          <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 14, fontStyle: "italic", marginBottom: 32 }}>Psicología que transforma</p>
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", borderRadius: 9999, padding: "16px 40px", fontWeight: 600, fontSize: 16, textDecoration: "none", transition: "all 0.3s", marginBottom: 40 }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            Quiero El Hilo Invisible — $27 →
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40 }}>
            {["TikTok", "Instagram"].map((s, i) => (
              <span key={i} style={{ border: "1px solid rgba(200,168,92,0.2)", color: "var(--muted-ehi)", borderRadius: 9999, padding: "8px 16px", fontSize: 14, transition: "all 0.3s", cursor: "pointer" }}>{s}</span>
            ))}
          </div>
          <p style={{ fontWeight: 300, color: "var(--muted-ehi)", fontSize: 12 }}>© 2025 Javier Vieira · Todos los derechos reservados</p>
        </footer>

        {/* ════════════════════════════════════
            STICKY — MOBILE BAR
            ════════════════════════════════════ */}
        {showMobileBar && (
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden"
            style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "linear-gradient(to right, #C8A85C, #E1BE69)", color: "var(--black)", fontWeight: 700, fontSize: 16, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", boxShadow: "0 -4px 30px rgba(200,168,92,0.3)" }}
          >
            <span>El Hilo Invisible</span>
            <span>COMPRAR $27 →</span>
          </a>
        )}

        {/* ════════════════════════════════════
            STICKY — DESKTOP PILL
            ════════════════════════════════════ */}
        <a
          href={BUY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", zIndex: 50, background: "var(--gold)", color: "var(--black)", fontWeight: 700, fontSize: 14, borderRadius: 9999, padding: "20px 16px", writingMode: "vertical-rl", textOrientation: "mixed", textDecoration: "none", animation: "gentlePulse 3s infinite", boxShadow: "0 8px 32px rgba(200,168,92,0.35)", transition: "all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; e.currentTarget.style.filter = "brightness(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(-50%)"; e.currentTarget.style.filter = ""; }}
        >
          COMPRAR $27 →
        </a>

      </div>

      {/* ── RESPONSIVE GRID STYLES ── */}
      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: 1fr 1fr !important }
          .md-grid-author { grid-template-columns: 2fr 3fr !important }
          .ehi-pain-img { height: 420px !important; margin-top: -40px }
        }
      `}</style>
    </>
  );
};

export default ElHiloInvisible;
