import React, { useRef, useState, useEffect } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REAL_STUDENT_TESTIMONIALS, COMPANY_DATA } from '../data/company';
import { ScrollReveal } from './ScrollReveal';

export const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="reconhecimento" className="py-14 sm:py-20 bg-[#0C0F13] text-[#FCFAF8] border-b border-[#EAC136]/20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Limpo e Identificável (O Que Nossos Alunos Dizem) */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <ScrollReveal delay={0}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#FCFAF8] tracking-tight">
                O QUE NOSSOS <span className="text-[#EAC136]">ALUNOS DIZEM</span>
              </h2>
              <div className="w-12 h-1 bg-[#EAC136] rounded-full mt-3 mb-2" />
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-xs sm:text-sm text-[#FCFAF8]/75 mt-1 max-w-xl">
                Experiências reais de formação e aprovação no DETRAN na Cidade Universitária, Maceió – AL.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.14}>
            <div className="flex items-center gap-3 self-start sm:self-end">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161A20] border border-white/10">
                <div className="flex text-[#EAC136]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#EAC136]" />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-[#FCFAF8]">
                  +5.000 Aprovados
                </span>
              </div>

              {/* Botões de navegação */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Depoimento anterior"
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
                  aria-label="Próximo depoimento"
                  className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FCFAF8] transition-all cursor-pointer ${
                    canScrollRight ? 'hover:bg-[#EAC136] hover:text-[#0C0F13] hover:border-[#EAC136]' : 'opacity-30 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Carrossel Horizontal Touch de Depoimentos Reais */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 touch-pan-x snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {REAL_STUDENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`min-w-[85vw] sm:min-w-[340px] max-w-[380px] snap-start flex-shrink-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                t.highlight
                  ? 'bg-[#161A20] border-2 border-[#EAC136]/50 shadow-[0_8px_30px_rgba(234,193,54,0.12)]'
                  : 'bg-[#161A20]/80 border border-white/10 hover:border-[#EAC136]/40'
              }`}
            >
              {/* Toque de destaque com acento amarelo suave */}
              {t.highlight && (
                <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-[#EAC136] shadow-[0_0_8px_#EAC136]" />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#EAC136]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#EAC136]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#EAC136] uppercase tracking-wider flex items-center gap-1 bg-[#0C0F13] px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3 h-3 text-[#EAC136]" />
                    <span>Aprovado DETRAN</span>
                  </span>
                </div>

                <div className="mb-4 text-[#EAC136]/40">
                  <Quote className="w-7 h-7" />
                </div>

                <p className="text-xs sm:text-sm text-[#FCFAF8]/90 leading-relaxed mb-6 font-medium italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAC136]" />
                    <span className="font-display font-black text-xs sm:text-sm text-[#FCFAF8]">
                      {t.authorTag}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#EAC136] font-semibold block mt-0.5">
                    {t.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#FCFAF8]/50">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
