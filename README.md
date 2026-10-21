# RHIA Consultoria — Site (Next.js starter)

Site institucional + portal de vagas + blog, otimizado para SEO e Google for Jobs.

## Stack
- **Next.js 14 (App Router, SSG)** — HTML estático, Core Web Vitals, SSR de metadados
- **TypeScript + Tailwind CSS** — identidade RHIA em `tailwind.config.ts`
- **JSON-LD JobPosting** gerado em cada página de vaga (`lib/jsonld.ts`)
- Fonte de dados em `lib/jobs.ts` e `lib/posts.ts` — trocar por CMS headless em produção

## Rodar localmente
```bash
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

## Estrutura
```
app/
  page.tsx            Home (foco candidatos, lemas de qualidade de vida)
  vagas/              Portal de vagas (lista + [slug] com JSON-LD)
  blog/               Blog (lista + [slug])
  servicos/           Serviços para empresas
  depoimentos/ clientes/
  sitemap.ts robots.ts
components/           Header, Footer, JobCard, JsonLd
lib/                  jobs.ts, posts.ts, jsonld.ts
```

## Deploy (Vercel)
1. Push para GitHub → importar em vercel.com
2. Domínio: apontar rhiaconsultoria.com.br (A record / CNAME) na Vercel — SSL automático
3. Variáveis de ambiente: nenhuma obrigatória no starter

## Antes de lançar
- [ ] Substituir dados de exemplo em `lib/jobs.ts` / `lib/posts.ts` (ou conectar CMS)
- [ ] Criar páginas `/alerta` (popup de e-mail) e `/candidato` (área do candidato + upload) — ver plano de lançamento
- [ ] Logo oficial RHIA em `/public/logo.png` e favicon
- [ ] Validar JSON-LD: search.google.com/test/rich-results (tipo JobPosting)
- [ ] Search Console + enviar sitemap.xml
