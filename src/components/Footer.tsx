import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-card border-t border-golden/20">
      <div className="container max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center space-y-8 mb-12">
          {/* Empathetic message */}
          <p className="text-lg text-muted-foreground font-apple max-w-3xl mx-auto">
            Si sientes que ya no puedes más, este es el momento de extender tu mano. Escríbeme y recibe tu acceso gratuito. No estás sola.
          </p>

          {/* Contact Information */}
          <div className="flex justify-center items-center">
            <a 
              href="mailto:info@historiasdelamente.com"
              className="flex items-center gap-3 text-golden hover:text-golden-light transition-colors font-apple text-lg"
            >
              <Mail className="w-5 h-5" />
              info@historiasdelamente.com
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <a 
              href="#privacy"
              className="hover:text-golden transition-colors font-apple"
            >
              Políticas de Privacidad
            </a>
            <span className="hidden sm:inline text-golden/40">|</span>
            <a 
              href="#terms"
              className="hover:text-golden transition-colors font-apple"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-golden/20 text-center">
          <p className="text-muted-foreground font-apple">
            © 2025 Historias de la Mente. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;