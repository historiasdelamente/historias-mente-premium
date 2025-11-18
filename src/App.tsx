import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import GraciasEvaluacion from "./pages/GraciasEvaluacion";
import Unsubscribe from "./pages/Unsubscribe";
import ApegoDetox from "./pages/ApegoDetox";
import ApegoDetoxClasesEnVivo from "./pages/ApegoDetoxClasesEnVivo";
import GraciasApegoDetox from "./pages/GraciasApegoDetox";
import ClaseMeet from "./pages/ClaseMeet";
import GraciasClaseMeet from "./pages/GraciasClaseMeet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Legal pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* Evaluación */}
          <Route path="/gracias-evaluacion" element={<GraciasEvaluacion />} />
          {/* Unsubscribe */}
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* Apego Detox */}
          <Route path="/apegodetox" element={<ApegoDetox />} />
          <Route path="/apego-detox-clases-en-vivo" element={<ApegoDetoxClasesEnVivo />} />
          <Route path="/gracias-apego-detox" element={<GraciasApegoDetox />} />
          {/* Clase Meet Lead Magnet */}
          <Route path="/clase-gratuita" element={<ClaseMeet />} />
          <Route path="/gracias-clase" element={<GraciasClaseMeet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
