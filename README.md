# Guia das Oficinas

Site de consulta e checklists para os voluntários das oficinas.
Next.js (App Router) + CSS + JavaScript. Sem login, banco de dados ou API:
as marcações ficam no `localStorage` do navegador de cada voluntário.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Cadastrar as oficinas

Edite `data/oficinas.js`. Cada oficina tem `slug`, `nome`, `descricao`,
`preparacaoSala`, `materiais` e `checklist` (`pre`, `durante`, `pos`).
O bloco que já está no arquivo é só um modelo com textos provisórios:
substitua pelo conteúdo real.

Observação: a marcação de cada tarefa é guardada pelo texto dela. Se o texto
de uma tarefa for alterado depois de publicado, ela volta a aparecer
desmarcada para quem já a tinha marcado.

## Publicar na Vercel

1. Envie o projeto para um repositório (GitHub, GitLab ou Bitbucket).
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Mantenha as configurações padrão (o Next.js é detectado automaticamente)
   e clique em **Deploy**.

## Estrutura

```
app/
  layout.js                 cabeçalho e fontes
  page.js                   tela inicial (lista de oficinas)
  oficina/[slug]/page.js    página de cada oficina
  not-found.js              página 404
  globals.css               identidade visual e responsividade
components/
  OfficeCard.js             card/botão da oficina
  OfficeInfo.js             descrição, preparação da sala e materiais
  Checklist.js              checklist (localStorage, progresso, reinício)
  ChecklistTabs.js          abas Pré-oficina / Durante oficina / Pós-oficina
data/
  oficinas.js               conteúdo das oficinas
```
