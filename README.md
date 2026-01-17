# 🛠️ gildofj/uses - Meu Setup Pessoal Documentado

Bem-vindo ao projeto onde documento meu setup pessoal enquanto pratico **Astro**, um framework web moderno e super rápido! Este é um projeto de aprendizado que combina desenvolvimento web, design e documentação do meu equipamento tecnológico em constante evolução.

## 🤔 Do Que Se Trata Este Projeto?

Este projeto tem **dois objetivos principais**:

### 1️⃣ Praticar Desenvolvimento Web com Astro

Um espaço para explorar e dominar o [Astro](https://astro.build/), um framework moderno que revoluciona a forma como criamos sites estáticos e dinâmicos com performance excepcional.

### 2️⃣ Documentar Meu Setup Pessoal (CMS com Obsidian)

Um catálogo dinâmico e atualizado do meu equipamento e gear, inspirado no projeto [craftzdog-uses do Tatsuya Matsuyama (craftzdog)](https://uses.craftz.dog), desenvolvedor indie conhecido por criar produtos como [Inkdrop](https://www.inkdrop.app/) e manter canais no YouTube como [craftzdog](https://www.youtube.com/@craftzdog) e [devaslife](https://www.youtube.com/@devaslife).

**O diferencial:** O projeto usa **Obsidian como CMS**, sincronizando automaticamente posts e imagens do meu cofre de notas para o site via GitHub Actions. Isso significa que posso escrever sobre meu setup em um app de notas familiar e o site se atualiza automaticamente! 🪄 Basta editar no Obsidian, fazer commit e push no repositório privado do cofre, e o website atualiza sem nenhuma ação manual.

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

- ✨ Observa sua pasta utilizada como vault em meu Obsidian em tempo real
- 📝 Copia posts em markdown para `src/content/posts/`
- 🖼️ Move imagens para `public/assets/`
- 🧹 Normaliza nomes de arquivo (`T Dagger Destroyer` → `t-dagger-destroyer`)
- 🔄 Converte `![[imagem.png]]` (Obsidian MD) para `![alt](/assets/...)` (Astro MD)
- 🗑️ Remove arquivos do site quando deletados da pasta do meu vault do obsidian

**Procura pela pasta do obsidian-vault em:**

- `~/obsidian-vault`
- `~/Documents/obsidian-vault`
- `obsidian-vault-sync` -> no CI/CD

## 🔄 Sincronização Automática com GitHub Actions

> ✨ **Versão Automática:** O projeto suporta sincronização completamente automática! Edite no Obsidian, faça commit no repositório privado do cofre, e o site atualiza automaticamente sem necessidade de ações manuais.

### Como Funciona

```
📝 Editar no Obsidian
        ↓
🔐 Commit no repositório privado (obsidian-vault)
        ↓
🪝 Webhook dispara GitHub Actions
        ↓
⚙️ Action clona o cofre e sincroniza conteúdo
        ↓
🏗️ Build Astro automático
        ↓
🚀 Deploy automático no GitHub Pages
```

### Pré-requisitos para Automação

1. **Repositório privado** com seu cofre Obsidian (ex: `Gildofj/obsidian-vault`)
2. **Repositório público** com o projeto do blog (este projeto)
3. **GitHub Actions habilitado** em ambos os repositórios
4. **Tokens de autenticação** para acesso entre repositórios

### 📋 Passo a Passo de Configuração

#### 1️⃣ Criar Fine-Grained Tokens de Acesso

Para maior segurança, use **fine-grained tokens** em vez de tokens clássicos. Você precisará de **dois tokens** diferentes:

**Token 1: Para acessar o repositório `obsidian-vault`**

1. Vá para **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
2. Clique em **Generate new token**
3. Configure:
   - **Token name:** `obsidian-vault-access`
   - **Expiration:** 90 days (ou conforme sua preferência)
   - **Repository access:**
     - ✅ Selecione apenas `Gildofj/obsidian-vault` (seu repositório privado de cofre)
   - **Permissions:**
     - ✅ Contents: **Read-only** (apenas ler posts e imagens)
4. Copie e guarde o token em um lugar seguro

**Token 2: Para disparar workflows no repositório `uses`**

1. Vá para **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
2. Clique em **Generate new token**
3. Configure:
   - **Token name:** `blog-workflow-dispatch`
   - **Expiration:** 90 days (ou conforme sua preferência)
   - **Repository access:**
     - ✅ Selecione apenas `Gildofj/uses` (seu repositório público do blog)
   - **Permissions:**
     - ✅ Contents: **Read and write** (para fazer commits e push)
     - ✅ Workflows: **Read and write** (para disparar o workflow)
4. Copie e guarde o token em um lugar seguro

#### 2️⃣ Adicionar Secrets ao Repositório do Blog

No repositório `Gildofj/uses`:

1. Vá para **Settings** → **Secrets and variables** → **Actions**
2. Clique em **New repository secret**
3. Adicione dois secrets:

**Secret 1:**

- **Name:** `OBSIDIAN_VAULT_REPO`
- **Value:** `Gildofj/obsidian-vault` (substitua pelo seu usuário/repo)

**Secret 2:**

- **Name:** `OBSIDIAN_VAULT_TOKEN`
- **Value:** Cole o Token 1 (fine-grained token para o obsidian-vault)

#### 3️⃣ Criar Workflow do GitHub Actions

Você pode conferir em: ![.github/workflows/sync-obsidian-vault.yml](.github/workflows/sync-obsidian-vault.yml):

#### 4️⃣ Configurar Webhook e Secret no Repositório do Cofre

No seu repositório privado `obsidian-vault`:

1. Vá para **Settings** → **Secrets and variables** → **Actions**
2. Clique em **New repository secret**
3. Adicione o secret:

**Secret:**

- **Name:** `BLOG_DISPATCH_TOKEN`
- **Value:** Cole o Token 2 (fine-grained token para o blog/uses)

Use um Actions workflow no seu repositório de cofre (`.github/workflows/trigger-blog-sync.yml`):

```yaml
name: Trigger Blog Sync

on:
  push:
    paths:
      - "Uses/**"

jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger blog sync
        run: |
          curl -X POST \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Authorization: Bearer ${{ secrets.BLOG_DISPATCH_TOKEN }}" \
            https://api.github.com/repos/Gildofj/uses/dispatches \
            -d '{"event_type":"obsidian-vault-uses-updated"}'
```

### 🎯 Fluxo de Trabalho Automático

Após a configuração completa:

1. **Edite normalmente no Obsidian** 📝
   - Crie/modifique arquivos em `Uses/Posts/[idioma]/`
   - Adicione imagens em `Uses/Images/`

2. **Commit e push para o cofre privado** 🔐

   ```bash
   git add .
   git commit -m "feat: adicionado novo equipamento"
   git push
   ```

3. **Webhook dispara automaticamente** 🪝
   - GitHub Actions detecta o push
   - Dispara o workflow de sincronização

4. **Website atualiza automaticamente** 🚀
   - Conteúdo é sincronizado
   - Site é rebuilado
   - Deploy é feito no GitHub Pages

### ⚙️ Verificar Status da Sincronização

1. No repositório `Gildofj/uses`
2. Vá para **Actions**
3. Veja o histórico de execuções do workflow `Sync Obsidian Vault & Deploy`
4. Clique em uma execução para ver logs detalhados

### 🆘 Troubleshooting

**Workflow não executa após push:**

- Verifique se o webhook foi adicionado corretamente ao repositório de obsidian
- Confirme que os secrets estão configurados no repositório do blog

**Erro de autenticação:**

- Regenere o token pessoal se expirou
- Confirme que o token tem permissão `repo` habilitada
- Atualize o secret `OBSIDIAN_VAULT_TOKEN` com o novo token

**Conteúdo não aparece no site:**

- Verifique se a estrutura de pastas no obsidian é `Uses/Posts/en/` e `Uses/Posts/pt/`
- Confirme que os arquivos têm extensão `.md`
- Verifique se há erros no frontmatter do Markdown (título, data, etc)
- Consulte os logs do workflow para ver mensagens de erro

### ⏰ Sincronização Programada (Backup)

O workflow também está configurado para executar a cada 6 horas como backup:

```yaml
schedule:
  - cron: "0 */6 * * *"
```

Isso garante que mesmo se o webhook falhar, o site será sincronizado regularmente.

### 🔒 Segurança com Fine-Grained Tokens

**Por que usar fine-grained tokens?**

- ✅ **Princípio do menor privilégio:** Cada token tem acesso apenas ao repositório necessário
- ✅ **Melhor controle:** Você define exatamente quais permissões cada token possui
- ✅ **Mais seguro:** Se um token vazar, o impacto é limitado a um repositório específico
- ✅ **Expiração obrigatória:** Fine-grained tokens exigem data de expiração (máximo 1 ano)

**Resumo das permissões usadas:**

| Token                  | Repositório      | Permissões                       |
| ---------------------- | ---------------- | -------------------------------- |
| `OBSIDIAN_VAULT_TOKEN` | `obsidian-vault` | Contents (Read-only)             |
| `BLOG_DISPATCH_TOKEN`  | `uses`           | Contents (R/W) + Workflows (R/W) |

**Dica de segurança:** Regenere os tokens a cada 3-6 meses como boa prática.

## �🚀 O Que é Astro?

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

1. Abra seu Obsidian
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

**P: Como funciona a sincronização automática com GitHub Actions?**
R: Quando você faz commit e push no seu repositório privado do seu Obsidian vault, um webhook dispara um Actions workflow que:

1. Clona seu repositório do obsidian-vault
2. Copia posts e imagens para o projeto do blog
3. Normaliza a sintaxe Markdown (Obsidian → Astro)
4. Faz build do Astro
5. Deploy automático no GitHub Pages

Tudo sem nenhuma ação manual! Apenas edite, commit e push.

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
