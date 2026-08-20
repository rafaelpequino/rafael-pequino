# Rafael Pequino - Site

Landing page pessoal de Rafael Pequino, desenvolvedor freelancer, apresentando servicos, portfolio e contato via WhatsApp. E uma pagina unica, estatica, renderizada com React e Vite.

O projeto nao depende de servidor, banco de dados ou infraestrutura de nuvem. O build gera arquivos estaticos em `dist/`, que podem ser publicados em qualquer servico de hospedagem estatica.

## Estrutura

```
app/              Conteudo da pagina e estilos
  page.tsx          Conteudo da landing page
  globals.css       Estilos globais
src/              Entrada do React/Vite
  main.tsx          Inicializacao da aplicacao
index.html         HTML base, SEO e dados estruturados
public/           Imagens, icones e arquivos estaticos
```

## Pre-requisitos

- Node.js `>=22.13.0`

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

`npm run dev` inicia o servidor de desenvolvimento. `npm run build` gera a versao de producao em `dist/`, e `npm run preview` permite revisar esse build localmente.
