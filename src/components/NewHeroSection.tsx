import bannerJavier from "@/assets/banner-javier-microfono.png";

const NewHeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-start px-[30px] py-0 md:px-[60px]"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Banner Javier con micrófono */}
      <div className="w-full">
        <img 
          src={bannerJavier} 
          alt="Historias de la Mente - Javier Vieira"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="text-center max-w-[900px] py-[60px] md:py-[80px]">
        {/* Título Principal */}
        <h1 
          className="mb-[30px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#D4AF37',
            fontSize: 'clamp(2.8em, 6.5vw, 5.2em)',
            lineHeight: 1.2,
          }}
        >
          ¿Cuántas veces más vas a volver<br />antes de admitir que nunca fue amor?
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            color: '#e0e0e0',
            fontSize: 'clamp(1em, 2vw, 1.3em)',
            lineHeight: 1.8,
          }}
        >
          Lo que llamabas amor era adicción. Lo que creías era conexión era manipulación. Y el día que lo veas, ese día empiezas a vivir de verdad.
        </p>
      </div>
    </section>
  );
};

export default NewHeroSection;
