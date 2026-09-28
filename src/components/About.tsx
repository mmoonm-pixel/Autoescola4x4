import React from 'react';
import { Check } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-white border-y border-[#0C0F13]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal (Limpo e Autoritativo) */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0C0F13] tracking-tight">
            FORMAÇÃO DE CONDUTORES EM <br className="hidden sm:block" />
            <span className="text-[#0C0F13] underline decoration-[#EAC136] decoration-4">MACEIÓ – AL</span>
          </h2>
          <div className="w-12 h-1 bg-[#EAC136] rounded-full mt-3 mb-2" />
        </div>

        {/* Grid em 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Coluna Esquerda: 3 Diferenciais */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FCFAF8] border border-[#0C0F13]/10 transition-all hover:border-[#EAC136]">
              <div className="w-8 h-8 rounded-full bg-[#0C0F13] text-[#EAC136] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#EAC136]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0C0F13] mb-1">
                  +5.000 alunos aprovados
                </h3>
                <p className="text-xs text-[#0C0F13]/70 leading-relaxed">
                  Histórico comprovado de aprovação no DETRAN-AL, capacitando novos condutores para o trânsito com total segurança e respeito às leis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FCFAF8] border border-[#0C0F13]/10 transition-all hover:border-[#EAC136]">
              <div className="w-8 h-8 rounded-full bg-[#0C0F13] text-[#EAC136] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#EAC136]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0C0F13] mb-1">
                  Aulas e equipe qualificada
                </h3>
                <p className="text-xs text-[#0C0F13]/70 leading-relaxed">
                  Instrutores experientes, didática simplificada e veículos modernos com ar-condicionado e duplo comando de pedais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FCFAF8] border border-[#0C0F13]/10 transition-all hover:border-[#EAC136]">
              <div className="w-8 h-8 rounded-full bg-[#0C0F13] text-[#EAC136] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#EAC136]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0C0F13] mb-1">
                  Categorias A, B, C, D e A+B
                </h3>
                <p className="text-xs text-[#0C0F13]/70 leading-relaxed">
                  Habilitação para motos, carros, veículos de carga e transporte coletivo de passageiros na Cidade Universitária.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Texto Institucional */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-[#0C0F13]/85 leading-relaxed">
              A <strong>Auto Escola 4X4</strong> é referência em formação de condutores em Maceió – AL. Nossa missão é preparar cada aluno não apenas para ser aprovado no exame, mas para se tornar um motorista consciente, defensivo e seguro nas vias urbanas e rodovias.
            </p>

            <p className="text-sm sm:text-base text-[#0C0F13]/85 leading-relaxed">
              Com sede na Cidade Universitária, oferecemos estrutura acolhedora, atendimento transparente e processo descomplicado do início ao fim para primeira habilitação, adição de categoria e renovação.
            </p>

            {/* Banner Institucional */}
            <div className="rounded-3xl overflow-hidden relative shadow-xl border border-[#EAC136]/30 bg-[#0C0F13] p-6 sm:p-8 text-[#FCFAF8]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#EAC136]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#EAC136] uppercase">
                  Auto Escola 4X4 • Escola de Condução
                </span>
              </div>
              <p className="font-display font-black text-xl sm:text-2xl uppercase text-[#FCFAF8] mb-1">
                Sua aprovação começa aqui!
              </p>
              <p className="text-xs text-[#FCFAF8]/70">
                Rua E 1, Cj. Eustáquio G. Melo II, 26 – Cidade Universitária, Maceió – AL
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_DATA.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-black text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] shadow-md transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0C0F13]" />
                <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
              </a>
              <span className="text-xs text-[#0C0F13]/70 font-semibold">
                (82) 99925-0889 • (82) 3185-7385
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
