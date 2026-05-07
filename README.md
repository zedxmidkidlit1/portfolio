# Software Engineer Portfolio

A mobile-first software engineer portfolio built with current 2026-era web tooling:

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- shadcn/ui v4
- Three.js and React Three Fiber
- GSAP ScrollTrigger parallax
- Vercel AI SDK streaming chatbot

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## AI Chatbot

The chatbot works in two modes:

- With `OPENAI_API_KEY`, `/api/chat` streams model responses through the Vercel AI SDK.
- Without `OPENAI_API_KEY`, it streams a local portfolio-aware fallback response for demos.

Create a local `.env.local` file when using a real model:

```bash
OPENAI_API_KEY=your_key_here
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Project Structure

- `src/app/page.tsx` - portfolio page
- `src/app/api/chat/route.ts` - AI SDK chat route
- `src/components/portfolio/scene.tsx` - Three.js hero scene
- `src/components/portfolio/experience-parallax.tsx` - GSAP parallax timeline
- `src/components/portfolio/chatbot.tsx` - floating AI chatbot UI
- `src/lib/portfolio-data.ts` - editable portfolio content
