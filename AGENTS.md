# AGENTS.md

Guidelines for agentic coding agents working in this repository.

## Build/Lint/Test Commands

```bash
# Development
npm run dev          # Start Next.js dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
```

No test framework is currently configured.

## Tech Stack

- **Framework:** Next.js 15 with App Router, React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules
- **Animations:** Framer Motion
- **Scroll:** Locomotive Scroll
- **Linting:** ESLint (flat config) + Prettier

## Project Structure

```
src/
├── app/              # Next.js App Router pages (lowercase-dash)
│   ├── projects/     # Dynamic project routes
│   │   └── [slug]/   # Dynamic route for projects
│   └── ...
├── components/       # React components (PascalCase directories)
│   └── ComponentName/
│       ├── ComponentName.tsx
│       ├── ComponentName.module.css
│       └── index.ts
├── core/
│   ├── config/       # App configuration
│   ├── providers/    # React context providers
│   └── styles/       # Global CSS, variables, reset
├── features/
│   ├── helpers/      # Utility functions
│   └── hooks/        # Custom React hooks
├── shared/
│   └── assets/       # Static assets (icons, images)
└── storage/          # Data layer
    ├── projects/     # Project data and types
    ├── team/         # Team member data
    ├── tags/         # Tag data
    ├── services/     # Service offerings
    └── clients/      # Client data
```

## Path Aliases

```typescript
import { Component } from '@components/ComponentName';
import { provider } from '@core/providers/ProviderName';
import { hook } from '@features/hooks/hookName';
import { helper } from '@features/helpers/helperName';
import { icon } from '@shared/assets/icons';
import { data } from '@storage/category';
import { thing } from '@/relative/to/src';
```

## Code Style

### TypeScript

- Use functional components with explicit interface props
- Prefer `interface` over `type` for object shapes
- Use `type` for unions, utility types, and inference
- Export types alongside values when relevant
- Use `readonly` for immutable arrays in function params

```typescript
// Component props
interface ComponentProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Component = ({ className, children, variant = 'primary' }: ComponentProps) => {
  // ...
};
```

### Imports

Order imports logically:

1. React/Next.js imports
2. Third-party libraries
3. Aliased internal imports (by depth: @core → @features → @shared → @storage)
4. Relative imports (parent → sibling)
5. CSS module imports

```typescript
import { useState } from 'react';
import type { Metadata } from 'next';

import { classNames } from '@features/helpers/className';
import type { Project } from '@storage/projects';

import { SubComponent } from './SubComponent';

import cls from './Component.module.css';
```

### Styling

- Use CSS Modules (`.module.css`) for component-scoped styles
- Use the `classNames` helper for conditional class composition
- Global styles in `@core/styles/`
- Tailwind utilities available but prefer CSS modules for component styles

```typescript
import { classNames } from "@features/helpers/className";
import cls from "./Component.module.css";

// Usage
<div className={classNames(cls.base, { [cls.active]: isActive }, [className])}>
```

### Naming Conventions

| Type                     | Convention                   | Example                  |
| ------------------------ | ---------------------------- | ------------------------ |
| Components               | PascalCase                   | `ProjectPageLayout`      |
| Directories (components) | PascalCase                   | `components/Navbar/`     |
| Directories (app routes) | lowercase-dash               | `app/projects/[slug]/`   |
| Hooks                    | camelCase with `use` prefix  | `useFilteredProjects`    |
| Utilities                | camelCase                    | `classNames`             |
| CSS classes              | camelCase                    | `cls.navbar_wrapper`     |
| Constants                | camelCase or SCREAMING_SNAKE | `projectsArray`          |
| Types                    | PascalCase                   | `Project`, `ProjectSlug` |

### Component Pattern

Each component lives in its own directory with:

```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.module.css  # Styles
└── index.ts               # Public exports
```

```typescript
// index.ts
export { Component } from './Component';
export type { ComponentProps } from './Component';
```

### React Best Practices

- Minimize `use client` - prefer React Server Components
- Minimize `useEffect` and `useState` when possible
- Use early returns for error conditions
- Implement guard clauses for preconditions

```typescript
export const Component = async ({ slug }: Props) => {
  const project = projectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return <ProjectLayout project={project} />;
};
```

### Error Handling

- Use Next.js `notFound()` for missing resources
- Use early returns for error states
- Handle edge cases at the start of functions

## ESLint Rules

Key rules from `eslint.config.mjs`:

- `quotes`: double quotes (Prettier overrides to single)
- `semi`: always
- `indent`: 2 spaces
- `no-multiple-empty-lines`: max 1 empty line
- `no-trailing-spaces`: warn

## Prettier Configuration

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "arrowParens": "always",
  "printWidth": 120
}
```

## Storage/Data Layer

- Data files use descriptive camelCase names in Russian transliteration
- Each storage module has: `data.ts`, `utils.ts`, `index.ts`
- Types are inferred from data arrays using `as const satisfies`
- Export types with `export type { ... }` syntax

## Before Committing

1. Run `npm run lint` and fix any issues
2. Ensure build succeeds with `npm run build`
3. Test the dev server with `npm run dev`
