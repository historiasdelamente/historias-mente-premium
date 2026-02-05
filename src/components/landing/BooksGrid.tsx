 import { Card, CardContent } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import guiaNarcisismo from "@/assets/guia-narcisismo.png";
 import apagonEmocional from "@/assets/apagon-emocional.png";
 import { ExternalLink } from "lucide-react";
 
 const books = [
   {
     title: "Guía Definitiva para Salir del Narcisismo",
     image: guiaNarcisismo,
     link: "https://libronarcisimo.historiasdelamente.com/",
     alt: "Guía Definitiva para Salir del Narcisismo",
   },
   {
     title: "Apagón Emocional",
     image: apagonEmocional,
     link: "https://apagonemocional.historiasdelamente.com/",
     alt: "Apagón Emocional - Contacto Cero",
   },
 ];
 
 const BooksGrid = () => {
   return (
     <section className="w-full py-16 md:py-24 px-6 bg-background">
       <div className="container max-w-5xl mx-auto space-y-12">
         {/* Section Title */}
         <h2 className="text-2xl md:text-3xl font-bold text-center font-apple text-muted-foreground uppercase tracking-wide">
           Mis Libros Publicados
         </h2>
 
         {/* Books Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {books.map((book, index) => (
             <Card
               key={index}
               className="card-premium hover-lift border-golden/20 hover:border-golden/40 transition-all duration-300 group cursor-pointer overflow-hidden"
             >
               <CardContent className="p-6 md:p-8 space-y-6">
                 <a
                   href={book.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block"
                   aria-label={book.title}
                 >
                   {/* Book Cover */}
                   <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-golden ring-1 ring-golden/30 group-hover:ring-golden/50 transition-all duration-300">
                     <img
                       src={book.image}
                       alt={book.alt}
                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                     />
                   </div>
 
                   {/* Title and CTA */}
                   <div className="text-center space-y-4 pt-6">
                     <h3 className="text-xl md:text-2xl font-bold golden-text font-apple">
                       {book.title}
                     </h3>
                     <Button
                       variant="outline"
                       className="btn-cta-secondary font-apple"
                       asChild
                     >
                       <span>
                         Conocer más
                         <ExternalLink className="ml-2 w-4 h-4" />
                       </span>
                     </Button>
                   </div>
                 </a>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default BooksGrid;