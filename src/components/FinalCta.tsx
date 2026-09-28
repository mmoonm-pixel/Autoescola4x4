import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { COMPANY_DATA } from '../data/company';
import { ScrollReveal } from './ScrollReveal';

interface FinalCtaProps {
  onOpenModal?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
  const handleDirectWhatsApp = () => {
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(COMPANY_DATA.phone.defaultMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-[#0C0F13] text-[#FCFAF8] py-16 sm:py-20 overflow-hidden border-t-2 border-[#EAC136] select-none">
      
      {/* Detalhes de iluminação amarela */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#EAC136] blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <ScrollReveal delay={0}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#FCFAF8] tracking-tight leading-tight mb-3">
            SUA APROVAÇÃO <span className="text-[#EAC136]">COMEÇA AQUI!</span>
          </h2>
          <div className="w-16 h-1 bg-[#EAC136] rounded-full mx-auto mt-3 mb-4" />
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="text-sm sm:text-base text-[#FCFAF8]/85 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Dê o primeiro passo para conquistar sua habilitação com quem já aprovou mais de 5.000 alunos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              id="btn-final-comecar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-black text-xs sm:text-sm text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] transition-all duration-200 shadow-xl uppercase tracking-wider group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>INICIAR MINHA HABILITAÇÃO</span>
              <ArrowRight className="w-4 h-4 text-[#0C0F13] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              id="btn-final-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-black text-xs sm:text-sm text-[#FCFAF8] bg-[#0C0F13] hover:bg-[#161A20] border-2 border-[#EAC136]/50 transition-all duration-200 shadow-xl uppercase tracking-wider group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#EAC136]" />
              <span>WHATSAPP</span>
            </button>
          </div>

          <p className="text-[11px] text-[#FCFAF8]/60 mt-6 font-mono">
            Rua E 1, Cj. Eustáquio G. Melo II, 26 – Cidade Universitária, Maceió – AL
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
