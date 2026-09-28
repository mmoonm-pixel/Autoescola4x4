import React from 'react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { MapPin, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Categorias', href: '#categorias' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Aulas Práticas', href: '#aulas-praticas' },
    { name: 'Como Funciona', href: '#etapas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Localização', href: '#contato' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0C0F13] text-[#FCFAF8]/80 pt-12 pb-8 border-t border-[#EAC136]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Coluna 1: Logo e Identificação */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block" aria-label="Auto Escola 4X4 - Início">
              <img
                src="/logo_4x4_transparent.png"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== '/logo_4x4_transparent.png') {
                    target.src = '/logo_4x4_transparent.png';
                  }
                }}
                alt={COMPANY_DATA.logo.alt}
                className="h-12 w-auto object-contain block select-none bg-transparent"
              />
            </a>

            <div>
              <p className="font-display font-black text-base text-[#FCFAF8] tracking-tight">
                AUTO ESCOLA 4X4
              </p>
              <p className="text-xs text-[#EAC136] font-semibold">
                Sua aprovação começa aqui! • +5.000 alunos aprovados
              </p>
            </div>

            <p className="text-xs text-[#FCFAF8]/70 leading-relaxed max-w-sm">
              Formação de condutores, aulas teóricas e práticas com equipe qualificada e categorias A, B, C, D e A+B na Cidade Universitária, Maceió – AL.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenModal}
                id="footer-btn-iniciar"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-black text-[#0C0F13] bg-[#EAC136] hover:bg-[#F2C94C] transition-all shadow-md uppercase tracking-wider cursor-pointer"
              >
                <span>Iniciar minha habilitação</span>
              </button>

              <a
                id="footer-btn-whatsapp"
                href={COMPANY_DATA.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#FCFAF8] bg-[#161A20] hover:bg-[#161A20]/80 border border-white/20 transition-all uppercase tracking-wider"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#EAC136]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[#EAC136]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#FCFAF8]/80 hover:text-[#EAC136] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Localização e Contato */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[#EAC136]">
              Contato & Localização
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-[#FCFAF8]/80">
              <MapPin className="w-4 h-4 text-[#EAC136] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#FCFAF8]">Sede:</p>
                <p>Rua E 1, Cj. Eustáquio G. Melo II, 26</p>
                <p>Cidade Universitária – Maceió/AL</p>
                <p className="text-[11px] text-[#FCFAF8]/60">CEP: 57072-371</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#FCFAF8]/80 pt-1">
              <Phone className="w-4 h-4 text-[#EAC136] shrink-0" />
              <div className="flex flex-col gap-0.5">
                <a
                  href={COMPANY_DATA.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EAC136] font-bold"
                >
                  WhatsApp: {COMPANY_DATA.phone.display}
                </a>
                <span className="text-[11px] text-[#FCFAF8]/70">
                  Fixo: {COMPANY_DATA.phone.landline}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#EAC136] text-[#FCFAF8] hover:text-[#0C0F13] transition-colors text-xs font-bold"
                aria-label="Instagram da Auto Escola 4X4"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{COMPANY_DATA.instagram.handle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#FCFAF8]/50">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Auto Escola 4X4 (Auto Escola 4X4 Ltda.). Todos os direitos reservados. Maceió – AL.
          </p>

          <div className="flex items-center gap-3">
            <span>Cidade Universitária • Maceió</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 p-1.5 rounded-lg bg-white/5 hover:bg-[#EAC136] text-white hover:text-[#0C0F13] transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
