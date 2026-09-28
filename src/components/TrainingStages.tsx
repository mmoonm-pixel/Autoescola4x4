import React from 'react';
import { BookOpen, Car, ShieldCheck, Award, ArrowRight, Compass, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STAGES } from '../data/company';

interface TrainingStagesProps {
  onOpenModal?: () => void;
  onSelectCategory?: (category: 'A' | 'B' | 'AB' | 'C' | 'D') => void;
}

const STAGE_ICONS = [
  Compass,
  FileText,
  BookOpen,
  CheckCircle2,
  Car,
  ShieldCheck,
  Award,
];

export const TrainingStages: React.FC<TrainingStagesProps> = ({
  onOpenModal,
}) => {
  return (
    <section
      id="etapas"
      className="pt-8 pb-12 sm:pt-10 sm:pb-16 bg-[#FCFAF8] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO LIMPO E DE PERSONALIDADE (Sem label genérico superior) */}
        <div className="mb-6 sm:mb-8 border-b border-[#0C0F13]/10 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0C0F13] tracking-tight leading-none mb-3">
              COMO <span className="text-[#0C0F13] underline decoration-[#EAC136] decoration-4">FUNCIONA</span>
            </h2>

            <div className="w-12 h-1 bg-[#EAC136] rounded-full mb-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-xs font-mono text-[#0C0F13]/80 font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAC136]" />
            <span>AUTO ESCOLA 4X4 • 7 ETAPAS</span>
          </motion.div>
        </div>

        {/* CARDS DAS ETAPAS DO PROCESSO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {HOW_IT_WORKS_STAGES.map((st, index) => {
            const Icon = STAGE_ICONS[index % STAGE_ICONS.length];
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-6 border border-[#0C0F13]/10 shadow-xs flex flex-col justify-between hover:border-[#EAC136] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-black text-[#EAC136]">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0C0F13]/5 text-[#0C0F13]/80">
                      {st.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-[#EAC136]/15 flex items-center justify-center text-[#0C0F13] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-base font-black uppercase text-[#0C0F13] tracking-tight mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#0C0F13]/75 leading-relaxed mb-4">
                    {st.desc}
                  </p>

                  <div className="space-y-1.5 border-t border-[#0C0F13]/5 pt-3">
                    {st.highlights.map((hl) => (
                      <div key={hl} className="text-[11px] text-[#0C0F13]/80 flex items-center gap-1.5 font-medium">
                        <span className="w-1 h-1 rounded-full bg-[#EAC136]" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA INFERIOR */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#0C0F13] text-[#EAC136] hover:bg-[#161A20] transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>INICIAR MINHA HABILITAÇÃO</span>
            <ArrowRight className="w-4 h-4 text-[#EAC136]" />
          </button>
        </div>

      </div>
    </section>
  );
};
