import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16 md:py-24 bg-gradient-subtle">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold golden-text font-apple mb-6">Política de Privacidad</h1>
          <p className="text-muted-foreground font-apple mb-8">
            Última actualización: {new Date().getFullYear()}
          </p>

          <div className="space-y-8 text-base md:text-lg leading-relaxed font-apple">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introducción</h2>
              <p>
                Esta es una versión base de nuestra Política de Privacidad. Aquí explicaremos qué datos recopilamos,
                con qué finalidad, cómo los procesamos y cuáles son tus derechos como usuaria. Puedes personalizar este
                contenido cuando tengas la redacción definitiva.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Datos que recopilamos</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos de contacto (por ejemplo, nombre y correo electrónico).</li>
                <li>Datos técnicos y de uso (por ejemplo, dirección IP, páginas visitadas).</li>
                <li>Datos que nos facilitas de forma voluntaria a través de formularios o mensajes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Finalidades del tratamiento</h2>
              <p>
                Usamos los datos para ofrecerte nuestros servicios, comunicarnos contigo y mejorar tu experiencia en el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Tus derechos</h2>
              <p>
                Puedes solicitar acceso, rectificación o eliminación de tus datos, entre otros derechos. Indícanos tu solicitud a
                <a className="text-golden hover:text-golden-light ml-1" href="mailto:info@historiasdelamente.com">info@historiasdelamente.com</a>.
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
