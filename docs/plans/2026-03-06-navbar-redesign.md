# Navbar Redesign — 2026-03-06

## Overview

Simplify Navbar component by replacing three-button layout with two placeholder buttons ("связаться с нами" and "заглядашка") positioned at left and right edges, keeping SearchButton unchanged.

## Problem Statement

Current Navbar has complex state management with `NavbarDefault` (3 buttons) and `NavbarContacts` (contact links) components. The new design requires:

- Only 2 buttons instead of 3
- No contact expand/collapse functionality
- Simpler visual style without icons
- Fixed 390px width + SearchButton

## Design Decision

**Chosen approach:** Simplify current structure by removing subcomponents and rendering buttons directly in Navbar.tsx.

### Why this approach:

- Two simple placeholder buttons don't warrant separate components
- No state management needed (buttons do nothing yet)
- Easier to refactor when functionality is added later
- Reduces file count and complexity

### Alternatives considered:

1. **New NavbarButtons component** — rejected: unnecessary abstraction for 2 simple buttons
2. **Reuse NavbarDefault** — rejected: "Default" naming doesn't make sense without alternative state

## Technical Design

### File Structure Changes

**Delete:**

- `src/components/Navbar/NavbarDefault/` (entire folder)
- `src/components/Navbar/NavbarContacts/` (entire folder)

**Modify:**

- `src/components/Navbar/Navbar.tsx`
- `src/components/Navbar/Navbar.module.css`

**Keep unchanged:**

- `src/components/Navbar/SearchButton/`
- `src/components/Navbar/index.ts`

### Component Design

#### Navbar.tsx

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

**Changes:**

- Remove `"use client"` directive (no state → server component)
- Remove `useState` and `isShown` logic
- Remove `NavbarDefault` and `NavbarContacts` imports
- Render two buttons directly in wrapper div
- Use `justify-content: space-between` for edge positioning

#### Navbar.module.css

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
  justify-content: space-between; /* Changed from default */
  align-items: center;
  padding: 0 19px; /* Changed from 0 8px */
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

**Changes:**

- `.navbar_wrapper`: update `padding` from `0 8px` to `0 19px`
- `.navbar_wrapper`: add `justify-content: space-between`
- Add `.navbar_button` class for button styling

### Visual Specifications

**Buttons:**

- Text: "связаться с нами" (left), "заглядашка" (right)
- Font: Raleway 14px semibold (600)
- No icons, borders, backgrounds — text only
- No hover/active effects
- Positioned 19px from container edges

**Container:**

- Width: 390px
- Height: 46px
- Layout: flexbox with `justify-content: space-between`
- Padding: 0 19px (horizontal)

**Overall:**

- Total width: 390px + 4px gap + SearchButton width
- Fixed positioning: bottom 30px, centered horizontally

## Implementation Notes

1. Delete subcomponent folders first
2. Simplify Navbar.tsx — remove client directive and state
3. Update CSS — change padding and add button styles
4. Test that SearchButton still works correctly
5. Run `npm run lint` and `npm run build` to verify

## Future Considerations

- When buttons need functionality, add onClick handlers
- If buttons become complex, extract to separate components
- May need hover/active states for better UX later
