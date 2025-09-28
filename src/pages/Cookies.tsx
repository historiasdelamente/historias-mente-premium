import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16 md:py-24 bg-gradient-subtle">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold golden-text font-apple mb-6">Política de Cookies</h1>
          <p className="text-muted-foreground font-apple mb-8">
            Última actualización: {new Date().getFullYear()}
          </p>

          <div className="space-y-8 text-base md:text-lg leading-relaxed font-apple">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos que se guardan en tu dispositivo para mejorar tu experiencia, analizar el uso del
                sitio y ofrecer funcionalidades. Esta es una página base que podrás personalizar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Tipos de cookies que usamos</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies necesarias para el funcionamiento del sitio.</li>
                <li>Cookies de análisis para entender cómo se usa el sitio.</li>
                <li>Cookies de preferencia para recordar opciones del usuario.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Cómo gestionar las cookies</h2>
              <p>
                Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que algunas funciones del sitio podrían
                verse afectadas.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
