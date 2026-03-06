# Navbar Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify Navbar to two placeholder buttons with SearchButton unchanged

**Architecture:** Delete subcomponents, render buttons directly in Navbar.tsx, update CSS padding and layout

**Tech Stack:** Next.js 15, React 19, CSS Modules

---

## Task 1: Delete Unused Components

**Files:**

- Delete: `src/components/Navbar/NavbarDefault/` (entire folder)
- Delete: `src/components/Navbar/NavbarContacts/` (entire folder)

**Step 1: Delete NavbarDefault folder**

Run: `rm -rf src/components/Navbar/NavbarDefault`

**Step 2: Delete NavbarContacts folder**

Run: `rm -rf src/components/Navbar/NavbarContacts`

**Step 3: Commit**

```bash
git add -A
git commit -m "refactor(navbar): remove unused NavbarDefault and NavbarContacts"
```

---

## Task 2: Simplify Navbar Component

**Files:**

- Modify: `src/components/Navbar/Navbar.tsx`

**Step 1: Update Navbar.tsx**

Replace entire file content:

```typescript
import { classNames } from "@features/helpers/className";

import { NavbarSearchButton } from "./SearchButton/SearchButton";

import cls from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.navbar_wrapper}>
        <button className={cls.navbar_button} type="button">
          связаться с нами
        </button>
        <button className={cls.navbar_button} type="button">
          заглядашка
        </button>
      </div>
      <NavbarSearchButton />
    </nav>
  );
};
```

**Step 2: Verify in browser**

Run: Open Chrome DevTools, navigate to http://localhost:3000
Expected: Navbar shows two buttons "связаться с нами" and "заглядашка", SearchButton visible

**Step 3: Commit**

```bash
git add src/components/Navbar/Navbar.tsx
git commit -m "refactor(navbar): simplify to two placeholder buttons"
```

---

## Task 3: Update Navbar Styles

**Files:**

- Modify: `src/components/Navbar/Navbar.module.css`

**Step 1: Update CSS**

Replace entire file content:

```css
.navbar {
  width: 100%;
  max-width: max-content;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: var(--widget-z-index);
}

.navbar_wrapper {
  width: 390px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 19px;
  border-radius: 16px;
  background: var(--color-black-50);
  border: 1px solid var(--color-white-50);
  backdrop-filter: blur(19.65px);
}

.navbar_button {
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  color: inherit;
  cursor: pointer;
}
```

**Step 2: Verify in browser**

Run: Use Chrome DevTools to inspect:

- Navbar wrapper width: 390px
- Buttons positioned 19px from edges (left button at left edge with 19px padding, right button at right edge with 19px padding)
- Font: Raleway 14px semibold
- No button backgrounds/borders

**Step 3: Commit**

```bash
git add src/components/Navbar/Navbar.module.css
git commit -m "style(navbar): update layout and button styles"
```

---

## Task 4: Run Lint and Build

**Step 1: Run linter**

Run: `npm run lint`
Expected: No errors

**Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix(navbar): lint fixes"
```

---

## Verification Checklist

Use Chrome DevTools MCP at http://localhost:3000:

- [ ] Navbar visible at bottom of page
- [ ] Two buttons: "связаться с нами" (left) and "заглядашка" (right)
- [ ] Buttons have no background, border, or icons
- [ ] Buttons positioned 19px from container edges
- [ ] SearchButton still visible and functional
- [ ] Total navbar width: 390px + gap + SearchButton
- [ ] No console errors
