import WhatsAppButton from "./WhatsAppButton";

const MobileStickyButton = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 p-4 pb-5 z-50 md:hidden"
      style={{ 
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.95) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 -5px 20px rgba(0,0,0,0.5)'
      }}
    >
      <WhatsAppButton fullWidth className="text-base py-5" />
    </div>
  );
};

export default MobileStickyButton;
