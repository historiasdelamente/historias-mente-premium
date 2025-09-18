import { Brain, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const BenefitCard = ({ icon, title, description, delay = "0ms" }: BenefitCardProps) => {
  return (
    <Card 
      className="card-premium hover-lift text-center animate-scale-in border-golden/20 hover:border-golden/40"
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-8 space-y-6">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-golden text-black">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold golden-text font-apple">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed font-apple">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Contenido Exclusivo",
      description: "Acceso a técnicas avanzadas de psicología y desarrollo personal de la mano de expertos",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad Activa",
      description: "Conecta con miles de personas en crecimiento personal y comparte experiencias transformadoras",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resultados Reales",
      description: "Transforma tu vida con estrategias comprobadas y técnicas respaldadas por la ciencia",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold golden-text mb-6 font-apple">
            ¿Por Qué Elegir Historias de la Mente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-apple">
            Descubre lo que nos hace únicos en el mundo del desarrollo personal y la psicología
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
              delay={`${index * 150}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;