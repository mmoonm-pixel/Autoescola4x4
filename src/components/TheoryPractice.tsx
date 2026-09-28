import React from 'react';
import { motion } from 'motion/react';

interface SpecItem {
  number: string;
  title: string;
  description: string;
}

const SPEC_ITEMS: SpecItem[] = [
  {
    number: '01',
    title: 'FORMAÇÃO COMPLETA',
    description: 'Aulas teóricas e práticas com metodologia eficiente, materiais atualizados e simulados preparatórios.',
  },
  {
    number: '02',
    title: 'PRÁTICAS EM VIAS REAIS',
    description: 'Treinamento real no trânsito de Maceió com veículos confortáveis, direção assistida e duplo comando de pedais.',
  },
  {
    number: '03',
    title: 'CATEGORIAS A, B, C E D',
    description: 'Atendimento completo para formação em motocicletas, automóveis, transporte de carga e passageiros.',
  },
  {
    number: '04',
    title: 'EQUIPE QUALIFICADA',
    description: 'Mais de 5.000 alunos aprovados com acompanhamento paciente de instrutores credenciados e dedicados.',
  },
];

export const TheoryPractice: React.FC = () => {
  return (
    <section
      id="formacao"
      className="pt-12 pb-10 sm:pt-16 sm:pb-14 bg-[#FCFAF8] relative overflow-hidden border-t border-[#0C0F13]/10 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LADO ESQUERDO */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0C0F13] tracking-tight leading-none mb-3">
                PREPARAÇÃO TEÓRICA E <br className="hidden sm:inline" />
                <span className="text-[#0C0F13] underline decoration-[#EAC136] decoration-4">PRÁTICA</span>
              </h2>

              <div className="w-12 h-1 bg-[#EAC136] rounded-full mb-4" />

              <p className="text-xs sm:text-sm text-[#0C0F13]/80 leading-relaxed font-medium max-w-md">
                Estrutura de excelência na Cidade Universitária em Maceió. Treinamentos planejados para preparar você com total tranquilidade para a direção defensiva e aprovação no DETRAN.
              </p>
            </motion.div>
          </div>

          {/* LADO DIREITO: 4 ITENS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {SPEC_ITEMS.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-6 border border-[#0C0F13]/10 shadow-xs hover:border-[#EAC136] transition-colors"
              >
                <span className="font-mono text-xs font-black text-[#EAC136] block mb-2">
                  {item.number}
                </span>

                <h3 className="font-display text-base font-black uppercase text-[#0C0F13] tracking-tight mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#0C0F13]/75 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
