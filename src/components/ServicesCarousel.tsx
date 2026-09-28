import React, { useRef, useState, useEffect } from 'react';
import { OFFICIAL_SERVICES, COMPANY_DATA } from '../data/company';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const ServicesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = scrollRef.current.querySelector('[data-service-card]') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), OFFICIAL_SERVICES.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('[data-service-card]');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-service-card]') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 320;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceTitle: string) => {
    const msg = `Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para ${serviceTitle}.`;
    window.open(`${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 bg-[#FCFAF8] border-b border-[#0C0F13]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção (Limpo, sem label genérico) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <ScrollReveal delay={0}>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0C0F13] tracking-tight">
                NOSSOS <span className="text-[#0C0F13] underline decoration-[#EAC136] decoration-4">SERVIÇOS</span>
              </h2>
              <div className="w-12 h-1 bg-[#EAC136] rounded-full mt-2.5" />
            </ScrollReveal>
          </div>

          {/* Botões de navegação discretos para desktop/tablet */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Rolar para esquerda"
              className={`w-9 h-9 rounded-full border border-[#0C0F13]/20 flex items-center justify-center text-[#0C0F13] transition-all cursor-pointer ${
                canScrollLeft ? 'hover:bg-[#0C0F13] hover:text-[#EAC136]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Rolar para direita"
              className={`w-9 h-9 rounded-full border border-[#0C0F13]/20 flex items-center justify-center text-[#0C0F13] transition-all cursor-pointer ${
                canScrollRight ? 'hover:bg-[#0C0F13] hover:text-[#EAC136]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrossel de Cards: ~3 no desktop, 1 no mobile, swipe suave */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 touch-pan-x snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {OFFICIAL_SERVICES.map((srv) => (
            <div
              key={srv.id}
              data-service-card
              className="min-w-[85vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] max-w-[88vw] sm:max-w-[400px] snap-center sm:snap-start flex-shrink-0 flex flex-col bg-white rounded-3xl p-6 sm:p-7 border border-[#0C0F13]/10 shadow-xs hover:shadow-xl transition-all duration-300 relative group justify-between"
            >
              {srv.highlight && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#EAC136] text-[#0C0F13] text-[10px] font-black uppercase tracking-wider shadow-xs">
                  Destaque
                </div>
              )}

              <div>
                <span className="font-mono text-xs font-black text-[#EAC136] block mb-2">
                  {srv.number}
                </span>

                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-[#0C0F13] tracking-tight mb-1">
                  {srv.title}
                </h3>

                <p className="text-xs font-bold text-[#0C0F13]/80 uppercase tracking-wide mb-3">
                  {srv.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#0C0F13]/85 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleServiceClick(srv.title)}
                className="w-full py-3 px-4 rounded-2xl bg-[#0C0F13] hover:bg-[#EAC136] text-[#FCFAF8] hover:text-[#0C0F13] font-black text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-between group/btn cursor-pointer"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Indicadores de bolinhas para mobile/desktop */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {OFFICIAL_SERVICES.map((srv, idx) => (
            <button
              key={srv.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para serviço ${srv.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-[#0C0F13]'
                  : 'w-1.5 bg-[#0C0F13]/20 hover:bg-[#0C0F13]/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
