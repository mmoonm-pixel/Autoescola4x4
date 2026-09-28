import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Categorias', href: '#categorias' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Aulas Práticas', href: '#aulas-praticas' },
    { name: 'Como Funciona', href: '#etapas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Localização', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0F13]/95 backdrop-blur-md py-2.5 shadow-2xl border-b border-[#EAC136]/25'
          : 'bg-[#0C0F13] py-3.5 border-b border-[#EAC136]/20'
      } text-[#FCFAF8]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Oficial Auto Escola 4X4 (Fundo 100% Transparente, sem moldura ou caixa vermelha) */}
          <a
            href="#inicio"
            id="header-logo-link"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#EAC136] rounded-lg transition-transform duration-200 hover:opacity-95"
            aria-label="Auto Escola 4X4 - Início"
          >
            <img
              src="/logo_4x4_transparent.png"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== '/logo_4x4_transparent.png') {
                  target.src = '/logo_4x4_transparent.png';
                }
              }}
              alt={COMPANY_DATA.logo.alt}
              className="h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[210px] object-contain block select-none bg-transparent"
              loading="eager"
            />
          </a>

          {/* Menu Centralizado Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-xl text-xs font-bold tracking-wide text-[#FCFAF8]/85 hover:text-[#EAC136] hover:bg-[#161A20] transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Principal Desktop: INICIAR MINHA HABILITAÇÃO */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              id="header-cta-iniciar"
              className="px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#EAC136] hover:bg-[#F2C94C] text-[#0C0F13] shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>INICIAR MINHA HABILITAÇÃO</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0C0F13]" />
            </button>
          </div>

          {/* Botão Hamburger Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#FCFAF8] hover:text-[#EAC136] hover:bg-[#161A20] focus:outline-none focus:ring-2 focus:ring-[#EAC136] transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Retrátil */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-[#0C0F13] border-t border-[#EAC136]/20 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#FCFAF8] hover:text-[#EAC136] hover:bg-[#161A20] uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-[#EAC136]/15 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              className="w-full py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-wider bg-[#EAC136] hover:bg-[#F2C94C] text-[#0C0F13] flex items-center justify-center gap-2 text-center shadow-md cursor-pointer"
            >
              <span>INICIAR MINHA HABILITAÇÃO</span>
              <ArrowRight className="w-4 h-4 text-[#0C0F13]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
