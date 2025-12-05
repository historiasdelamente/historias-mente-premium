import { useEffect, useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo-historias-mente.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Heart, Angry, Frown, AlertTriangle, Ghost, Brain, Zap, Lock, Shield } from "lucide-react";

const CORRECT_PASSWORD = "Pitufo1932";

const EMOCIONES = [
  { value: "Traicion", label: "Traición", icon: Heart, color: "from-red-500/20 to-red-600/20" },
  { value: "Devaluacion", label: "Devaluación", icon: Frown, color: "from-yellow-500/20 to-yellow-600/20" },
  { value: "Culpa", label: "Culpa", icon: Heart, color: "from-pink-500/20 to-pink-600/20" },
  { value: "Verguenza", label: "Vergüenza", icon: Ghost, color: "from-orange-500/20 to-orange-600/20" },
  { value: "Confusion", label: "Confusión", icon: Brain, color: "from-purple-500/20 to-purple-600/20" },
  { value: "Dolor", label: "Dolor", icon: Frown, color: "from-pink-300/20 to-pink-400/20" },
  { value: "Rabieta interna cuando el no está", label: "Rabieta interna", icon: Angry, color: "from-green-500/20 to-green-600/20" },
  { value: "Miedo a la libertad: te quedas con tu abusador", label: "Miedo a la libertad", icon: AlertTriangle, color: "from-yellow-400/20 to-yellow-500/20" },
  { value: "Narcisismo encubierto", label: "Narcisismo encubierto", icon: Ghost, color: "from-orange-400/20 to-orange-500/20" },
  { value: "Narcisista", label: "Narcisista", icon: Zap, color: "from-purple-400/20 to-purple-500/20" },
  { value: "Narcisismo maligno", label: "Narcisismo maligno", icon: AlertTriangle, color: "from-green-400/20 to-green-500/20" },
  { value: "tecnicas unicas para superar relaciones narcisistas", label: "Técnicas para superar", icon: Sparkles, color: "from-gray-400/20 to-gray-500/20" },
];

// Las opciones de Generar se cargan desde Airtable
interface GenerarOption {
  value: string;
  label: string;
}

const W = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [emocion, setEmocion] = useState<string>("");
  const [emocionPersonalizada, setEmocionPersonalizada] = useState<string>("");
  const [generar, setGenerar] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generarOptions, setGenerarOptions] = useState<GenerarOption[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(false);

  // Cargar opciones de Generar desde Airtable
  const fetchGenerarOptions = async () => {
    setLoadingOptions(true);
    try {
      const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook/w-options", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        // Esperamos un array de strings o objetos con las opciones
        if (Array.isArray(data)) {
          const options = data.map((item: string | { name?: string; value?: string }) => {
            if (typeof item === 'string') {
              return { value: item, label: item };
            }
            return { value: item.name || item.value || '', label: item.name || item.value || '' };
          }).filter((opt: GenerarOption) => opt.value);
          setGenerarOptions(options);
        }
      }
    } catch (error) {
      console.error("Error fetching options:", error);
      // Fallback a opciones por defecto si falla
      setGenerarOptions([
        { value: "Reel Tiktok", label: "Reel TikTok" },
        { value: "Live Claude", label: "Live Claude" },
        { value: "Prompt banana", label: "Prompt Banana" },
        { value: "Prompt video grok", label: "Prompt Video Grok" },
        { value: "Historias", label: "Historias" },
        { value: "Investigacion de Temas", label: "Investigación de Temas" },
      ]);
    } finally {
      setLoadingOptions(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchGenerarOptions();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("¡Acceso concedido!");
    } else {
      toast.error("Contraseña incorrecta");
      setPassword("");
    }
  };

  const handleGenerarToggle = (value: string) => {
    setGenerar(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    const emocionFinal = emocionPersonalizada.trim() || emocion;
    
    if (!emocionFinal || generar.length === 0) {
      toast.error("Por favor selecciona o escribe una emoción y al menos un tipo de contenido");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook/w", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Emocion: emocionFinal,
          Generar: generar,
          Estado: "Preparado",
        }),
      });

      if (response.ok) {
        toast.success("¡Contenido en proceso de generación!");
        setEmocion("");
        setEmocionPersonalizada("");
        setGenerar([]);
      } else {
        toast.error("Error al enviar. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Password Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-golden/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 w-full max-w-md px-4">
          <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-2xl shadow-golden/5">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full scale-110" />
                <img 
                  src={logo} 
                  alt="Historias de la Mente" 
                  className="w-24 h-auto relative z-10"
                />
              </div>
            </div>

            {/* Shield Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-golden" />
              </div>
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-center text-foreground mb-2">
              Zona Segura
            </h1>
            <p className="text-muted-foreground text-center text-sm mb-6">
              Área exclusiva de Historias de la Mente
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Ingresa la contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 py-6 bg-background/50 border-border/50 focus:border-golden"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-golden to-golden/80 hover:from-golden/90 hover:to-golden/70 text-background font-semibold rounded-xl"
              >
                Acceder
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Main Form
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-golden/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500" />
        
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen py-8 px-4">
        {/* Logo */}
        <div className="mb-6 relative group">
          <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full scale-110 group-hover:bg-golden/30 transition-all duration-500" />
          <img 
            src={logo} 
            alt="Historias de la Mente" 
            className="w-32 md:w-40 h-auto relative z-10 drop-shadow-lg"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-block px-4 py-1.5 border border-golden/30 rounded-full bg-golden/5 backdrop-blur-sm">
            <span className="text-golden text-xs md:text-sm font-medium tracking-widest uppercase">
              Generador de Contenido
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">
            Crea tu <span className="golden-text">Contenido</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Selecciona una emoción y el tipo de contenido que deseas generar
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-2xl space-y-8">
          
          {/* Emoción Selection */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-golden" />
              ¿Qué emoción quieres explorar?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {EMOCIONES.map((item) => {
                const Icon = item.icon;
                const isSelected = emocion === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => setEmocion(item.value)}
                    className={`
                      relative p-4 rounded-xl border-2 transition-all duration-300
                      flex flex-col items-center gap-2 group
                      ${isSelected 
                        ? 'border-golden bg-gradient-to-br ' + item.color + ' scale-105 shadow-lg shadow-golden/20' 
                        : 'border-border/50 bg-card/50 hover:border-golden/50 hover:bg-card/80'
                      }
                    `}
                  >
                    <Icon className={`w-6 h-6 transition-colors ${isSelected ? 'text-golden' : 'text-muted-foreground group-hover:text-golden/70'}`} />
                    <span className={`text-sm font-medium ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.label}
                    </span>
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-golden rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Campo de emoción personalizada */}
            <div className="mt-4">
              <Input
                type="text"
                placeholder="O escribe tu propia emoción/tema..."
                value={emocionPersonalizada}
                onChange={(e) => {
                  setEmocionPersonalizada(e.target.value);
                  if (e.target.value.trim()) {
                    setEmocion(""); // Clear selection if typing custom
                  }
                }}
                className="py-4 bg-card/50 border-border/50 focus:border-golden placeholder:text-muted-foreground/60"
              />
              {emocionPersonalizada && (
                <p className="text-xs text-golden mt-2">
                  Se usará: "{emocionPersonalizada}"
                </p>
              )}
            </div>
          </div>

          {/* Generar Selection - Multiple */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-golden" />
              Generar
              <span className="text-xs text-muted-foreground font-normal">(selección múltiple)</span>
            </h2>
            {loadingOptions ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-6 h-6 border-2 border-golden/30 border-t-golden rounded-full animate-spin" />
                <span className="ml-2 text-muted-foreground text-sm">Cargando opciones...</span>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {generarOptions.map((item) => {
                  const isSelected = generar.includes(item.value);
                  return (
                    <button
                      key={item.value}
                      onClick={() => handleGenerarToggle(item.value)}
                      className={`
                        p-4 rounded-xl border-2 transition-all duration-300 relative
                        ${isSelected 
                          ? 'border-golden bg-gradient-to-br from-golden/20 to-golden/5 text-foreground shadow-lg shadow-golden/10' 
                          : 'border-border/50 bg-card/50 text-muted-foreground hover:border-golden/50 hover:bg-card/80'
                        }
                      `}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-golden rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
            {generar.length > 0 && (
              <p className="text-xs text-golden">
                Seleccionados: {generar.join(", ")}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || (!emocion && !emocionPersonalizada.trim()) || generar.length === 0}
              className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-golden to-golden/80 hover:from-golden/90 hover:to-golden/70 text-background rounded-xl shadow-lg shadow-golden/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Generando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generar Contenido
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex items-center gap-3 text-muted-foreground/60 text-xs">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-golden/30 to-transparent" />
          <span className="tracking-wider">HISTORIAS DE LA MENTE</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-golden/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default W;
