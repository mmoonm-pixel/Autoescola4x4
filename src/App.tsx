import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { BenefitsBar } from './components/BenefitsBar';
import { ServicesCarousel } from './components/ServicesCarousel';
import { Categories } from './components/Categories';
import { PracticalLessons } from './components/PracticalLessons';
import { TheoryPractice } from './components/TheoryPractice';
import { TrainingStages } from './components/TrainingStages';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { DrivingAtmosphere } from './components/DrivingAtmosphere';
import { InterestModal } from './components/InterestModal';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<'A' | 'B' | 'AB' | 'C' | 'D'>('B');

  const handleOpenModal = (category: 'A' | 'B' | 'AB' | 'C' | 'D' = 'B') => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0C0F13] text-[#FCFAF8] flex flex-col selection:bg-[#EAC136] selection:text-[#0C0F13] relative overflow-x-clip">
        
        {/* Sistema visual discreto de ambientação viária */}
        <DrivingAtmosphere />

        {/* 1. Header Oficial Auto Escola 4X4 */}
        <Header onOpenModal={() => handleOpenModal('B')} />

        <main className="flex-1 relative z-10">
          {/* 01 — HERO (Vídeo Oficial em Tela Cheia + Duas CTAs Limpas) */}
          <Hero onOpenModal={() => handleOpenModal('B')} />

          {/* 02 — MARQUEE DINÂMICO */}
          <InfiniteMarquee />

          {/* 03 — BENEFÍCIOS & PROVA SOCIAL (+5.000 ALUNOS APROVADOS) */}
          <BenefitsBar />

          {/* 04 — SERVIÇOS OFICIAIS AUTO ESCOLA 4X4 (CARROSSEL) */}
          <ServicesCarousel />

          {/* 05 — CATEGORIAS A, B, A+B, C E D (CARROSSEL DE CARDS) */}
          <Categories onSelectCategory={(cat) => setModalCategory(cat)} />

          {/* 06 — AULAS PRÁTICAS & TEÓRICAS (SUA APROVAÇÃO COMEÇA AQUI) */}
          <PracticalLessons onOpenModal={() => handleOpenModal('B')} />

          {/* 07 — PREPARAÇÃO TEÓRICA E PRÁTICA */}
          <TheoryPractice />

          {/* 08 — COMO FUNCIONA (7 ETAPAS) */}
          <TrainingStages
            onOpenModal={() => handleOpenModal(modalCategory)}
            onSelectCategory={(cat) => setModalCategory(cat)}
          />

          {/* 09 — SOBRE A AUTO ESCOLA 4X4 */}
          <About />

          {/* 10 — PROVA SOCIAL INSTITUCIONAL (+5.000 ALUNOS APROVADOS) */}
          <Reviews />

          {/* 11 — PERGUNTAS FREQUENTES */}
          <Faq />

          {/* 12 — LOCALIZAÇÃO NA CIDADE UNIVERSITÁRIA • MACEIÓ */}
          <Location />

          {/* 13 — CTA FINAL (SUA APROVAÇÃO COMEÇA AQUI!) */}
          <FinalCta onOpenModal={() => handleOpenModal('B')} />
        </main>

        {/* 14 — RODAPÉ INSTITUCIONAL AUTO ESCOLA 4X4 */}
        <Footer onOpenModal={() => handleOpenModal('B')} />

        {/* 15 — BOTÃO FLUTUANTE WHATSAPP (OFICIAL 4X4) */}
        <WhatsAppFloatingButton />

        {/* 16 — MODAL DE CADASTRO COM FLUXO PARA O WHATSAPP */}
        <InterestModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialCategory={modalCategory}
        />
      </div>
    </SmoothScroll>
  );
}
