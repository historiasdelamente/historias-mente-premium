import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Heart, 
  Sparkles, 
  Video, 
  MessageCircle, 
  Shield,
  ArrowRight
} from "lucide-react";

interface SitelinkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  delay?: number;
}

const SitelinkCard = ({ icon, title, description, href, isExternal = false, delay = 0 }: SitelinkCardProps) => (
  <a
    href={href}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="block group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <Card className="card-premium h-full hover-lift border-golden/20 hover:border-golden/50 transition-all duration-300 animate-fade-in">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-golden/20 to-golden/5 text-golden group-hover:from-golden/30 group-hover:to-golden/10 transition-all duration-300">
            {icon}
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-foreground font-apple group-hover:text-golden transition-colors duration-300 flex items-center gap-2">
              {title}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-apple leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </a>
);

const SitelinksSection = () => {
  const sitelinks = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Programa Apego Detox",
      description: "El método intensivo para desactivar el apego emocional y recuperar tu libertad interior.",
      href: "/apegodetox",
      isExternal: false
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Clases en Vivo",
      description: "Sesiones transformadoras donde aprenderás herramientas prácticas para tu sanación.",
      href: "/clase-gratuita",
      isExternal: false
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Guía Anti-Narcisismo",
      description: "El libro definitivo con estrategias probadas para liberarte del control narcisista.",
      href: "https://libronarcisimo.historiasdelamente.com/",
      isExternal: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Apagón Emocional",
      description: "Aprende la técnica del contacto cero para sanar y recuperar tu paz interior.",
      href: "https://apagonemocional.historiasdelamente.com/",
      isExternal: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Test: ¿Es Narcisista?",
      description: "Descubre si tu pareja tiene rasgos narcisistas con nuestro cuestionario especializado.",
      href: "/",
      isExternal: false
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comunidad de Apoyo",
      description: "Únete a miles de mujeres que están reconstruyendo su vida y sanando juntas.",
      href: "https://wa.me/573044737168?text=Quiero%20unirme%20a%20la%20comunidad%20de%20apoyo",
      isExternal: true
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-card">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold golden-text font-apple leading-tight">
            Explora Nuestros Recursos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-apple max-w-2xl mx-auto">
            Todo lo que necesitas para iniciar tu camino de liberación y sanación emocional
          </p>
        </div>

        {/* Sitelinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitelinks.map((link, index) => (
            <SitelinkCard
              key={link.title}
              {...link}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Visual Separator */}
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-golden/50 to-transparent"></div>
          <Sparkles className="w-5 h-5 text-golden mx-4" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-golden/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default SitelinksSection;
