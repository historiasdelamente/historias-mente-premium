import { useEffect, useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo-historias-mente.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Heart, Lock, Shield, Loader2 } from "lucide-react";

const CORRECT_PASSWORD = "Pitufo1932";

// Interfaces para opciones dinámicas
interface SelectOption {
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
  
  // Estados para opciones cargadas desde Airtable
  const [emocionOptions, setEmocionOptions] = useState<SelectOption[]>([]);
  const [generarOptions, setGenerarOptions] = useState<SelectOption[]>([]);
  const [loadingEmociones, setLoadingEmociones] = useState(false);
  const [loadingGenerar, setLoadingGenerar] = useState(false);

  // Cargar opciones de Emoción desde Airtable
  const fetchEmocionOptions = async () => {
    setLoadingEmociones(true);
    try {
      const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook/w-emociones", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          const options = data.map((item: string | { name?: string; value?: string; Emocion?: string }) => {
            if (typeof item === 'string') {
              return { value: item, label: item };
            }
            const val = item.Emocion || item.name || item.value || '';
            return { value: val, label: val };
          }).filter((opt: SelectOption) => opt.value);
          setEmocionOptions(options);
        }
      }
    } catch (error) {
      console.error("Error fetching emociones:", error);
    } finally {
      setLoadingEmociones(false);
    }
  };

  // Cargar opciones de Generar desde Airtable
  const fetchGenerarOptions = async () => {
    setLoadingGenerar(true);
    try {
      const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook/w-generar", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          const options = data.map((item: string | { name?: string; value?: string; Generar?: string }) => {
            if (typeof item === 'string') {
              return { value: item, label: item };
            }
            const val = item.Generar || item.name || item.value || '';
            return { value: val, label: val };
          }).filter((opt: SelectOption) => opt.value);
          setGenerarOptions(options);
        }
      }
    } catch (error) {
      console.error("Error fetching generar options:", error);
    } finally {
      setLoadingGenerar(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Cargar ambas opciones cuando se autentica
  useEffect(() => {
    if (isAuthenticated) {
      fetchEmocionOptions();
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
    // Usar la emoción personalizada si existe, si no usar la seleccionada
    const emocionFinal = emocionPersonalizada.trim() || emocion;
    
    if (!emocionFinal || generar.length === 0) {
      toast.error("Por favor selecciona o escribe una emoción y al menos un tipo de contenido");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Enviar los valores EXACTOS seleccionados por el usuario
      const payload = {
        Emocion: emocionFinal,
        Generar: generar, // Array con los valores seleccionados por el usuario
        Estado: "Preparado",
      };
      
      console.log("Enviando a Airtable:", JSON.stringify(payload, null, 2));
      
      const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook/w", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
          
          {/* Emoción Selection - Cargado desde Airtable */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-golden" />
              ¿Qué emoción quieres explorar?
            </h2>
            
            {loadingEmociones ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 text-golden animate-spin" />
                <span className="ml-2 text-muted-foreground text-sm">Cargando emociones...</span>
              </div>
            ) : emocionOptions.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {emocionOptions.map((item) => {
                  const isSelected = emocion === item.value;
                  return (
                    <button
                      key={item.value}
                      onClick={() => {
                        setEmocion(item.value);
                        setEmocionPersonalizada(""); // Limpiar personalizada al seleccionar
                      }}
                      className={`
                        relative p-4 rounded-xl border-2 transition-all duration-300
                        flex flex-col items-center gap-2 group
                        ${isSelected 
                          ? 'border-golden bg-gradient-to-br from-golden/20 to-golden/5 scale-105 shadow-lg shadow-golden/20' 
                          : 'border-border/50 bg-card/50 hover:border-golden/50 hover:bg-card/80'
                        }
                      `}
                    >
                      <Heart className={`w-6 h-6 transition-colors ${isSelected ? 'text-golden' : 'text-muted-foreground group-hover:text-golden/70'}`} />
                      <span className={`text-sm font-medium text-center ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {item.label}
                      </span>
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-golden rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">
                No hay emociones disponibles. Usa el campo de abajo.
              </p>
            )}
            
            {/* Campo de emoción personalizada */}
            <div className="mt-4">
              <Input
                type="text"
                placeholder="O escribe tu propia emoción/tema..."
                value={emocionPersonalizada}
                onChange={(e) => {
                  setEmocionPersonalizada(e.target.value);
                  if (e.target.value.trim()) {
                    setEmocion(""); // Limpiar selección si escribe personalizada
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
            
            {/* Mostrar selección actual */}
            {emocion && !emocionPersonalizada && (
              <p className="text-xs text-golden">
                Seleccionado: {emocion}
              </p>
            )}
          </div>

          {/* Generar Selection - Multiple - Cargado desde Airtable */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-golden" />
              Generar
              <span className="text-xs text-muted-foreground font-normal">(selección múltiple)</span>
            </h2>
            
            {loadingGenerar ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 text-golden animate-spin" />
                <span className="ml-2 text-muted-foreground text-sm">Cargando opciones...</span>
              </div>
            ) : generarOptions.length > 0 ? (
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
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">
                No hay opciones disponibles. Configura el webhook /w-generar.
              </p>
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
                  <Loader2 className="w-5 h-5 animate-spin" />
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
