 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import { Users, Calendar, HeartHandshake, ArrowRight } from "lucide-react";
 
 const benefits = [
   {
     icon: Users,
     title: "+2000 mujeres",
     description: "Sistema probado con resultados reales",
   },
   {
     icon: Calendar,
     title: "8 semanas",
     description: "Método paso a paso estructurado",
   },
   {
     icon: HeartHandshake,
     title: "Acompañamiento",
     description: "Soporte profesional directo",
   },
 ];
 
 const ApegoDetoxSection = () => {
   return (
     <section className="w-full py-16 md:py-24 px-6 bg-secondary">
       <div className="container max-w-6xl mx-auto space-y-12">
         {/* Badge */}
         <div className="flex justify-center">
           <div className="relative">
             <div className="absolute -inset-2 bg-gradient-to-r from-golden to-golden-light opacity-30 blur-lg rounded-lg" />
             <div
               className="relative bg-gradient-to-r from-golden to-golden-light px-8 py-4 rounded-lg shadow-golden transform -rotate-2"
             >
               <span className="text-2xl md:text-3xl font-extrabold text-black font-apple tracking-wide">
                 APEGO DETOX
               </span>
             </div>
           </div>
         </div>
 
         {/* Headline */}
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-apple golden-text">
           El Programa Que Rompe El Ciclo
         </h2>
 
         {/* Benefits Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {benefits.map((benefit, index) => (
             <Card
               key={index}
               className="card-premium hover-lift border-golden/20 hover:border-golden/40 transition-all duration-300"
             >
               <CardContent className="p-6 md:p-8 text-center space-y-4">
                 <div className="flex justify-center">
                   <div className="p-3 rounded-full bg-golden/10 border border-golden/30">
                     <benefit.icon className="w-8 h-8 text-golden" />
                   </div>
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold text-foreground font-apple">
                   ✓ {benefit.title}
                 </h3>
                 <p className="text-muted-foreground font-apple">
                   {benefit.description}
                 </p>
               </CardContent>
             </Card>
           ))}
         </div>
 
         {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
               VER CLASE GRATUITA
               <ArrowRight className="ml-2 w-5 h-5" />
             </a>
           </Button>
 
           <Button
             asChild
             size="lg"
             className="btn-cta-primary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-h-[52px]"
           >
             <a
               href="https://historiasdelamente.com/apegodetox"
               target="_blank"
               rel="noopener noreferrer"
             >
               ENTRAR AL PROGRAMA AHORA
               <ArrowRight className="ml-2 w-5 h-5" />
             </a>
           </Button>
         </div>
       </div>
     </section>
   );
 };
 
 export default ApegoDetoxSection;