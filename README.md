# fabra.me

A modern, personal portfolio and resume site built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion for smooth, interactive animations.
This project is designed for developers and creatives who want a beautiful, performant, and easily extensible personal site.

## Features

- Animated Hero, About, Projects, Experience, and Contact sections
- Dark/light mode with system preference support
- Responsive design for all devices
- Framer Motion for smooth, interactive UI animations
- Radix UI and Lucide Icons for accessible, modern UI elements
- TypeScript for type safety
- Easy content management via `src/lib/data.ts`
- Serverless-ready (Next.js App Router)

## Project Structure

```
/
├── public/ # Static assets
├── src/
│   ├── app/ # Next.js App Router (pages, layouts)
│   ├── components/ # Reusable UI components
│   │   ├── layout/ # Layout specific components (header, footer, sections)
│   │   └── ui/ # Generic UI elements (buttons, cards)
│   ├── lib/ # Utilities, data, hooks
│   │   └── data.ts # Main content configuration
│   └── styles/ # Global styles, Tailwind config
├── next.config.mjs # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
```

## Tech Stack

- **Next.js 15** (App Router, SSR/SSG)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** (for all animations)
- **Shadcn UI**
- **Lucide React** (icons)
- **next-themes** (dark/light mode)
- **TypeScript**

## Theming

- Uses `next-themes` for dark/light mode.
- Theme is toggled via the `ThemeToggle` component in the header.
- Respects system preference by default.

## Animations

- All main sections and cards use Framer Motion for smooth entrance, exit, and interactive animations.
- Animations are defined in each layout component (e.g., `hero.tsx`, `about.tsx`).

## Deployment

You can deploy this project to any platform that supports Next.js (Vercel, Netlify, AWS Amplify, etc.).
Refer to the Next.js deployment documentation for more details: [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

## License

[MIT](LICENSE)
