# Rafael Pequino — Site

Landing page pessoal de Rafael Pequino (desenvolvedor freelancer), apresentando
serviços, portfólio e contato via WhatsApp. É uma página única (`/`), renderizada
com React/Next.js (App Router) e hospedada em um Cloudflare Worker através do
[vinext](https://github.com/cloudflare/vinext).

## Por que tantas pastas para "uma página só"?

O projeto tinha nascido de um template de starter full-stack (`vinext-starter`),
que trazia pronto um esqueleto de banco de dados (Drizzle + Cloudflare D1),
uma pasta de exemplos e um teste automatizado — tudo isso nunca chegou a ser
usado pelo site real, que é 100% estático e sem banco de dados. Essa parte foi
removida para deixar o projeto refletindo o que ele de fato é hoje: uma página
única. Se no futuro o site precisar de um backend (formulário salvo em banco,
área logada etc.), essas peças podem ser reintroduzidas sob demanda.

Removido nesta limpeza: `db/`, `drizzle/`, `drizzle.config.ts` (schema vazio,
nunca configurado), `examples/d1/` (exemplo opcional não referenciado) e
`tests/` (testava a tela de loading do template, que não existe mais).

## Estrutura de pastas

```
app/              Código da página (App Router do Next.js)
  layout.tsx        Layout raiz: <html>/<body>, metadata de SEO, fonte
  page.tsx          Conteúdo da landing page (única rota do site)
  globals.css       Estilos globais/Tailwind da página
  chatgpt-auth.ts   Helpers opcionais de login "Sign in with ChatGPT"
  robots.ts         robots.txt gerado dinamicamente
  sitemap.ts        sitemap.xml gerado dinamicamente
public/           Assets estáticos servidos diretamente (imagens, ícones)
worker/           Ponto de entrada do Cloudflare Worker (runtime de produção)
.openai/          Configuração de hosting da plataforma (bindings opcionais)
```

Cada pasta tem uma única responsabilidade: `app/` é sobre conteúdo e SEO da
página; `public/` são arquivos estáticos; `worker/` é a camada de
infraestrutura (como o Worker do Cloudflare recebe e responde requisições);
`.openai/` é configuração da plataforma de hosting. Os arquivos de config na
raiz (`next.config.ts`, `vite.config.ts`, `tsconfig.json`, `eslint.config.mjs`,
`postcss.config.mjs`) ficam soltos por serem convenção das próprias
ferramentas (Next.js, Vite, TypeScript, ESLint, Tailwind/PostCSS).

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

Este starter não usa `wrangler.jsonc`.

## Workspace Auth Headers

Signed-in visitors receive both `oai-authenticated-user-id` and `oai-authenticated-user-email`. Private Sites require every visitor to sign in; public Sites may also have anonymous visitors, for whom neither header is present.

The user ID is stable for the same user on the same Site and different across Sites. Email and name are intended for display or contact purposes.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const userId = requestHeaders.get("oai-authenticated-user-id");
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: build the site for production
- `npm run start`: run the production build locally
- `npm run lint`: lint the codebase with ESLint

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
