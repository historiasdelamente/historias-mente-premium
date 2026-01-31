import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer 
      className="py-12 md:py-16 px-5 text-center"
      style={{ 
        background: '#000000',
        borderTop: '1px solid rgba(255,215,0,0.15)'
      }}
    >
      {/* Signature */}
      <p 
        className="text-base md:text-lg italic mb-5"
        style={{ color: '#CCCCCC' }}
      >
        Con empatía y firmeza,
      </p>

      <p 
        className="text-sm md:text-base font-light uppercase tracking-widest mb-1"
        style={{ color: '#CCCCCC' }}
      >
        Psicólogo
      </p>

      <p 
        className="text-xl md:text-2xl font-medium mb-3"
        style={{ color: '#FFD700' }}
      >
        Javier Vieira
      </p>

      <p 
        className="text-sm md:text-base font-normal leading-relaxed"
        style={{ color: '#999999' }}
      >
        Psicólogo Clínico | Especialista en Apego Emocional
      </p>

      {/* Divider */}
      <div 
        className="w-16 h-0.5 mx-auto my-8 opacity-30"
        style={{ background: '#FFD700' }}
      ></div>

      {/* Copyright */}
      <p 
        className="text-xs md:text-sm"
        style={{ color: '#666666' }}
      >
        © {new Date().getFullYear()} Historias de la Mente | Apego Detox
      </p>

      {/* Legal Links */}
      <div className="flex justify-center gap-4 mt-4">
        <Link 
          to="/privacy" 
          className="text-xs hover:underline"
          style={{ color: '#666666' }}
        >
          Privacidad
        </Link>
        <Link 
          to="/terms" 
          className="text-xs hover:underline"
          style={{ color: '#666666' }}
        >
          Términos
        </Link>
      </div>
    </footer>
  );
};

export default FooterSection;
