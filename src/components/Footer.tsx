 import { Mail, Youtube, Instagram, Facebook, MapPin } from "lucide-react";
 import tiktokIcon from "@/assets/tiktok-icon.png";
 
 const socialLinks = [
   {
     name: "YouTube",
     href: "https://www.youtube.com/@Historiasdelamente2",
     icon: Youtube,
   },
   {
     name: "Instagram",
     href: "#",
     icon: Instagram,
   },
   {
     name: "TikTok",
     href: "https://www.tiktok.com/@historias.de.la.mente",
     customIcon: tiktokIcon,
   },
   {
     name: "Facebook",
     href: "https://www.facebook.com/historiasdelamentevip",
     icon: Facebook,
   },
 ];

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-card border-t border-golden/20">
      <div className="container max-w-6xl mx-auto">
        {/* Main Footer Content */}
         <div className="text-center space-y-6 mb-12">
           {/* Brand Name */}
           <h2 className="text-2xl md:text-3xl font-bold golden-text font-apple">
             HISTORIAS DE LA MENTE
           </h2>

           {/* Specialist Title */}
           <p className="text-lg text-muted-foreground font-apple">
             Psicólogo Especialista en Narcisismo
           </p>
 
           {/* Social Icons */}
           <div className="flex justify-center items-center gap-4 md:gap-6 pt-2">
             {socialLinks.map((social) => (
               <a
                 key={social.name}
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group p-2 rounded-full transition-all duration-300 hover:bg-golden/10"
                 aria-label={`Síguenos en ${social.name}`}
               >
                 {social.customIcon ? (
                   <img
                     src={social.customIcon}
                     alt={social.name}
                     className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                   />
                 ) : (
                   <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-golden transition-colors duration-300" />
                 )}
               </a>
             ))}
           </div>
 
           {/* Contact Info */}
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-4">
             <a
               href="mailto:contacto@historiasdelamente.com"
              className="flex items-center gap-3 text-golden hover:text-golden-light transition-colors font-apple text-lg"
            >
              <Mail className="w-5 h-5" />
               contacto@historiasdelamente.com
            </a>
             <span className="flex items-center gap-2 text-muted-foreground font-apple">
               <MapPin className="w-5 h-5" />
               Medellín, Colombia
             </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <a 
              href="/privacy"
              className="hover:text-golden transition-colors font-apple"
            >
              Política de Privacidad
            </a>
            <span className="hidden sm:inline text-golden/40">|</span>
            <a 
              href="/terms"
              className="hover:text-golden transition-colors font-apple"
            >
              Términos y Condiciones
            </a>
            <span className="hidden sm:inline text-golden/40">|</span>
            <a 
              href="/cookies"
              className="hover:text-golden transition-colors font-apple"
            >
              Política de Cookies
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