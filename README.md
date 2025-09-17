# Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and TypeScript.

## Tech Stack

- **Framework**: Next.js 14.2.15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.14
- **Font**: Inter (Google Font)
- **Development**: ESLint, PostCSS

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS with dark mode support
- 📱 Fully responsive design
- 🔧 TypeScript with strict mode
- 🎯 Path aliases (`@/*`)
- 🌙 Dark/light mode support
- ✨ Inter font integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # Reusable components
└── lib/               # Utility functions
```

## Development

The project uses:
- TypeScript with strict mode enabled
- ESLint for code linting
- Tailwind CSS for styling
- CSS custom properties for theming

## License

MIT