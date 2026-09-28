export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: boolean;
}

export interface BenefitItem {
  headline: string;
  subline: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  vehicle: string;
  badge: string;
  description: string;
  features: string[];
  whatsappMsg: string;
  popular?: boolean;
}

export const COMPANY_DATA = {
  name: 'Auto Escola 4X4',
  legalName: 'Auto Escola 4X4 Ltda.',
  shortName: '4X4',
  slogan: 'Sua aprovação começa aqui!',
  tagline: 'Escola de condução • Aulas e equipe qualificada • Maceió – AL',
  socialProofMain: '+5.000 alunos aprovados',
  address: {
    street: 'Rua E 1, Cj. Eustáquio G. Melo II, 26',
    neighborhood: 'Cidade Universitária',
    city: 'Maceió',
    state: 'AL',
    cep: '57072-371',
    country: 'Brasil',
    full: 'Rua E 1, Cj. Eustáquio G. Melo II, 26 – Cidade Universitária, Maceió – AL, CEP 57072-371',
    googleMapsUrl: 'https://maps.google.com/?q=Rua+E+1,+Cj.+Eust%C3%A1quio+G.+Melo+II,+26+-+Cidade+Universit%C3%A1ria,+Macei%C3%B3+-+AL,+57072-371',
    embedUrl: 'https://maps.google.com/maps?q=Rua+E+1,+Cj.+Eust%C3%A1quio+G.+Melo+II,+26+-+Cidade+Universit%C3%A1ria,+Macei%C3%B3+-+AL,+57072-371&t=&z=16&ie=UTF8&iwloc=&output=embed'
  },
  phone: {
    display: '(82) 99925-0889',
    landline: '(82) 3185-7385',
    raw: '5582999250889',
    whatsappUrl: 'https://wa.me/5582999250889',
    defaultMsg: 'Olá! Gostaria de saber mais sobre a Auto Escola 4X4.',
  },
  instagram: {
    handle: '@autoescola4x4ltda',
    url: 'https://www.instagram.com/autoescola4x4ltda/',
  },
  logo: {
    sourceUrl: 'https://ibb.co/4w8ZJBmw',
    directUrl: '/logo_4x4_transparent.png',
    crispUrl: '/logo_4x4_transparent.png',
    local: '/logo_4x4_transparent.png',
    alt: 'Logo Auto Escola 4X4',
  },
  heroVideo: {
    url: 'https://www.image2url.com/r2/default/videos/1790607635004-6c0589a3-4d8c-4420-9ad0-5b7097390c4a.mp4',
    alt: 'Vídeo Oficial Auto Escola 4X4',
  },
  stats: {
    students: '+5.000',
    studentsLabel: 'ALUNOS APROVADOS',
    categories: 'CATEGORIAS A, B, C, D E A+B',
    location: 'CIDADE UNIVERSITÁRIA • MACEIÓ',
    quality: 'AULAS E EQUIPE QUALIFICADA',
  }
};

// 5 Serviços Oficiais da Auto Escola 4X4
export const OFFICIAL_SERVICES: ServiceItem[] = [
  {
    id: 'primeira-habilitacao',
    number: '01',
    title: 'PRIMEIRA HABILITAÇÃO',
    subtitle: 'Categorias A, B e A+B',
    description: 'Sua aprovação começa aqui! Conquiste sua CNH de carro, moto ou ambos com acompanhamento passo a passo de instrutores pacientes e qualificados.',
    highlight: true,
  },
  {
    id: 'adicao-mudanca',
    number: '02',
    title: 'ADIÇÃO E MUDANÇA DE CATEGORIA',
    subtitle: 'Categorias A, B, C e D',
    description: 'Expanda suas possibilidades para dirigir veículos de carga (C) ou transporte de passageiros (D). Aulas práticas eficientes para sua evolução.',
    highlight: true,
  },
  {
    id: 'aulas-praticas-teoricas',
    number: '03',
    title: 'AULAS PRÁTICAS E TEÓRICAS',
    subtitle: 'Aulas e equipe qualificada',
    description: 'Metodologia dinâmica e atualizada para fixação do conteúdo do DETRAN e treinamento prático seguro nas vias de Maceió.',
    highlight: true,
  },
  {
    id: 'renovacao-cnh',
    number: '04',
    title: 'RENOVAÇÃO DA CNH',
    subtitle: 'Praticidade e rapidez',
    description: 'Renove sua habilitação sem complicações. Auxiliamos em todas as etapas, exames e agendamentos junto ao órgão de trânsito.',
  },
  {
    id: 'orcamento-personalizado',
    number: '05',
    title: 'SOLICITAÇÃO DE ORÇAMENTO',
    subtitle: 'Consulte condições e valores',
    description: 'Fale com nossa equipe pelo WhatsApp e receba uma proposta personalizada e transparente para iniciar o seu processo.',
  },
];

// Categorias Oficiais Auto Escola 4X4 (A, B, A+B, C, D)
export const HABILITACAO_CATEGORIES: CategoryItem[] = [
  {
    id: 'A',
    name: 'CATEGORIA A',
    vehicle: 'Motocicletas',
    badge: 'Motos e Ciclomotores',
    description: 'Habilitação para pilotar motocicletas com equilíbrio, domínio e segurança no trânsito.',
    features: [
      'Treinamento em circuito prático',
      'Instrutores credenciados e pacientes',
      'Foco total na sua aprovação',
      'Consulte condições e valores',
    ],
    whatsappMsg: 'Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para Categoria A (Moto).',
  },
  {
    id: 'B',
    name: 'CATEGORIA B',
    vehicle: 'Carros',
    badge: 'Automóveis e Utilitários',
    description: 'Habilitação para conduzir carros e veículos leves com segurança e confiança ao volante.',
    features: [
      'Veículos modernos com direção hidráulica/elétrica',
      'Duplo comando de segurança para tranquilidade',
      'Treino em trânsito real e baliza perfeita',
      'Consulte condições e valores',
    ],
    whatsappMsg: 'Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para Categoria B (Carro).',
  },
  {
    id: 'AB',
    name: 'CATEGORIA A + B',
    vehicle: 'Carro + Moto',
    badge: 'Mais Escolhida',
    description: 'Habilitação combinada para conduzir carro e moto em um único processo inteligente e econômico.',
    features: [
      'Processo unificado com maior comodidade',
      'Aulas práticas em veículos de 2 e 4 rodas',
      'Preparação completa para todas as rotinas',
      'Consulte condições e valores',
    ],
    whatsappMsg: 'Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para Categoria A+B (Carro e Moto).',
    popular: true,
  },
  {
    id: 'C',
    name: 'CATEGORIA C',
    vehicle: 'Veículos de Carga',
    badge: 'Caminhões e Carga',
    description: 'Habilitação para conduzir veículos de carga acima de 3.500 kg, abrindo novas portas profissionais.',
    features: [
      'Treinamento específico para veículos de carga',
      'Direção defensiva aplicada e manobras precisas',
      'Instrutores especializados no segmento',
      'Consulte condições e valores',
    ],
    whatsappMsg: 'Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para Categoria C (Carga).',
  },
  {
    id: 'D',
    name: 'CATEGORIA D',
    vehicle: 'Transporte de Passageiros',
    badge: 'Vans, Micro-ônibus e Ônibus',
    description: 'Habilitação para conduzir veículos destinados ao transporte de passageiros (mais de 8 lugares).',
    features: [
      'Qualificação técnica para transporte de passageiros',
      'Direção responsável e segurança de passageiros',
      'Oportunidade para atuar no mercado profissional',
      'Consulte condições e valores',
    ],
    whatsappMsg: 'Olá! Vim pelo site da Auto Escola 4X4 e gostaria de solicitar um orçamento para Categoria D (Passageiros).',
  },
];

// Como Funciona — 7 Etapas Oficiais Auto Escola 4X4
export const HOW_IT_WORKS_STAGES = [
  {
    step: '01',
    badge: 'PASSO INICIAL',
    title: 'ESCOLHA SUA CATEGORIA',
    desc: 'Escolha A, B, A+B, C ou D conforme sua necessidade pessoal ou profissional.',
    highlights: ['Cat. A (Moto)', 'Cat. B (Carro)', 'Cat. C (Carga) e D (Passageiros)'],
  },
  {
    step: '02',
    badge: 'MATRÍCULA',
    title: 'SOLICITE SEU ORÇAMENTO',
    desc: 'Entre em contato com a equipe da 4X4 e inicie seu cadastro de forma ágil.',
    highlights: ['Atendimento direto no WhatsApp', 'Documentação orientada', 'Agendamento prático'],
  },
  {
    step: '03',
    badge: 'CONHECIMENTO',
    title: 'AULAS TEÓRICAS',
    desc: 'Aulas didáticas e equipe qualificada preparando você para a prova teórica.',
    highlights: ['Legislação e direção defensiva', 'Primeiros socorros e mecânica', 'Simulados para fixação'],
  },
  {
    step: '04',
    badge: 'AVALIAÇÃO',
    title: 'EXAME TEÓRICO',
    desc: 'Avalie seus conhecimentos com toda a preparação e suporte da Auto Escola 4X4.',
    highlights: ['Confiança e calma', 'Acompanhamento pré-exame', 'Alto índice de aprovação'],
  },
  {
    step: '05',
    badge: 'NA PRÁTICA',
    title: 'AULAS PRÁTICAS',
    desc: 'Treine nas ruas e na pista com instrutores experientes e veículos revisados.',
    highlights: ['Instrutores dedicados', 'Veículos confortáveis', 'Domínio de baliza e vias'],
  },
  {
    step: '06',
    badge: 'ETAPA FINAL',
    title: 'EXAME PRÁTICO',
    desc: 'Chegue seguro e preparado para a prova prática do DETRAN.',
    highlights: ['Revisão dos comandos', 'Segurança ao volante', 'Acompanhamento da equipe'],
  },
  {
    step: '07',
    badge: 'CONQUISTA',
    title: 'SUA CNH EM MÃOS',
    desc: 'Conclua o processo e aproveite sua liberdade e independência para dirigir.',
    highlights: ['+5.000 alunos aprovados', 'Conquista garantida', 'Sua aprovação começa aqui!'],
  },
];

// Benefícios e Estrutura Auto Escola 4X4
export const BENEFITS_LIST: BenefitItem[] = [
  { headline: '+5.000 ALUNOS', subline: 'Aprovados no DETRAN' },
  { headline: 'AULAS QUALIFICADAS', subline: 'Equipe experiente' },
  { headline: 'CATEGORIAS A, B, C E D', subline: 'Motos, Carros e Pesados' },
  { headline: 'CIDADE UNIVERSITÁRIA', subline: 'Maceió – AL' },
  { headline: 'ATENDIMENTO ÁGIL', subline: 'Orçamento via WhatsApp' },
];

// Pilares de Aulas Práticas e Treinamento
export const PRACTICAL_PILLARS = [
  {
    id: 'pratica',
    title: 'Prática em Vias Reais',
    desc: 'Treinamento dinâmico no trânsito de Maceió, preparando você com vivência real para qualquer situação.',
  },
  {
    id: 'equipe',
    title: 'Aulas e Equipe Qualificada',
    desc: 'Instrutores atenciosos e experientes, dedicados a ensinar no seu ritmo com didática clara e paciência.',
  },
  {
    id: 'confianca',
    title: 'Confiança e Segurança',
    desc: 'Metodologia estruturada para vencer o medo de dirigir, dominar balizas e manobras com total tranquilidade.',
  },
  {
    id: 'frota',
    title: 'Frota Revisada e Confortável',
    desc: 'Veículos equipados com duplo comando de segurança e ar-condicionado para treinos confortáveis e protegidos.',
  },
];

// Prova Social Institucional Oficial (+5.000 Alunos Aprovados)
export const INSTITUTIONAL_CREDENTIALS = [
  {
    id: 1,
    title: '+5.000 Alunos Aprovados',
    category: 'Maceió – AL',
    badge: 'Marca Histórica',
    rating: 5,
    description:
      'Mais de 5.000 novos condutores já conquistaram sua CNH com a Auto Escola 4X4. Tradição e compromisso diário com a aprovação de cada aluno.',
  },
  {
    id: 2,
    title: 'Aulas e Equipe Qualificada',
    category: 'Corpo Docente Especializado',
    badge: 'Instrutores Credenciados',
    rating: 5,
    description:
      'Instrutores pacientes e experientes, focados em transmitir técnica, tranquilidade e segurança real tanto no trânsito urbano quanto nas provas oficiais.',
  },
  {
    id: 3,
    title: 'Categorias A, B, C e D',
    category: 'Habilitação Completa',
    badge: 'Veículos Leves e Pesados',
    rating: 5,
    description:
      'Formação completa para motos (A), carros (B), transporte de carga (C) e passageiros (D), com veículos adequados e instrutores especializados.',
  },
  {
    id: 4,
    title: 'Localização Estratégica',
    category: 'Cidade Universitária • Maceió',
    badge: 'Fácil Acesso',
    rating: 5,
    description:
      'Sede localizada na Rua E 1, Cj. Eustáquio G. Melo II, 26 – Cidade Universitária, proporcionando facilidade para moradores de Maceió e região.',
  },
  {
    id: 5,
    title: 'Atendimento Rápido e Transparente',
    category: 'WhatsApp: (82) 99925-0889',
    badge: 'Solicite seu Orçamento',
    rating: 5,
    description:
      'Informações claras, sem taxas ocultas e suporte contínuo desde a matrícula até a entrega da sua CNH.',
  },
];

// Depoimentos Reais de Alunos da Auto Escola 4X4
export interface TestimonialItem {
  id: string;
  quote: string;
  authorTag: string;
  category: string;
  location: string;
  rating: number;
  highlight?: boolean;
}

export const REAL_STUDENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    quote: 'Passei de primeira! Aulas teóricas e práticas com equipe qualificada e instrutores muito pacientes. Treino de baliza perfeito nas ruas de Maceió!',
    authorTag: 'Aluno Aprovado',
    category: 'Categoria B (Carro)',
    location: 'Cidade Universitária • Maceió',
    rating: 5,
    highlight: true,
  },
  {
    id: 'dep-2',
    quote: 'Sua aprovação começa aqui mesmo! Fiz o processo combinado A+B e foi super tranquilo. Atendimento ágil pelo WhatsApp e estrutura nota 10.',
    authorTag: 'Aluna Aprovada',
    category: 'Categoria A + B (Carro e Moto)',
    location: 'Maceió – AL',
    rating: 5,
    highlight: true,
  },
  {
    id: 'dep-3',
    quote: 'Fiz a mudança para Categoria C para transporte de carga. Instrutores capacitados e metodologia focada no exame prático do DETRAN.',
    authorTag: 'Aluno Aprovado',
    category: 'Categoria C (Carga)',
    location: 'Maceió – AL',
    rating: 5,
  },
  {
    id: 'dep-4',
    quote: 'Autoescola de muita confiança na Cidade Universitária. Veículos modernos com duplo comando que dão total segurança para quem tem medo de dirigir.',
    authorTag: 'Aluna Aprovada',
    category: 'Categoria B (Carro)',
    location: 'Cidade Universitária • Maceió',
    rating: 5,
    highlight: true,
  },
  {
    id: 'dep-5',
    quote: 'Mais de 5.000 alunos aprovados comprovam o trabalho sério da 4X4. Conquistei minha CNH de moto sem complicação!',
    authorTag: 'Aluno Aprovado',
    category: 'Categoria A (Moto)',
    location: 'Maceió – AL',
    rating: 5,
  },
  {
    id: 'dep-6',
    quote: 'Atendimento transparente e rápido. Me orientaram em todas as etapas, exames e agendamento. Vale cada centavo investir na Auto Escola 4X4.',
    authorTag: 'Aluna Aprovada',
    category: '1ª Habilitação',
    location: 'Maceió – AL',
    rating: 5,
  },
];

export const FAQ_LIST = [
  {
    question: 'Como inicio minha habilitação na Auto Escola 4X4?',
    answer: 'Para iniciar seu processo de 1ª habilitação (Categorias A, B ou A+B), basta ter 18 anos completos, documento de identificação com foto e comprovante de residência. Clique em "Iniciar Minha Habilitação" ou chame nossa equipe no WhatsApp (82) 99925-0889 para receber todas as orientações e solicitar seu orçamento.'
  },
  {
    question: 'Quais categorias a Auto Escola 4X4 oferece?',
    answer: 'Trabalhamos com Categoria A (motocicletas), Categoria B (carros), Categoria C (veículos de carga), Categoria D (transporte de passageiros) e o pacote combinado Categoria A+B (carro e moto).'
  },
  {
    question: 'Qual é a principal prova social da Auto Escola 4X4?',
    answer: 'Contamos com a marca comprovada de mais de 5.000 alunos aprovados em Maceió – AL, fruto de aulas didáticas e equipe altamente qualificada.'
  },
  {
    question: 'Como funciona a adição ou mudança para Categoria C e D?',
    answer: 'Se você já possui CNH e deseja conduzir veículos de carga (C) ou transporte coletivo de passageiros (D), orientamos em todas as exigências legais do DETRAN, exames toxicológicos e aulas práticas específicas.'
  },
  {
    question: 'Como consultar os valores e formas de pagamento?',
    answer: 'Não divulgamos tabelas fixas online pois as condições podem variar de acordo com a categoria e exames necessários. Fale conosco pelo WhatsApp (82) 99925-0889 para solicitar seu orçamento personalizado.'
  },
  {
    question: 'Onde fica a Auto Escola 4X4 em Maceió?',
    answer: 'Nossa unidade fica na Rua E 1, Cj. Eustáquio G. Melo II, 26 – Cidade Universitária, Maceió – AL (CEP 57072-371). Atendemos também pelo telefone fixo (82) 3185-7385 e WhatsApp (82) 99925-0889.'
  }
];
