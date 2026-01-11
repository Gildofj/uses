# 🛠️ gildofj/uses - Meu Setup Pessoal Documentado

Bem-vindo ao projeto onde documento meu setup pessoal enquanto pratico **Astro**, um framework web moderno e super rápido! Este é um projeto de aprendizado que combina desenvolvimento web, design e documentação do meu equipamento tecnológico em constante evolução.

## 🤔 Do Que Se Trata Este Projeto?

Este projeto tem **dois objetivos principais**:

### 1️⃣ Praticar Desenvolvimento Web com Astro

Um espaço para explorar e dominar o [Astro](https://astro.build/), um framework moderno que revoluciona a forma como criamos sites estáticos e dinâmicos com performance excepcional.

### 2️⃣ Documentar Meu Setup Pessoal (CMS com Obsidian)

Um catálogo dinâmico e atualizado do meu equipamento e gear, inspirado no projeto [craftzdog-uses do Tatsuya Matsuyama (craftzdog)](https://uses.craftz.dog), desenvolvedor indie conhecido por criar produtos como [Inkdrop](https://www.inkdrop.app/) e manter canais no YouTube como [craftzdog](https://www.youtube.com/@craftzdog) e [devaslife](https://www.youtube.com/@devaslife).

**O diferencial:** O projeto usa **Obsidian como CMS**, sincronizando automaticamente posts e imagens do meu cofre de notas para o site. Isso significa que posso escrever sobre meu setup em um app de notas familiar e o site se atualiza automaticamente! 🪄 (Por enquanto essa sincronização ocorre apenas localmente, porém estou estudando maneiras de tornar isso mais automatizado)

## 🎯 Fluxo de Conteúdo

```
📝 Obsidian (Notas) → 🔄 Script de Sincronização → 🌐 Site Astro
```

Quando você adiciona um novo equipamento ao seu cofre Obsidian, o script detecta a mudança e:

- Copia o markdown para o site
- Processa as imagens automaticamente
- Normaliza nomes de arquivo
- E deleta automaticamente o que foi removido!

## 🚀 Quick Start

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) v18+
- [pnpm](https://pnpm.io/) (gerenciador de pacotes rápido)

### Setup e Execução

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento (localhost:3000)
pnpm dev

# Build para produção
pnpm build

# Visualizar build de produção
pnpm preview
```

### Sincronizar com Obsidian

```bash
pnpm run import
```

Este comando:

- ✨ Observa seu cofre Obsidian em tempo real
- 📝 Copia posts em markdown para `src/content/posts/`
- 🖼️ Move imagens para `public/assets/`
- 🧹 Normaliza nomes de arquivo (`T Dagger Destroyer` → `t-dagger-destroyer`)
- 🔄 Converte `![[imagem.png]]` (Obsidian MD) para `![alt](/assets/...)` (Astro MD)
- 🗑️ Remove arquivos do site quando deletados do cofre

**Procura pelo cofre em:**

- `~/obsidian-vault`
- `~/Documents/obsidian-vault`

## 🚀 O Que é Astro?

**Astro** é um framework web moderno focado em performance. Suas características principais:

- **Zero JavaScript por padrão** → Sites são entregues como HTML puro
- **Island Architecture** → Você adiciona JavaScript apenas onde precisa (interatividade)
- **Multi-framework** → Use React, Vue, Svelte, etc. no mesmo projeto
- **Excelente para conteúdo** → Suporte nativo a Markdown, collections e CMS
- **Blazingly fast** ⚡ → Performance excepcional em Core Web Vitals

Neste projeto, uso Astro porque:

- ✅ Pratica as tendências modernas de desenvolvimento web
- ✅ Performance excepcional para um site de conteúdo
- ✅ Suporte nativo a internationalization (i18n)
- ✅ Fácil integração com headless CMS (neste caso, Obsidian)

## 🛠️ Tech Stack

| Tecnologia                                                     | Propósito                                         |
| -------------------------------------------------------------- | ------------------------------------------------- |
| **[Astro](https://astro.build/)**                              | Framework web moderno, zero JS por padrão         |
| **[React](https://react.dev/)**                                | Componentes interativos (dropdowns, theme toggle) |
| **[TypeScript](https://www.typescriptlang.org/)**              | Type-safety no JavaScript                         |
| **[Tailwind CSS](https://tailwindcss.com/)**                   | Estilização utility-first                         |
| **[pnpm](https://pnpm.io/)**                                   | Gerenciador de pacotes rápido e eficiente         |
| **[@headlessui/react](https://headlessui.com/)**               | Componentes acessíveis e unstyled                 |
| **[@phosphor-icons/react](https://phosphoricons.com/)**        | Biblioteca de ícones moderna                      |
| **[react-flagkit](https://github.com/panther7/react-flagkit)** | Bandeiras para seletor de idioma                  |

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/        # Componentes Astro & React
│   │   ├── _UI/          # Componentes UI reutilizáveis
│   │   ├── hooks/        # React hooks customizados
│   │   └── *.astro       # Componentes Astro (Header, Footer, etc)
│   ├── content/posts/    # Posts de equipamentos (CMS baseado em Markdown)
│   │   ├── en/          # Conteúdo em inglês
│   │   └── pt/          # Conteúdo em português
│   ├── i18n/            # Configuração de internacionalização
│   ├── layouts/         # Templates de página
│   ├── pages/           # Roteamento baseado em arquivo (file-based routing)
│   ├── styles/          # CSS global
│   ├── utils/           # Funções utilitárias
│   └── @types/          # Type definitions customizadas
├── public/
│   ├── assets/          # Imagens dos equipamentos
│   └── ...              # Favicon, manifesto, etc
├── tools/
│   └── import.mjs       # Script de sincronização Obsidian → Projeto
├── astro.config.mjs     # Configuração do Astro
├── tsconfig.json        # Configuração TypeScript
└── package.json         # Dependências do projeto
```

## 🌍 Suporte Multilíngue

- 🇬🇧 **Inglês**: `/en/`
- 🇧🇷 **Português**: `/pt/` (padrão)

Configurado no `astro.config.mjs` com roteamento automático.

## 📝 Como Adicionar Equipamento

1. Abra seu cofre Obsidian
2. Crie uma pasta `Uses/Posts/[seu-idioma]/`
3. Adicione um arquivo `Seu Equipamento.md` com conteúdo em Markdown
4. Salve imagens em `Uses/Images/`
5. Use sintaxe Obsidian: `![[imagem.png]]`
6. Execute `pnpm run import`
7. Pronto! Seu equipamento está documentado no site 🎉

Exemplo de conteúdo:

```markdown
# Monitor Dell P2422H

Uma descrição incrível sobre por que este monitor é sensacional.

## Especificações

- 24 polegadas
- IPS
- 60Hz

![[dell-monitor.jpg]]
```

## 🎨 Funcionalidades

- ✅ Sincronização automática com Obsidian (CMS)
- ✅ Suporte multilíngue (EN/PT-BR)
- ✅ Toggle de tema escuro/claro
- ✅ Design responsivo e moderno
- ✅ Navegação por categorias
- ✅ RSS feed automático
- ✅ Sitemap para SEO
- ✅ Performance excepcional (Astro)

## 📊 Comandos Disponíveis

```bash
pnpm dev          # 🚀 Servidor de desenvolvimento
pnpm build        # 📦 Build de produção
pnpm preview      # 👀 Visualizar build
pnpm run import       # 🔄 Sincronizar com Obsidian
pnpm deploy       # 🌐 Deploy no GitHub Pages (Utilizado no CI/CD)
pnpm astro [cmd]  # ⚙️ Comandos Astro CLI
```

## 💡 Inspiração

Este projeto foi inspirado no conceito de `/uses` popularizado por [Tatsuya Matsuyama](https://www.craftzdog.com/), um desenvolvedor indie extremamente talentoso que:

- Criou [Inkdrop](https://www.inkdrop.app/), um app de notas feito de um dev e pensado para devs
- Mantém dois canais no YouTube incríveis:
  - [craftzdog](https://www.youtube.com/@craftzdog)
  - [devaslife](https://www.youtube.com/@devaslife)
- Documenta seu setup de forma profissional

Recomendo assistir seus vídeos para inspiração em desenvolvimento web e produtividade!

## 🤷 FAQ

**P: Por que usar Obsidian como CMS em vez de um CMS tradicional?**
R: Porque Obsidian é onde eu já escrevo minhas notas! Centralizar em um app que já uso torna tudo mais prático e mantém o workflow fluido.

**P: Posso usar este projeto como template?**
R: Com certeza! Sinta-se livre para clonar e adaptar para seu próprio setup. Apenas credite a inspiração ao craftzdog 😄

**P: Como eu modifico o tema/design?**
R: O design usa Tailwind CSS. Modifique `src/styles/global.css` e as classes Tailwind nos componentes. Tudo é bem documentado!

**P: E se eu não souber Astro?**
R: Perfeito! Este projeto é um excelente ponto de partida para aprender. A documentação oficial do Astro é excelente.

**P: Posso adicionar mais idiomas?**
R: Sim! Configure em `astro.config.mjs`, adicione os arquivos em `src/content/posts/[idioma]/` e configure as traduções em `src/i18n/ui.ts`.

---

**Desenvolvendo skills enquanto documento meu setup.** 🖥️✨

_Inspirado em [uses.craftz.dog](https://uses.craftz.dog)_
_Feito com ❤️ por [gildofj]_
