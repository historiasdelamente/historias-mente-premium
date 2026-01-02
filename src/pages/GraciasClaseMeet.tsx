import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/mujer-brazos-abiertos-sunset.png";
import instructorImage from "@/assets/javier-vieira.png";

const GraciasClaseMeet = () => {
  const whatsappUrl = "https://chat.whatsapp.com/IqnYS92WRDwCtkPDH7fREk";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. HERO SECTION - IMAGEN ESTÁTICA CON OVERLAY */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{ 
          height: '55vh',
          minHeight: '400px'
        }}
      >
        {/* Background Image */}
        <img 
          src={heroImage}
          alt="Mujer feliz en campo de flores"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.85) 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
          {/* Emoji celebración */}
          <div 
            className="text-[64px] md:text-[80px] mb-5"
            style={{ animation: 'bounce 1s ease-in-out 2' }}
          >
            🎉
          </div>
          
          {/* Título principal hero */}
          <h1 
            className="text-[32px] md:text-[48px] font-extrabold text-white mb-4"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              letterSpacing: '-0.5px',
              lineHeight: '1.1'
            }}
          >
            ¡Felicidades! Ya estás en la clase
          </h1>
          
          {/* Subtítulo hero */}
          <p 
            className="text-[18px] md:text-[24px] text-[#F4C430]"
            style={{ 
              fontFamily: "'Roboto', sans-serif",
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              letterSpacing: '0.5px'
            }}
          >
            Tu camino de sanación comienza ahora
          </p>
        </div>
      </section>

      {/* 2. CONFIRMACIÓN PRINCIPAL */}
      <section 
        className="relative py-[60px] px-5"
        style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%)' }}
      >
        {/* Decoración superior */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-1"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #F4C430 50%, transparent 100%)' }}
        />
        
        <div className="max-w-[800px] mx-auto text-center">
          {/* Ícono de confirmación */}
          <div 
            className="text-[56px] mb-6"
            style={{ animation: 'scaleIn 0.5s ease-out' }}
          >
            ✅
          </div>
          
          {/* Título confirmación */}
          <h2 
            className="text-[28px] md:text-[40px] font-extrabold text-white mb-5"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '1.2' }}
          >
            ¡FELICIDADES! Tu Lugar Está Reservado
          </h2>
          
          {/* Fecha y hora destacada */}
          <div 
            className="max-w-[500px] mx-auto mb-12 p-6 rounded-2xl"
            style={{ 
              background: 'rgba(244,196,48,0.1)',
              border: '2px solid #F4C430'
            }}
          >
            <p 
              className="text-[20px] md:text-[26px] text-[#F4C430]"
              style={{ fontFamily: "'Roboto', sans-serif", lineHeight: '1.4' }}
            >
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Este Martes a la 1:00 PM</span> comienza tu transformación
            </p>
          </div>
        </div>
      </section>

      {/* 3. PASO CRÍTICO #1 - WHATSAPP */}
      <section className="px-5 pb-10">
        <div 
          className="relative max-w-[600px] mx-auto rounded-[32px] p-8 md:p-12"
          style={{ 
            background: 'linear-gradient(135deg, #F4C430 0%, #E6B800 100%)',
            boxShadow: '0 20px 60px rgba(244,196,48,0.4), 0 0 0 4px #39FF14, 0 0 20px rgba(57,255,20,0.6)',
            animation: 'glowPulse 2.5s infinite'
          }}
        >
          {/* Badge flotante "CRÍTICO" */}
          <div 
            className="absolute -top-[18px] left-1/2 -translate-x-1/2 px-7 py-2.5 rounded-3xl"
            style={{ 
              background: '#39FF14',
              boxShadow: '0 6px 20px rgba(57,255,20,0.8)'
            }}
          >
            <span 
              className="text-[13px] md:text-[15px] font-black text-black uppercase tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ⚠️ PASO CRÍTICO #1
            </span>
          </div>
          
          {/* Icono WhatsApp grande */}
          <div className="text-[52px] text-center mb-5">💬</div>
          
          {/* Título del paso WhatsApp */}
          <h3 
            className="text-[24px] md:text-[30px] font-extrabold text-[#1A1A1A] text-center uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '1.2', letterSpacing: '-0.3px' }}
          >
            Únete AHORA al Grupo Privado de WhatsApp
          </h3>
          
          {/* Subtítulo WhatsApp */}
          <p 
            className="text-[16px] md:text-[18px] font-medium text-[#2A2A2A] text-center mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tu comunidad de apoyo y recordatorios del taller
          </p>
          
          {/* Botón WhatsApp (CTA PRINCIPAL) */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full max-w-[420px] mx-auto mb-7 py-5 px-12 rounded-[60px] text-white font-black uppercase transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '18px',
              background: '#25D366',
              boxShadow: '0 8px 24px rgba(37,211,102,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
              letterSpacing: '0.5px'
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            📱 UNIRME AL GRUPO AHORA
          </a>
          
          {/* Beneficios listados */}
          <div className="flex flex-col gap-3.5 max-w-[380px] mx-auto">
            {[
              'Recordatorios del taller en tiempo real',
              'Material exclusivo previo al evento',
              'Comunidad de mujeres en transformación',
              'Soporte directo antes y después'
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 text-[15px] font-semibold text-[#1A1A1A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="inline-flex w-6 h-6 bg-white rounded-full items-center justify-center text-[16px] flex-shrink-0">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PASO #2 - REVISA TU EMAIL */}
      <section className="px-5 pb-7">
        <div 
          className="relative max-w-[600px] mx-auto rounded-3xl p-9 pt-12"
          style={{ 
            background: '#2A2A2A',
            border: '2px solid #F4C430'
          }}
        >
          {/* Número del paso */}
          <div 
            className="absolute -top-5 left-6 w-11 h-11 rounded-full flex items-center justify-center text-[22px] font-black text-[#1A1A1A]"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              background: '#F4C430',
              boxShadow: '0 4px 12px rgba(244,196,48,0.5)'
            }}
          >
            2
          </div>
          
          {/* Header del paso */}
          <h3 
            className="text-[22px] md:text-[26px] font-bold text-white mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            📧 Paso #2: Revisa tu Email
          </h3>
          
          {/* Alerta SPAM */}
          <div 
            className="rounded-xl p-5 mb-6"
            style={{ 
              background: 'rgba(255,68,68,0.12)',
              borderLeft: '5px solid #FF4444'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[24px]">⚠️</span>
              <span 
                className="text-[16px] font-bold"
                style={{ color: '#FF6B6B', fontFamily: "'Inter', sans-serif" }}
              >
                Revisa también SPAM
              </span>
            </div>
            <p 
              className="text-[14px] text-[#CCCCCC]"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.5' }}
            >
              El enlace de Google Meet puede llegar a tu carpeta de spam
            </p>
          </div>
          
          {/* Lista de verificación email */}
          <div className="flex flex-col gap-4">
            {[
              'Enlace de Google Meet (requerido para entrar)',
              'Recordatorios automáticos antes del taller',
              'Material de preparación exclusivo'
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl transition-all duration-300 hover:bg-[rgba(244,196,48,0.1)]"
                style={{ background: 'rgba(244,196,48,0.05)' }}
              >
                <span className="text-[22px] text-[#F4C430] flex-shrink-0 leading-none">✓</span>
                <span 
                  className="text-[15px] md:text-[16px] font-medium text-[#E0E0E0]"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.5' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PASO #3 - MARCA LA FECHA */}
      <section className="px-5 pb-12">
        <div 
          className="relative max-w-[600px] mx-auto rounded-3xl p-9 pt-12"
          style={{ 
            background: '#2A2A2A',
            border: '2px solid #F4C430'
          }}
        >
          {/* Número del paso */}
          <div 
            className="absolute -top-5 left-6 w-11 h-11 rounded-full flex items-center justify-center text-[22px] font-black text-[#1A1A1A]"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              background: '#F4C430',
              boxShadow: '0 4px 12px rgba(244,196,48,0.5)'
            }}
          >
            3
          </div>
          
          {/* Header del paso */}
          <h3 
            className="text-[22px] md:text-[26px] font-bold text-white mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            📅 Marca la fecha: Este Martes 1:00 PM
          </h3>
          
          {/* Mensaje motivacional */}
          <div 
            className="rounded-xl p-5 text-center"
            style={{ 
              background: 'linear-gradient(135deg, rgba(244,196,48,0.15) 0%, rgba(244,196,48,0.05) 100%)',
              border: '1px dashed #F4C430'
            }}
          >
            <p 
              className="text-[16px] md:text-[18px] font-semibold text-[#F4C430]"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6' }}
            >
              Tu transformación comienza este martes.<br />
              Este es el momento que has estado esperando.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN DE CREDENCIALES - INSTRUCTOR */}
      <section 
        className="relative py-16 px-5"
        style={{ 
          background: 'linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%)',
          borderTop: '1px solid #2A2A2A'
        }}
      >
        {/* Decoración superior */}
        <div 
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #F4C430 50%, transparent 100%)' }}
        />
        
        <div className="max-w-[620px] mx-auto text-center">
          {/* Badge "Instructor" */}
          <div 
            className="inline-block px-6 py-2.5 rounded-3xl mb-7"
            style={{ 
              background: 'rgba(244,196,48,0.1)',
              border: '1px solid #F4C430'
            }}
          >
            <span 
              className="text-[14px] font-medium text-[#F4C430]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              👨‍🏫 Esta clase la imparte:
            </span>
          </div>
          
          {/* Foto del instructor */}
          <img 
            src={instructorImage}
            alt="Javier Vieira"
            className="w-[140px] h-[140px] rounded-full mx-auto mb-7 object-cover"
            style={{ 
              border: '4px solid #F4C430',
              boxShadow: '0 8px 24px rgba(244,196,48,0.3), 0 0 60px rgba(244,196,48,0.15)'
            }}
          />
          
          {/* Nombre instructor */}
          <h3 
            className="text-[38px] md:text-[48px] font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.5px' }}
          >
            Javier Vieira
          </h3>
          
          {/* Título profesional principal */}
          <p 
            className="text-[19px] md:text-[22px] font-semibold text-[#F4C430] mb-2"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.3px' }}
          >
            Conferencista de Transformación Personal
          </p>
          
          {/* Especialidad */}
          <p 
            className="text-[17px] md:text-[19px] text-[#E0E0E0] mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experto en Liberación del Narcisismo
          </p>
          
          {/* Separador decorativo */}
          <div className="w-[60px] h-0.5 bg-[#F4C430] mx-auto mb-8" />
          
          {/* Bio profesional */}
          <p 
            className="text-[16px] md:text-[18px] text-[#CCCCCC] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}
          >
            Te ayudo a salir del narcisismo con una técnica única: el Apagón Emocional. 
            Un método probado que ha transformado la vida de cientos de mujeres 
            atrapadas en relaciones tóxicas.
          </p>
        </div>
      </section>

      {/* 7. DETALLES DEL TALLER */}
      <section className="py-16 px-5 bg-[#0D0D0D]">
        <div className="max-w-[960px] mx-auto">
          {/* Título sección */}
          <h2 
            className="text-[30px] md:text-[38px] font-extrabold text-white text-center mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            📋 Detalles del Taller
          </h2>
          
          {/* Subtítulo */}
          <p 
            className="text-[16px] text-[#888888] text-center mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Todo lo que necesitas saber
          </p>
          
          {/* Grid de cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 1: DÍA */}
            <div 
              className="relative rounded-[20px] p-9 text-center overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#F4C430] group"
              style={{ 
                background: 'linear-gradient(135deg, #2A2A2A 0%, #1E1E1E 100%)',
                border: '1px solid #333333',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="text-[48px] mb-5 grayscale-0">📅</div>
              <p 
                className="text-[13px] text-[#888888] uppercase tracking-wide mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Día
              </p>
              <p 
                className="text-[24px] md:text-[28px] font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '1.2' }}
              >
                Este Martes
              </p>
            </div>
            
            {/* CARD 2: HORA */}
            <div 
              className="relative rounded-[20px] p-9 text-center overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#F4C430] group"
              style={{ 
                background: 'linear-gradient(135deg, #2A2A2A 0%, #1E1E1E 100%)',
                border: '1px solid #333333',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="text-[48px] mb-5">🕐</div>
              <p 
                className="text-[13px] text-[#888888] uppercase tracking-wide mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hora
              </p>
              <p 
                className="text-[24px] md:text-[28px] font-bold text-white mb-1.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                1:00 PM
              </p>
              <p 
                className="text-[13px] text-[#F4C430]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                (horario Colombia)
              </p>
            </div>
            
            {/* CARD 3: PLATAFORMA */}
            <div 
              className="relative rounded-[20px] p-9 text-center overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#F4C430] group"
              style={{ 
                background: 'linear-gradient(135deg, #2A2A2A 0%, #1E1E1E 100%)',
                border: '1px solid #333333',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="text-[48px] mb-5">📍</div>
              <p 
                className="text-[13px] text-[#888888] uppercase tracking-wide mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plataforma
              </p>
              <p 
                className="text-[24px] md:text-[28px] font-bold text-white mb-1.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Google Meet
              </p>
              <p 
                className="text-[13px] text-[#F4C430]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                (enlace por email)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RECORDATORIO FINAL Y CTA SECUNDARIO */}
      <section 
        className="relative py-14 px-5 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F4C430 0%, #E6B800 100%)' }}
      >
        {/* Patrón de fondo sutil */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          {/* Icono celebración */}
          <div 
            className="text-[52px] mb-6"
            style={{ animation: 'rotateSlight 3s ease-in-out infinite' }}
          >
            🎊
          </div>
          
          {/* Mensaje principal */}
          <h3 
            className="text-[26px] md:text-[34px] font-bold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", lineHeight: '1.3' }}
          >
            Has tomado una decisión valiente hoy.
          </h3>
          
          {/* Submensaje */}
          <p 
            className="text-[17px] md:text-[20px] text-[#2A2A2A] mb-10"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6' }}
          >
            La mayoría de las mujeres tardan años en dar este paso.<br />
            Tú lo hiciste hoy.
          </p>
          
          {/* CTA Secundario WhatsApp */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-11 py-5 rounded-[60px] text-white font-bold transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '17px',
              background: '#25D366',
              boxShadow: '0 8px 24px rgba(37,211,102,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            📱 Unirme al Grupo de WhatsApp
          </a>
          
          {/* Nota final */}
          <p 
            className="mt-6 text-[14px] text-[#2A2A2A] opacity-80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            No olvides revisar tu email para el enlace de Google Meet
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-5 bg-[#0D0D0D] border-t border-[#2A2A2A]">
        <div className="max-w-[600px] mx-auto text-center">
          <Link to="/">
            <h4 
              className="text-[20px] font-bold text-[#F4C430] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Historias de la Mente
            </h4>
          </Link>
          <p 
            className="text-[14px] text-[#888888]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 20px 60px rgba(244,196,48,0.4), 0 0 0 4px #39FF14, 0 0 20px rgba(57,255,20,0.6);
          }
          50% { 
            box-shadow: 0 25px 70px rgba(244,196,48,0.5), 0 0 0 6px #39FF14, 0 0 30px rgba(57,255,20,0.8);
          }
        }
        
        @keyframes rotateSlight {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default GraciasClaseMeet;
