 import { Button } from "@/components/ui/button";
 import javierVieira from "@/assets/javier-vieira.png";
 import { ArrowRight } from "lucide-react";
 
 interface NewHeroSectionProps {
   onOpenChat?: () => void;
 }
 
 const NewHeroSection = ({ onOpenChat }: NewHeroSectionProps) => {
   return (
     <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 py-12 md:py-20 bg-background">
       <div className="container max-w-6xl mx-auto animate-fade-in">
         <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
           {/* Avatar Column */}
           <div className="flex justify-center lg:justify-start">
             <div className="relative group">
               {/* Glow effect behind avatar */}
               <div className="absolute -inset-4 bg-gradient-to-r from-golden via-golden-light to-golden rounded-full opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
               <img
                 src={javierVieira}
                 alt="Javier Vieira - Psicólogo Especialista en Narcisismo"
                 className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-golden shadow-golden"
               />
             </div>
           </div>
 
           {/* Content Column */}
           <div className="text-center lg:text-left space-y-6">
             {/* Main Headline */}
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-apple leading-tight">
               <span className="text-foreground">No Te Extraña.</span>
               <br />
               <span className="text-foreground">Te Usa Cuando Le Conviene.</span>
               <br />
               <span className="golden-text">¿Hasta Cuándo?</span>
             </h1>
 
             {/* Persuasive Copy */}
             <p className="text-lg md:text-xl text-muted-foreground font-apple leading-relaxed max-w-2xl lg:max-w-none">
               Yo trabajo con mujeres atrapadas en vínculos narcisistas.
               <br className="hidden md:block" />
               Y siempre les digo lo mismo:
               <br />
               La pregunta no es si puedes salir.
               <br />
               Es si <span className="golden-text font-bold">QUIERES</span> salir.
             </p>
 
             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
               <Button
                 asChild
                 size="lg"
                 className="btn-cta-primary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-h-[52px]"
               >
                 <a
                   href="https://historiasdelamente.com/clase-gratuita"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   ACCEDE A LA CLASE GRATUITA
                   <ArrowRight className="ml-2 w-5 h-5" />
                 </a>
               </Button>
 
               <Button
                 onClick={onOpenChat}
                 size="lg"
                 className="btn-cta-secondary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-h-[52px]"
               >
                 HAZ EL TEST EN 3 MIN
                 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default NewHeroSection;