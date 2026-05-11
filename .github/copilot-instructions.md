# Web Transport - Next.js Project

## Project Overview

A modern Next.js web application optimized for SEO with TypeScript, Tailwind CSS, and App Router architecture.

## Technology Stack

- **Framework**: Next.js 16.2+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Router**: App Router
- **Code Quality**: ESLint

## Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
└── styles/          # Global styles
public/              # Static assets
```

## Development Commands

### Start Development Server

```bash
npm run dev
```

Access the app at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

### Run Tests (when configured)

```bash
npm test
```

## SEO Optimization Features

- Built-in metadata API for page-level SEO
- Server-side rendering (SSR) for dynamic content
- Static generation (SSG) for static pages
- Optimized images with next/image
- Sitemap and robots.txt support

## Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Utility-first CSS framework
- `typescript` - Type safety
- `eslint` - Code linting

## Getting Started

1. **Install dependencies** (already done):

   ```bash
   npm install
   ```

2. **Start development**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

## Next Steps

- Customize pages in `src/app/`
- Create components in `src/components/`
- Add your branding and content
- Configure metadata for SEO

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
