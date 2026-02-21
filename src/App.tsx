import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import GraciasEvaluacion from "./pages/GraciasEvaluacion";
import Unsubscribe from "./pages/Unsubscribe";
import ApegoDetox from "./pages/ApegoDetoxV2";
import ApegoDetoxClasesEnVivo from "./pages/ApegoDetoxClasesEnVivo";
import ClaseApegoDetox from "./pages/ClaseApegoDetox";
import GraciasApegoDetox from "./pages/GraciasApegoDetox";
import ClaseMeet from "./pages/ClaseMeet";
import GraciasClaseMeet from "./pages/GraciasClaseMeet";
import ClaseApegoDetoxMarzo from "./pages/ClaseApegoDetoxMarzo";
import GraciasClaseMarzo from "./pages/GraciasClaseMarzo";
import W from "./pages/W";
import LaNinaQueAprendioAQuedarse from "./pages/LaNinaQueAprendioAQuedarse";
import CookieConsentBanner from "./components/CookieConsentBanner";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
            <Route path="/clase-apegodetox" element={<ClaseApegoDetox />} />
            {/* Clase Meet Lead Magnet */}
            <Route path="/clase-gratuita" element={<ClaseMeet />} />
            <Route path="/gracias-clase" element={<GraciasClaseMeet />} />
            {/* Clase Apego Detox Marzo 2026 */}
            <Route path="/clase-apego-detox-marzo" element={<ClaseApegoDetoxMarzo />} />
            <Route path="/gracias-clase-marzo" element={<GraciasClaseMarzo />} />
            {/* W Form Page */}
            <Route path="/w" element={<W />} />
            {/* Ebook - La Niña Que Aprendió a Quedarse Callada */}
            <Route path="/la-nina-que-aprendio-a-quedarse-callada" element={<LaNinaQueAprendioAQuedarse />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* GDPR Cookie Consent Banner */}
          <CookieConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
