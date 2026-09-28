import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Volume2, VolumeX, ShieldCheck, Award, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';

interface HeroProps {
  onOpenModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preferência do usuário sobre o áudio (true = ligado, false = desligado).
  // O botão representa essa preferência mesmo quando o usuário rola a página.
  const [audioPreference, setAudioPreference] = useState(false);
  
  // Refs para acesso síncrono e sem re-renderizações desnecessárias durante o scroll
  const userPreferenceRef = useRef(false);
  const isHeroVisibleRef = useRef(true);

  // Mantém exatamente 1 elemento de vídeo montado no DOM conforme o breakpoint (evita conflitos e decodificadores duplicados)
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop((prev) => (prev !== desktop ? desktop : prev));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. REPRODUÇÃO CONTÍNUA DO VÍDEO (NUNCA PAUSA, NUNCA REINICIA)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = true;
    video.muted = !userPreferenceRef.current;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Se bloqueado pelo navegador antes do primeiro clique, assegura muted e continua reproduzindo continuamente
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, [isDesktop]);

  // 2. INTERSECTION OBSERVER EXCLUSIVO PARA MUTE/UNMUTE
  // NUNCA altera play, pause, currentTime, load ou src
  useEffect(() => {
    const heroEl = heroSectionRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          isHeroVisibleRef.current = isVisible;
          const video = videoRef.current;
          if (!video) return;

          // Regras Estritas:
          // Hero visível + preferência ligada -> video.muted = false
          // Hero fora do viewport -> video.muted = true (vídeo continua rodando mudo)
          // Hero visível + preferência desligada -> video.muted = true
          if (isVisible && userPreferenceRef.current) {
            video.muted = false;
            video.volume = 1.0;
          } else {
            video.muted = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // 3. CONTROLE DE PREFERÊNCIA DE ÁUDIO DO USUÁRIO
  const handleToggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (!audioPreference) {
      // Usuário ativou o áudio
      userPreferenceRef.current = true;
      setAudioPreference(true);

      // Se o Hero estiver visível no momento, desmuta imediatamente
      if (isHeroVisibleRef.current) {
        video.muted = false;
        video.volume = 1.0;
      }
      if (video.paused) {
        video.play().catch(() => {});
      }
    } else {
      // Usuário desativou o áudio
      userPreferenceRef.current = false;
      setAudioPreference(false);
      video.muted = true;
    }
  };

  const handleDirectWhatsApp = () => {
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(COMPANY_DATA.phone.defaultMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={heroSectionRef}
      id="inicio"
      className="relative w-full bg-[#0C0F13] text-[#FCFAF8] select-none overflow-hidden"
    >
      {/* ========================================================= */}
      {/* 1. LAYOUT MOBILE (< lg): VÍDEO VERTICAL 9:16 PROTAGONISTA  */}
      {/* ========================================================= */}
      <div className="lg:hidden relative w-full h-[100svh] min-h-[560px] max-h-[100svh] flex flex-col justify-end overflow-hidden">
        {/* Vídeo Vertical 9:16 em tela cheia mobile */}
        {!isDesktop && (
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            style={{
              transform: 'translateZ(0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
            src={COMPANY_DATA.heroVideo.url}
          />
        )}

        {/* Controle Discreto e Minimalista de Áudio (Ícone Vetorial puro, sem texto) */}
        <div className="absolute top-20 right-4 z-30">
          <button
            type="button"
            onClick={handleToggleSound}
            id="btn-hero-audio-mobile"
            aria-label={audioPreference ? 'Desativar som' : 'Ativar som'}
            className="w-10 h-10 rounded-full bg-[#0C0F13]/80 border border-[#EAC136]/50 hover:border-[#EAC136] text-[#EAC136] flex items-center justify-center backdrop-blur-md shadow-lg transition-transform active:scale-90 cursor-pointer"
          >
            {audioPreference ? (
              <Volume2 className="w-4 h-4 text-[#EAC136] transition-transform animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-white/80 transition-transform" />
            )}
          </button>
        </div>

        {/* Gradiente sutil inferior para legibilidade perfeita dos botões */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0C0F13] via-[#0C0F13]/60 to-transparent pointer-events-none z-10" />

        {/* Botões CTAs no rodapé do Hero Mobile */}
        <div className="w-full relative z-20 pb-[max(1.25rem,env(safe-area-inset-bottom,1.25rem))] px-4">
          <div className="max-w-md mx-auto flex flex-row items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={onOpenModal}
              id="btn-hero-iniciar-mobile"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-black text-[11px] text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] transition-all duration-200 shadow-lg cursor-pointer uppercase tracking-wider hover:scale-[1.02] active:scale-[0.97]"
            >
              <span>INICIAR MINHA HABILITAÇÃO</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0C0F13] shrink-0" />
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              id="btn-hero-whatsapp-mobile"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-black text-[11px] text-[#FCFAF8] bg-[#0C0F13]/85 hover:bg-[#0C0F13] border border-[#EAC136]/70 transition-all duration-200 shadow-lg cursor-pointer uppercase tracking-wider hover:scale-[1.02] active:scale-[0.97] backdrop-blur-md shrink-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#EAC136] shrink-0" />
              <span>WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. LAYOUT DESKTOP (>= lg): COMPOSIÇÃO SPLIT ELEGANTE      */}
      {/* ========================================================= */}
      <div className="hidden lg:block relative w-full pt-28 pb-16 xl:pt-32 xl:pb-20">
        {/* Luzes de ambientação sutis */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#EAC136]/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LADO ESQUERDO: CONTEÚDO INSTITUCIONAL FORTE */}
            <div className="col-span-7 flex flex-col justify-center pr-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161A20] border border-[#EAC136]/30 text-xs font-mono font-bold text-[#EAC136] uppercase tracking-wider mb-5 self-start">
                <Award className="w-4 h-4 text-[#EAC136]" />
                <span>+5.000 ALUNOS APROVADOS • MACEIÓ – AL</span>
              </div>

              <h1 className="font-display text-4xl xl:text-5xl 2xl:text-6xl font-black uppercase text-[#FCFAF8] tracking-tight leading-[1.08] mb-4">
                AUTO ESCOLA <span className="text-[#EAC136]">4X4</span>
              </h1>

              <p className="text-xl xl:text-2xl font-black uppercase text-[#EAC136] tracking-wide mb-4">
                Sua aprovação começa aqui.
              </p>

              <p className="text-sm xl:text-base text-[#FCFAF8]/75 leading-relaxed max-w-xl mb-8">
                Centro de Formação de Condutores de referência na Cidade Universitária. Aulas práticas e teóricas com equipe experiente, veículos modernos com ar-condicionado e suporte completo para Categorias A, B, A+B, C e D.
              </p>

              {/* CTAs Desktop */}
              <div className="flex items-center gap-4 mb-10">
                <button
                  type="button"
                  onClick={onOpenModal}
                  id="btn-hero-iniciar-desktop"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-black text-xs xl:text-sm text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] transition-all duration-200 shadow-xl shadow-[#EAC136]/20 cursor-pointer uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>INICIAR MINHA HABILITAÇÃO</span>
                  <ArrowRight className="w-4 h-4 text-[#0C0F13]" />
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  id="btn-hero-whatsapp-desktop"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-bold text-xs xl:text-sm text-[#FCFAF8] bg-[#161A20] hover:bg-[#20252D] border border-[#EAC136]/50 hover:border-[#EAC136] transition-all duration-200 shadow-lg cursor-pointer uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#EAC136]" />
                  <span>WHATSAPP</span>
                </button>
              </div>

              {/* Mini Badges de Credibilidade */}
              <div className="grid grid-cols-3 gap-3 max-w-lg pt-6 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#FCFAF8]/80">
                  <ShieldCheck className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span className="font-semibold">Frota Moderna</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8]/80">
                  <Award className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span className="font-semibold">Equipe Qualificada</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8]/80">
                  <MapPin className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span className="font-semibold">Cidade Universitária</span>
                </div>
              </div>

            </div>

            {/* LADO DIREITO: VÍDEO VERTICAL 9:16 PROPORCIONAL E ELEGANTE */}
            <div className="col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] xl:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#EAC136]/30 bg-[#161A20] group">
                
                {/* Vídeo Vertical Proporcional */}
                {isDesktop && (
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    muted
                    preload="auto"
                    style={{
                      transform: 'translateZ(0)',
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    src={COMPANY_DATA.heroVideo.url}
                  />
                )}

                {/* Botão de Som Discreto no Canto Superior Direito */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    type="button"
                    onClick={handleToggleSound}
                    id="btn-hero-audio-desktop"
                    aria-label={audioPreference ? 'Desativar som' : 'Ativar som'}
                    className="w-9 h-9 rounded-full bg-[#0C0F13]/80 border border-[#EAC136]/50 hover:border-[#EAC136] text-[#EAC136] flex items-center justify-center backdrop-blur-md shadow-lg transition-transform active:scale-90 hover:scale-105 cursor-pointer"
                  >
                    {audioPreference ? (
                      <Volume2 className="w-4 h-4 text-[#EAC136] animate-pulse" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-white/80" />
                    )}
                  </button>
                </div>

                {/* Borda interna refinada */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
