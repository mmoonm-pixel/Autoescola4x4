import React from 'react';

interface MarqueeItem {
  text: string;
  isGold?: boolean;
}

const ITEMS: MarqueeItem[] = [
  { text: 'AUTO ESCOLA 4X4', isGold: true },
  { text: '+5.000 ALUNOS APROVADOS' },
  { text: 'SUA APROVAÇÃO COMEÇA AQUI!', isGold: true },
  { text: 'CATEGORIAS A, B, C E D' },
  { text: 'CIDADE UNIVERSITÁRIA • MACEIÓ', isGold: true },
  { text: 'AULAS E EQUIPE QUALIFICADA' },
  { text: '(82) 99925-0889', isGold: true },
  { text: 'SOLICITE SEU ORÇAMENTO' },
];

export const InfiniteMarquee: React.FC = () => {
  const repeatedItems = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full bg-[#0C0F13] border-y border-[#EAC136]/20 overflow-hidden py-3 sm:py-3.5 select-none">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <div className="flex items-center gap-8 sm:gap-12 px-6">
            {repeatedItems.map((item, i) => (
              <React.Fragment key={`marquee-1-${i}`}>
                <span
                  className={`text-xs sm:text-sm font-black uppercase tracking-widest ${
                    item.isGold ? 'text-[#EAC136]' : 'text-[#FCFAF8]'
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAC136]" />
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-8 sm:gap-12 px-6" aria-hidden="true">
            {repeatedItems.map((item, i) => (
              <React.Fragment key={`marquee-2-${i}`}>
                <span
                  className={`text-xs sm:text-sm font-black uppercase tracking-widest ${
                    item.isGold ? 'text-[#EAC136]' : 'text-[#FCFAF8]'
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAC136]" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
