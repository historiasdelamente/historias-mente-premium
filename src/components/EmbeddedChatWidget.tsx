import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type Message = {
  role: "bot" | "user";
  content: string;
};

export const EmbeddedChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hola, soy Javier Vieira, psicólogo especialista.\n\nTe haré 9 preguntas sobre tu pareja basadas en criterios DSM-5.\n\nSolo necesito tu honestidad. No hay respuestas incorrectas.\n\n¿Cómo te llamas?"
    }
  ]);
  const [step, setStep] = useState(0);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [respuestas, setRespuestas] = useState<number[]>([]);
  const [notasAdicionales, setNotasAdicionales] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll cuando se agreguen nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

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

    const preguntaActual = nuevasRespuestas.length - 1;

    setTimeout(() => {
      if (preguntaActual < 8) {
        const emojis = ["2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
        addBotMessage(`${emojis[preguntaActual]} ${preguntas[preguntaActual + 1]}`);
      } else {
        addBotMessage("¡Listo!\n\n¿Algo más que quieras agregar? (Opcional)");
        setStep(4);
      }
    }, 500);
  };

  const handleNotasSubmit = async () => {
    if (notasAdicionales.trim()) {
      addUserMessage(notasAdicionales);
    }
    
    setTimeout(async () => {
      addBotMessage(`Gracias, ${nombre}.\n\nProcesando tu evaluación...\n\nRecibirás tu análisis en ${email} en 10 minutos.\n\nRevisa spam también.`);
      setIsProcessing(true);

      try {
        const response = await fetch("https://n8n-n8n.ya3fud.easypanel.host/webhook-test/evaluacion-narcisismo", {
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
        <div className="flex gap-2">
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
        <div className="flex gap-2">
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
        <div className="space-y-2 md:space-y-3">
          <div className="flex gap-1.5 md:gap-2 justify-between">
            {[1, 2, 3, 4, 5].map((valor) => (
              <Button
                key={valor}
                onClick={() => handleRespuesta(valor)}
                className="flex-1 bg-muted hover:bg-primary hover:text-primary-foreground border-border text-sm md:text-base px-2 md:px-4"
                variant="outline"
              >
                {valor}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-0.5 md:gap-1 text-[10px] sm:text-xs text-muted-foreground text-center">
            <span>Nunca</span>
            <span>Rara-mente</span>
            <span>A veces</span>
            <span>Frecuen-temente</span>
            <span>Siempre</span>
          </div>
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
    <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto">
        {/* Texto Introductorio */}
        <div className="text-center mb-6 md:mb-8 space-y-3 md:space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold golden-text font-apple px-2">
            ¿Sientes que algo no está bien en tu relación o contigo mismo/a?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-apple px-2">
            Descubre en pocos pasos si el narcisismo es la causa de tu dolor.
          </p>
        </div>

        {/* Chat Container con Glow Effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-golden via-golden-light to-golden rounded-2xl opacity-20 blur-xl"></div>
          
          {/* Chat Box */}
          <div className="relative bg-card border border-golden/30 rounded-2xl shadow-golden overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-muted/50 p-4 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Progreso</span>
                <span className="text-sm text-muted-foreground">{progreso}/{totalPreguntas}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-golden to-golden-light h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(progreso / totalPreguntas) * 100}%` }}
                />
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 md:p-6 space-y-4 max-h-[400px] md:max-h-[500px] overflow-y-auto scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[80%] rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                      msg.role === "bot"
                        ? "bg-gradient-to-r from-golden/20 to-golden-light/20 text-foreground border border-golden/30"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm md:text-base whitespace-pre-line font-apple">{msg.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 border-t border-border bg-muted/30">
              {renderInput()}
            </div>

            {/* Legal Notice */}
            <div className="px-3 md:px-4 pb-3 md:pb-4">
              <p className="text-[10px] sm:text-xs text-muted-foreground text-center font-apple">
                Al continuar, aceptas nuestra Política de Privacidad. Esta evaluación es orientativa, no reemplaza diagnóstico profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};