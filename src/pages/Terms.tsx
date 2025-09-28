import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16 md:py-24 bg-gradient-subtle">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold golden-text font-apple mb-6">Términos y Condiciones</h1>
          <p className="text-muted-foreground font-apple mb-8">
            Última actualización: {new Date().getFullYear()}
          </p>

          <div className="space-y-8 text-base md:text-lg leading-relaxed font-apple">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Aceptación</h2>
              <p>
                Estos Términos regulan el uso del sitio y de los servicios ofrecidos. Al acceder o usar la web, aceptas
                cumplir con estos Términos. Este es un texto base que podrás personalizar más adelante.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Uso permitido</h2>
              <p>
                Te comprometes a usar el sitio de forma lícita, respetando la propiedad intelectual y sin vulnerar derechos de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Limitación de responsabilidad</h2>
              <p>
                El sitio se ofrece "tal cual" y no garantizamos disponibilidad ininterrumpida. Ajusta esta sección con tu asesoría legal.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
