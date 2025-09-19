import { Card, CardContent } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";
import kickIcon from "@/assets/kick-icon.png";

interface SocialCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  delay?: string;
}

const SocialCard = ({ title, description, icon, href, delay = "0ms" }: SocialCardProps) => {
  return (
    <Card 
      className="card-premium hover-lift group cursor-pointer border-golden/20 hover:border-golden/40 animate-scale-in"
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-8 text-center space-y-6">
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block space-y-6"
        >
          {/* Icon */}
          <div className="relative mx-auto w-20 h-20">
            <img 
              src={icon} 
              alt={`${title} Icon`}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold golden-text font-apple">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed font-apple">
            {description}
          </p>
        </a>
      </CardContent>
    </Card>
  );
};

const SocialMediaSection = () => {
  const socialPlatforms = [
    {
      title: "WhatsApp",
      description: "Accede a tu inscripción gratuita y mensajes directos para no quedarte fuera.",
      icon: whatsappIcon,
      href: "https://wa.me/573044737168?text=Taller%20gratis%3A%20dejar%20al%20narcisista",
    },
    {
      title: "LinkedIn",
      description: "Contenido profesional y networking",
      icon: linkedinIcon,
      href: "https://co.linkedin.com/in/javier-vieira-calle",
    },
    {
      title: "TikTok",
      description: "Clips con claves sobre apego, señales de manipulación y recuperación.",
      icon: tiktokIcon,
      href: "https://www.tiktok.com/@historias.de.la.mente",
    },
    {
      title: "EN VIVO EN KICK",
      description: "La conferencia completa, en vivo, con espacio para tus preguntas.",
      icon: kickIcon,
      href: "https://kick.com/historiasdelamente",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold golden-text mb-6 font-apple">
            TU FUERZA COMIENZA AQUÍ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-apple">
            Conéctate y recibe recordatorios, mensajes que hablan a tu corazón y herramientas que te devuelven tu voz.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform, index) => (
            <SocialCard
              key={platform.title}
              {...platform}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;