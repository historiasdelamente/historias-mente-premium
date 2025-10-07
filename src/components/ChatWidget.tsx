import { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
}

const PREGUNTAS_DSM5 = [
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

const ESCALA_LABELS = ['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'];
const EMOJIS_NUMEROS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [respuestas, setRespuestas] = useState<number[]>([]);
  const [notasAdicionales, setNotasAdicionales] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hola, soy la Dra. Ana Belén, psicóloga clínica.\n\nTe haré 9 preguntas sobre tu pareja basadas en criterios DSM-5.\n\nSolo necesito tu honestidad. No hay respuestas incorrectas.\n\n¿Cómo te llamas?");
    }
  }, [isOpen]);

  const addBotMessage = (text: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text
      }]);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text
    }]);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    if (currentStep === 0) {
      setNombre(inputValue);
      addBotMessage(`Encantada, ${inputValue}.\n\nPara enviarte tu análisis, ¿cuál es tu email?`);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      if (!validateEmail(inputValue)) {
        addBotMessage("Por favor, ingresa un email válido.");
        setInputValue('');
        return;
      }
      setEmail(inputValue);
      addBotMessage("Perfecto. Usaremos esta escala:\n\n1 = Nunca\n2 = Raramente\n3 = A veces\n4 = Frecuentemente\n5 = Siempre\n\n¿Lista?");
      setCurrentStep(2);
    }

    setInputValue('');
  };

  const handleStartQuestions = () => {
    addUserMessage("Estoy lista");
    addBotMessage(`${EMOJIS_NUMEROS[0]} ${PREGUNTAS_DSM5[0]}`);
    setCurrentStep(3);
  };

  const handleRespuesta = (valor: number) => {
    addUserMessage(ESCALA_LABELS[valor - 1]);
    const nuevasRespuestas = [...respuestas, valor];
    setRespuestas(nuevasRespuestas);

    if (nuevasRespuestas.length < 9) {
      const nextIndex = nuevasRespuestas.length;
      addBotMessage(`${EMOJIS_NUMEROS[nextIndex]} ${PREGUNTAS_DSM5[nextIndex]}`);
    } else {
      addBotMessage("¡Listo!\n\n¿Algo más que quieras agregar? (Opcional)");
      setCurrentStep(4);
    }
  };

  const handleNotasAdicionales = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      setNotasAdicionales(inputValue);
    } else {
      addUserMessage("Sin comentarios adicionales");
    }
    setInputValue('');
    enviarEvaluacion(inputValue.trim());
  };

  const enviarEvaluacion = async (notas: string) => {
    addBotMessage(`Gracias, ${nombre}.\n\nProcesando tu evaluación...`);
    setIsSending(true);

    const data = {
      nombre,
      email,
      respuestas,
      notas_adicionales: notas || ""
    };

    try {
      const response = await fetch('https://n8n-n8n.ya3fud.easypanel.host/webhook/evaluacion-narcisismo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Error en el envío');

      localStorage.setItem('evaluacion_email', email);
      localStorage.setItem('evaluacion_nombre', nombre);

      setTimeout(() => {
        addBotMessage(`Recibirás tu análisis en ${email} en 10 minutos.\n\nRevisa spam también.`, 500);
        setTimeout(() => {
          setIsOpen(false);
          navigate('/gracias-evaluacion');
        }, 3000);
      }, 2000);

    } catch (error) {
      setIsSending(false);
      addBotMessage("❌ Hubo un problema.\n\nIntenta nuevamente o contáctanos.");
      toast.error("Error al enviar la evaluación");
      setCurrentStep(5); // Estado de error
    }
  };

  const handleReintentar = () => {
    addUserMessage("Reintentar envío");
    enviarEvaluacion(notasAdicionales);
  };

  const getProgress = () => {
    if (currentStep === 0) return 0;
    if (currentStep === 1) return 1;
    if (currentStep === 2) return 2;
    if (currentStep === 3) return 3 + respuestas.length;
    return 12;
  };

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-4 flex flex-col items-center justify-center gap-2 w-20 h-20 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-medium text-center leading-tight">¿Tu pareja es narcisista?</span>
        </button>
      )}

      {/* Modal del chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Evaluación Narcisismo</h3>
                <div className="text-xs opacity-90 mt-1">
                  Paso {getProgress()}/12
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Barra de progreso */}
            <div className="bg-secondary h-2">
              <div
                className="h-full bg-gradient-to-r from-orange-600 to-orange-700 transition-all duration-500"
                style={{ width: `${(getProgress() / 12) * 100}%` }}
              />
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 whitespace-pre-line ${
                      msg.type === 'user'
                        ? 'bg-secondary text-foreground'
                        : 'bg-gradient-to-br from-orange-600 to-orange-700 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-border p-4 bg-card">
              {currentStep === 0 || currentStep === 1 ? (
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={currentStep === 0 ? "Tu nombre..." : "Tu email..."}
                    type={currentStep === 1 ? "email" : "text"}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              ) : currentStep === 2 ? (
                <Button onClick={handleStartQuestions} className="w-full">
                  Estoy lista
                </Button>
              ) : currentStep === 3 && !isSending ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Button
                        key={num}
                        onClick={() => handleRespuesta(num)}
                        variant="outline"
                        className="h-12 flex flex-col gap-1 text-xs"
                      >
                        <span className="text-lg font-bold">{num}</span>
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-1 text-[10px] text-muted-foreground text-center">
                    {ESCALA_LABELS.map((label, i) => (
                      <div key={i}>{label}</div>
                    ))}
                  </div>
                </div>
              ) : currentStep === 4 && !isSending ? (
                <div className="space-y-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Comentarios adicionales (opcional)..."
                    rows={3}
                  />
                  <Button onClick={handleNotasAdicionales} className="w-full">
                    Enviar Evaluación
                  </Button>
                </div>
              ) : currentStep === 5 ? (
                <Button onClick={handleReintentar} className="w-full" variant="destructive">
                  Reintentar
                </Button>
              ) : null}

              <p className="text-[10px] text-muted-foreground text-center mt-3">
                Al continuar, aceptas nuestra Política de Privacidad. Esta evaluación es orientativa, no reemplaza diagnóstico profesional.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
