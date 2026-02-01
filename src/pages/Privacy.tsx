import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "1 de febrero de 2026";

  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16 md:py-24 bg-gradient-subtle">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold golden-text font-apple mb-6">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground font-apple mb-8">
            Última actualización: {lastUpdated}
          </p>

          <div className="space-y-10 text-base md:text-lg leading-relaxed font-apple">
            {/* 1. Identidad del Responsable */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                1. Identidad del Responsable del Tratamiento
              </h2>
              <p className="text-gray-300 mb-4">
                En cumplimiento del Reglamento General de Protección de Datos (RGPD) de la Unión Europea, 
                te informamos que el responsable del tratamiento de tus datos personales es:
              </p>
              <ul className="list-none space-y-2 text-gray-300 bg-card p-4 rounded-lg border border-card-border">
                <li><strong className="text-[#D4AF37]">Nombre:</strong> Historias de la Mente</li>
                <li><strong className="text-[#D4AF37]">Email de contacto:</strong>{" "}
                  <a href="mailto:info@historiasdelamente.com" className="text-[#D4AF37] hover:text-[#f4d03f] underline">
                    info@historiasdelamente.com
                  </a>
                </li>
                <li><strong className="text-[#D4AF37]">Sitio web:</strong>{" "}
                  <a href="https://historiasdelamente.com" className="text-[#D4AF37] hover:text-[#f4d03f] underline">
                    historiasdelamente.com
                  </a>
                </li>
              </ul>
            </section>

            {/* 2. Datos que Recopilamos */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                2. Datos Personales que Recopilamos
              </h2>
              <p className="text-gray-300 mb-4">
                Recopilamos los siguientes tipos de datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>Datos de identificación:</strong> Nombre completo y dirección de correo electrónico, 
                  proporcionados voluntariamente a través de nuestros formularios de registro.
                </li>
                <li>
                  <strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo, 
                  páginas visitadas y tiempo de permanencia en el sitio.
                </li>
                <li>
                  <strong>Preferencias de consentimiento:</strong> Registro de tus elecciones respecto a 
                  comunicaciones de marketing y aceptación de cookies.
                </li>
              </ul>
            </section>

            {/* 3. Base Legal */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                3. Base Legal del Tratamiento
              </h2>
              <p className="text-gray-300 mb-4">
                Tratamos tus datos personales basándonos en las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>Consentimiento explícito (Art. 6.1.a RGPD):</strong> Cuando te registras en nuestra 
                  clase gratuita o newsletter, nos proporcionas tu consentimiento explícito marcando la 
                  casilla correspondiente.
                </li>
                <li>
                  <strong>Ejecución de un contrato (Art. 6.1.b RGPD):</strong> Para darte acceso a los 
                  contenidos y servicios que has solicitado.
                </li>
                <li>
                  <strong>Interés legítimo (Art. 6.1.f RGPD):</strong> Para mejorar nuestros servicios y 
                  la experiencia del usuario mediante análisis estadísticos anónimos.
                </li>
              </ul>
            </section>

            {/* 4. Finalidades */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                4. Finalidades del Tratamiento
              </h2>
              <p className="text-gray-300 mb-4">
                Utilizamos tus datos personales para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Enviarte el enlace de acceso a la clase gratuita por la que te has registrado.</li>
                <li>Comunicarnos contigo para darte información sobre el contenido solicitado.</li>
                <li>Enviarte comunicaciones de marketing y promociones (solo si has dado tu consentimiento expreso).</li>
                <li>Mejorar nuestro sitio web y servicios mediante análisis estadísticos.</li>
                <li>Cumplir con obligaciones legales que nos sean aplicables.</li>
              </ul>
            </section>

            {/* 5. Período de Retención */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                5. Período de Conservación de Datos
              </h2>
              <p className="text-gray-300">
                Conservaremos tus datos personales durante el tiempo necesario para cumplir con las 
                finalidades descritas, generalmente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-4">
                <li>
                  <strong>Datos de registro:</strong> Mientras mantengas una relación con nosotros y hasta 
                  que solicites su eliminación.
                </li>
                <li>
                  <strong>Datos de marketing:</strong> Hasta que retires tu consentimiento.
                </li>
                <li>
                  <strong>Datos técnicos (cookies):</strong> Según lo establecido en nuestra{" "}
                  <Link to="/cookies" className="text-[#D4AF37] hover:text-[#f4d03f] underline">
                    Política de Cookies
                  </Link>.
                </li>
              </ul>
            </section>

            {/* 6. Derechos del Usuario */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                6. Tus Derechos RGPD
              </h2>
              <p className="text-gray-300 mb-4">
                Como titular de los datos, tienes los siguientes derechos:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Derecho de acceso", desc: "Solicitar información sobre qué datos tenemos sobre ti." },
                  { title: "Derecho de rectificación", desc: "Corregir datos inexactos o incompletos." },
                  { title: "Derecho de supresión", desc: "Solicitar que eliminemos tus datos (\"derecho al olvido\")." },
                  { title: "Derecho de oposición", desc: "Oponerte al tratamiento de tus datos para fines específicos." },
                  { title: "Derecho a la portabilidad", desc: "Recibir tus datos en un formato estructurado y legible." },
                  { title: "Derecho a limitar el tratamiento", desc: "Restringir cómo usamos tus datos." },
                ].map((right, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border border-card-border">
                    <h3 className="font-semibold text-[#D4AF37] mb-1">{right.title}</h3>
                    <p className="text-sm text-gray-400">{right.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Cómo Ejercer tus Derechos */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                7. Cómo Ejercer tus Derechos
              </h2>
              <p className="text-gray-300">
                Para ejercer cualquiera de estos derechos, puedes contactarnos en:
              </p>
              <div className="bg-card p-4 rounded-lg border border-[#D4AF37]/30 mt-4">
                <p className="text-center">
                  <a 
                    href="mailto:info@historiasdelamente.com" 
                    className="text-[#D4AF37] hover:text-[#f4d03f] text-lg font-semibold"
                  >
                    info@historiasdelamente.com
                  </a>
                </p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Responderemos a tu solicitud en un plazo máximo de 30 días. Podemos solicitarte información 
                adicional para verificar tu identidad antes de procesar tu solicitud.
              </p>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                8. Cookies y Tecnologías de Seguimiento
              </h2>
              <p className="text-gray-300">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio. 
                Estas incluyen cookies esenciales, de análisis (Google Analytics) y de marketing 
                (Meta Pixel, TikTok Pixel).
              </p>
              <p className="text-gray-300 mt-4">
                <strong>Solo cargamos cookies de análisis y marketing si nos das tu consentimiento explícito.</strong>
              </p>
              <p className="mt-4">
                <Link 
                  to="/cookies" 
                  className="text-[#D4AF37] hover:text-[#f4d03f] underline font-medium"
                >
                  Consulta nuestra Política de Cookies completa →
                </Link>
              </p>
            </section>

            {/* 9. Transferencias Internacionales */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                9. Transferencias Internacionales de Datos
              </h2>
              <p className="text-gray-300">
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio 
                Económico Europeo. En estos casos, garantizamos que existen salvaguardas adecuadas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-4">
                <li>
                  <strong>Google (Analytics):</strong> Cumple con el Marco de Privacidad de Datos UE-EE.UU.
                </li>
                <li>
                  <strong>Meta (Facebook Pixel):</strong> Cumple con el Marco de Privacidad de Datos UE-EE.UU.
                </li>
                <li>
                  <strong>TikTok:</strong> Implementa Cláusulas Contractuales Tipo aprobadas por la UE.
                </li>
              </ul>
            </section>

            {/* 10. Derecho a Reclamar */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                10. Derecho a Presentar una Reclamación
              </h2>
              <p className="text-gray-300">
                Si consideras que el tratamiento de tus datos personales vulnera la normativa vigente, 
                tienes derecho a presentar una reclamación ante la autoridad de control de tu país. 
                En España, puedes dirigirte a:
              </p>
              <div className="bg-card p-4 rounded-lg border border-card-border mt-4">
                <p className="text-gray-300">
                  <strong className="text-[#D4AF37]">Agencia Española de Protección de Datos (AEPD)</strong>
                  <br />
                  <a 
                    href="https://www.aepd.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:text-[#f4d03f] underline"
                  >
                    www.aepd.es
                  </a>
                </p>
              </div>
            </section>

            {/* 11. Cambios en la Política */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                11. Cambios en esta Política
              </h2>
              <p className="text-gray-300">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando lo hagamos, 
                actualizaremos la fecha de "última actualización" en la parte superior de esta página. 
                Te recomendamos revisar esta política periódicamente.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
