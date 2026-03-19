import { useState, useEffect, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Checkbox } from "@/components/ui/checkbox";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import heroBg from "@/assets/clase-hero-mujer.png";
import dolorImg from "@/assets/clase-dolor-img.jpg";
import transfImg from "@/assets/clase-transf-img.jpg";
import ctaBg from "@/assets/clase-cta-bg.jpg";

/* ── Fade-in on scroll ── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("clase-visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useFadeIn();
  return <div ref={ref} className={`clase-fade ${className}`}>{children}</div>;
};

/* ── CTA Button ── */
const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button
    onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
    className={`bg-[#FFD300] text-black font-extrabold uppercase tracking-wide px-10 py-4 rounded-md text-[15px] shadow-[0_4px_20px_rgba(255,211,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,211,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${className}`}
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
    {children}
  </button>
);

/* ── Countdown ── */
const TARGET_DATE = new Date("2026-04-02T01:00:00Z"); // 8PM UTC-5 = April 1st

function useCountdown() {
  const [diff, setDiff] = useState(() => TARGET_DATE.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(TARGET_DATE.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (diff <= 0) return null;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

/* ── Mobile Sticky CTA ── */
const MobileStickyCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const heroBottom = window.innerHeight;
      const form = document.getElementById("registro");
      const formTop = form?.getBoundingClientRect().top ?? Infinity;
      setShow(window.scrollY > heroBottom && formTop > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-black md:hidden">
      <button
        onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full bg-[#FFD300] text-black font-extrabold uppercase tracking-wide py-4 rounded-md text-[15px] cursor-pointer"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        RESERVAR MI LUGAR
      </button>
    </div>
  );
};

/* ══════════════════════════ PAGE ══════════════════════════ */
const ClaseMeet = () => {
  const { requiresGDPR, isLoading: isConsentLoading } = useCookieConsent();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "privacy_required">("idle");
  const countdown = useCountdown();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { setSubmitStatus("error"); return; }
    if (requiresGDPR && !acceptPrivacy) { setSubmitStatus("privacy_required"); return; }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-clase-meet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          acceptPrivacy: requiresGDPR ? acceptPrivacy : true,
          acceptMarketing: requiresGDPR ? acceptMarketing : true,
          privacyVersion: "2026-02-01",
          consentTimestamp: new Date().toISOString(),
          isGDPRRegion: requiresGDPR,
        }),
      });
      if (res.ok) {
        // Advanced Matching: send user data to Meta Pixel before redirect
        try {
          const { updateMetaPixelAdvancedMatching } = await import("@/utils/cookieConsent");
          updateMetaPixelAdvancedMatching({ em: email.trim().toLowerCase(), fn: nombre.trim().toLowerCase() });
        } catch {}
        window.location.href = "https://historiasdelamente.com/gracias-clase";
        return;
      } else setSubmitStatus("error");
    } catch { setSubmitStatus("error"); }
    finally { setIsSubmitting(false); }
  };

  const schedules = [
    { country: "Colombia, Peru, Ecuador", time: "8:00 PM" },
    { country: "Mexico (CDMX)", time: "7:00 PM" },
    { country: "Venezuela, Bolivia, Rep. Dom.", time: "9:00 PM" },
    { country: "Argentina, Uruguay, Chile", time: "10:00 PM" },
    { country: "Espana", time: "3:00 AM (2 de abril)" },
    { country: "USA (Este / Miami)", time: "8:00 PM" },
    { country: "USA (Oeste / LA)", time: "5:00 PM" },
  ];

  const identItems = [
    "Se que me hace daño pero mi mente lo justifica",
    "Un dia decido irme y al siguiente lo perdono",
    "Me convenzo de que esta vez si va a cambiar",
    "Me siento loca porque se que esta mal pero no puedo dejarlo",
    "Minimizo lo que me hizo para no sentir tanto dolor",
    "Todos me dicen que lo deje pero yo sigo ahi",
  ];

  return (
    <>
      <Helmet>
        <title>Disonancia Cognitiva — Clase en Vivo 1 de Abril | Historias de la Mente</title>
        <meta name="description" content="Descubre como la disonancia cognitiva te mantiene atrapada en relaciones toxicas y aprende a romper ese patron. Clase en vivo, miercoles 1 de abril. Javier Vieira." />
      </Helmet>

      <style>{`
        .clase-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .clase-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div style={{ fontFamily: "'Montserrat', sans-serif", lineHeight: 1.7 }}>

        {/* ═══ 1. HERO ═══ */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover object-[70%_center]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span 
              className="inline-block uppercase tracking-[4px] text-xs font-bold px-5 py-2 rounded-full border border-[#FFD300]/40 mb-6"
              style={{ 
                color: '#FFD300', 
                background: 'rgba(255,211,0,0.08)',
                textShadow: '0 0 20px rgba(255,211,0,0.5)'
              }}
            >
              CLASE GRATUITA EN VIVO — 1 DE ABRIL
            </span>
            <h1 
              className="font-extrabold text-[30px] md:text-[52px] leading-[1.1] max-w-2xl mt-4"
              style={{ 
                color: '#FFFFFF',
                textShadow: '0 4px 8px rgba(0,0,0,0.9), 0 8px 25px rgba(0,0,0,0.7), 0 2px 0 rgba(0,0,0,1)',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              "Sabías que te hacía daño. Pero tu mente lo justificaba."
            </h1>
            <p 
              className="text-[15px] md:text-lg max-w-lg mx-auto mt-6 leading-relaxed"
              style={{ 
                color: '#E8E8E8',
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 15px rgba(0,0,0,0.6)',
              }}
            >
              Se llama <strong style={{ color: '#FFD300' }}>disonancia cognitiva</strong>. Es la razón por la que sigues volviendo. En esta clase vas a aprender a desactivarla.
            </p>
            <div className="mt-8">
              <CTAButton className="shadow-[0_4px_30px_rgba(255,211,0,0.4),0_0_60px_rgba(255,211,0,0.15)] hover:shadow-[0_8px_40px_rgba(255,211,0,0.5),0_0_80px_rgba(255,211,0,0.2)]">
                QUIERO MI LUGAR EN LA CLASE
              </CTAButton>
            </div>
            <span 
              className="text-sm mt-4 block font-medium"
              style={{ color: '#CCC', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
            >
              Miércoles 1 de abril — 8:00 PM Colombia
            </span>
          </div>
        </section>

        {/* ═══ 2. COUNTDOWN BAR ═══ */}
        <div className="sticky top-0 z-50 bg-black py-3 text-center">
          {countdown ? (
            <div className="flex justify-center items-center gap-1">
              <span className="text-white text-xs uppercase mr-2">La clase comienza en:</span>
              {[
                { val: countdown.d, label: "dias" },
                { val: countdown.h, label: "horas" },
                { val: countdown.m, label: "min" },
                { val: countdown.s, label: "seg" },
              ].map((u, i) => (
                <span key={i} className="flex items-center">
                  {i > 0 && <span className="text-white mx-1.5 md:mx-3">:</span>}
                  <span className="text-[#FFD300] font-bold text-xl">{String(u.val).padStart(2, "0")}</span>
                  <span className="text-white text-xs uppercase ml-1">{u.label}</span>
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[#FFD300] font-bold text-sm">La clase ya comenzo</span>
          )}
        </div>

        {/* ═══ 3. DOLOR ═══ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Fade>
              <div className="md:hidden w-full mb-6">
                <img src={dolorImg} alt="Mujer reflexiva" className="w-full rounded-xl shadow-lg max-w-sm mx-auto" loading="lazy" />
              </div>
              <div>
                <h2 className="font-bold text-[26px] md:text-[36px] text-black leading-tight">
                  Tu mente te dice que no es tan malo. Pero tu cuerpo dice otra cosa.
                </h2>
                <p className="text-[#555] text-[15px] md:text-[17px] leading-relaxed mt-6">
                  Un dia lloras de rabia. Al siguiente lo justificas. Te dices "quizas exagere", "el tambien tiene cosas buenas". Esa guerra interna te esta agotando.
                </p>
                <div className="border-l-4 border-[#FFD300] pl-4 mt-8">
                  <p className="font-semibold text-[16px] md:text-lg text-black">
                    Eso se llama disonancia cognitiva. Y es la razon por la que no puedes irte aunque sabes que deberias.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade className="hidden md:block">
              <img src={dolorImg} alt="Mujer reflexiva" className="rounded-xl shadow-lg max-w-sm mx-auto" loading="lazy" />
            </Fade>
          </div>
        </section>

        {/* ═══ 4. IDENTIFICACION ═══ */}
        <section className="bg-[#F5F5F5] py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <Fade>
              <h2 className="text-center font-bold text-[26px] md:text-[36px] text-black">
                Esto es lo que vives y no le cuentas a nadie:
              </h2>
            </Fade>
            <ul className="max-w-lg mx-auto mt-10 space-y-5">
              {identItems.map((txt, i) => (
                <Fade key={i}>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFD300] flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[#333] text-[15px] md:text-base">{txt}</span>
                  </li>
                </Fade>
              ))}
            </ul>
            <Fade>
              <p className="text-center text-[#555] italic mt-10 text-[15px] md:text-base">
                Si leiste esto y sentiste un nudo en la garganta, esta clase es para ti.
              </p>
            </Fade>
            <div className="text-center mt-6">
              <CTAButton>RESERVAR MI LUGAR</CTAButton>
            </div>
          </div>
        </section>

        {/* ═══ 5. PROMESA ═══ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Fade>
              <img src={transfImg} alt="Mujer caminando con confianza" className="w-full max-w-3xl mx-auto rounded-xl" loading="lazy" />
            </Fade>
            <Fade>
              <h2 className="text-center font-bold text-[26px] md:text-[36px] max-w-lg mx-auto mt-10 text-black">
                La mujer que eras antes de el sigue dentro de ti.
              </h2>
              <p className="text-center text-[#555] text-[15px] md:text-[17px] max-w-md mx-auto mt-6 leading-relaxed">
                Despertar sin revisar el telefono. Mirarte al espejo y reconocerte. Tomar decisiones sin pedir permiso. Dormir toda la noche de corrido.
              </p>
              <p className="text-center text-[#555] text-[15px] md:text-[17px] max-w-md mx-auto mt-4">
                Esa mujer no desaparecio. Esta esperando que la rescates.
              </p>
              <div className="border-l-4 border-[#FFD300] pl-4 max-w-md mx-auto mt-8">
                <p className="font-semibold text-[16px] md:text-lg text-black">
                  En esta clase vas a entender que te tiene atrapada y cual es el primer paso para salir.
                </p>
              </div>
            </Fade>
          </div>
        </section>

        {/* ═══ 6. CONTENIDO DE LA CLASE ═══ */}
        <section className="bg-black py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Fade>
              <h2 className="text-white text-center font-bold text-[26px] md:text-[36px]">
                Lo que vas a descubrir el 1 de abril:
              </h2>
            </Fade>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
              {[
                { title: "Que es la disonancia cognitiva", text: "Por que tu mente te convence de quedarte aunque sabes que te hace daño. La trampa mental que no te deja ver la realidad." },
                { title: "Como el narcisista la usa contra ti", text: "Las tacticas que crean esa confusion interna: el ciclo de idealizacion y devaluacion que te mantiene atrapada." },
                { title: "Como romper el patron", text: "El primer paso concreto para dejar de justificarlo y empezar a confiar en lo que sientes." },
              ].map((card, i) => (
                <Fade key={i}>
                  <div className="bg-[#1A1A1A] border-t-4 border-[#FFD300] rounded-lg p-8">
                    <h3 className="text-[#FFD300] font-bold text-lg mb-3">{card.title}</h3>
                    <p className="text-[#CCC] text-sm leading-relaxed">{card.text}</p>
                  </div>
                </Fade>
              ))}
            </div>
            <div className="text-center mt-10">
              <CTAButton>QUIERO ESTAR EN LA CLASE</CTAButton>
            </div>
          </div>
        </section>

        {/* ═══ 7. HORARIOS ═══ */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-lg mx-auto">
            <Fade>
              <h3 className="text-center font-semibold text-[20px] md:text-xl mb-8 text-black">
                Miércoles 1 de abril — Clase en vivo
              </h3>
            </Fade>
            <Fade>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                {schedules.map((s, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-3 px-4 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <span className="text-[#333]">{s.country}</span>
                    <span className="font-bold text-[#333]">{s.time}</span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* ═══ 8. FORMULARIO ═══ */}
        <section id="registro" className="bg-[#F5F5F5] py-20 px-6">
          <div className="max-w-sm mx-auto">
            <Fade>
              <h2 className="text-center font-bold text-[26px] md:text-[36px] text-black">
                Reserva tu lugar ahora.
              </h2>
              <p className="text-center text-[#555] mt-3 mb-8 text-[15px]">
                Solo necesito tu nombre y correo para enviarte el acceso.
              </p>
            </Fade>

            {submitStatus === "success" ? (
              <Fade>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="font-bold text-2xl text-black">Listo! Tu lugar esta reservado.</h3>
                  <p className="text-[#555] mt-3">
                    Revisa tu correo — ahi recibiras el acceso. Nos vemos el 14 de marzo.
                  </p>
                </div>
              </Fade>
            ) : (
              <Fade>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    maxLength={100}
                    className="w-full p-4 border border-gray-200 rounded-lg mb-3 focus:border-[#FFD300] focus:ring-2 focus:ring-[#FFD300]/20 outline-none text-base text-black"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                  <input
                    type="email"
                    placeholder="Tu correo electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={255}
                    className="w-full p-4 border border-gray-200 rounded-lg mb-4 focus:border-[#FFD300] focus:ring-2 focus:ring-[#FFD300]/20 outline-none text-base text-black"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />

                  {/* GDPR */}
                  {requiresGDPR && !isConsentLoading && (
                    <div className="space-y-4 mb-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={acceptPrivacy}
                          onCheckedChange={(c) => {
                            setAcceptPrivacy(c === true);
                            if (c && submitStatus === "privacy_required") setSubmitStatus("idle");
                          }}
                          className={`mt-1 border-2 ${submitStatus === "privacy_required" ? "border-red-500" : "border-gray-300"} data-[state=checked]:bg-[#FFD300] data-[state=checked]:border-[#FFD300]`}
                        />
                        <label htmlFor="privacy" className="text-xs text-[#555] leading-relaxed cursor-pointer">
                          He leido y acepto la{" "}
                          <Link to="/privacy" target="_blank" className="text-[#333] underline">Politica de Privacidad</Link>{" "}
                          y los{" "}
                          <Link to="/terms" target="_blank" className="text-[#333] underline">Terminos y Condiciones</Link>{" "}
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="marketing"
                          checked={acceptMarketing}
                          onCheckedChange={(c) => setAcceptMarketing(c === true)}
                          className="mt-1 border-2 border-gray-300 data-[state=checked]:bg-[#FFD300] data-[state=checked]:border-[#FFD300]"
                        />
                        <label htmlFor="marketing" className="text-xs text-gray-400 leading-relaxed cursor-pointer">
                          Quiero recibir contenido exclusivo y consejos por email (opcional)
                        </label>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFD300] text-black font-extrabold uppercase tracking-wide py-4 rounded-lg text-base hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {isSubmitting ? "ENVIANDO..." : "RESERVAR MI LUGAR EN LA CLASE"}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm text-center mt-3">Hubo un error. Intenta de nuevo.</p>
                  )}
                  {submitStatus === "privacy_required" && (
                    <p className="text-red-500 text-sm text-center mt-3">Debes aceptar la Politica de Privacidad para continuar.</p>
                  )}

                  <p className="text-center text-xs text-gray-400 mt-3">
                    Tu informacion esta segura. No compartimos datos.
                  </p>
                </form>
              </Fade>
            )}
          </div>
        </section>

        {/* ═══ 9. CTA FINAL ═══ */}
        <section className="relative py-32 px-6 text-center">
          <div className="absolute inset-0 z-0">
            <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="relative z-10">
            <Fade>
              <h2 className="text-white font-bold text-[26px] md:text-[36px] max-w-lg mx-auto leading-tight">
                No tienes que seguir justificandolo. El 15 de marzo puede cambiar todo.
              </h2>
              <div className="mt-8">
                <CTAButton>INSCRIBIRME AHORA</CTAButton>
              </div>
              <span className="text-white text-sm mt-4 block">
                Domingo 15 de marzo — 11:00 AM hora Colombia
              </span>
            </Fade>
          </div>
        </section>

        {/* ═══ 10. FOOTER ═══ */}
        <footer className="bg-black py-8 text-center">
          <p className="text-gray-400 text-sm">Historias de la Mente — Javier Vieira</p>
          <p className="text-gray-500 text-xs mt-1">Psicologo Especialista — &copy; 2026</p>
        </footer>

        <MobileStickyCTA />
      </div>
    </>
  );
};

export default ClaseMeet;
