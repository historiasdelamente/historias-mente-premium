 import { Youtube, Instagram, Facebook } from "lucide-react";
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
 
 const SocialIconBar = () => {
   return (
     <section className="w-full py-12 md:py-16 px-6 bg-gradient-card border-y border-golden/20">
       <div className="container max-w-4xl mx-auto text-center space-y-8">
         {/* Heading */}
         <h2 className="text-xl md:text-2xl font-semibold font-apple text-muted-foreground uppercase tracking-wide">
           Sígueme en:
         </h2>
 
         {/* Social Icons */}
         <div className="flex justify-center items-center gap-6 md:gap-8">
           {socialLinks.map((social) => (
             <a
               key={social.name}
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               className="group p-3 rounded-full transition-all duration-300 hover:bg-golden/10"
               aria-label={`Síguenos en ${social.name}`}
             >
               {social.customIcon ? (
                 <img
                   src={social.customIcon}
                   alt={social.name}
                   className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                 />
               ) : (
                 <social.icon className="w-8 h-8 text-muted-foreground group-hover:text-golden transition-colors duration-300" />
               )}
             </a>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default SocialIconBar;