import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import heroImg from "@/assets/apego-detox-3am-hero.jpg";
import javierImg from "@/assets/javier-vieira-nuevo.png";
import logoImg from "@/assets/logo-historias-mente.png";

/* ── palette ── */
const C = {
  black: "#000000",
  dark: "#0A0A0A",
  gold: "#BA8E23",
  goldLight: "#D4AF6A",
  cream: "#FAF6ED",
  gray: "#2C2C2C",
  green: "#25D366",
};

/* ── fade-in on scroll ── */
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

/* ── CTA Button ── */
const CTA = ({ dark = false }: { dark?: boolean }) => (
  <div className="text-center my-10">
    <a
      href="#registro"
      className="inline-block px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-lg"
      style={{
        background: C.gold,
        color: C.dark,
        borderRadius: 6,
        fontFamily: "'DM Sans', sans-serif",
        boxShadow: "0 8px 30px rgba(186,142,35,0.35)",
      }}
      onMouseEnter={(e) => { (e.target as HTMLElement).style.background = C.goldLight; }}
      onMouseLeave={(e) => { (e.target as HTMLElement).style.background = C.gold; }}
    >
      QUIERO MI LIBERTAD EMOCIONAL
    </a>
  </div>
);

/* ── Floating CTA ── */
const FloatingCTA = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-3" style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.3)" }}>
      <a
        href="#registro"
        className="block w-[90%] max-w-[500px] text-center font-bold uppercase tracking-wider py-4 transition-all duration-300"
        style={{ background: C.gold, color: C.dark, borderRadius: 6, fontFamily: "'DM Sans', sans-serif" }}
      >
        QUIERO MI LIBERTAD EMOCIONAL →
      </a>
    </div>
  );
};

/* ──────────────────────── PAGE ──────────────────────── */
const ClaseApegoDetoxMarzo = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFloat, setShowFloat] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setShowFloat(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) {
      toast({ title: "Campos requeridos", description: "Por favor completa todos los campos.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook-test/25febrerolanza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombre.trim(), email: email.trim() }),
      });
      if (res.ok) {
        navigate("/gracias-clase-marzo");
      } else {
        throw new Error("Error");
      }
    } catch {
      toast({ title: "Error", description: "Hubo un problema. Intenta de nuevo.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schedules = [
    { flag: "🇨🇴", country: "Colombia", time: "1:00 PM" },
    { flag: "🇲🇽", country: "México", time: "12:00 PM" },
    { flag: "🇦🇷", country: "Argentina", time: "3:00 PM" },
    { flag: "🇨🇱", country: "Chile", time: "3:00 PM" },
    { flag: "🇵🇪", country: "Perú", time: "1:00 PM" },
    { flag: "🇪🇨", country: "Ecuador", time: "1:00 PM" },
    { flag: "🇻🇪", country: "Venezuela", time: "2:00 PM" },
    { flag: "🇧🇴", country: "Bolivia", time: "2:00 PM" },
    { flag: "🇺🇸", country: "USA (EST)", time: "1:00 PM" },
    { flag: "🇪🇸", country: "España", time: "7:00 PM" },
    { flag: "🇫🇷", country: "Francia", time: "7:00 PM" },
  ];

  const identCards = [
    "Te duermes revisando si está en línea",
    "Le dijiste a tu amiga que ya lo superaste pero guardas fotos en carpeta oculta",
    "Sientes el pecho apretado y estómago cerrado todo el día",
    "Escribes el mensaje, lo borras, lo reescribes",
    "Él te dice 'estás loca' y tú pides perdón",
    "Sabes que te hace daño pero no puedes dejarlo",
  ];

  const discovers = [
    { n: "01", title: "Por qué no puedes dejarlo", desc: "Tu cerebro está adicto a él. Literal. Como una droga." },
    { n: "02", title: "El patrón de tu infancia", desc: "La herida que eligió por ti antes de que tú pudieras elegir." },
    { n: "03", title: "Qué es el trauma bonding", desc: "La ciencia detrás del vínculo que no te deja ir." },
    { n: "04", title: "Técnica de emergencia 3AM", desc: "Qué hacer cuando todo se derrumba a las 3 de la mañana." },
    { n: "05", title: "El primer paso real", desc: "No más teoría. La acción concreta que cambia todo." },
  ];

  const testimonials = [
    { name: "María, 38 años", text: "Creí que estaba loca. Esta clase me hizo entender que mi cerebro estaba secuestrado. Fue como encender la luz después de años en la oscuridad." },
    { name: "Ana, 45 años", text: "Lloré toda la clase. Pero por primera vez no lloré de dolor, lloré de alivio. Alguien por fin lo explicó." },
    { name: "Lucía, 52 años", text: "Tres matrimonios. El mismo patrón. En 55 minutos entendí lo que 10 años de terapia no me explicaron." },
  ];

  return (
    <>
      <Helmet>
        <title>APEGO DETOX — Clase Gratuita | Rompe el Lazo Invisible</title>
        <meta name="description" content="Clase gratuita en vivo: Apego Detox. Descubre por qué no puedes dejarlo y cómo romper el ciclo. Sábado 1 de Marzo 2026, 1:00 PM Colombia." />
      </Helmet>

      <style>{`
        .ad-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .ad-visible { opacity: 1; transform: translateY(0); }
        .serif { font-family: 'Playfair Display', serif; }
        .sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div className="sans" style={{ background: C.black, color: "#fff" }}>

        {/* ═══════ S1 — HERO ═══════ */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5" style={{ background: C.black }}>
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <img src={logoImg} alt="Historias de la Mente" className="h-10 md:h-12 mx-auto mb-4 opacity-80" />
            <div
              className="inline-block text-[10px] md:text-[11px] font-semibold tracking-[3px] uppercase px-5 py-2 mb-4"
              style={{ border: `1px solid ${C.gold}`, color: C.gold }}
            >
              CLASE GRATUITA EN VIVO · 1 MARZO 2026 · 1PM COL
            </div>
            <h1 className="serif text-3xl md:text-5xl lg:text-[56px] font-black leading-[1.12]">
              ¿Cuántas noches más vas a despertarte a las 3AM buscando su nombre en WhatsApp?
            </h1>
            <p className="text-base md:text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              No es amor. Es una adicción neuronal. Y tiene cura.
            </p>
            <CTA />
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Javier Vieira — Psicólogo Especialista · Historias de la Mente
            </p>
          </div>
        </section>

        {/* ═══════ S2 — ¿Te reconoces? ═══════ */}
        <section style={{ background: C.cream, color: C.gray }} className="py-20 md:py-28 px-5">
          <div className="max-w-4xl mx-auto">
            <Fade>
              <h2 className="serif text-2xl md:text-4xl font-bold text-center mb-14" style={{ color: C.gray }}>
                ¿Te reconoces?
              </h2>
            </Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {identCards.map((txt, i) => (
                <Fade key={i}>
                  <div
                    className="rounded-lg p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "#fff", border: "1px solid rgba(186,142,35,0.2)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                  >
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.gray }}>{txt}</p>
                  </div>
                </Fade>
              ))}
            </div>
            <Fade>
              <p className="serif italic text-center text-base md:text-lg mt-14 max-w-xl mx-auto" style={{ color: C.gold }}>
                Si dijiste sí a más de una… esta clase fue creada para ti.
              </p>
            </Fade>
            <CTA />
          </div>
        </section>

        {/* ═══════ S3 — Revelación ═══════ */}
        <section style={{ background: C.black }} className="py-20 md:py-28 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Fade>
              <h2 className="serif text-2xl md:text-4xl font-bold mb-10" style={{ color: C.gold }}>
                No estás enamorada.<br />Estás secuestrada emocionalmente.
              </h2>
            </Fade>
            <Fade>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Tu cerebro muestra los mismos patrones de activación que el de un adicto a la cocaína.
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                — Dra. Helen Fisher, 2004
              </p>
            </Fade>
            <Fade>
              <div
                className="mt-12 p-6 md:p-8 rounded-lg text-left"
                style={{ borderLeft: `4px solid ${C.gold}`, background: "rgba(186,142,35,0.06)" }}
              >
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <strong style={{ color: C.gold }}>Dato clínico:</strong> Cortisol 122% más elevado en mujeres con TEPT por abuso narcisista.
                </p>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>Elzinga et al., 2003</p>
              </div>
            </Fade>
            <CTA />
          </div>
        </section>

        {/* ═══════ S4 — Qué descubrirás ═══════ */}
        <section style={{ background: C.cream, color: C.gray }} className="py-20 md:py-28 px-5">
          <div className="max-w-3xl mx-auto">
            <Fade>
              <h2 className="serif text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: C.gray }}>
                Qué descubrirás en esta clase
              </h2>
              <p className="text-center text-sm md:text-base mb-14" style={{ color: "rgba(44,44,44,0.6)" }}>
                En 55 minutos vas a entender lo que años de terapia no explicaron
              </p>
            </Fade>
            <div className="space-y-6">
              {discovers.map((d) => (
                <Fade key={d.n}>
                  <div className="flex gap-5 items-start">
                    <span className="serif text-3xl md:text-4xl font-black leading-none" style={{ color: C.gold, minWidth: 48 }}>{d.n}</span>
                    <div>
                      <h3 className="serif font-bold text-base md:text-lg mb-1" style={{ color: C.gray }}>{d.title}</h3>
                      <p className="text-sm" style={{ color: "rgba(44,44,44,0.65)" }}>{d.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
            <CTA />
          </div>
        </section>

        {/* ═══════ S5 — Javier Vieira ═══════ */}
        <section style={{ background: C.black }} className="py-20 md:py-28 px-5">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <Fade>
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto" style={{ border: `3px solid ${C.gold}` }}>
                  <img src={javierImg} alt="Javier Vieira" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade>
              <div>
                <h2 className="serif text-2xl md:text-3xl font-bold mb-4" style={{ color: C.gold }}>Javier Vieira</h2>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Psicólogo Especialista en abuso narcisista y trauma de apego. Creador de Historias de la Mente.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Más de 15 años ayudando a mujeres a liberarse de relaciones tóxicas y recuperar su identidad.
                </p>
                <p className="text-sm mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>@historias.de.la.mente</p>
              </div>
            </Fade>
          </div>
        </section>

        {/* ═══════ S6 — Horarios ═══════ */}
        <section style={{ background: C.cream, color: C.gray }} className="py-20 md:py-28 px-5">
          <div className="max-w-4xl mx-auto">
            <Fade>
              <h2 className="serif text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: C.gray }}>
                Horarios según tu país
              </h2>
              <p className="text-center text-sm mb-12" style={{ color: "rgba(44,44,44,0.5)" }}>
                Clase: Sábado 1 de Marzo 2026 · 1:00 PM Colombia (UTC-5)
              </p>
            </Fade>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {schedules.map((s) => (
                <Fade key={s.country}>
                  <div
                    className="rounded-lg p-4 text-center"
                    style={{ background: "#fff", border: "1px solid rgba(186,142,35,0.15)" }}
                  >
                    <div className="text-2xl mb-1">{s.flag}</div>
                    <p className="text-xs" style={{ color: "rgba(44,44,44,0.5)" }}>{s.country}</p>
                    <p className="font-bold text-base" style={{ color: C.gold }}>{s.time}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ S7 — Testimonios ═══════ */}
        <section style={{ background: C.black }} className="py-20 md:py-28 px-5">
          <div className="max-w-3xl mx-auto">
            <Fade>
              <h2 className="serif text-2xl md:text-4xl font-bold text-center mb-14" style={{ color: C.gold }}>
                Lo que dicen quienes ya asistieron
              </h2>
            </Fade>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <Fade key={i}>
                  <div
                    className="p-6 rounded-lg"
                    style={{ borderLeft: `4px solid ${C.gold}`, background: "#1f1f1f" }}
                  >
                    <p className="serif italic text-sm md:text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
                      "{t.text}"
                    </p>
                    <p className="text-xs font-semibold" style={{ color: C.gold }}>— {t.name}</p>
                  </div>
                </Fade>
              ))}
            </div>
            <CTA />
          </div>
        </section>

        {/* ═══════ S8 — FORMULARIO ═══════ */}
        <section id="registro" style={{ background: C.dark }} className="py-20 md:py-28 px-5">
          <div className="max-w-lg mx-auto">
            <Fade>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl opacity-30 blur-xl" style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})` }} />
                <div className="relative rounded-2xl p-8 md:p-10" style={{ background: C.black, border: `2px solid rgba(186,142,35,0.3)` }}>
                  <h2 className="serif text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.gold }}>
                    Reserva tu lugar gratis
                  </h2>
                  <p className="text-center text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Sábado 1 de Marzo · 1:00 PM Colombia · Google Meet
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Nombre</label>
                      <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{
                          background: "#1A1A1A",
                          border: "1px solid rgba(186,142,35,0.2)",
                          color: "#fff",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = C.gold)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(186,142,35,0.2)")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{
                          background: "#1A1A1A",
                          border: "1px solid rgba(186,142,35,0.2)",
                          color: "#fff",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = C.gold)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(186,142,35,0.2)")}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-lg disabled:opacity-60"
                      style={{ background: C.gold, color: C.dark, boxShadow: "0 8px 30px rgba(186,142,35,0.35)" }}
                    >
                      {isSubmitting ? "Enviando..." : "SÍ, QUIERO MI LIBERTAD"}
                    </button>
                  </form>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ═══════ S9 — Cierre + Footer ═══════ */}
        <section style={{ background: C.cream, color: C.gray }} className="py-20 md:py-28 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <Fade>
              <p className="serif italic text-xl md:text-3xl leading-relaxed mb-8" style={{ color: C.gray }}>
                Cada día que pasa atrapada en este ciclo es un día menos de tu vida.
              </p>
              <p className="serif italic text-lg md:text-2xl" style={{ color: C.gold }}>
                Tu libertad emocional comienza con una decisión.
              </p>
            </Fade>
            <CTA />
          </div>
        </section>

        <footer className="py-10 px-5 text-center" style={{ background: C.black, borderTop: `1px solid rgba(186,142,35,0.15)` }}>
          <img src={logoImg} alt="Historias de la Mente" className="h-8 mx-auto mb-4 opacity-60" />
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2025 Historias de la Mente — Javier Vieira
          </p>
        </footer>

        <FloatingCTA show={showFloat} />
      </div>
    </>
  );
};

export default ClaseApegoDetoxMarzo;
