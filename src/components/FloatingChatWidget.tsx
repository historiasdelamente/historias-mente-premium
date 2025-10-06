import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type Message = {
  role: "bot" | "user";
  content: string;
};

export interface FloatingChatWidgetRef {
  openChat: () => void;
}

export const FloatingChatWidget = forwardRef<FloatingChatWidgetRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [respuestas, setRespuestas] = useState<number[]>([]);
  const [notasAdicionales, setNotasAdicionales] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Exponer método para abrir el chat desde componentes externos
  useImperativeHandle(ref, () => ({
    openChat: () => setIsOpen(true)
  }));

  const preguntas = [
    "¿Tu pareja tiene un sentido grandioso de auto-importancia?\n\n(Exagera logros, espera reconocimiento sin respaldo)",
    "¿Está obsesionado con fantasías de éxito ilimitado, poder o amor ideal?",
    "¿Cree que es especial y solo debe relacionarse con personas de alto estatus?",
    "¿Requiere admiración excesiva constantemente?",
    "¿Tiene sentido de privilegio y expectativas irrazonables de tratamiento especial?",
    "¿Es explotador? ¿Se aprovecha de otros para sus fines?",
    "¿Carece de empatía? ¿No reconoce sentimientos de otros?",
    "¿Siente envidia o cree que otros le envidian?",
    "¿Muestra arrogancia y actitudes altivas?"
  ];

  // Auto-scroll cuando se agreguen nuevos mensajes
  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 300);
  }, [messages]);

  // Inicializar chat cuando se abre
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "bot",
          content: "Hola, soy Javier Vieira, psicólogo especialista.\n\nTe haré 9 preguntas sobre tu pareja basadas en criterios DSM-5.\n\nSolo necesito tu honestidad. No hay respuestas incorrectas.\n\n¿Cómo te llamas?"
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, { role: "bot", content }]);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, { role: "user", content }]);
  };

  const handleNombreSubmit = () => {
    if (!nombre.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu nombre",
        variant: "destructive"
      });
      return;
    }
    addUserMessage(nombre);
    setTimeout(() => {
      addBotMessage(`Encantada, ${nombre}.\n\nPara enviarte tu análisis, ¿cuál es tu email?`);
      setStep(1);
    }, 500);
  };

  const handleEmailSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido",
        variant: "destructive"
      });
      return;
    }
    addUserMessage(email);
    setTimeout(() => {
      addBotMessage("Perfecto. Usaremos esta escala:\n\n1 = Nunca\n2 = Raramente\n3 = A veces\n4 = Frecuentemente\n5 = Siempre\n\n¿Lista?");
      setStep(2);
    }, 500);
  };

  const handleReady = () => {
    addUserMessage("Estoy lista");
    setTimeout(() => {
      addBotMessage(`1️⃣ ${preguntas[0]}`);
      setStep(3);
    }, 500);
  };

  const handleRespuesta = (valor: number) => {
    const nuevasRespuestas = [...respuestas, valor];
    setRespuestas(nuevasRespuestas);
    addUserMessage(valor.toString());
    setIsLoadingNext(true);

    const preguntaActual = nuevasRespuestas.length - 1;

    setTimeout(() => {
      setIsLoadingNext(false);
      if (preguntaActual < 8) {
        const emojis = ["2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
        addBotMessage(`${emojis[preguntaActual]} ${preguntas[preguntaActual + 1]}`);
      } else {
        addBotMessage("¡Listo!\n\n¿Algo más que quieras agregar? (Opcional)");
        setStep(4);
      }
    }, 800);
  };

  const handleNotasSubmit = async () => {
    if (notasAdicionales.trim()) {
      addUserMessage(notasAdicionales);
    }
    
    setTimeout(async () => {
      addBotMessage(`Gracias, ${nombre}.\n\nProcesando tu evaluación...\n\nRecibirás tu análisis en ${email} en 10 minutos.\n\nRevisa spam también.`);
      setIsProcessing(true);

      try {
        const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook/evaluacion-narcisismo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nombre,
            email,
            respuestas,
            notas_adicionales: notasAdicionales
          })
        });

        if (!response.ok) {
          throw new Error("Error al enviar los datos");
        }

        localStorage.setItem("evaluacion_email", email);
        setTimeout(() => {
          navigate("/gracias-evaluacion");
        }, 2000);

      } catch (error) {
        console.error("Error:", error);
        setIsProcessing(false);
        toast({
          title: "Error",
          description: "❌ Hubo un problema. Intenta nuevamente o contáctanos.",
          variant: "destructive"
        });
      }
    }, 500);
  };

  const renderInput = () => {
    if (step === 0) {
      return (
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre..."
            className="flex-1 bg-muted border-border text-foreground"
            onKeyPress={(e) => e.key === "Enter" && handleNombreSubmit()}
          />
          <Button onClick={handleNombreSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Enviar
          </Button>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 bg-muted border-border text-foreground"
            onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
          />
          <Button onClick={handleEmailSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Enviar
          </Button>
        </div>
      );
    }

    if (step === 2) {
      return (
        <Button onClick={handleReady} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Estoy lista
        </Button>
      );
    }

    if (step === 3) {
      return (
        <div className="space-y-3">
          {isLoadingNext ? (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-golden"></div>
              <p className="text-xs text-muted-foreground mt-2 font-apple">Cargando siguiente pregunta...</p>
            </div>
          ) : (
            <>
              <div className="flex gap-2 justify-between">
                {[1, 2, 3, 4, 5].map((valor) => (
                  <Button
                    key={valor}
                    onClick={() => handleRespuesta(valor)}
                    className="flex-1 bg-muted hover:bg-primary hover:text-primary-foreground border-border text-lg font-bold h-12"
                    variant="outline"
                  >
                    {valor}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-1 text-[10px] text-muted-foreground text-center leading-tight">
                <span>Nunca</span>
                <span>Rara-<br/>mente</span>
                <span>A<br/>veces</span>
                <span>Frecuen-<br/>temente</span>
                <span>Siempre</span>
              </div>
            </>
          )}
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className="space-y-2">
          <Textarea
            value={notasAdicionales}
            onChange={(e) => setNotasAdicionales(e.target.value)}
            placeholder="Escribe aquí (opcional)..."
            className="bg-muted border-border text-foreground min-h-[80px]"
          />
          <Button onClick={handleNotasSubmit} className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isProcessing}>
            {isProcessing ? "Procesando..." : "Enviar"}
          </Button>
        </div>
      );
    }

    return null;
  };

  const totalPreguntas = 11;
  const progreso = step === 0 ? 1 : step === 1 ? 2 : step === 2 ? 3 : step === 3 ? 3 + respuestas.length : 10;

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-golden to-golden-light text-black rounded-2xl shadow-golden hover:shadow-xl transition-all duration-300 hover:scale-105 p-4 flex flex-col items-center justify-center gap-2 w-24 h-24 animate-pulse"
          aria-label="Abrir chat de evaluación"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="text-xs font-bold text-center leading-tight">¿Eres narcisista?</span>
        </button>
      )}

      {/* Modal del chat flotante */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[450px] max-w-[450px]">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-golden via-golden-light to-golden rounded-2xl opacity-20 blur-xl"></div>
            
            {/* Chat Box */}
            <div className="relative bg-card border border-golden/30 rounded-2xl shadow-golden overflow-hidden flex flex-col h-[600px]">
              {/* Header */}
              <div className="bg-gradient-to-r from-golden/20 to-golden-light/20 border-b border-golden/30 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg golden-text font-apple">Evaluación Narcisismo</h3>
                  <div className="text-xs text-muted-foreground mt-1 font-apple">
                    Paso {progreso}/{totalPreguntas}
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-golden/20 rounded-lg p-2 transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="bg-muted/50 p-3 border-b border-border">
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-golden to-golden-light h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(progreso / totalPreguntas) * 100}%` }}
                  />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto scroll-smooth bg-background">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === "bot"
                          ? "bg-gradient-to-r from-golden/20 to-golden-light/20 text-foreground border border-golden/30"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line font-apple leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border bg-muted/30">
                {renderInput()}
              </div>

              {/* Legal Notice */}
              <div className="px-4 pb-3">
                <p className="text-[10px] text-muted-foreground text-center font-apple leading-relaxed">
                  Al continuar, aceptas nuestra Política de Privacidad. Esta evaluación es orientativa, no reemplaza diagnóstico profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
