import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import phoneNightImg from "@/assets/apego-detox-phone-night.jpg";
import windowNightImg from "@/assets/apego-detox-window-night.jpg";
import goldenFieldImg from "@/assets/apego-detox-golden-field.jpg";
import lightHallwayImg from "@/assets/apego-detox-light-hallway.jpg";
import javierVieira from "@/assets/javier-vieira-nuevo.png";

const HOTMART_URL = "https://pay.hotmart.com/W102751360L?bid=1771690985611";
const WA_SALES = "https://wa.me/573001681053";
const YT_VIDEO_ID = "EqnGNWFw4jw";

function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPlayBtn, setShowPlayBtn] = useState(false);
  const playerRef = useRef<any>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if ((window as any).YT?.Player) {
      initPlayer();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    (window as any).onYouTubeIframeAPIReady = initPlayer;
    return () => { (window as any).onYouTubeIframeAPIReady = null; };
  }, []);

  function initPlayer() {
    if (playerRef.current) return;
    playerRef.current = new (window as any).YT.Player("ad-yt-player", {
      videoId: YT_VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 0,
        controls: 0,
        rel: 0,
        playsinline: 1,
        modestbranding: 1,
        showinfo: 0,
        fs: 0,
        disablekb: 1,
      },
      events: {
        onReady: (e: any) => {
          e.target.playVideo();
          // Check after a short delay if it actually started (autoplay might be blocked)
          setTimeout(() => {
            const state = e.target.getPlayerState();
            // -1 unstarted, 2 paused, 5 cued → autoplay blocked
            if (state !== 1) {
              setShowPlayBtn(true);
            } else {
              // autoplay working
            }
          }, 800);
        },
        onStateChange: (e: any) => {
          if (e.data === 1) {
            setShowPlayBtn(false);
          }
          // 0 = ended → pause on last frame
          if (e.data === 0) {
            e.target.pauseVideo();
          }
        },
      },
    });
  }

  const handleTapToPlay = useCallback(() => {
    const p = playerRef.current;
    if (p) {
      p.unMute();
      p.playVideo();
    }
    setShowPlayBtn(false);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: "9/16", maxHeight: "78vh" }}>
      {/* Glow */}
      <div className="absolute -inset-3 rounded-sm" style={{
        boxShadow: "0 0 60px rgba(245,196,0,0.25)",
        border: "2px solid rgba(245,196,0,0.4)",
      }} />
      {/* Player container */}
      <div id="ad-yt-player" className="w-full h-full rounded-sm relative z-10" />
      {/* Overlay to block YT UI */}
      <div className="absolute inset-0 z-20" style={{ pointerEvents: showPlayBtn ? "auto" : "none" }} onClick={showPlayBtn ? handleTapToPlay : undefined}>
        {showPlayBtn && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity">
            <div className="flex flex-col items-center gap-2 animate-pulse">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="#F5C400" strokeWidth="2" fill="rgba(0,0,0,0.5)" />
                <polygon points="26,20 48,32 26,44" fill="#F5C400" />
              </svg>
              <span className="font-dm text-xs text-[#FAFAFA]/70 uppercase tracking-widest">Toca para reproducir</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Fade-in on scroll hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("ad-visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useFadeIn();
  return <div ref={ref} className={`ad-fade ${className}`}>{children}</div>;
};

/* ───── SECTION 1 — HERO ───── */
const HeroSection = () => (
  <section className="bg-[#0A0A0A] min-h-screen flex flex-col items-center justify-center px-5 py-12 md:py-20 relative overflow-hidden">
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-6 md:gap-8">
      {/* Tag */}
      <p className="text-[#F5C400] text-[0.65rem] tracking-[4px] uppercase font-dm">
        PROGRAMA DE RECUPERACIÓN EMOCIONAL
      </p>

      {/* Title */}
      <h1
        className="text-center leading-[0.92] font-bebas text-[#FAFAFA]"
        style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
      >
        NO ESTÁS ROTA.<br />ESTÁS PROGRAMADA.
      </h1>

      {/* YouTube Video */}
      <HeroVideo />

      {/* Subtitle */}
      <p className="text-center font-dm font-light text-base max-w-lg mx-auto" style={{ color: "rgba(250,250,250,0.7)" }}>
        Llevas meses sin poder soltar a alguien que te hizo daño. Eso no es amor. Es química. Y se puede romper.
      </p>

      {/* CTA */}
      <a
        href={HOTMART_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:max-w-md block text-center bg-[#F5C400] text-[#0A0A0A] font-dm font-bold text-base uppercase tracking-wide py-5 px-8 rounded-[2px] hover:-translate-y-0.5 transition-all duration-300"
        style={{ boxShadow: "0 8px 32px rgba(245,196,0,0.2)" }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,196,0,0.4)")}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,196,0,0.2)")}
      >
        HOY DECIDO RECUPERARME →
      </a>

      {/* Stats strip */}
      <div className="w-full grid grid-cols-3 gap-4 pt-8 mt-4 border-t" style={{ borderColor: "rgba(245,196,0,0.2)" }}>
        {[
          ["3.000+", "MUJERES", "transformadas"],
          ["8", "MÓDULOS", "de transformación"],
          ["2x", "SEMANA", "terapia en vivo"],
        ].map(([num, label, sub]) => (
          <div key={label} className="text-center">
            <p className="font-bebas text-[#F5C400] text-2xl md:text-3xl">{num} {label}</p>
            <p className="font-dm text-xs font-light" style={{ color: "rgba(250,250,250,0.5)" }}>{sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── SECTION 2 — EL ESPEJO ───── */
const MirrorSection = () => {
  const listItems = [
    "Te prometiste 'no voy a pensar en él hoy' — y fallaste antes del mediodía",
    "Revisas su WhatsApp aunque lo tengas bloqueado",
    "Defiendes a alguien que te hizo daño cuando otros lo critican",
    "Sientes que sin él tu vida ya no tiene el mismo color",
    "Te preguntas si eres tú el problema — si eres demasiado, o demasiado poco",
    "Sabes que debes soltar — pero tu cuerpo no obedece a tu mente",
  ];

  return (
    <section className="bg-[#FAFAFA] px-5 py-16 md:py-24">
      <Fade className="max-w-3xl mx-auto">
        {/* Image */}
        <img src={phoneNightImg} alt="Mujer con teléfono de noche" className="w-full h-[280px] object-cover mb-10" />

        {/* Tag */}
        <span className="inline-block bg-[#F5C400] text-[#0A0A0A] font-dm text-[0.68rem] tracking-[4px] uppercase px-4 py-2 mb-6">
          ¿TE SUENA FAMILIAR?
        </span>

        {/* Title */}
        <h2 className="font-bebas text-[#0A0A0A] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.4rem, 8vw, 5rem)" }}>
          SON LAS 2AM.<br />Y SIGUES AHÍ.
        </h2>

        {/* Body */}
        <div className="font-dm font-light text-base leading-[1.8] space-y-6 mb-10" style={{ color: "rgba(10,10,10,0.75)" }}>
          <p>
            Abres su perfil otra vez. No sabes por qué lo haces — ya sabes lo que vas a encontrar. Pero no puedes parar.
            Tu mente entra en un loop que no tiene pausa: ¿por qué me hizo esto? ¿qué hice mal? ¿por qué con ella sí y conmigo no?
          </p>
          <p>
            Te levantas cansada de una guerra que libras sola, en silencio, con una persona que ya no está pero que ocupa cada rincón de tu cabeza.
          </p>
          <p>
            Eso no es debilidad. Eso es lo que le pasa al cerebro cuando fue condicionado a depender de alguien que nunca fue constante contigo.
            Tu sistema nervioso aprendió a sobrevivir en esa montaña rusa. Y ahora no sabe cómo parar.
          </p>
        </div>

        {/* List */}
        <ul className="space-y-0 mb-10">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 py-4 border-b border-[#0A0A0A]/10">
              <span className="w-2 h-2 rounded-full bg-[#F5C400] mt-2 flex-shrink-0" />
              <span className="font-dm text-[#0A0A0A] text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* Closing */}
        <p className="font-bebas text-[#0A0A0A] text-[1.6rem]">
          Esto tiene un nombre. Tiene una explicación. Y tiene solución.
        </p>
      </Fade>
    </section>
  );
};

/* ───── SECTION 3 — AUTORIDAD ───── */
const AuthoritySection = () => (
  <section className="bg-[#0A0A0A] px-5 py-16 md:py-24">
    <Fade className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Text */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="text-[#F5C400] text-[0.68rem] tracking-[4px] uppercase font-dm mb-6">
            QUIÉN SOY Y POR QUÉ PUEDO AYUDARTE
          </p>
          <h2 className="font-bebas text-[#FAFAFA] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)" }}>
            CADA DÍA ESTUDIO<br />A MUJERES COMO TÚ.
          </h2>
          <div className="font-dm font-light text-base leading-[1.8] space-y-5" style={{ color: "rgba(250,250,250,0.7)" }}>
            <p>Soy psicólogo. Pero no el tipo de psicólogo que te escucha en silencio y te dice "¿cómo te hace sentir eso?".</p>
            <p>Cada día estudio nuevas teorías. Me actualizo constantemente. Y en mis talleres he trabajado con miles de mujeres completamente devastadas — mujeres que llegaron creyendo que estaban locas, que eran demasiado sensibles, que el problema eran ellas.</p>
            <p>No estaban locas. Fueron doctrinadas. Condicionadas. Entrenadas para no quererse — por personas que se beneficiaban de esa inseguridad.</p>
            <p>Lo que tú estás viviendo no es un capricho emocional. Es el resultado de un vínculo traumático que tu sistema nervioso construyó para sobrevivir. Un TEPT complejo que nadie te diagnosticó porque nadie lo vio.</p>
            <p>Yo sí lo veo. Y tengo las herramientas para ayudarte a salir.</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative max-w-xs md:max-w-sm">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5C400]" />
            <img
              src={javierVieira}
              alt="Javier Vieira - Psicólogo"
              className="w-full h-auto object-cover"
              style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
            />
          </div>
        </div>
      </div>
    </Fade>
  </section>
);

/* ───── SECTION 4 — EL PROGRAMA ───── */
const ProgramSection = () => {
  const modules = [
    { title: "QUÉ ES EL APEGO EMOCIONAL", desc: "Entiende por primera vez qué le pasó a tu cerebro. Y por qué no es tu culpa." },
    { title: "CUANDO TU CUERPO APRENDIÓ A SOBREVIVIR SIN AMOR", desc: "La raíz de todo. Por qué tu cuerpo busca lo que te duele." },
    { title: "LA PSICOLOGÍA COGNITIVA DE TU TRAMPA", desc: "Sesgos, heurísticos y profecías que te mantienen atrapada sin que lo sepas." },
    { title: "HABLANDO CON MI NIÑA INTERIOR", desc: "El trabajo más profundo. El que realmente lo cambia todo." },
    { title: "POR QUÉ DEFIENDES A QUIEN TE DESTRUYE", desc: "Tu cerebro te está mintiendo. Es hora de pararlo." },
    { title: "POR QUÉ RAPUNZEL PODÍA ESCAPAR PERO NO LO HIZO", desc: "Y por qué tú tampoco puedes irte aunque quieras." },
    { title: "LOS 8 PASOS QUE SALVAN VIDAS", desc: "Qué hacer cuando él te escribe de nuevo. Protocolo de emergencia." },
    { title: "EL VÍNCULO QUE NO PUEDES ROMPER", desc: "Por qué sigues pensando en él aunque sabes que te destruyó." },
  ];

  return (
    <section className="bg-[#111111] px-5 py-16 md:py-24">
      <Fade className="max-w-3xl mx-auto">
        {/* Banner image */}
        <img src={windowNightImg} alt="Mujer contemplativa" className="w-full h-[200px] object-cover mb-10" />

        <p className="text-[#F5C400] text-[0.68rem] tracking-[4px] uppercase font-dm mb-6">
          LO QUE VAS A VIVIR DENTRO
        </p>

        <h2 className="font-bebas text-[#FAFAFA] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.2rem, 7vw, 4rem)" }}>
          APEGO DETOX<br />NO ES UN CURSO.<br />ES UN MUNDO.
        </h2>

        <p className="font-dm font-light text-base leading-[1.8] mb-10" style={{ color: "rgba(250,250,250,0.7)" }}>
          Cuando entras a Apego Detox no entras a ver videos. Entras devastada — con una vida que siente que ya no tiene sentido sin él. Y saldrás respondiendo la pregunta que más duele: ¿quién soy yo antes de él?
        </p>

        {/* Module cards */}
        <div className="space-y-4 mb-12">
          {modules.map((mod, i) => (
            <div key={i} className="bg-[#1A1A1A] border-l-[3px] border-[#F5C400] p-5 md:p-6">
              <div className="flex items-start gap-4">
                <span className="font-bebas text-[#F5C400] text-2xl leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-dm font-semibold text-[0.95rem] text-white mb-1">{mod.title}</h3>
                  <p className="font-dm font-light text-[0.82rem]" style={{ color: "rgba(250,250,250,0.5)" }}>{mod.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community block */}
        <div className="bg-[#F5C400] text-[#0A0A0A] p-8 md:p-10">
          <h3 className="font-bebas text-[2.5rem] leading-[0.95] mb-6">
            PERO LO MÁS<br />PODEROSO ES<br />LA COMUNIDAD.
          </h3>
          <div className="space-y-4 font-dm text-base">
            <p>🔴 Terapia en vivo 2 veces por semana — Google Meet, 2 horas cada sesión</p>
            <p>💬 Grupo de WhatsApp — donde cada mujer cuenta su historia sin ser juzgada</p>
            <p>👁 Estamos pendientes de ti 24/7 — no estás sola en esto. Nunca más.</p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

/* ───── SECTION 5 — TRANSFORMACIÓN ───── */
const TransformSection = () => {
  const results = [
    "Paras el loop de pensamientos obsesivos — por fin",
    "Entiendes por qué pasó — y dejas de culparte",
    "Recuperas la versión de ti que existía antes de él",
    "Tomas decisiones desde la claridad, no desde el miedo",
    "Construyes una vida que tiene sentido sin necesitar su validación",
  ];

  return (
    <section className="bg-[#FAFAFA] px-5 py-16 md:py-24">
      <Fade className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Text */}
          <div className="w-full md:w-1/2">
            <span className="inline-block bg-[#0A0A0A] text-[#F5C400] font-dm text-[0.68rem] tracking-[4px] uppercase px-4 py-2 mb-6">
              LO QUE PASA CUANDO ENTRAS
            </span>

            <h2 className="font-bebas text-[#0A0A0A] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.2rem, 7vw, 4rem)" }}>
              ENTRAS DESTRUIDA.<br />SALES SIENDO<br />TÚ OTRA VEZ.
            </h2>

            <p className="font-dm font-light text-base leading-[1.8] mb-8" style={{ color: "rgba(10,10,10,0.75)" }}>
              Las mujeres que entran a Apego Detox llegan creyendo que la vida sin él ya no tiene sentido. Que algo en ellas está roto para siempre. No están rotas. Están programadas. Y la programación se puede reescribir.
            </p>

            <ul className="space-y-0">
              {results.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-4 border-b border-[#0A0A0A]/10">
                  <span className="w-2 h-2 rounded-full bg-[#F5C400] mt-2 flex-shrink-0" />
                  <span className="font-dm text-[#0A0A0A] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src={goldenFieldImg} alt="Transformación" className="w-full h-[320px] md:h-auto object-cover" />
          </div>
        </div>
      </Fade>
    </section>
  );
};

/* ───── SECTION 6 — PRECIO ───── */
const PriceSection = () => {
  const includes = [
    "8 módulos completos (32 capítulos)",
    "Terapia en vivo 2x por semana — Google Meet",
    "Grupo de WhatsApp con comunidad de mujeres",
    "Acompañamiento 24/7",
    "Acceso inmediato tras el pago",
  ];

  return (
    <section className="bg-[#FAFAFA] px-5 py-16 md:py-24">
      <Fade className="max-w-xl mx-auto">
        <div className="border-2 border-[#0A0A0A] p-8 md:p-10">
          <span className="inline-block bg-[#F5C400] text-[#0A0A0A] font-dm text-[0.68rem] tracking-[4px] uppercase px-4 py-2 mb-6">
            INVERSIÓN
          </span>

          <h2 className="font-bebas text-[#0A0A0A] leading-[0.95] mb-4" style={{ fontSize: "clamp(2.2rem, 8vw, 4rem)" }}>
            TODO ESTO<br />POR $25 USD
          </h2>

          {/* Price */}
          <p className="font-bebas text-[#0A0A0A] text-[6rem] leading-none mb-1">$25</p>
          <p className="font-dm font-light text-[0.85rem] text-gray-500 mb-8">pago único · acceso inmediato</p>

          {/* Includes */}
          <ul className="space-y-3 mb-10">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#F5C400] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                <span className="font-dm text-[#0A0A0A] text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#0A0A0A] text-[#FAFAFA] font-dm font-bold text-base uppercase tracking-wide py-5 px-8 rounded-[2px] hover:-translate-y-0.5 transition-all duration-300 mb-3"
          >
            QUIERO VOLVER A SER YO →
          </a>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#F5C400] text-[#0A0A0A] font-dm font-bold text-base uppercase tracking-wide py-5 px-8 rounded-[2px] hover:-translate-y-0.5 transition-all duration-300"
          >
            SÍ, ESTOY LISTA PARA SANAR →
          </a>

          <p className="text-center font-dm font-light text-[0.75rem] mt-4" style={{ color: "rgba(10,10,10,0.45)" }}>
            Pago 100% seguro · Acceso inmediato · 7 días de garantía
          </p>
        </div>
      </Fade>
    </section>
  );
};

/* ───── SECTION 7 — GARANTÍA ───── */
const GuaranteeSection = () => (
  <section className="bg-[#0A0A0A] px-5 py-16 md:py-24 text-center">
    <Fade className="max-w-2xl mx-auto">
      {/* Shield icon */}
      <svg className="mx-auto mb-8 w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>

      <h2 className="font-bebas text-[#FAFAFA] leading-[0.95] mb-8" style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)" }}>
        7 DÍAS PARA<br />COMPROBARLO<br />TÚ MISMA.
      </h2>

      <p className="font-dm font-light text-base leading-[1.8] max-w-lg mx-auto" style={{ color: "rgba(250,250,250,0.7)" }}>
        Entra. Explora el programa completo durante 7 días. Ve a las sesiones en vivo. Únete al grupo. Si sientes que no es para ti — te devolvemos cada centavo. Sin preguntas. Sin condiciones. No pedimos fe ciega. Pedimos que lo pruebes.
      </p>
    </Fade>
  </section>
);

/* ───── SECTION 8 — CIERRE ───── */
const ClosingSection = () => (
  <section className="relative bg-[#0A0A0A] px-5 py-20 md:py-32 text-center overflow-hidden min-h-[80vh] flex items-center">
    {/* Background image */}
    <img
      src={lightHallwayImg}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#0A0A0A]/70" />

    <Fade className="relative z-10 max-w-3xl mx-auto">
      <h2 className="font-bebas leading-[0.95] mb-8" style={{ fontSize: "clamp(2.2rem, 8vw, 5rem)" }}>
        <span className="text-[#FAFAFA]">O SIGUES ESPERANDO<br />QUE ALGO CAMBIE SOLO.</span>
        <br /><br />
        <span className="text-[#FAFAFA]">O DECIDES QUE<br /></span>
        <span className="text-[#F5C400]">YA FUE SUFICIENTE.</span>
      </h2>

      <p className="font-dm font-light text-base leading-[1.8] max-w-lg mx-auto mb-10" style={{ color: "rgba(250,250,250,0.7)" }}>
        Llevas demasiado tiempo en guerra con tu propia mente. Mereces parar. Mereces entender qué pasó. Mereces volverte a encontrar.
      </p>

      <a
        href={HOTMART_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:max-w-md bg-[#F5C400] text-[#0A0A0A] font-bebas text-[1.4rem] uppercase py-5 px-8 rounded-[2px] hover:-translate-y-0.5 transition-all duration-300"
      >
        HOY TERMINA EL LOOP. ENTRO AHORA →
      </a>

      <p className="font-dm font-light text-[0.75rem] mt-4" style={{ color: "rgba(250,250,250,0.35)" }}>
        Miles de mujeres ya tomaron esta decisión. Hoy es tu turno.
      </p>
    </Fade>
  </section>
);

/* ───── FOOTER ───── */
const FooterDetox = () => (
  <footer className="bg-[#0A0A0A] px-5 py-8 text-center" style={{ borderTop: "1px solid rgba(245,196,0,0.2)" }}>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-dm font-light text-[0.75rem]" style={{ color: "rgba(250,250,250,0.4)" }}>
      <span>Historias de la Mente © 2026</span>
      <Link to="/privacy" className="hover:text-[#F5C400] transition-colors">Política de privacidad</Link>
      <a href="mailto:info@historiasdelamente.com" className="hover:text-[#F5C400] transition-colors">Contacto</a>
    </div>
  </footer>
);

/* ───── MAIN PAGE ───── */
const ApegoDetoxV2 = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Apego Detox — Recupera tu vida</title>
        <meta name="description" content="Programa de recuperación emocional para mujeres que no pueden soltar a quien les hizo daño. 8 módulos + terapia en vivo + comunidad. $25 USD." />
      </Helmet>

      <style>{`
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .ad-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .ad-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <main className="scroll-smooth">
        <HeroSection />
        <MirrorSection />
        <AuthoritySection />
        <ProgramSection />
        <TransformSection />
        <PriceSection />
        <GuaranteeSection />
        <ClosingSection />
        <FooterDetox />
      </main>

      {/* WhatsApp floating button */}
      <a
        href={WA_SALES}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.937 1.395 5.618L.05 23.834l6.381-1.318A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.87 0-3.632-.5-5.14-1.37l-.37-.22-3.82.79.82-3.73-.24-.38A9.805 9.805 0 012.18 12c0-5.43 4.42-9.82 9.82-9.82 5.43 0 9.82 4.42 9.82 9.82 0 5.43-4.39 9.82-9.82 9.82z" />
        </svg>
      </a>
    </>
  );
};

export default ApegoDetoxV2;
