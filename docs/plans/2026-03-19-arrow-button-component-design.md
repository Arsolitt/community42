# ArrowButton Component Design

## Summary

Extract the round arrow button from `Clients` component into a reusable `ArrowButton` component, then use it in both `Clients` and `Team` cards.

## Current State

- **Clients.tsx**: Uses `<span className={cls.arrowButton} />` with CSS in `Clients.module.css`
- **Team/RightBlock.tsx**: Uses `<RouterLink />` (rectangular gradient button)

## Design

### New Component: `ArrowButton`

Location: `src/components/ArrowButton/`

```
ArrowButton/
├── ArrowButton.tsx
├── ArrowButton.module.css
└── index.ts
```

**Props:**

```typescript
interface ArrowButtonProps {
  className?: string;
}
```

**Visual:** 24x24px circle, 1px border (gray-light), contains `›` character

**Behavior:** Always visible (parent controls visibility via CSS if needed)

### Changes

1. **Create** `ArrowButton` component with styles from `.arrowButton`
2. **Clients.tsx**: Replace `<span className={cls.arrowButton} />` → `<ArrowButton />`
3. **RightBlock.tsx**: Replace `<RouterLink />` → `<ArrowButton />`
4. **Cleanup**: Remove `.arrowButton` styles from `Clients.module.css`
