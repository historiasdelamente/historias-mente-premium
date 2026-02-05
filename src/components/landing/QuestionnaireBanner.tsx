 import { Button } from "@/components/ui/button";
 import { ClipboardList, ArrowRight } from "lucide-react";
 
 interface QuestionnaireBannerProps {
   onOpenChat?: () => void;
 }
 
 const QuestionnaireBanner = ({ onOpenChat }: QuestionnaireBannerProps) => {
   return (
     <section className="w-full py-12 md:py-16 px-6 bg-gradient-card border-y border-golden/30">
       <div className="container max-w-4xl mx-auto text-center space-y-6">
         {/* Icon */}
         <div className="flex justify-center">
           <div className="p-4 rounded-full bg-golden/10 border border-golden/30">
             <ClipboardList className="w-10 h-10 text-golden" />
           </div>
         </div>
 
         {/* Headline */}
         <h2 className="text-2xl md:text-3xl font-bold font-apple golden-text">
           ¿No Sabes Si Estás en Apego Traumático?
         </h2>
 
         {/* Subtext */}
         <p className="text-lg md:text-xl text-muted-foreground font-apple">
           Responde 12 preguntas y descubre tu nivel de dependencia emocional
         </p>
 
         {/* CTA Button */}
         <Button
           onClick={onOpenChat}
           size="lg"
           className="btn-cta-primary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-h-[52px] animate-pulse hover:animate-none"
         >
           HACER EL TEST AHORA (3 MINUTOS)
           <ArrowRight className="ml-2 w-5 h-5" />
         </Button>
       </div>
     </section>
   );
 };
 
 export default QuestionnaireBanner;