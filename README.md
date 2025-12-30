# NetSecurity - Nova Plataforma Digital

Este repositório contém o código-fonte da nova plataforma digital da NetSecurity, desenvolvida com tecnologias modernas de front-end para garantir performance, SEO e escalabilidade.

## 📄 Sobre o Projeto

Realizamos uma reestruturação completa na Netsecurity, focada em modernização tecnológica e autonomia de gestão. A atualização seguiu esta ordem:

1.  **Base Tecnológica e Performance:** Atualizamos todas as bibliotecas para as tecnologias mais recentes do mercado. Isso garante um site mais rápido, seguro e com código fácil de manter e escalar.
2.  **Arquitetura de SEO e Blog:** O site agora possui uma integração nativa com o SEO do Google. Implementamos a área de Blog, que é o principal motor de busca orgânica, permitindo que novos conteúdos ajudem o site a ranquear melhor constantemente.
3.  **Sistema Dinâmico e Independência:** Criamos uma estrutura onde a interface (textos, fotos, vídeos e banners) é editável, eliminando a dependência de código para alterações de rotina.
4.  **Painel de Governança e Marketing (Adendo):** A área restrita administrativa já está preparada no código, mas ainda está em fase de desenvolvimento. Estamos aprimorando a UX (Experiência do Usuário) e a UI (Interface do Usuário) para garantir que a gestão seja intuitiva. Por este motivo, ela ainda não consta nesta primeira apresentação, mas permitirá em breve que o Marketing e a Governança controlem todo o conteúdo de forma independente.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando o ecossistema React/Next.js, focado em performance de produção (Core Web Vitals).

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Ícones:** [React Icons](https://react-icons.github.io/react-icons/) (Substituindo FontAwesome CDN para menor bundle size)
* **Fontes:** `next/font` (Poppins)
* **Animações:** CSS nativo (Tailwind config) e Intersection Observer para "Scroll Reveal".

## ⚡ Destaques Técnicos

* **Otimização de Imagens:** Uso extensivo do componente `next/image` para carregamento preguiçoso (lazy loading), redimensionamento automático e conversão para WebP.
* **Server-Side Rendering (SSR) e Static Site Generation (SSG):** Páginas pré-renderizadas para máxima velocidade de carregamento inicial e SEO.
* **Componentização:** Arquitetura modular com componentes reutilizáveis (`Hero`, `Header`, `Footer`, `Timeline`, `ScrollReveal`) situados na pasta `/components`.
* **Layout Responsivo:** Design totalmente adaptável para mobile, tablet e desktop utilizando as classes utilitárias do Tailwind.
* **Hero Carrossel Otimizado:** O componente `Hero.tsx` suporta vídeos e imagens, utilizando `useCallback` e limpeza de intervalos (`clearInterval`) para evitar vazamentos de memória.

## 📂 Estrutura de Pastas Principais


```

/app
layout.tsx      # Layout principal (fontes, metadados globais)
page.tsx        # Página Inicial (Home)
globals.css     # Estilos globais e configurações do Tailwind
/blog
page.tsx      # Listagem do Blog
/components       # Componentes reutilizáveis (Header, Footer, etc.)
/public
/assets/img     # Imagens e vídeos estáticos (otimizados externamente)

```

## 🚀 Como Rodar Localmente

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse `http://localhost:3000` no seu navegador.