import React, { useRef, useState, useEffect } from 'react';
import { BENEFITS_LIST } from '../data/company';
import { Award, Users, Car, MapPin, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const ICONS = [Award, Users, Car, MapPin, MessageSquare];

export const BenefitsBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = scrollRef.current.querySelector('[data-benefit-card]') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), BENEFITS_LIST.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('[data-benefit-card]');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-benefit-card]') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 260;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#0C0F13] py-8 sm:py-10 border-b border-[#EAC136]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARROSSEL DE ESTRUTURA / BENEFÍCIOS */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-3 pt-1 touch-pan-x snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-5"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {BENEFITS_LIST.map((benefit, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <div
                  key={benefit.headline}
                  data-benefit-card
                  className="min-w-[80vw] sm:min-w-[240px] lg:min-w-0 snap-center shrink-0 flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl bg-[#161A20] border border-[#EAC136]/20 hover:border-[#EAC136]/60 transition-all duration-300 group shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAC136]/15 border border-[#EAC136]/30 flex items-center justify-center text-[#EAC136] mb-3.5 group-hover:bg-[#EAC136] group-hover:text-[#0C0F13] transition-all duration-200 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="font-display font-black text-sm text-[#FCFAF8] tracking-tight uppercase leading-snug">
                    {benefit.headline}
                  </span>
                  
                  <span className="text-xs text-[#EAC136] font-semibold mt-1">
                    {benefit.subline}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Botões de navegação para tablets */}
          <div className="hidden sm:flex lg:hidden items-center justify-between pointer-events-none absolute inset-y-0 -left-2 -right-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Benefício anterior"
              className={`w-8 h-8 rounded-full bg-[#0C0F13]/90 border border-[#EAC136]/40 flex items-center justify-center text-[#EAC136] transition-all pointer-events-auto cursor-pointer shadow-md ${
                canScrollLeft ? 'opacity-100 hover:bg-[#EAC136] hover:text-[#0C0F13]' : 'opacity-20 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próximo benefício"
              className={`w-8 h-8 rounded-full bg-[#0C0F13]/90 border border-[#EAC136]/40 flex items-center justify-center text-[#EAC136] transition-all pointer-events-auto cursor-pointer shadow-md ${
                canScrollRight ? 'opacity-100 hover:bg-[#EAC136] hover:text-[#0C0F13]' : 'opacity-20 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Indicadores de bolinhas no mobile */}
        <div className="flex items-center justify-center gap-1.5 mt-3 lg:hidden">
          {BENEFITS_LIST.map((benefit, idx) => (
            <button
              key={benefit.headline}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para ${benefit.headline}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-[#EAC136]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
