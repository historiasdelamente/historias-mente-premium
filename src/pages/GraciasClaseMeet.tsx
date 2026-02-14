import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import graciasHeroBg from "@/assets/gracias-hero-bg.jpg";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/XXXXXXXXXX";

// --- Fade-up hook ---
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}` };
};

// --- WhatsApp SVG icon ---
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-2.86.85.85-2.86-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

// --- WhatsApp Button ---
const WhatsAppButton = ({ children, className = "", fullWidth = false }: { children: React.ReactNode; className?: string; fullWidth?: boolean }) => {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact", { method: "WhatsApp", content_name: "CTA WhatsApp - Thank You Page" });
    }
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", { event_category: "engagement", event_label: "Thank You Page CTA", value: 1 });
    }
  };

  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-3
        bg-[#25D366] text-white font-extrabold uppercase tracking-wide
        px-10 py-5 rounded-lg text-base
        shadow-[0_4px_20px_rgba(37,211,102,0.4)]
        hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)]
        hover:-translate-y-0.5 transition-all duration-300
        ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
};

// ============================================================
// PAGE
// ============================================================
const GraciasClaseMeet = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "Thank You - Clase Apego Emocional",
        content_category: "Lead Magnet",
        content_type: "landing_page",
      });
    }
  }, []);

  const fade1 = useFadeIn();
  const fade2 = useFadeIn();
  const fade3 = useFadeIn();
  const fade4 = useFadeIn();
  const fade5 = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Tu lugar está reservado — Apego Detox | Historias de la Mente</title>
        <meta name="description" content="Confirma tu lugar en la clase Apego Detox. Entra al grupo de WhatsApp para recibir el acceso." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="min-h-screen bg-black">

        {/* ===== 1. HERO ===== */}
        <section
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${graciasHeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="uppercase tracking-[4px] text-xs text-[#FFD300] font-semibold">
            TU LUGAR ESTÁ RESERVADO
          </span>

          <h1 className="text-white font-extrabold text-[28px] md:text-[40px] leading-tight max-w-2xl mt-5">
            Diste el primer paso.<br />
            Eso ya te hace diferente.
          </h1>

          <p className="text-[#CCC] text-[15px] md:text-lg max-w-md mt-5 leading-relaxed">
            La mayoría se queda en silencio.
            Tú decidiste hacer algo. Ahora confirma tu lugar
            en el grupo donde vas a recibir toda la información.
          </p>

          <div className="mt-6">
            <WhatsAppButton>CONFIRMAR MI LUGAR POR WHATSAPP</WhatsAppButton>
          </div>

          <p className="text-white/60 text-sm mt-3">
            Entra al grupo para recibir el link de la clase y recordatorios
          </p>
        </section>

        {/* ===== 3. POR QUÉ IMPORTA ===== */}
        <section className="bg-white py-20 px-6">
          <div ref={fade1.ref} className={fade1.className}>
            <h2 className="text-center font-bold text-[22px] md:text-[30px] max-w-lg mx-auto text-black leading-tight">
              Mientras tú leías esto, ella seguía revisando si él la bloqueó.
            </h2>

            <div className="max-w-xl mx-auto mt-10 space-y-6">
              <p className="text-[#333] text-[15px] md:text-[17px] leading-relaxed">
                Hay una mujer que ahora mismo está acostada en su cama con el teléfono en la mano. Lleva cuarenta minutos revisando la última conexión de él. Sabe que le hace daño. Sabe que debería bloquearlo. Pero no puede. Porque soltar duele más que quedarse.
              </p>
              <p className="text-[#333] text-[15px] md:text-[17px] leading-relaxed">
                Hay otra que ya lo dejó hace meses. Todos le dicen que está mejor. Pero por dentro se muere. Porque nadie sabe que anoche soñó con él y se despertó llorando. Porque sigue sintiendo ese vacío en el pecho que no se llena con nada.
              </p>
              <p className="text-[#333] text-[15px] md:text-[17px] leading-relaxed">
                Y hay otra — quizás eres tú — que acaba de dar el paso más valiente que ha dado en mucho tiempo: registrarse en esta clase. Porque algo dentro de ella le dijo que ya es suficiente.
              </p>
              <div className="border-l-4 border-[#FFD300] pl-4 mt-8">
                <p className="font-semibold text-lg text-black">
                  Tú no eres la que se quedó paralizada.<br />
                  Tú eres la que decidió moverse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. LO QUE SIGUE ===== */}
        <section className="bg-[#F5F5F5] py-16 px-6">
          <div ref={fade2.ref} className={fade2.className}>
            <h2 className="text-center font-bold text-[22px] md:text-[30px] text-black">
              Esto es lo que sigue:
            </h2>

            <div className="max-w-md mx-auto mt-10 space-y-8">
              {[
                { n: "1", text: "Entra al grupo de WhatsApp para confirmar tu lugar y recibir el acceso directo a la clase." },
                { n: "2", text: "El sábado 28 de febrero a las 11:00 AM (hora Colombia) recibirás el link para conectarte en vivo." },
                { n: "3", text: "Llega puntual. Lo que vas a escuchar en esa clase puede ser el punto de quiebre que necesitas." },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-[#FFD300] font-bold flex items-center justify-center text-lg flex-shrink-0">
                    {step.n}
                  </div>
                  <p className="text-[#333] text-[15px] md:text-base leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <WhatsAppButton>UNIRME AL GRUPO DE WHATSAPP</WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ===== 5. TESTIMONIOS ===== */}
        <section className="bg-black py-20 px-6">
          <div ref={fade3.ref} className={fade3.className}>
            <h2 className="text-white text-center font-bold text-[22px] md:text-[30px] mb-12">
              Ellas también pensaron que no podían salir:
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { quote: "Yo estuve casada 34 años con un narcisista. Pensé que iba a cambiar. Saqué solo mis cosas y me fui. Los primeros días sentí que me moría. Hoy sé que me salvé.", name: "— Mujer, 58 años" },
                { quote: "Volví 12 veces. Cada vez me juraba que era la última. Hasta que entendí que no era debilidad, era que mi cerebro estaba adicto a él. Cuando entendí eso, todo cambió.", name: "— Mujer, 36 años" },
                { quote: "Lo que me hizo soltar fue darme cuenta de que mis hijos estaban copiando el patrón. Ellos iban a repetir lo mismo si yo no paraba el ciclo.", name: "— Mujer, 42 años" },
                { quote: "Alejarte no es lo más difícil. Lo más difícil es quedarte alejada. Pero cada día sin él, me parezco más a quien era antes.", name: "— Mujer, 31 años" },
              ].map((t, i) => (
                <div key={i} className="bg-[#1A1A1A] rounded-lg p-6 border-l-4 border-[#FFD300]">
                  <p className="text-[#CCC] text-sm italic leading-relaxed">"{t.quote}"</p>
                  <p className="text-[#FFD300] text-xs font-semibold mt-3 not-italic">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. REVISA TU CORREO ===== */}
        <section className="bg-white py-16 px-6">
          <div ref={fade4.ref} className={fade4.className}>
            <div className="max-w-md mx-auto text-center">
              <h2 className="font-bold text-[22px] md:text-[30px] text-black">
                Revisa tu correo electrónico.
              </h2>
              <p className="text-[#555] mt-4 text-[15px] md:text-base">
                Te enviamos la confirmación con los detalles de la clase.
                Si no lo ves en tu bandeja de entrada, revisa spam o promociones.
              </p>
              <div className="bg-[#F5F5F5] rounded-xl p-6 mt-8 text-left">
                <p className="font-semibold text-sm text-black">Datos de la clase:</p>
                <p className="text-[#555] text-sm mt-2">Sábado 28 de febrero, 2026</p>
                <p className="text-[#555] text-sm">11:00 AM hora Colombia</p>
                <p className="text-[#555] text-sm mt-2">Colombia, Perú, Ecuador: 11:00 AM</p>
                <p className="text-[#555] text-sm">México: 10:00 AM</p>
                <p className="text-[#555] text-sm">Argentina, Chile: 1:00 PM</p>
                <p className="text-[#555] text-sm">Venezuela: 12:00 PM</p>
                <p className="text-[#555] text-sm">España: 5:00 PM</p>
                <p className="text-[#555] text-sm">USA Este: 11:00 AM — USA Oeste: 8:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. CTA FINAL ===== */}
        <section className="bg-black py-16 px-6 text-center">
          <div ref={fade5.ref} className={fade5.className}>
            <h2 className="text-white font-bold text-[22px] md:text-[30px] max-w-md mx-auto leading-tight">
              No dejes que el miedo te quite esto.<br />
              Confirma tu lugar ahora.
            </h2>
            <p className="text-[#CCC] text-sm max-w-sm mx-auto mt-4">
              En el grupo de WhatsApp vas a recibir el link de acceso,
              recordatorios y material antes de la clase.
            </p>
            <div className="mt-8">
              <WhatsAppButton>ENTRAR AL GRUPO DE WHATSAPP</WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ===== 8. FOOTER ===== */}
        <footer className="bg-black py-8 text-center border-t border-[#1A1A1A] pb-24 md:pb-8">
          <p className="text-gray-400 text-sm">Historias de la Mente — Javier Vieira</p>
          <p className="text-gray-500 text-xs mt-1">Psicólogo Clínico COLPSIC 293219 — © 2026</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link to="/privacy" className="text-gray-500 text-xs hover:underline">Privacidad</Link>
            <Link to="/terms" className="text-gray-500 text-xs hover:underline">Términos</Link>
          </div>
        </footer>

        {/* ===== MOBILE STICKY WHATSAPP ===== */}
        <div className="fixed bottom-0 left-0 right-0 bg-black p-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:hidden">
          <WhatsAppButton fullWidth className="text-sm py-4">
            CONFIRMAR POR WHATSAPP
          </WhatsAppButton>
        </div>
      </div>
    </>
  );
};

export default GraciasClaseMeet;
