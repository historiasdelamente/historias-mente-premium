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
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll cuando se agreguen nuevos mensajes (más lento)
  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 300);
  }, [messages]);

  const preguntas = [
    "¿Sientes que tu pareja cree que es superior o más importante que los demás?",
    "¿Tu pareja vive en un mundo de fantasías donde es exitoso, poderoso o el amor perfecto?",
    "¿Tu pareja solo se relaciona con personas 'importantes' y te hace sentir que no eres suficiente?",
    "¿Necesita constantemente que le digas lo increíble que es o se enoja si no le prestas atención?",
    "¿Espera que todos, incluyéndote a ti, le den un trato especial sin cuestionarlo?",
    "¿Sientes que te usa para conseguir lo que quiere, sin importarle cómo te sientes?",
    "¿Ignora completamente tus emociones cuando intentas expresar cómo te sientes?",
    "¿Se pone celoso del éxito de otros o cree que todos le tienen envidia?",
    "¿Te trata con arrogancia o desprecio, haciéndote sentir pequeña?"
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
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre..."
            className="flex-1 bg-muted border-border text-foreground text-lg md:text-lg h-14 md:h-14"
            onKeyPress={(e) => e.key === "Enter" && handleNombreSubmit()}
          />
          <Button onClick={handleNombreSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto px-8 md:px-8 text-lg md:text-lg h-14 md:h-14">
            Enviar
          </Button>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 bg-muted border-border text-foreground text-lg md:text-lg h-14 md:h-14"
            onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
          />
          <Button onClick={handleEmailSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto px-8 md:px-8 text-lg md:text-lg h-14 md:h-14">
            Enviar
          </Button>
        </div>
      );
    }

    if (step === 2) {
      return (
        <Button onClick={handleReady} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg md:text-lg h-14 md:h-14">
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
              <p className="text-sm text-muted-foreground mt-2 font-apple">Cargando siguiente pregunta...</p>
            </div>
          ) : (
            <>
              <div className="flex gap-2 md:gap-3 justify-between">
                {[1, 2, 3, 4, 5].map((valor) => (
                  <Button
                    key={valor}
                    onClick={() => handleRespuesta(valor)}
                    className="flex-1 bg-muted hover:bg-primary hover:text-primary-foreground border-border text-xl md:text-2xl font-bold h-14 md:h-16"
                    variant="outline"
                  >
                    {valor}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-1 text-xs sm:text-sm text-muted-foreground text-center leading-tight">
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
            className="bg-muted border-border text-foreground min-h-[120px] text-lg md:text-lg"
          />
          <Button onClick={handleNotasSubmit} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg md:text-lg h-14 md:h-14" disabled={isProcessing}>
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
    <section className="w-full">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        {/* Texto Introductorio */}
        <div className="text-center mb-6 md:mb-8 space-y-4">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold golden-text font-apple leading-tight">
            ¿Sientes que algo no está bien en tu relación o contigo mismo/a?
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-apple leading-relaxed">
            Descubre en pocos pasos si el narcisismo es la causa de tu dolor.
          </p>
        </div>

        {/* Chat Container con Glow Effect */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-golden via-golden-light to-golden rounded-2xl opacity-20 blur-xl"></div>
          
          {/* Chat Box */}
          <div className="relative bg-card border border-golden/30 rounded-2xl shadow-golden overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-muted/50 p-3 md:p-4 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm font-medium text-foreground">Progreso</span>
                <span className="text-xs md:text-sm text-muted-foreground">{progreso}/{totalPreguntas}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5 md:h-2">
                <div
                  className="bg-gradient-to-r from-golden to-golden-light h-1.5 md:h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(progreso / totalPreguntas) * 100}%` }}
                />
              </div>
            </div>

            {/* Messages */}
            <div className="p-5 md:p-6 space-y-4 min-h-[350px] max-h-[500px] overflow-y-auto scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] md:max-w-[75%] rounded-2xl px-5 py-4 md:px-5 md:py-4 ${
                      msg.role === "bot"
                        ? "bg-gradient-to-r from-golden/20 to-golden-light/20 text-foreground border border-golden/30"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-lg md:text-lg whitespace-pre-line font-apple leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 md:p-5 border-t border-border bg-muted/30">
              {renderInput()}
            </div>

            {/* Legal Notice */}
            <div className="px-5 md:px-5 pb-5 md:pb-5">
              <p className="text-sm sm:text-sm text-muted-foreground text-center font-apple leading-relaxed">
                Al continuar, aceptas nuestra Política de Privacidad. Esta evaluación es orientativa, no reemplaza diagnóstico profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};