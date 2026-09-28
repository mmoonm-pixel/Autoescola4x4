import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { Compass, Users, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PracticalLessonsProps {
  onOpenModal?: () => void;
}

export const PracticalLessons: React.FC<PracticalLessonsProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitora o progresso do scroll através da seção de forma contínua e bidirecional
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // =========================================================================
  // INTERPOLAÇÃO CONTÍNUA E TOTALMENTE REVERSÍVEL BASEADA NO SCROLL
  // =========================================================================
  
  // Vantagem 1: PRÁTICAS EM VIAS REAIS (Base que recebe as demais)
  const card1Scale = useTransform(scrollYProgress, [0, 0.45, 0.85], [1, 0.96, 0.92]);
  const card1Y = useTransform(scrollYProgress, [0, 0.45, 0.85], [0, -4, -8]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 0.92, 0.8]);

  // Vantagem 2: PROFESSORES PREPARADOS (Aproxima-se suavemente pelo scroll)
  const card2Y = useTransform(scrollYProgress, [0.08, 0.45], ['100%', '0%']);
  const card2Scale = useTransform(scrollYProgress, [0.45, 0.85], [1, 0.96]);
  const card2Opacity = useTransform(scrollYProgress, [0.05, 0.20], [0, 1]);

  // Vantagem 3: AULAS PRÁTICAS E TEÓRICAS (Aproxima-se e conclui a composição)
  const card3Y = useTransform(scrollYProgress, [0.45, 0.85], ['100%', '0%']);
  const card3Opacity = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para as Aulas Práticas.';
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={containerRef}
      id="aulas-praticas"
      className="relative w-full bg-[#0C0F13] text-[#FCFAF8] h-[175vh] sm:h-[185vh] select-none"
    >
      {/* Container Sticky que acompanha o scroll de forma fluida sem prender o usuário */}
      <div className="sticky top-14 sm:top-16 h-[88vh] sm:h-[90vh] max-h-[100dvh] flex flex-col justify-between pt-4 pb-3 sm:pt-6 sm:pb-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Cabeçalho Limpo e Autoritativo (Sem labels genéricos ou instruções de scroll) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#FCFAF8] tracking-tight">
              AULAS PRÁTICAS & <span className="text-[#EAC136]">TEÓRICAS</span>
            </h2>
            <div className="w-12 h-1 bg-[#EAC136] rounded-full mt-2 mb-1" />
            <p className="text-xs sm:text-sm text-[#FCFAF8]/75 max-w-xl">
              Metodologia comprovada de formação e aprovação na Cidade Universitária em Maceió.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161A20] border border-[#EAC136]/30 text-xs font-mono font-bold text-[#EAC136] uppercase tracking-wider self-start sm:self-auto">
            <span>METODOLOGIA 4X4</span>
            <span className="text-white/30">•</span>
            <span>MACEIÓ – AL</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PALCO CENTRAL DE EMPILHAMENTO PROGRESSIVO FLUIDO                          */}
        {/* ========================================================================= */}
        <div className="relative flex-1 w-full max-w-4xl mx-auto my-2 sm:my-3 min-h-[310px] max-h-[460px]">
          
          {/* ------------------------------------------------------------- */}
          {/* VANTAGEM 1: PRÁTICAS EM VIAS REAIS                            */}
          {/* ------------------------------------------------------------- */}
          <motion.div
            style={{
              scale: card1Scale,
              y: card1Y,
              opacity: card1Opacity,
              zIndex: 10,
            }}
            className="absolute inset-0 rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#161A20] border border-[#EAC136]/30 shadow-2xl flex flex-col justify-between origin-top"
          >
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EAC136]/15 border border-[#EAC136]/40 flex items-center justify-center text-[#EAC136] shrink-0">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-black uppercase text-[#FCFAF8] tracking-tight">
                      PRÁTICAS EM VIAS REAIS
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-[#EAC136] font-semibold">
                      Trânsito Urbano Real de Maceió
                    </span>
                  </div>
                </div>

                <span className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono font-bold text-[#EAC136] uppercase">
                  Maceió – AL
                </span>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-[#FCFAF8]/85 leading-relaxed max-w-2xl mb-4 sm:mb-6">
                Treinamento dinâmico nas ruas e avenidas reais de Maceió. Você aprende a dominar o veículo em situações autênticas de trânsito, aclives, semáforos, cruzamentos e baliza precisa com duplo comando de segurança.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#FCFAF8]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Veículos com Duplo Comando</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Treino em Vias Urbanas</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Baliza Descomplicada</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#FCFAF8]/60 font-mono">
              <span>Auto Escola 4X4</span>
              <span className="text-[#EAC136]/90 font-semibold">Formação Prática em Vias Reais</span>
            </div>
          </motion.div>

          {/* ------------------------------------------------------------- */}
          {/* VANTAGEM 2: PROFESSORES PREPARADOS                            */}
          {/* ------------------------------------------------------------- */}
          <motion.div
            style={{
              y: card2Y,
              scale: card2Scale,
              opacity: card2Opacity,
              zIndex: 20,
            }}
            className="absolute inset-x-0 inset-y-0 sm:top-3 sm:bottom-0 rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#1A1F26] border-2 border-[#EAC136]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between origin-top"
          >
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EAC136] text-[#0C0F13] flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-black uppercase text-[#FCFAF8] tracking-tight">
                      PROFESSORES PREPARADOS
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-[#EAC136] font-semibold">
                      Didática Paciente e Metodologia Clara
                    </span>
                  </div>
                </div>

                <span className="hidden md:inline-block px-3 py-1 rounded-full bg-[#EAC136]/20 border border-[#EAC136]/40 text-[11px] font-mono font-bold text-[#EAC136] uppercase">
                  Credenciados DETRAN
                </span>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-[#FCFAF8]/85 leading-relaxed max-w-2xl mb-4 sm:mb-6">
                Corpo docente especializado com paciência pedagógica e didática clara para ensinar no seu próprio ritmo. Metodologia acolhedora que prepara você tanto para a prova teórica quanto para a rotina diária ao volante.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#FCFAF8]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Didática Paciente e Clara</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Simulados Preparatórios</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Categorias A, B, C e D</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#FCFAF8]/60 font-mono">
              <span>Auto Escola 4X4</span>
              <span className="text-[#EAC136]/90 font-semibold">Instrutores Credenciados e Pacientes</span>
            </div>
          </motion.div>

          {/* ------------------------------------------------------------- */}
          {/* VANTAGEM 3: AULAS PRÁTICAS E TEÓRICAS                         */}
          {/* ------------------------------------------------------------- */}
          <motion.div
            style={{
              y: card3Y,
              opacity: card3Opacity,
              zIndex: 30,
            }}
            className="absolute inset-x-0 inset-y-0 sm:top-6 sm:bottom-0 rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#202630] border-2 border-[#EAC136] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between origin-top"
          >
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EAC136] text-[#0C0F13] flex items-center justify-center font-bold shadow-lg shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-black uppercase text-[#FCFAF8] tracking-tight">
                      AULAS PRÁTICAS E TEÓRICAS
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-[#EAC136] font-semibold">
                      Confiança e Alta Taxa de Aprovação
                    </span>
                  </div>
                </div>

                <span className="hidden md:inline-block px-3 py-1 rounded-full bg-[#EAC136] text-[11px] font-mono font-black text-[#0C0F13] uppercase shadow-sm">
                  +5.000 Aprovados
                </span>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-[#FCFAF8]/90 leading-relaxed max-w-2xl mb-4 sm:mb-6">
                Perca o medo de dirigir e chegue ao exame do DETRAN seguro e preparado para passar de primeira. Nossa taxa de aprovação comprovada reflete o compromisso com a formação responsável e definitiva de cada condutor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#FCFAF8] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Sua Aprovação Começa Aqui</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Frota Moderna Revisada</span>
                </div>
                <div className="flex items-center gap-2 text-[#FCFAF8] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#EAC136] shrink-0" />
                  <span>Suporte Completo no DETRAN</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-[#EAC136] font-bold">Auto Escola 4X4</span>
              <span className="text-white/70">Aprovação Comprovada em Maceió</span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* BOTÕES DE AÇÃO: SEMPRE VISÍVEIS, ACESSÍVEIS E NUNCA ENCOBERTOS PELA PILHA */}
        {/* ========================================================================= */}
        <div className="relative z-40 shrink-0 pt-2 sm:pt-3 pb-1 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenModal}
            id="btn-pratica-iniciar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#EAC136] hover:bg-[#F2C94C] text-[#0C0F13] transition-all shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>INICIAR MINHA HABILITAÇÃO</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0C0F13]" />
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            id="btn-pratica-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-[#FCFAF8] border border-[#EAC136]/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#EAC136]" />
            <span>SOLICITAR ORÇAMENTO</span>
          </button>
        </div>

      </div>
    </section>
  );
};
