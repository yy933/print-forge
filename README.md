## Print Forge
Print Forge is a modern 3D model showcase platform built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. It offers a clean, responsive interface for displaying model images, categories, descriptions, like counts, and upload dates — ideal for 3D printing communities, design portfolios, or model-sharing sites.

## Live Demo
See live demo [here](https://print-forge-six.vercel.app/)

## Features
* Dynamic routing with `/3d-models/[id]` to show individual model details
* Responsive design powered by Tailwind CSS
* Component-based structure with reusable UI components like Pill and ModelCard
* TypeScript support for better DX and type safety

## Tech Stack
* [Next.js 14 (App Router)](https://nextjs.org/blog/next-14)
* [React 19](https://react.dev/blog/2024/12/05/react-19)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Icons](https://www.npmjs.com/package/react-icons)
* [clsx](https://www.npmjs.com/package/clsx) (for conditional className merging)
* Deployed on [Vercel](https://vercel.com/)

## Getting Started
### Prerequisites
* [Node.js](https://nodejs.org/en) 18+
* [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/)

### Installation
```bash
git clone https://github.com/yy933/print-forge.git
cd print-forge

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open `http://localhost:3000` in your browser to see the app in action.

## Project Structure
```bash
print-forge/
├── src/
│   ├── app/
│   │   ├── 3d-models/
│   │   │   └── [id]/page.tsx     # Dynamic route for model detail page
│   │   └── lib/models.ts         # Mock data and fetch function
│   ├── components/
│   │   ├── Pill.tsx              # Reusable label/tag component
│   │   └── ModelCard.tsx         # 3D model card component
│   └── types/
│       └── index.ts              # Centralized type definitions
├── public/
│   └── placeholder.jpg           # Default image for models
├── README.md
├── package.json
└── tsconfig.json
```

## Development & Linting
```bash
npm run lint
# or
yarn lint
```

