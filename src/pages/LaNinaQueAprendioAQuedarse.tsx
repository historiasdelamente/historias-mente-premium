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

/* ─── Fade-in on scroll hook ─── */
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
      href="#comprar"
      className="inline-block px-10 py-4 font-bold uppercase tracking-widest text-sm md:text-base transition-all duration-300 hover:shadow-lg"
      style={{ background: "#d4a843", color: "#111", borderRadius: 4, fontFamily: "'DM Sans', sans-serif" }}
      onMouseEnter={e => { (e.target as HTMLElement).style.background = "#e8c547"; }}
      onMouseLeave={e => { (e.target as HTMLElement).style.background = "#d4a843"; }}
    >
      QUIERO SANAR MI HISTORIA
    </a>
    <p className="mt-3 text-xs md:text-sm" style={{ color: "#999" }}>📖 Ebook digital — Descarga inmediata después del pago</p>
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
        href="#comprar"
        className="block w-[90%] max-w-[500px] text-center font-bold uppercase tracking-wider py-4 transition-all duration-300"
        style={{ background: "#d4a843", color: "#111", borderRadius: 4, fontFamily: "'DM Sans', sans-serif" }}
      >
        QUIERO MI LIBRO →
      </a>
    </div>
  );
};

/* ─── Page styles (injected once) ─── */
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
    .nc-body-text { font-size: 16px; line-height: 1.7; }
    @media (min-width: 768px) { .nc-body-text { font-size: 18px; line-height: 1.8; } }
  `}</style>
);

/* ─── SECTIONS ─── */

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
        Un viaje hacia tu niña interior para sanar<br className="hidden sm:block" /> las heridas que el narcisismo dejó en ti
      </p>
      <p className="nc-serif italic text-lg md:text-xl mb-8 nc-gold">
        "¿Y si el problema nunca fue él?"
      </p>
      <p className="nc-body text-xs md:text-sm mb-10 opacity-60">
        Por Javier Vieira — Psicólogo Clínico | Lic. 293219 COLPSIC
      </p>
      <CTAButton />
    </div>
  </section>
);

const IdentSection = () => {
  const items = [
    "Reaccionas con pánico cuando no te contestan un mensaje. Después te avergüenzas de tu propia reacción. Pero el pánico ya hizo su trabajo.",
    'Dices "no pasa nada" cuando sí pasa. Lo dices tanto que ya no sabes si es una frase o un modo de vida.',
    "Sientes un vacío que no se explica con lo que te pasó ayer. Es un vacío más antiguo. Como si hubiera estado ahí desde siempre.",
    "Te despiertas a las tres de la mañana con el corazón acelerado y la certeza de que algo terrible va a ocurrir. Pero no sabes qué.",
    "Sabes que hay un patrón en tus relaciones. Lo ves con claridad. Y sin embargo, cada vez que crees que esta vez será diferente, terminas en el mismo lugar.",
    'La palabra "no" te sabe a peligro. Te tiemblan las manos antes de pronunciarla. Y si la dices, la culpa te devora durante días.',
    "Te sientes responsable de las emociones de todo el mundo. Menos de las tuyas. Las tuyas no cuentan. Las tuyas \"no son para tanto\".",
    'Alguien te dijo alguna vez que eres "demasiado sensible". Y te lo creíste. Y desde entonces llevas años haciéndote más pequeña para caber en el espacio que otros te permiten ocupar.',
  ];
  return (
    <section className="nc-light nc-section">
      <div className="nc-container">
        <FadeIn>
          <h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 text-center" style={{ color: "#1a1a1a" }}>
            ¿Alguna vez te has sentido así?
            <span className="block w-24 h-1 mx-auto mt-4" style={{ background: "#d4a843" }} />
          </h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <img src={manosImg} alt="Manos sobre el corazón" className="hidden md:block w-1/3 rounded-lg object-cover" style={{ maxHeight: 500 }} loading="lazy" />
          <div className="flex-1 space-y-6 nc-body nc-body-text" style={{ color: "#222" }}>
            {items.map((item, i) => (
              <FadeIn key={i}>
                <p><span className="nc-gold font-bold mr-2">✦</span>{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn className="mt-16">
          <p className="nc-serif italic text-lg md:text-xl text-center leading-relaxed nc-gold max-w-2xl mx-auto">
            Si algo de esto te apretó el pecho, si sentiste un nudo en la garganta o los ojos se humedecieron… esa no eres tú exagerando.<br />
            <strong>Es tu niña interior, reconociéndose.</strong>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const CienciaSection = () => (
  <section className="nc-dark nc-section">
    <div className="nc-container nc-body nc-body-text">
      <FadeIn>
        <h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 nc-gold">
          Lo que la ciencia sabe y nadie te había contado
        </h2>
      </FadeIn>
      <FadeIn><p className="mb-6">Cuando naciste, tu cerebro no estaba terminado. Los circuitos que regulan tus emociones, que determinan cómo reaccionas al estrés, cómo te vinculas con otras personas, cómo te sientes contigo misma — esos circuitos no vienen de fábrica. Se construyen durante los primeros años de vida. Y se construyen con un material muy específico: la relación con tu cuidador.</p></FadeIn>
      <FadeIn><p className="mb-6">Cada vez que un bebé llora y alguien acude, se instala un cable. Cada vez que tiene miedo y unos brazos lo sostienen, se conecta un circuito. Cada vez que sonríe y alguien le devuelve la sonrisa, se refuerza una conexión.</p></FadeIn>
      <FadeIn><p className="mb-6">Pero cuando nadie acude — o cuando la persona que debería cuidarte es la misma que te ignora — tu cerebro no aprende a regularse. Aprende a sobrevivir. Y esa es una diferencia que lo cambia todo.</p></FadeIn>
      <FadeIn><p className="mb-10">La investigación en neuroimagen lo ha demostrado: la negligencia emocional produce en el cerebro infantil un daño comparable al del abuso físico. No deja moretones. Pero deja marcas en la estructura misma del cerebro.</p></FadeIn>
      <FadeIn>
        <div className="p-6 md:p-8 rounded" style={{ borderLeft: "4px solid #d4a843", background: "#222" }}>
          <p className="mb-4">Tu niña interior no es una metáfora bonita. Es una configuración real de tu cerebro. Un patrón de respuesta emocional que se activa automáticamente, sin tu permiso, cada vez que algo del presente se parece a algo que tu sistema nervioso vivió en los primeros años de tu vida.</p>
          <p>Esa grabación está en tu cuerpo. En tus patrones de respiración. En la tensión muscular. En la forma en que tu corazón se acelera ante determinadas situaciones.</p>
        </div>
      </FadeIn>
      <FadeIn className="mt-12">
        <img src={ninaImg} alt="Niña sola en un pasillo" className="mx-auto rounded-lg max-h-[500px] object-cover" loading="lazy" />
      </FadeIn>
    </div>
  </section>
);

const ElegirSection = () => (
  <section className="nc-light nc-section">
    <div className="nc-container nc-body nc-body-text" style={{ color: "#222" }}>
      <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12" style={{ color: "#1a1a1a" }}>Por qué elegiste a quien elegiste</h2></FadeIn>
      <FadeIn><p className="mb-6">No elegiste a ese hombre porque fueras tonta. No te quedaste porque fueras débil. No volviste porque te faltara dignidad.</p></FadeIn>
      <FadeIn><p className="mb-6">La explicación tiene una base neurobiológica tan precisa como la que explica por qué late tu corazón: tu cerebro busca lo familiar. No lo bueno. No lo sano. Lo familiar.</p></FadeIn>
      <FadeIn><p className="mb-10">Si lo que te resulta familiar es el amor intermitente — a veces te miran, a veces no existes — entonces cuando alguien te ofrece exactamente ese patrón, tu sistema nervioso no activa la alarma de peligro. Activa la alarma de <em>casa</em>.</p></FadeIn>
      <FadeIn>
        <blockquote className="nc-serif italic text-xl md:text-2xl text-center leading-relaxed my-12 nc-gold max-w-2xl mx-auto">
          "Esto se siente como amor", piensas.<br />
          Y tienes razón. Se siente como el amor que conociste.<br />
          El problema es que el amor que conociste<br />
          <strong>no era amor.</strong>
        </blockquote>
      </FadeIn>
      <FadeIn><p className="mb-6">El narcisista no te elige al azar. Detecta, con una precisión casi escalofriante, dónde está tu hambre. Y la alimenta. Si de niña nadie te vio, él te mira como nadie te había mirado. Si de niña tus emociones eran una carga, él te dice que eres fascinante.</p></FadeIn>
      <FadeIn><p className="mb-6">Y tu niña interior — esa parte de ti que lleva décadas hambrienta — siente esa primera dosis de atención como agua en el desierto. No puede evaluar si es real. Solo puede sentir el alivio.</p></FadeIn>
      <FadeIn><p className="font-semibold nc-gold text-lg">No es debilidad. Es neurobiología.</p></FadeIn>
    </div>
  </section>
);

/* Divider image */
const DividerSection = () => (
  <div className="w-full h-40 md:h-64 overflow-hidden">
    <img src={dividerImg} alt="Luz dorada a través de cortinas" className="w-full h-full object-cover" loading="lazy" />
  </div>
);

const ContenidoSection = () => {
  const chapters = [
    { num: "01", title: "DESCUBRIR — La niña que no sabías que llevabas dentro", desc: "Vas a entender por qué reaccionas como reaccionas. Por qué el pánico. Por qué la culpa. Por qué el vacío. Tu cerebro hizo lo que tenía que hacer para que sobrevivieras. Ahora vas a entender cómo." },
    { num: "02", title: "ENTENDER — El mapa de la herida", desc: "Las tres fracturas que la infancia puede dejar: la fractura de la confianza, la de la autonomía y la de la vitalidad. Los roles que inventaste para sobrevivir: la niña complaciente, la niña invisible, la niña adulta precoz." },
    { num: "03", title: "CONECTAR — El encuentro que llevas toda la vida posponiendo", desc: "Técnicas de reparentalización con base neurocientífica. Visualización guiada. Escritura con la mano no dominante. El diario de conversación con tu niña interior. Herramientas de regulación: respiración 4-6, anclaje sensorial." },
    { num: "04", title: "SANAR — La revolución silenciosa de tratarte bien", desc: "Identificar y responder al crítico interno. Construir la voz de tu madre interna. Autocompasión basada en evidencia. Aprender a poner límites sin destruirte de culpa." },
    { num: "05", title: "RENACER — La vida que empieza cuando dejas de sobrevivir", desc: "Pasar de víctima a protagonista sin negar la herida. Rescatar el placer y la creatividad que el trauma congeló. El perdón que nadie puede obligarte a dar. Un proyecto de vida que cuide a tu niña interior." },
  ];
  return (
    <section className="nc-dark nc-section">
      <div className="nc-wide">
        <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 nc-gold text-center md:text-left">Lo que vas a encontrar en este libro</h2></FadeIn>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <FadeIn className="md:w-2/5 flex justify-center">
            <img src={ebookImg} alt="Mockup del ebook La niña que aprendió a quedarse callada" className="max-w-[280px] md:max-w-[340px] w-full rounded-lg" loading="lazy" />
          </FadeIn>
          <div className="md:w-3/5 space-y-8">
            {chapters.map((ch) => (
              <FadeIn key={ch.num}>
                <div>
                  <span className="nc-serif text-4xl md:text-5xl font-bold nc-gold mr-4 align-top">{ch.num}</span>
                  <h3 className="nc-serif text-lg md:text-xl font-bold nc-gold inline">{ch.title}</h3>
                  <p className="nc-body nc-body-text mt-2 opacity-90">{ch.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn className="mt-12">
          <div className="p-6 rounded text-center" style={{ border: "2px solid #d4a843" }}>
            <p className="nc-body font-semibold nc-gold text-base md:text-lg">INCLUYE: Programa práctico de 12 semanas con ejercicios paso a paso + Glosario de términos clínicos explicados de forma accesible</p>
          </div>
        </FadeIn>
        <div className="mt-10"><CTAButton /></div>
      </div>
    </section>
  );
};

const FrasesSection = () => {
  const quotes = [
    "La niña interior no es una cursilería. No es una metáfora bonita ni un recurso poético. Es una configuración real de tu cerebro.",
    "No es que estés loca. No es que exageres. Si alguna vez alguien te dijo que eres 'demasiado sensible', esa frase dice mucho más sobre quien la pronunció que sobre ti.",
    "El rol que asumiste no es un defecto. Es una proeza. Esa niña que decidió complacer, desaparecer o hacerse cargo no era débil. Era extraordinariamente inteligente.",
    "Esas creencias no son tuyas. Son heredadas. No naciste creyendo que no mereces. Fueron instaladas por un sistema familiar que las necesitaba para funcionar.",
    "Tu pasado no se supera. Se integra. El capítulo del dolor existe. Pero después de ese capítulo hay otros. Y esos otros los estás escribiendo tú.",
    "El permiso para ser mala en algo es la puerta de entrada al placer.",
  ];
  return (
    <section className="nc-light nc-section">
      <div className="nc-wide">
        <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-12 text-center" style={{ color: "#1a1a1a" }}>Algunas verdades que vas a leer en este libro</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <FadeIn key={i}>
              <div className="p-6 rounded shadow-sm" style={{ background: "#f9f9f9", borderLeft: "4px solid #d4a843" }}>
                <p className="nc-serif italic text-base md:text-lg leading-relaxed" style={{ color: "#222" }}>"{q}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ElenaSection = () => (
  <section className="nc-dark nc-section">
    <div className="nc-container nc-body nc-body-text">
      <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-10 nc-gold">La historia de Elena</h2></FadeIn>
      <FadeIn><img src={elenaImg} alt="Elena sola en la cocina" className="w-full rounded-lg mb-10 max-h-[400px] object-cover" loading="lazy" /></FadeIn>
      <FadeIn><p className="mb-6">Elena tiene cuarenta y siete años, una carrera de arquitecta que cualquiera envidiaría, un apartamento con vistas al parque, y una capacidad casi sobrehumana para que nadie note que por dentro está destrozada.</p></FadeIn>
      <FadeIn><p className="mb-6">Lleva tres semanas sin dormir más de cuatro horas. Desde que Marcos se fue — o más bien, desde que ella descubrió que llevaba seis meses con otra mujer — Elena funciona en piloto automático.</p></FadeIn>
      <FadeIn><p className="mb-6">Su amiga Lucía le dijo una tarde: "Elena, esto ya pasó con Alberto. Y antes de Alberto, con Daniel. ¿No crees que hay un patrón?"</p></FadeIn>
      <FadeIn><p className="mb-6">Elena lo sabía. Lo sabía con esa certeza incómoda que se siente en el estómago antes de que la cabeza la acepte.</p></FadeIn>
      <FadeIn><p className="mb-10">Así fue como Elena terminó en la consulta de un terapeuta. Y escuchó, por primera vez en cuarenta y siete años, una frase que le cambió la vida:</p></FadeIn>
      <FadeIn><p className="nc-serif italic text-xl md:text-2xl nc-gold text-center mb-10">"Elena, ¿y si el problema nunca fue él?"</p></FadeIn>
      <FadeIn>
        <blockquote className="nc-serif italic text-lg md:text-xl nc-gold text-center leading-relaxed max-w-2xl mx-auto">
          Elena descubrió que llevaba cuarenta años reaccionando como si tuviera siete.<br />
          Su terapeuta le respondió:<br />
          "No. Llevas cuarenta años sobreviviendo gracias a una niña de siete años que hizo lo que pudo.<br />
          Ahora le vamos a enseñar que ya no tiene que hacerlo sola."
        </blockquote>
      </FadeIn>
    </div>
  </section>
);

const ParaQuienSection = () => {
  const items = [
    "Has salido de una relación con un narcisista y sientes que algo dentro de ti sigue roto",
    "Repites patrones en tus relaciones y no entiendes por qué",
    "De niña aprendiste que tus emociones eran un problema, una carga, o simplemente no existían",
    "Te cuesta poner límites sin sentir una culpa que te devora",
    'Funcionas en piloto automático y dices "estoy bien" como quien respira',
    "Sientes un vacío que ningún hombre, ningún logro y ninguna ocupación ha podido llenar",
    "Quieres entender lo que te pasó con base científica, no con frases motivacionales",
    "Estás lista para dejar de sobrevivir y empezar a vivir",
  ];
  return (
    <section className="nc-light nc-section">
      <div className="nc-container nc-body nc-body-text" style={{ color: "#222" }}>
        <FadeIn><h2 className="nc-serif text-2xl md:text-4xl font-bold mb-10" style={{ color: "#1a1a1a" }}>Este libro es para ti si…</h2></FadeIn>
        <div className="space-y-4 mb-10">
          {items.map((item, i) => (
            <FadeIn key={i}>
              <p><span className="nc-gold font-bold text-xl mr-3">✓</span>{item}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-sm md:text-base" style={{ color: "#555" }}>
            Este libro no es un sustituto de la terapia. Es una herramienta de acompañamiento que puedes usar de forma autónoma o como complemento de tu proceso terapéutico. Incluye recomendaciones de seguridad y señales de alarma para que cuides de ti mientras avanzas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

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
          <FadeIn><h2 className="nc-serif text-2xl md:text-3xl font-bold mb-6 nc-gold">Sobre Javier Vieira</h2></FadeIn>
          <FadeIn><p className="mb-4">Psicólogo clínico licenciado (Lic. 293219 COLPSIC), especializado en recuperación de abuso narcisista y trauma de apego. Creador de Historias de la Mente, una comunidad donde miles de mujeres han encontrado las palabras que nadie les dio para nombrar lo que vivieron.</p></FadeIn>
          <FadeIn><p className="mb-6">Este libro nació de la convicción de que las mujeres que vivieron narcisismo necesitan algo más que información sobre el narcisista. Necesitan un camino de vuelta hacia sí mismas. Hacia la niña que fueron antes de que alguien decidiera que sus necesidades no importaban.</p></FadeIn>
          <FadeIn><img src={logoImg} alt="Historias de la Mente" className="h-10 opacity-60" loading="lazy" /></FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const CTAFinalSection = () => (
  <section className="nc-light nc-section">
    <div className="nc-container text-center">
      <FadeIn>
        <p className="nc-serif italic text-2xl md:text-3xl leading-relaxed mb-10" style={{ color: "#1a1a1a" }}>
          Tu niña interior lleva toda la vida esperando<br />a que alguien la escuche.<br /><br />
          <strong>Ese alguien eres tú.<br />Siempre fuiste tú.</strong>
        </p>
      </FadeIn>
      <FadeIn>
        <p className="nc-body mb-10" style={{ color: "#555" }}>
          141 páginas. 5 capítulos. Programa de 12 semanas.<br />
          Ejercicios prácticos. Base neurocientífica.<br />
          Un viaje de vuelta a ti misma.
        </p>
      </FadeIn>
      <FadeIn><CTAButton /></FadeIn>
    </div>
  </section>
);

const FooterNC = () => (
  <footer id="nc-footer" className="nc-dark py-12 px-6 text-center" style={{ borderTop: "1px solid rgba(212,168,67,0.2)" }}>
    <p className="text-sm mb-4" style={{ color: "#888" }}>
      © {new Date().getFullYear()} Historias de la Mente — Javier Vieira<br />
      Todos los derechos reservados.<br />
      Este producto es un ebook digital distribuido a través de Hotmart.
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
const LaNinaQueAprendioAQuedarse = () => {
  return (
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
        <IdentSection />
        <CienciaSection />
        <ElegirSection />
        <DividerSection />
        <ContenidoSection />
        <FrasesSection />
        <ElenaSection />
        <ParaQuienSection />
        <AutorSection />
        <CTAFinalSection />
        <FooterNC />
        <FloatingCTA />
      </div>
    </>
  );
};

export default LaNinaQueAprendioAQuedarse;
