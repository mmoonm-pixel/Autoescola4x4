import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      id="whatsapp-floating-container"
      aria-label="Atendimento via WhatsApp Auto Escola 4X4"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Tooltip Desktop: “Fale com a Auto Escola 4X4” */}
      <div
        className={`hidden md:flex items-center pointer-events-auto bg-[#0C0F13] text-[#EAC136] text-xs font-black uppercase tracking-wider px-3.5 py-2 rounded-xl shadow-xl border border-[#EAC136]/30 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        <span>Fale com a Auto Escola 4X4</span>
      </div>

      {/* Botão Flutuante em Amarelo #EAC136 + Preto #0C0F13 com Pulso Discreto */}
      <a
        id="btn-whatsapp-float"
        href={`${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(COMPANY_DATA.phone.defaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Fale com a Auto Escola 4X4 no WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EAC136] hover:bg-[#F2C94C] text-[#0C0F13] shadow-[0_8px_24px_rgba(12,15,19,0.5)] border-2 border-[#0C0F13] transition-all duration-300 hover:scale-105 active:scale-95 animate-brand-pulse cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#EAC136]/40"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C0F13]" />

        {/* Ponto sutil preto de status ativo */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0C0F13] opacity-40" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0C0F13] border border-[#EAC136]" />
        </span>
      </a>
    </aside>
  );
};
