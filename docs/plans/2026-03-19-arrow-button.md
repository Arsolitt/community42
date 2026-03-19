# ArrowButton Component Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract round arrow button into reusable component and use it in Clients and Team cards.

**Architecture:** Create shared ArrowButton component with CSS module, replace existing button implementations in Clients and Team components.

**Tech Stack:** React, TypeScript, CSS Modules

---

### Task 1: Create ArrowButton Component

**Files:**

- Create: `src/components/ArrowButton/ArrowButton.tsx`
- Create: `src/components/ArrowButton/ArrowButton.module.css`
- Create: `src/components/ArrowButton/index.ts`

**Step 1: Create component file**

```typescript
import { classNames } from "@features/helpers/className";

import cls from "./ArrowButton.module.css";

interface ArrowButtonProps {
  className?: string;
}

export const ArrowButton = ({ className }: ArrowButtonProps) => {
  return (
    <span className={classNames(cls.arrowButton, {}, [className])} />
  );
};
```

**Step 2: Create CSS module**

```css
.arrowButton {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-medium);
  font-size: 20px;
}

.arrowButton::before {
  content: "›";
  transform: translate(1px, -1.5px);
}
```

**Step 3: Create index.ts**

```typescript
export { ArrowButton } from "./ArrowButton";
export type { ArrowButtonProps } from "./ArrowButton";
```

**Step 4: Run lint**

Run: `npm run lint`
Expected: No errors

**Step 5: Commit**

```bash
git add src/components/ArrowButton/
git commit -m "feat: add ArrowButton component"
```

---

### Task 2: Update Clients Component

**Files:**

- Modify: `src/components/Clients/Clients.tsx`
- Modify: `src/components/Clients/Clients.module.css`

**Step 1: Add import**

In `Clients.tsx`, add after line 2:

```typescript
import { ArrowButton } from "@/components/ArrowButton";
```

**Step 2: Replace button usage**

Replace both instances of `<span className={cls.arrowButton} />` (lines 38 and 65) with:

```typescript
<ArrowButton />
```

**Step 3: Remove unused styles**

In `Clients.module.css`, delete lines 85-109 (`.arrowButton` and `.arrowButton::before` styles).

**Step 4: Run lint and build**

Run: `npm run lint && npm run build`
Expected: No errors, build succeeds

**Step 5: Commit**

```bash
git add src/components/Clients/
git commit -m "refactor: use ArrowButton in Clients"
```

---

### Task 3: Update Team Component

**Files:**

- Modify: `src/components/Team/RightBlock.tsx`

**Step 1: Update imports**

Replace line 4:

```typescript
import { RouterLink } from "@/components/RouterLink";
```

With:

```typescript
import { ArrowButton } from "@/components/ArrowButton";
```

**Step 2: Replace button usage**

Replace line 26:

```typescript
<RouterLink />
```

With:

```typescript
<ArrowButton />
```

**Step 3: Run lint and build**

Run: `npm run lint && npm run build`
Expected: No errors, build succeeds

**Step 4: Commit**

```bash
git add src/components/Team/RightBlock.tsx
git commit -m "refactor: use ArrowButton in Team"
```
