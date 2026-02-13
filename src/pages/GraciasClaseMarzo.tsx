import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Copy, Check } from "lucide-react";
import logoImg from "@/assets/logo-historias-mente.png";

const C = {
  black: "#000000",
  dark: "#0A0A0A",
  gold: "#BA8E23",
  goldLight: "#D4AF6A",
  cream: "#FAF6ED",
  gray: "#2C2C2C",
  green: "#25D366",
};

const MEET_LINK = "meet.google.com/ejo-phog-cgf";
const WHATSAPP_URL = "https://chat.whatsapp.com/LcDGQLlufNQK7EmL5ATFt7";

const GraciasClaseMarzo = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(MEET_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <Helmet>
        <title>¡Tu lugar está reservado! — APEGO DETOX</title>
        <meta name="description" content="Tu registro a la clase APEGO DETOX fue exitoso. Completa tu registro uniéndote al grupo de WhatsApp." />
      </Helmet>

      <style>{`
        .serif { font-family: 'Playfair Display', serif; }
        .sans { font-family: 'DM Sans', sans-serif; }
        @keyframes checkIn { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.2); } 100% { transform: scale(1); opacity: 1; } }
        .check-anim { animation: checkIn 0.7s ease-out forwards; }
      `}</style>

      <div className="sans min-h-screen" style={{ background: C.black, color: "#fff" }}>

        {/* ── S1 — Confirmación ── */}
        <section className="py-20 md:py-28 px-5 text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="check-anim inline-block">
              <CheckCircle size={72} style={{ color: C.gold }} />
            </div>
            <h1 className="serif text-3xl md:text-5xl font-black" style={{ color: C.gold }}>
              ¡Tu lugar está reservado!
            </h1>
            <p className="text-base md:text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Acabas de dar el paso más valiente.
            </p>

            {/* Card datos */}
            <div className="rounded-xl p-6 md:p-8 text-left space-y-3 mt-8" style={{ background: "#1A1A1A", border: `1px solid rgba(186,142,35,0.2)` }}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: C.gold }}>Clase gratuita en vivo</p>
                  <p className="serif font-bold text-lg">APEGO DETOX: Rompe el Lazo Invisible</p>
                </div>
              </div>
              <div className="text-sm space-y-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                <p>Sábado 1 de Marzo 2026</p>
                <p>1:00 PM hora Colombia</p>
                <p>Google Meet</p>
              </div>
              <div className="flex items-center gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <code className="text-xs flex-1 truncate" style={{ color: "rgba(255,255,255,0.4)" }}>{MEET_LINK}</code>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-1 px-3 py-2 rounded text-xs font-semibold transition-all"
                  style={{ background: copied ? "#2ECC71" : C.gold, color: copied ? "#fff" : C.dark }}
                >
                  {copied ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── S2 — WhatsApp obligatorio ── */}
        <section className="py-16 md:py-20 px-5">
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl opacity-20 blur-lg" style={{ background: C.gold }} />
              <div className="relative rounded-2xl p-8 text-center space-y-5" style={{ background: C.dark, border: `2px solid ${C.gold}` }}>
                <p className="serif font-bold text-xl md:text-2xl" style={{ color: C.gold }}>
                  ⚠️ IMPORTANTE: Completa tu registro
                </p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Únete al grupo de WhatsApp para recibir el link de acceso, contenido exclusivo y recordatorios.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-4 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:opacity-90"
                  style={{ background: C.green, color: "#fff", boxShadow: "0 8px 30px rgba(37,211,102,0.3)" }}
                >
                  UNIRME AL GRUPO DE WHATSAPP
                </a>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Sin WhatsApp no recibirás el link de la clase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── S3 — Qué esperar ── */}
        <section style={{ background: C.cream, color: C.gray }} className="py-16 md:py-20 px-5">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="serif text-xl md:text-2xl font-bold text-center" style={{ color: C.gray }}>Qué esperar</h2>
            {[
              { n: "1", t: "Mensaje de bienvenida", d: "Recibirás un mensaje de confirmación en el grupo." },
              { n: "2", t: "Contenido exclusivo", d: "Material previo a la clase para prepararte emocionalmente." },
              { n: "3", t: "Recordatorio el día de la clase", d: "Para que no se te pase. Te avisamos 30 minutos antes." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 items-start">
                <span className="serif text-2xl font-black" style={{ color: C.gold, minWidth: 28 }}>{s.n}</span>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: C.gray }}>{s.t}</h3>
                  <p className="text-sm" style={{ color: "rgba(44,44,44,0.6)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── S4 — Cierre emocional ── */}
        <section className="py-20 md:py-28 px-5 text-center" style={{ background: C.black }}>
          <div className="max-w-xl mx-auto space-y-6">
            <p className="serif italic text-xl md:text-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              No estás loca. No eres débil.<br />Y no es tu culpa.
            </p>
            <div className="pt-6" style={{ borderTop: "1px solid rgba(186,142,35,0.2)" }}>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Te espero,</p>
              <p className="font-bold mt-2">Javier Vieira</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Psicólogo Especialista · Historias de la Mente</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-5 text-center" style={{ background: C.black, borderTop: "1px solid rgba(186,142,35,0.1)" }}>
          <img src={logoImg} alt="Historias de la Mente" className="h-8 mx-auto mb-3 opacity-60" />
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2025 Historias de la Mente — Javier Vieira</p>
        </footer>
      </div>
    </>
  );
};

export default GraciasClaseMarzo;
