import React from 'react';
import { Clock, Navigation, MapPin, Instagram, Phone } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Location: React.FC = () => {
  return (
    <section id="contato" className="py-14 sm:py-20 bg-[#FCFAF8] relative overflow-hidden border-t border-[#0C0F13]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: INFORMAÇÕES DA LOCALIZAÇÃO */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <ScrollReveal delay={0}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0C0F13] tracking-tight mb-2">
                NOSSA <span className="text-[#0C0F13] underline decoration-[#EAC136] decoration-4">UNIDADE</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="w-12 h-1 bg-[#EAC136] rounded-full mb-6" />

              <div className="space-y-4 mb-6">
                {/* CARTÃO DA SEDE */}
                <div className="p-6 rounded-3xl bg-white border border-[#EAC136]/40 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-black text-base sm:text-lg text-[#0C0F13] uppercase tracking-tight">
                      SEDE CIDADE UNIVERSITÁRIA
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAC136]/20 text-[10px] font-mono font-bold uppercase text-[#0C0F13]">
                      Maceió – AL
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0C0F13]/85 leading-relaxed mb-4">
                    Rua E 1, Cj. Eustáquio G. Melo II, 26<br />
                    Cidade Universitária – Maceió – AL<br />
                    CEP 57072-371 • Brasil
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#0C0F13]/5">
                    <a
                      href={COMPANY_DATA.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#0C0F13] hover:text-[#EAC136] transition-colors uppercase tracking-wider"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#EAC136]" />
                      <span>Abrir no Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* HORÁRIOS & ATENDIMENTO */}
                <div className="p-5 rounded-3xl bg-white border border-[#0C0F13]/10 shadow-xs space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 font-black text-[#0C0F13] text-xs uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 text-[#EAC136]" />
                    <span>Atendimento e Matrículas:</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#0C0F13]/80 font-medium border-b border-[#0C0F13]/5 pb-1">
                    <span>Segunda a Sexta:</span>
                    <span className="font-bold text-[#0C0F13]">08:00 – 18:00</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#0C0F13]/80 font-medium">
                    <span>Sábado:</span>
                    <span className="font-bold text-[#0C0F13]">08:00 – 12:00</span>
                  </div>
                </div>

                {/* CONTATOS DIRETOS */}
                <div className="p-5 rounded-3xl bg-white border border-[#0C0F13]/10 shadow-xs space-y-2.5 text-xs">
                  <a
                    href={COMPANY_DATA.phone.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#0C0F13] hover:text-[#EAC136] transition-colors font-bold"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#EAC136]" />
                    <span>WhatsApp: {COMPANY_DATA.phone.display}</span>
                  </a>

                  <div className="flex items-center gap-2.5 text-[#0C0F13] font-bold">
                    <Phone className="w-4 h-4 text-[#EAC136]" />
                    <span>Telefone: {COMPANY_DATA.phone.landline}</span>
                  </div>

                  <a
                    href={COMPANY_DATA.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#0C0F13] hover:text-[#EAC136] transition-colors font-bold"
                  >
                    <Instagram className="w-4 h-4 text-[#EAC136]" />
                    <span>Instagram: {COMPANY_DATA.instagram.handle}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Botão de Ação */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={COMPANY_DATA.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-black text-xs uppercase tracking-wider text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] transition-all duration-200 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#0C0F13]" />
                  <span>Falar no WhatsApp com a 4X4</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* LADO DIREITO: MAPA INTERATIVO DA AUTO ESCOLA 4X4 */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0C0F13]/15 bg-[#0C0F13] h-[380px] sm:h-[460px] lg:h-[520px] w-full">
                <iframe
                  src={COMPANY_DATA.address.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Auto Escola 4X4 - Cidade Universitária, Maceió - AL"
                  className="w-full h-full"
                />

                <div className="absolute top-4 left-4 bg-[#0C0F13]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#FCFAF8] text-[11px] font-bold border border-[#EAC136]/40 flex items-center gap-2 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#EAC136]" />
                  <span>Auto Escola 4X4 • Cidade Universitária</span>
                </div>

                <div className="absolute inset-0 rounded-3xl border border-black/10 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
