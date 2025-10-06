import { Card, CardContent } from "@/components/ui/card";
import tiktokIcon from "@/assets/tiktok-icon.png";
import kickIcon from "@/assets/kick-icon.png";
import { WHATSAPP_COMMUNITY_URL } from "@/config/links";

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
          {description && (
            <p className="text-muted-foreground leading-relaxed font-apple">
              {description}
            </p>
          )}
        </a>
      </CardContent>
    </Card>
  );
};

const SocialMediaSection = () => {
  const socialPlatforms = [
    {
      title: "Mujeres Sanadoras",
      description: "Únete ahora al círculo de mujeres que transforman su vida.",
      icon: "/mujeres-sanadoras.png",
      href: "https://chat.whatsapp.com/KzR5MR6ewB42NcSg8kwpQb?mode=ac_t",
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
    <section className="py-16 md:py-24 px-6 bg-gradient-card">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold golden-text mb-4 md:mb-6 font-apple leading-tight">
            AQUÍ NACE TU PODER SIN ÉL
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-apple leading-relaxed">
            Entra a Kick y vive el taller de 21 días gratis: paso a paso para soltar al narcisista y levantarte.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <SocialCard
              key={platform.title}
              {...platform}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>

        {/* Video Embed - Moved here from HeroSection */}
        <div className="w-full pt-12 md:pt-16">
          <div className="max-w-3xl mx-auto w-full">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-golden ring-2 ring-amber-300/50">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/rk3UpCY5CGM?si=-7byeWC2TlxF7Fzt"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;