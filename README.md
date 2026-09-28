# Autoescola Direção Certa — Landing Page Oficial

Landing page moderna, responsiva e de alta conversão da **Autoescola Direção Certa** (Maceió – AL), desenvolvida em **React 19**, **Vite 6**, **TypeScript**, **Tailwind CSS** e **Motion**.

Projeto 100% pronto para compilação estática e publicação externa no **Firebase Hosting** (ou Vercel, Netlify, Cloudflare Pages, etc.).

---

## 📁 Estrutura do Projeto

```text
├── public/                     # Arquivos estáticos servidos diretamente na raiz
│   ├── logo.png                # Logotipo oficial recortado com fundo transparente
│   ├── logo.jpg                # Imagem original da logo
│   ├── hero.jpg                # Imagem principal do Hero (828x1098)
│   └── hero_video.mp4          # Vídeo institucional (opcional)
├── src/
│   ├── components/             # Componentes modulares da interface
│   │   ├── Header.tsx          # Topo fixo com logo oficial, navegação e CTA WhatsApp
│   │   ├── Hero.tsx            # Abertura com imagem completa, responsiva e CTA direto
│   │   ├── BenefitsBar.tsx     # Carrossel dos 5 pilares e diferenciais da autoescola
│   │   ├── ServicesCarousel.tsx# Carrossel com os 6 serviços oficiais
│   │   ├── Categories.tsx      # 1ª Habilitação (Categorias A, B e AB empilhadas)
│   │   ├── PracticalPlans.tsx  # Pacotes de aulas práticas em carrossel horizontal
│   │   ├── ProfessionalCourses.tsx # Cursos profissionalizantes (Cargas, MOPP, etc.)
│   │   ├── TheoryPractice.tsx  # Metodologia teórica e prática
│   │   ├── TrainingStages.tsx  # Etapas até a conquista da CNH
│   │   ├── DrivingAtmosphere.tsx # Infraestrutura e frota
│   │   ├── Reviews.tsx         # Depoimentos e avaliações de alunos
│   │   ├── About.tsx           # Sobre a Direção Certa e diferenciais
│   │   ├── Location.tsx        # Endereço em Maceió e horários de funcionamento
│   │   ├── Faq.tsx             # Perguntas frequentes com accordion
│   │   ├── FinalCta.tsx        # Chamada para ação final de fechamento
│   │   ├── Footer.tsx          # Rodapé com dados de contato, CNPJ e catálogo
│   │   ├── WhatsAppFloatingButton.tsx # Botão flutuante de atendimento WhatsApp
│   │   ├── InterestModal.tsx   # Modal de pré-agendamento / interesse
│   │   ├── Icons.tsx           # Ícones SVG personalizados (WhatsApp, etc.)
│   │   ├── ScrollReveal.tsx    # Animações de entrada com IntersectionObserver
│   │   └── SmoothScroll.tsx    # Suavizador de rolagem com Lenis
│   ├── data/
│   │   └── company.ts          # Central de dados: telefones, WhatsApp, catálogo, planos, endereço
│   ├── App.tsx                 # Composição principal da página
│   ├── main.tsx                # Ponto de entrada React 19
│   └── index.css               # Estilos globais e Tailwind CSS
├── index.html                  # HTML de entrada com tags SEO, OpenGraph e JSON-LD
├── vite.config.ts              # Configuração otimizada do Vite
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências e scripts de execução/deploy
├── firebase.json               # Configuração oficial para o Firebase Hosting
├── .firebaserc                 # Vinculação do projeto Firebase
└── .gitignore                  # Arquivos ignorados pelo Git
```

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- **Node.js**: Versão 18 ou superior instalada ([nodejs.org](https://nodejs.org/))
- **Gerenciador de pacotes**: `npm` (incluso no Node) ou `pnpm` / `bun`

### 2. Instalação das dependências
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O site estará acessível no seu navegador em: `http://localhost:3000`

---

## 🏗️ Como Gerar o Build de Produção

Para compilar e minificar todo o projeto em HTML, CSS e JavaScript estáticos otimizados:

```bash
npm run build
```

O resultado será gerado na pasta `/dist`. Esses são os arquivos estáticos finais prontos para serem hospedados em qualquer servidor web ou CDN.

---

## 🔥 Como Publicar no Firebase Hosting

### Método Rápido (Recomendado)

1. **Instale o Firebase CLI** (caso ainda não tenha):
   ```bash
   npm install -g firebase-tools
   ```

2. **Faça login na sua conta Google/Firebase**:
   ```bash
   firebase login
   ```

3. **Vincule ao seu projeto no Firebase**:
   - Abra o arquivo `.firebaserc` e substitua `"seu-projeto-firebase"` pelo ID do seu projeto criado no [Firebase Console](https://console.firebase.google.com/).
   - Ou execute:
     ```bash
     firebase use --add
     ```
     e selecione o seu projeto na lista.

4. **Compile e publique com um único comando**:
   ```bash
   npm run deploy:firebase
   ```
   *(Esse script compila o projeto com `npm run build` e em seguida executa `firebase deploy --only hosting`)*.

Pronto! O terminal informará a URL oficial gerada (exemplo: `https://seu-projeto-firebase.web.app`).

---

## 🌐 Configuração de Domínio Próprio no Firebase Hosting

1. No [Firebase Console](https://console.firebase.google.com/), acesse **Hosting**.
2. Clique em **Adicionar domínio personalizado** (ex: `autoescoladirecaocerta.com.br`).
3. Adicione os registros DNS (tipo `A` ou `CNAME`) no painel do seu registrador de domínio (ex: Registro.br, HostGator, GoDaddy).
4. O Firebase provisiona o certificado SSL (HTTPS) automaticamente e de forma gratuita.

---

## ⚙️ Variáveis e Informações de Contato

Para alterar dados como telefone, link do WhatsApp, endereço ou horários de atendimento, edite o arquivo central:

👉 `src/data/company.ts`

Todas as seções do site consomem as informações deste arquivo automaticamente.
