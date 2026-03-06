# Tailwind Migration and Colors Unification Design

**Date:** 2026-03-06  
**Status:** Approved  
**Author:** AI Agent

## Overview

Remove Tailwind CSS from the project and unify all colors to use a consistent CSS variables system. This migration affects 6 components currently using Tailwind classes and ~101 color usages across the entire codebase.

## Goals

1. Remove Tailwind CSS completely (dependencies, config, directives)
2. Replace all Tailwind classes with CSS modules
3. Unify colors using CSS variables in `variables.css`
4. Establish a consistent color palette with transparency variants
5. Maintain visual appearance after migration

## Color System

### Base Palette

Five core colors with CSS variable names:

```css
:root {
  --color-black: #141114;
  --color-white: #ffffff;
  --color-gray-light: #bcbcc2;
  --color-gray-medium: #96969c;
  --color-pink: #ff66d0;
}
```

### Transparency Variants

Each base color has 4 transparency variants (10%, 25%, 50%, 75%):

```css
:root {
  /* Black variants */
  --color-black-10: rgba(20, 17, 20, 0.1);
  --color-black-25: rgba(20, 17, 20, 0.25);
  --color-black-50: rgba(20, 17, 20, 0.5);
  --color-black-75: rgba(20, 17, 20, 0.75);

  /* White variants */
  --color-white-10: rgba(255, 255, 255, 0.1);
  --color-white-25: rgba(255, 255, 255, 0.25);
  --color-white-50: rgba(255, 255, 255, 0.5);
  --color-white-75: rgba(255, 255, 255, 0.75);

  /* ... same pattern for gray-light, gray-medium, pink */
}
```

### Color Replacement Rules

**Replace with base colors:**

- `#fff`, `#FFF` → `var(--color-white)`
- `#666666`, `#a2a2a2`, `#9e9d9e`, `#8d8c8f`, `#898889`, `#c0c0c0` → `var(--color-gray-medium)` or `var(--color-gray-light)`
- `rgba(20, 17, 20, X)` → `var(--color-black-{opacity})`
- `rgba(255, 255, 255, X)` → `var(--color-white-{opacity})`

**Keep unchanged:**

- Gradient colors in icons: `#b663fd`, `#ffabf7`, `#ffa5f6`, `#a35aff`, `#b8eaff`, `#ebc2e2`, `#9D41FF`
- Specific colors: `#04ca00`, `#025b15` (green statuses), `#323859`, `#1c1a2d` (dark backgrounds)

## Components Migration

Six components currently use Tailwind classes:

1. **ProjectPageLayout.tsx**
   - Classes: `max-w-[1920px] mx-auto px-11`
   - Migration: Add to existing CSS module or create one

2. **ProjectTags.tsx**
   - Classes: `flex items-center flex-wrap gap-2`
   - Migration: Add to existing CSS module

3. **ProjectTeam.tsx**
   - Classes: `flex flex-wrap gap-24 py-8`, `flex flex-col`
   - Migration: Add to existing CSS module (ProjectTeam.module.css exists)

4. **TagItem.tsx**
   - Classes: `inline-flex gap-[8px]`, border, color, hover states
   - Migration: Create TagItem.module.css

5. **SearchTags.tsx**
   - Classes: `flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]`
   - Migration: Create SearchTags.module.css

6. **SearchInput.tsx**
   - Classes: `flex w-full h-full items-center justify-center`, border, placeholder, caret
   - Migration: Create SearchInput.module.css

## Migration Strategy

### Approach: All-at-once with Intermediate Commits

Convert all components simultaneously, but split into logical commits for easier rollback:

1. **Commit 1:** Add color system to `variables.css`
2. **Commit 2:** Migrate `ProjectPageLayout`
3. **Commit 3:** Migrate `ProjectTags` + `TagItem`
4. **Commit 4:** Migrate `ProjectTeam`
5. **Commit 5:** Migrate `Search` (SearchInput + SearchTags)
6. **Commit 6:** Replace colors in other CSS modules
7. **Commit 7:** Remove Tailwind (config, directives, package)

### Verification

After each commit:

- Test using Chrome DevTools MCP at `localhost:3000`
- Verify visual appearance matches original
- Check for console errors
- Test interactive states (hover, focus)

## Implementation Details

### CSS Modules Pattern

Each component will use CSS modules following existing patterns:

```typescript
import styles from "./ComponentName.module.css";

export const Component = () => (
  <div className={styles.wrapper}>
    {/* content */}
  </div>
);
```

```css
/* ComponentName.module.css */
.wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-white);
}
```

### Layout Properties

No utility classes. All layout properties go directly into CSS modules:

- Flexbox: `display: flex`, `flex-direction`, `align-items`, `justify-content`
- Gap: `gap: 0.5rem` (8px = 0.5rem, 24px = 1.5rem)
- Width/Height: `width: 100%`, `max-width: 1920px`
- Padding: `padding: 2.75rem` (44px ≈ 2.75rem for px-11)

## Files Affected

### New Files

- `src/components/TagItem/TagItem.module.css`
- `src/components/Search/SearchTags.module.css`
- `src/components/Search/SearchInput.module.css`

### Modified Files

- `src/core/styles/variables.css` - Add color system
- `src/core/styles/globals.css` - Remove `@tailwind` directives
- `src/components/ProjectPageLayout/ProjectPageLayout.tsx` - Replace classes
- `src/components/ProjectBlocks/ProjectHeader/ProjectTags.tsx` - Replace classes
- `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.tsx` - Replace classes
- `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.module.css` - Add layout styles
- `src/components/TagItem/TagItem.tsx` - Replace classes
- `src/components/Search/SearchTags.tsx` - Replace classes
- `src/components/Search/SearchInput.tsx` - Replace classes
- Multiple `.module.css` files - Replace hardcoded colors with CSS variables

### Deleted Files

- `tailwind.config.js`

### Package Changes

- Remove: `tailwindcss` from `package.json` dependencies

## Success Criteria

1. ✅ No Tailwind classes remain in any `.tsx` files
2. ✅ All colors use CSS variables (except gradients/icons)
3. ✅ Visual appearance unchanged
4. ✅ No console errors
5. ✅ All interactive states work (hover, focus)
6. ✅ Build succeeds without Tailwind
7. ✅ Dev server runs correctly at localhost:3000

## Rollback Plan

Each commit is a checkpoint. If issues arise:

1. Use `git revert` to rollback specific commit
2. Test previous commit's state
3. Fix issue in new commit
4. Continue migration

## Notes

- Gradients in SVG icons will keep original colors (too specific to standardize)
- Some dark background colors (`#1c1a2d`, `#323859`) will remain as-is
- Layout sizes (gap, padding) use rem units for consistency
- Testing focused on visual regression, not functional changes
