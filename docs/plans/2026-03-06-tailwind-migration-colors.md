# Tailwind Migration and Colors Unification Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove Tailwind CSS completely and unify all colors using CSS variables system.

**Architecture:** Replace Tailwind utility classes with CSS modules in 6 components. Add 5 base colors + transparency variants to CSS variables. Replace hardcoded colors across entire codebase with CSS variables. Remove Tailwind dependencies.

**Tech Stack:** Next.js 15, React 19, CSS Modules, CSS Variables

---

## Task 1: Add Color System to Variables

**Files:**

- Modify: `src/core/styles/variables.css:1-24`

**Step 1: Add base color variables**

Open `src/core/styles/variables.css` and add after line 23 (after `--widget-z-index`):

```css
/* Base Colors */
--color-black: #141114;
--color-white: #ffffff;
--color-gray-light: #bcbcc2;
--color-gray-medium: #96969c;
--color-pink: #ff66d0;
```

**Step 2: Add transparency variants for black**

Add after base colors:

```css
/* Black with transparency */
--color-black-10: rgba(20, 17, 20, 0.1);
--color-black-25: rgba(20, 17, 20, 0.25);
--color-black-50: rgba(20, 17, 20, 0.5);
--color-black-75: rgba(20, 17, 20, 0.75);
```

**Step 3: Add transparency variants for white**

Add after black variants:

```css
/* White with transparency */
--color-white-10: rgba(255, 255, 255, 0.1);
--color-white-25: rgba(255, 255, 255, 0.25);
--color-white-50: rgba(255, 255, 255, 0.5);
--color-white-75: rgba(255, 255, 255, 0.75);
```

**Step 4: Add transparency variants for gray-light**

Add after white variants:

```css
/* Gray Light with transparency */
--color-gray-light-10: rgba(188, 188, 194, 0.1);
--color-gray-light-25: rgba(188, 188, 194, 0.25);
--color-gray-light-50: rgba(188, 188, 194, 0.5);
--color-gray-light-75: rgba(188, 188, 194, 0.75);
```

**Step 5: Add transparency variants for gray-medium**

Add after gray-light variants:

```css
/* Gray Medium with transparency */
--color-gray-medium-10: rgba(150, 150, 156, 0.1);
--color-gray-medium-25: rgba(150, 150, 156, 0.25);
--color-gray-medium-50: rgba(150, 150, 156, 0.5);
--color-gray-medium-75: rgba(150, 150, 156, 0.75);
```

**Step 6: Add transparency variants for pink**

Add after gray-medium variants:

```css
/* Pink with transparency */
--color-pink-10: rgba(255, 102, 208, 0.1);
--color-pink-25: rgba(255, 102, 208, 0.25);
--color-pink-50: rgba(255, 102, 208, 0.5);
--color-pink-75: rgba(255, 102, 208, 0.75);
```

**Step 7: Verify syntax**

Run: `npm run build`
Expected: Build succeeds without errors

**Step 8: Commit color system**

```bash
git add src/core/styles/variables.css
git commit -m "feat: add unified color system with CSS variables"
```

---

## Task 2: Migrate ProjectPageLayout Component

**Files:**

- Modify: `src/components/ProjectPageLayout/ProjectPageLayout.tsx:20`
- Create: `src/components/ProjectPageLayout/ProjectPageLayout.module.css`

**Step 1: Create CSS module file**

Create `src/components/ProjectPageLayout/ProjectPageLayout.module.css`:

```css
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
  padding-left: 2.75rem;
  padding-right: 2.75rem;
}
```

**Step 2: Update component to use CSS module**

Modify `src/components/ProjectPageLayout/ProjectPageLayout.tsx`:

- Add import after line 2: `import styles from "./ProjectPageLayout.module.css";`
- Replace line 20: `className='max-w-[1920px] mx-auto px-11'` with `className={styles.wrapper}`

**Step 3: Test component visually**

Run: `npm run dev`
Open: `localhost:3000` in Chrome DevTools
Navigate: to any project page (e.g., `/projects/some-project`)
Expected: Layout wrapper displays correctly with max-width and padding

**Step 4: Commit ProjectPageLayout migration**

```bash
git add src/components/ProjectPageLayout/
git commit -m "refactor: migrate ProjectPageLayout from Tailwind to CSS modules"
```

---

## Task 3: Migrate ProjectTags Component

**Files:**

- Modify: `src/components/ProjectBlocks/ProjectHeader/ProjectTags.tsx:17`
- Modify: `src/components/ProjectBlocks/ProjectHeader/ProjectHeader.module.css`

**Step 1: Add styles to existing CSS module**

Modify `src/components/ProjectBlocks/ProjectHeader/ProjectHeader.module.css` and add at the end:

```css
.tagsWrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
```

**Step 2: Update component to use CSS module**

Modify `src/components/ProjectBlocks/ProjectHeader/ProjectTags.tsx`:

- Replace line 17: `className='flex items-center flex-wrap gap-2'` with `className={styles.tagsWrapper}`

**Step 3: Test component visually**

Refresh: `localhost:3000` project page in Chrome DevTools
Expected: Tags display in a row with correct spacing

**Step 4: Commit ProjectTags migration**

```bash
git add src/components/ProjectBlocks/ProjectHeader/
git commit -m "refactor: migrate ProjectTags from Tailwind to CSS modules"
```

---

## Task 4: Migrate TagItem Component

**Files:**

- Modify: `src/components/TagItem/TagItem.tsx:10-14`
- Create: `src/components/TagItem/TagItem.module.css`

**Step 1: Create CSS module file**

Create `src/components/TagItem/TagItem.module.css`:

```css
.wrapper {
  display: inline-flex;
  gap: 0.5rem;
}

.button {
  border-radius: 10px;
  border: 1px solid var(--color-white);
  padding: 4.5px 10px;
  max-width: max-content;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  color: var(--color-white);
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
}

.button:hover {
  color: var(--color-pink);
  border-color: var(--color-pink);
}

.buttonActive {
  border-color: var(--color-pink);
  color: var(--color-pink);
}
```

**Step 2: Update component to use CSS module**

Modify `src/components/TagItem/TagItem.tsx`:

- Add import: `import styles from "./TagItem.module.css";`
- Replace lines 10-14 with:

```tsx
<div className={styles.wrapper}>
  <button
    className={isActive ? `${styles.button} ${styles.buttonActive}` : styles.button}
    type="button"
    onClick={() => onTagClick(tag.slug)}
  >
    {tag.text}
  </button>
</div>
```

**Step 3: Test component visually**

Refresh: `localhost:3000` in Chrome DevTools
Test: Click tags to toggle active state
Expected: Tags display correctly, hover works, active state shows pink color

**Step 4: Commit TagItem migration**

```bash
git add src/components/TagItem/
git commit -m "refactor: migrate TagItem from Tailwind to CSS modules with color variables"
```

---

## Task 5: Migrate ProjectTeam Component

**Files:**

- Modify: `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.tsx:40,42`
- Modify: `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.module.css`

**Step 1: Add styles to existing CSS module**

Modify `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.module.css` and add at the end:

```css
.teamWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.memberWrapper {
  display: flex;
  flex-direction: column;
}
```

**Step 2: Update component to use CSS module**

Modify `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.tsx`:

- Replace line 40: `className='flex flex-wrap gap-24 py-8'` with `className={styles.teamWrapper}`
- Replace line 42: `className='flex flex-col'` with `className={styles.memberWrapper}`

**Step 3: Test component visually**

Refresh: `localhost:3000` project page in Chrome DevTools
Scroll: to team section
Expected: Team members display in grid with correct spacing

**Step 4: Commit ProjectTeam migration**

```bash
git add src/components/ProjectBlocks/ProjectTeam/
git commit -m "refactor: migrate ProjectTeam from Tailwind to CSS modules"
```

---

## Task 6: Migrate SearchInput Component

**Files:**

- Modify: `src/components/Search/SearchInput.tsx:9-12`
- Create: `src/components/Search/SearchInput.module.css`

**Step 1: Create CSS module file**

Create `src/components/Search/SearchInput.module.css`:

```css
.inputWrapper {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid var(--color-white-50);
  padding-bottom: 6px;
}

.input {
  background: transparent;
  text-align: center;
  height: 100%;
  width: 100%;
  border: none;
  appearance: none;
  outline: none;
  caret-color: #666666;
}

.input::placeholder {
  color: var(--color-white-25);
  font-size: 16px;
  opacity: 0.25;
}

.input:focus {
  border: none;
  outline: none;
}
```

**Step 2: Update component to use CSS module**

Modify `src/components/Search/SearchInput.tsx`:

- Add import: `import styles from "./SearchInput.module.css";`
- Replace lines 9-12 with:

```tsx
<div className="container">
  <div className={styles.inputWrapper}>
    <input className={styles.input} value={searchTerm} onChange={onSearchChange} placeholder="поиск работ" />
  </div>
</div>
```

**Step 3: Test component visually**

Navigate: to search page in Chrome DevTools
Expected: Search input displays correctly, placeholder has low opacity, caret color works

**Step 4: Commit SearchInput migration**

```bash
git add src/components/Search/SearchInput.tsx src/components/Search/SearchInput.module.css
git commit -m "refactor: migrate SearchInput from Tailwind to CSS modules with color variables"
```

---

## Task 7: Migrate SearchTags Component

**Files:**

- Modify: `src/components/Search/SearchTags.tsx:13`
- Create: `src/components/Search/SearchTags.module.css`

**Step 1: Create CSS module file**

Create `src/components/Search/SearchTags.module.css`:

```css
.tagsWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding-top: 28.5px;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
```

**Step 2: Update component to use CSS module**

Modify `src/components/Search/SearchTags.tsx`:

- Add import: `import styles from "./SearchTags.module.css";`
- Replace line 13: `className='flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]'` with `className={styles.tagsWrapper}`

**Step 3: Test component visually**

Refresh: search page in Chrome DevTools
Expected: Tags display in centered row with correct spacing

**Step 4: Commit SearchTags migration**

```bash
git add src/components/Search/SearchTags.tsx src/components/Search/SearchTags.module.css
git commit -m "refactor: migrate SearchTags from Tailwind to CSS modules"
```

---

## Task 8: Replace Colors in ProjectFeedback Module

**Files:**

- Modify: `src/components/ProjectBlocks/ProjectFeedback/ProjectFeedback.module.css:6,48,53,57,71,75`

**Step 1: Replace white colors**

Modify `src/components/ProjectBlocks/ProjectFeedback/ProjectFeedback.module.css`:

- Replace line 6: `color: var(--text-primary, #fff);` with `color: var(--text-primary, var(--color-white));`
- Replace line 48: `color: var(--text-primary, #fff);` with `color: var(--text-primary, var(--color-white));`
- Replace line 71: `color: var(--text-primary, #fff);` with `color: var(--text-primary, var(--color-white));`

**Step 2: Replace gray colors**

Replace line 53: `color: var(--accent-color, #a2a2a2);` with `color: var(--accent-color, var(--color-gray-medium));`
Replace line 57: `fill: var(--accent-color, #a2a2a2);` with `fill: var(--accent-color, var(--color-gray-medium));`
Replace line 75: `fill: var(--accent-color, #a2a2a2);` with `fill: var(--accent-color, var(--color-gray-medium));`

**Step 3: Test component visually**

Refresh: `localhost:3000` project page in Chrome DevTools
Scroll: to feedback section
Expected: Colors display correctly

**Step 4: Commit ProjectFeedback color updates**

```bash
git add src/components/ProjectBlocks/ProjectFeedback/ProjectFeedback.module.css
git commit -m "refactor: replace hardcoded colors with CSS variables in ProjectFeedback"
```

---

## Task 9: Replace Colors in ProjectTeam Module

**Files:**

- Modify: `src/components/ProjectBlocks/ProjectTeam/ProjectTeam.module.css:4,10,12`

**Step 1: Replace white color**

Replace line 4: `color: #fff;` with `color: var(--color-white);`

**Step 2: Replace pink color**

Replace line 10: `color: #ff66d0;` with `color: var(--color-pink);`

**Step 3: Replace pink with transparency**

Replace line 12: `text-decoration-color: rgba(255, 102, 208, 0.5);` with `text-decoration-color: var(--color-pink-50);`

**Step 4: Test component visually**

Refresh: `localhost:3000` project page in Chrome DevTools
Expected: Team section colors display correctly

**Step 5: Commit ProjectTeam color updates**

```bash
git add src/components/ProjectBlocks/ProjectTeam/ProjectTeam.module.css
git commit -m "refactor: replace hardcoded colors with CSS variables in ProjectTeam"
```

---

## Task 10: Replace Colors in ProjectHeader Module

**Files:**

- Modify: `src/components/ProjectBlocks/ProjectHeader/ProjectHeader.module.css:23`

**Step 1: Replace white with transparency**

Replace line 23: `color: rgba(255, 255, 255, 0.8);` with `color: var(--color-white-75);`

**Step 2: Test component visually**

Refresh: `localhost:3000` project page in Chrome DevTools
Expected: Header text color displays correctly

**Step 3: Commit ProjectHeader color updates**

```bash
git add src/components/ProjectBlocks/ProjectHeader/ProjectHeader.module.css
git commit -m "refactor: replace hardcoded color with CSS variable in ProjectHeader"
```

---

## Task 11: Replace Colors in TextBlock Module

**Files:**

- Modify: `src/components/ProjectBlocks/TextBlock/TextBlock.module.css:7`

**Step 1: Replace white color**

Replace line 7: `color: #FFF;` with `color: var(--color-white);`

**Step 2: Test component visually**

Refresh: `localhost:3000` project page in Chrome DevTools
Expected: Text block displays with correct color

**Step 3: Commit TextBlock color updates**

```bash
git add src/components/ProjectBlocks/TextBlock/TextBlock.module.css
git commit -m "refactor: replace hardcoded color with CSS variable in TextBlock"
```

---

## Task 12: Replace Colors in Logo Module

**Files:**

- Modify: `src/components/Logo/Logo.module.css:14,16,34,39`

**Step 1: Replace black with transparency**

Replace line 14: `background: rgba(14, 11, 14, 0.6);` with `background: var(--color-black-50);`

**Step 2: Replace gray color**

Replace line 16: `border: 1px solid #9e9d9e;` with `border: 1px solid var(--color-gray-medium);`

**Step 3: Replace second black with transparency**

Replace line 34: `background: rgba(14, 11, 14, 0.6);` with `background: var(--color-black-50);`

**Step 4: Leave specific color unchanged**

Line 39: `background: #323859;` - keep as-is (specific dark blue)

**Step 5: Test component visually**

Refresh: `localhost:3000` in Chrome DevTools
Check: Logo in header
Expected: Logo displays correctly with updated colors

**Step 6: Commit Logo color updates**

```bash
git add src/components/Logo/Logo.module.css
git commit -m "refactor: replace hardcoded colors with CSS variables in Logo"
```

---

## Task 13: Replace Colors in Footer Module

**Files:**

- Modify: `src/components/Footer/Footer.module.css:13,108`

**Step 1: Leave specific colors unchanged**

Line 13: `background: #1c1a2d;` - keep as-is (specific dark purple)
Line 108: `background: #8d8c8f;` - keep as-is (specific gray)
Line 159: `background: linear-gradient(...)` - keep as-is (gradient)

**Step 2: Test component visually**

Scroll: to footer in Chrome DevTools
Expected: Footer displays correctly

**Step 3: No changes needed**

```bash
# No commit needed - colors are specific to footer design
```

---

## Task 14: Replace Colors in Navbar Modules

**Files:**

- Modify: `src/components/Navbar/Navbar.module.css:21-22`
- Modify: `src/components/Navbar/SearchButton/SearchButton.module.css:6-7,9-10,25`
- Modify: `src/components/Navbar/NavbarContacts/NavbarContacts.module.css:20,44`
- Modify: `src/components/Navbar/NavbarDefault/NavbarDefault.module.css:26`

**Step 1: Update Navbar.module.css**

Modify `src/components/Navbar/Navbar.module.css`:

- Replace line 21: `background: rgba(20, 17, 20, 0.6);` with `background: var(--color-black-50);`
- Replace line 22: `border: 1px solid rgba(255, 255, 255, 0.5);` with `border: 1px solid var(--color-white-50);`

**Step 2: Update SearchButton.module.css**

Modify `src/components/Navbar/SearchButton/SearchButton.module.css`:

- Replace line 6: `background: #141114;` with `background: var(--color-black);`
- Replace line 7: `border: 1px solid #898889;` with `border: 1px solid var(--color-gray-medium);`
- Replace line 9: `background: rgba(20, 17, 20, 0.6);` with `background: var(--color-black-50);`
- Replace line 10: `border: 1px solid rgba(255, 255, 255, 0.5);` with `border: 1px solid var(--color-white-50);`
- Line 25: `background: rgba(200, 168, 216, 0.25);` - keep as-is (specific purple)

**Step 3: Update NavbarContacts.module.css**

Modify `src/components/Navbar/NavbarContacts/NavbarContacts.module.css`:

- Lines 20, 44: `background: rgba(200, 168, 216, 0.25);` - keep as-is (specific purple)

**Step 4: Update NavbarDefault.module.css**

Modify `src/components/Navbar/NavbarDefault/NavbarDefault.module.css`:

- Line 26: `background: rgba(200, 168, 216, 0.25);` - keep as-is (specific purple)

**Step 5: Test navbar visually**

Refresh: `localhost:3000` in Chrome DevTools
Check: Navbar, search button, hover states
Expected: Navbar displays correctly with updated colors

**Step 6: Commit Navbar color updates**

```bash
git add src/components/Navbar/
git commit -m "refactor: replace hardcoded colors with CSS variables in Navbar components"
```

---

## Task 15: Replace Colors in Other Components

**Files:**

- Modify: `src/components/Breadcrumbs/Breadcrumbs.module.css:9`
- Modify: `src/components/Clients/Clients.module.css:37,44,52`
- Modify: `src/components/RouterLink/RouterLink.module.css:8-9,16-17,22-23`
- Modify: `src/core/styles/variables.css:20`

**Step 1: Update Breadcrumbs**

Modify `src/components/Breadcrumbs/Breadcrumbs.module.css`:

- Replace line 9: `color: #fff;` with `color: var(--color-white);`

**Step 2: Update Clients**

Modify `src/components/Clients/Clients.module.css`:

- Line 37: `background: rgba(0, 0, 0, 0.9);` - keep as-is (specific black)
- Replace line 44: `border: 1px solid #ff66d0;` with `border: 1px solid var(--color-pink);`
- Replace line 52: `stroke: #fff;` with `stroke: var(--color-white);`

**Step 3: Update RouterLink**

Modify `src/components/RouterLink/RouterLink.module.css`:

- Line 8: `linear-gradient(#141114, #141114)` - keep as-is (gradient with black)
- Lines with gradients: keep as-is

**Step 4: Update variables.css**

Modify `src/core/styles/variables.css`:

- Replace line 20: `--link-hover-gray: #c0c0c0;` with `--link-hover-gray: var(--color-gray-light);`

**Step 5: Test components visually**

Refresh: `localhost:3000` in Chrome DevTools
Navigate: through different pages
Expected: All components display correctly

**Step 6: Commit remaining color updates**

```bash
git add src/components/Breadcrumbs/ src/components/Clients/ src/components/RouterLink/ src/core/styles/variables.css
git commit -m "refactor: replace hardcoded colors with CSS variables in remaining components"
```

---

## Task 16: Remove Tailwind CSS

**Files:**

- Modify: `src/core/styles/globals.css:1-3`
- Delete: `tailwind.config.js`
- Modify: `package.json`

**Step 1: Remove Tailwind directives from globals.css**

Modify `src/core/styles/globals.css`:

- Delete lines 1-3:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step 2: Delete Tailwind config**

Delete file: `tailwind.config.js`

**Step 3: Remove Tailwind from package.json**

Run: `npm uninstall tailwindcss`

**Step 4: Verify build works**

Run: `npm run build`
Expected: Build succeeds without Tailwind

**Step 5: Verify dev server works**

Run: `npm run dev`
Open: `localhost:3000` in Chrome DevTools
Expected: Site loads correctly, no console errors

**Step 6: Test all pages**

Navigate: through main pages and project pages in Chrome DevTools
Expected: All pages display correctly without Tailwind

**Step 7: Commit Tailwind removal**

```bash
git add -A
git commit -m "chore: remove Tailwind CSS completely"
```

---

## Task 17: Final Verification and Documentation

**Files:**

- None (verification only)

**Step 1: Run linter**

Run: `npm run lint`
Expected: No linting errors

**Step 2: Run build**

Run: `npm run build`
Expected: Production build succeeds

**Step 3: Test production build**

Run: `npm run start`
Open: `localhost:3000` in Chrome DevTools
Expected: Production build works correctly

**Step 4: Verify no Tailwind references**

Run: `grep -r "tailwind" src/ || echo "No tailwind references found"`
Expected: "No tailwind references found"

**Step 5: Verify color variables usage**

Run: `grep -r "var(--color-" src/ | wc -l`
Expected: Multiple lines showing CSS variable usage

**Step 6: Final commit if needed**

```bash
# Only if any fixes were needed
git add -A
git commit -m "fix: final adjustments after Tailwind migration"
```

---

## Success Criteria

- [ ] All 6 Tailwind components migrated to CSS modules
- [ ] Color system with 5 base colors + transparency variants in variables.css
- [ ] All hardcoded colors replaced with CSS variables (except gradients/icons)
- [ ] Tailwind CSS completely removed (config, directives, package)
- [ ] Build succeeds without errors
- [ ] Dev server runs correctly
- [ ] Visual appearance unchanged
- [ ] No console errors
- [ ] All pages tested in Chrome DevTools

## Rollback Plan

Each task is a separate commit. If issues arise:

1. Use `git log --oneline` to identify problematic commit
2. Use `git revert <commit-hash>` to rollback
3. Fix issue and continue from that point

## Notes

- Gradients in SVG icons left unchanged (too specific)
- Some component-specific colors kept as-is (#1c1a2d, #323859, etc.)
- Layout uses rem units for consistency
- Testing via Chrome DevTools MCP at localhost:3000
