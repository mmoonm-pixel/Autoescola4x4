import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './Icons';
import { COMPANY_DATA } from '../data/company';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'A' | 'B' | 'AB' | 'C' | 'D';
}

const CATEGORY_OPTIONS = [
  { id: 'A', label: 'Cat. A (Moto)' },
  { id: 'B', label: 'Cat. B (Carro)' },
  { id: 'A+B', label: 'Cat. A+B (Carro e Moto)' },
  { id: 'C', label: 'Cat. C (Carga)' },
  { id: 'D', label: 'Cat. D (Passageiros)' },
];

const SERVICE_TYPE_OPTIONS = [
  'Primeira habilitação',
  'Adição de categoria',
  'Outro',
];

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'B',
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [category, setCategory] = useState<string>(
    initialCategory === 'AB' ? 'A+B' : initialCategory
  );
  const [hasCnh, setHasCnh] = useState<'Sim' | 'Não'>('Não');
  const [serviceType, setServiceType] = useState<string>('Primeira habilitação');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: boolean; whatsapp?: boolean }>({});

  useEffect(() => {
    if (isOpen) {
      setCategory(initialCategory === 'AB' ? 'A+B' : initialCategory);
      setErrors({});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedWhatsapp = whatsapp.trim();

    const newErrors: { name?: boolean; whatsapp?: boolean } = {};
    if (!trimmedName) newErrors.name = true;
    if (!trimmedWhatsapp) newErrors.whatsapp = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formattedMessage = `Olá! Vim pelo site da Auto Escola 4X4 e gostaria de iniciar minha habilitação.

Nome: ${trimmedName}
WhatsApp: ${trimmedWhatsapp}
Categoria de interesse: ${category}
Possui CNH: ${hasCnh}
Tipo de atendimento: ${serviceType}
Observação: ${message.trim() ? message.trim() : 'Nenhuma'}`;

    const whatsappUrl = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop translúcido escuro */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xs"
          />

          {/* Janela do Modal */}
          <motion.div
            key="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#0C0F13]/20 flex flex-col overflow-hidden z-10"
          >
            {/* Header fixo do Modal */}
            <div className="bg-[#0C0F13] text-[#FCFAF8] p-5 sm:p-6 relative border-b-2 border-[#EAC136] shrink-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EAC136]" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#EAC136] uppercase">
                  Auto Escola 4X4 • Maceió – AL
                </span>
              </div>

              <h2
                id="modal-title"
                className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white pr-10"
              >
                Iniciar Minha Habilitação
              </h2>
              <p className="text-xs text-gray-300 mt-1 max-w-sm">
                Preencha os dados abaixo e continue diretamente para o WhatsApp oficial da Auto Escola 4X4.
              </p>

              {/* Botão X para Fechar */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar formulário"
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-[#EAC136] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#EAC136] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo scrollável do formulário */}
            <div
              data-lenis-prevent
              className="overflow-y-auto overscroll-contain flex-1 p-5 sm:p-6 bg-[#FCFAF8] space-y-4"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* NOME COMPLETO & WHATSAPP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="modal-input-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0C0F13] mb-1"
                    >
                      Nome Completo *
                    </label>
                    <input
                      id="modal-input-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: false });
                      }}
                      placeholder="Seu nome completo"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-[#0C0F13] text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 ring-2 ring-red-200'
                          : 'border-[#0C0F13]/20 focus:ring-2 focus:ring-[#EAC136]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-600 font-medium mt-0.5 block">
                        Por favor, informe seu nome.
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="modal-input-whatsapp"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0C0F13] mb-1"
                    >
                      WhatsApp *
                    </label>
                    <input
                      id="modal-input-whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => {
                        setWhatsapp(e.target.value);
                        if (errors.whatsapp) setErrors({ ...errors, whatsapp: false });
                      }}
                      placeholder="(82) 99999-9999"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-[#0C0F13] text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.whatsapp
                          ? 'border-red-500 ring-2 ring-red-200'
                          : 'border-[#0C0F13]/20 focus:ring-2 focus:ring-[#EAC136]'
                      }`}
                    />
                    {errors.whatsapp && (
                      <span className="text-[10px] text-red-600 font-medium mt-0.5 block">
                        Por favor, informe seu WhatsApp.
                      </span>
                    )}
                  </div>
                </div>

                {/* CATEGORIA DE INTERESSE (A, B, A+B, C, D) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C0F13] mb-1.5">
                    Categoria de Interesse
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CATEGORY_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCategory(opt.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                          category === opt.id
                            ? 'bg-[#0C0F13] text-[#EAC136] border-[#0C0F13] ring-2 ring-[#EAC136]'
                            : 'bg-white text-[#0C0F13] border-[#0C0F13]/15 hover:border-[#0C0F13]'
                        }`}
                      >
                        {category === opt.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EAC136]" />
                        )}
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* POSSUI CNH? (SIM / NÃO) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C0F13] mb-1.5">
                    Possui CNH?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Não', 'Sim'] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setHasCnh(opt)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                          hasCnh === opt
                            ? 'bg-[#0C0F13] text-[#EAC136] border-[#0C0F13] ring-2 ring-[#EAC136]'
                            : 'bg-white text-[#0C0F13] border-[#0C0F13]/15 hover:border-[#0C0F13]'
                        }`}
                      >
                        {hasCnh === opt && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EAC136]" />
                        )}
                        <span>{opt === 'Sim' ? 'Sim, já possuo CNH' : 'Não, primeira habilitação'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* TIPO DE ATENDIMENTO */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C0F13] mb-1.5">
                    Tipo de Atendimento
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {SERVICE_TYPE_OPTIONS.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setServiceType(srv)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                          serviceType === srv
                            ? 'bg-[#0C0F13] text-[#EAC136] border-[#0C0F13] ring-2 ring-[#EAC136]'
                            : 'bg-white text-[#0C0F13] border-[#0C0F13]/15 hover:border-[#0C0F13]'
                        }`}
                      >
                        {serviceType === srv && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EAC136] shrink-0" />
                        )}
                        <span>{srv}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* MENSAGEM / OBSERVAÇÃO */}
                <div>
                  <label
                    htmlFor="modal-input-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0C0F13] mb-1"
                  >
                    Mensagem / Observação (Opcional)
                  </label>
                  <textarea
                    id="modal-input-message"
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Deseja acrescentar algum detalhe ou preferência de horário?"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#0C0F13]/20 bg-white text-[#0C0F13] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EAC136] transition-all resize-none"
                  />
                </div>

                {/* BOTÃO FINAL: CONTINUAR PARA O WHATSAPP */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="btn-continuar-whatsapp"
                    className="w-full py-3.5 px-6 rounded-full font-black text-xs sm:text-sm text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider group hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#0C0F13]" />
                    <span>CONTINUAR PARA O WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 text-[#0C0F13] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-center text-[#0C0F13]/70 mt-2">
                    Seus dados serão enviados de forma segura para o WhatsApp da Auto Escola 4X4: (82) 99925-0889.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
