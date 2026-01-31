import { MessageCircle, Send, Mail } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Toca el botón de WhatsApp",
    description: "El botón verde que ves arriba. Un clic y listo."
  },
  {
    icon: Send,
    title: "Envía el mensaje automático",
    description: "Te respondo de inmediato con tu enlace de acceso directo."
  },
  {
    icon: Mail,
    title: "Revisa tu correo también",
    description: "Ahí te envié un regalo que necesitas ver ANTES de entrar."
  }
];

const StepsSection = () => {
  return (
    <section 
      className="py-20 md:py-28 px-5 relative"
      style={{ 
        background: '#000000',
        borderTop: '1px solid rgba(255,215,0,0.15)',
        borderBottom: '1px solid rgba(255,215,0,0.15)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[3%] text-4xl opacity-10 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[25%] right-[5%] text-5xl opacity-10 text-[#1a1a1a]">💔</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-12 md:mb-16"
          style={{ color: '#FFFFFF' }}
        >
          Entra en <span style={{ color: '#FFD700' }}>30 segundos</span>
        </h2>

        {/* Steps Grid */}
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-x-2 group"
                style={{ 
                  background: 'rgba(26,26,26,0.6)',
                  border: '1px solid rgba(255,215,0,0.2)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 md:w-[70px] md:h-[70px] min-w-[60px] rounded-full flex items-center justify-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    boxShadow: '0 5px 20px rgba(255,215,0,0.4)'
                  }}
                >
                  <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: '#000000' }} />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{ color: '#FFFFFF' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-base md:text-lg"
                    style={{ color: '#CCCCCC' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
