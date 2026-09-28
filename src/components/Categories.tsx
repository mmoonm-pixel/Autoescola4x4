import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { HABILITACAO_CATEGORIES, COMPANY_DATA, CategoryItem } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface CategoriesProps {
  onSelectCategory?: (category: 'A' | 'B' | 'AB' | 'C' | 'D') => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = scrollRef.current.querySelector('[data-category-card]') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), HABILITACAO_CATEGORIES.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('[data-category-card]');
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
    const card = scrollRef.current.querySelector('[data-category-card]') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 300;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = (cat: CategoryItem) => {
    if (onSelectCategory && ['A', 'B', 'AB', 'C', 'D'].includes(cat.id)) {
      onSelectCategory(cat.id as 'A' | 'B' | 'AB' | 'C' | 'D');
    }
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(cat.whatsappMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="categorias" className="py-12 sm:py-16 bg-[#0C0F13] text-[#FCFAF8] border-b border-[#EAC136]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção (Limpo, sem label genérico) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <ScrollReveal delay={0}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FCFAF8]">
                ESCOLHA SUA <span className="text-[#EAC136]">CATEGORIA</span>
              </h2>
              <div className="w-12 h-1 bg-[#EAC136] rounded-full mt-3 mb-2" />
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-xs sm:text-sm text-[#FCFAF8]/75 mt-1 max-w-xl">
                Formação completa para motos, carros, veículos de carga e transporte de passageiros em Maceió.
              </p>
            </ScrollReveal>
          </div>

          {/* Botões de navegação */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Categoria anterior"
              className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FCFAF8] transition-all cursor-pointer ${
                canScrollLeft ? 'hover:bg-[#EAC136] hover:text-[#0C0F13] hover:border-[#EAC136]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próxima categoria"
              className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FCFAF8] transition-all cursor-pointer ${
                canScrollRight ? 'hover:bg-[#EAC136] hover:text-[#0C0F13] hover:border-[#EAC136]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CARROSSEL DE CARDS (A, B, A+B, C, D) — Arraste suave no mobile */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 touch-pan-x snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {HABILITACAO_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              data-category-card
              className={`min-w-[85vw] sm:min-w-[320px] max-w-[88vw] sm:max-w-[360px] snap-center sm:snap-start flex-shrink-0 flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 relative ${
                cat.popular
                  ? 'bg-[#161A20] border-2 border-[#EAC136] shadow-[0_10px_35px_rgba(234,193,54,0.18)]'
                  : 'bg-[#161A20]/80 border border-[#EAC136]/20 hover:border-[#EAC136]/60'
              }`}
            >
              {cat.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#EAC136] text-[#0C0F13] text-[10px] font-black uppercase tracking-wider shadow-md">
                  MAIS ESCOLHIDA
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#EAC136]">
                    {cat.name}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#EAC136]">
                    {cat.vehicle}
                  </span>
                </div>

                <p className="text-xs text-[#EAC136] font-mono font-bold uppercase tracking-wider mb-2">
                  {cat.badge}
                </p>

                <p className="text-xs sm:text-sm text-[#FCFAF8]/80 leading-relaxed mb-5 min-h-[40px]">
                  {cat.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                  {cat.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#FCFAF8]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EAC136] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão para Solicitar Orçamento / WhatsApp */}
              <button
                type="button"
                onClick={() => handleOpenWhatsApp(cat)}
                className={`w-full py-3.5 px-6 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  cat.popular
                    ? 'bg-[#EAC136] hover:bg-[#F2C94C] text-[#0C0F13]'
                    : 'bg-[#FCFAF8] hover:bg-[#EAC136] text-[#0C0F13]'
                }`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Indicadores de bolinhas no mobile */}
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {HABILITACAO_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para categoria ${cat.name}`}
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
