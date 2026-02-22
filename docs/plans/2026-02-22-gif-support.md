# GIF Support for Team Member Photos Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add GIF support to team member photos — static image by default, animated GIF on hover.

**Architecture:** Create new `MediaSet` component that handles both GIF playback and image cycling. Add optional `gif` field to team data. Migrate `TeamRightBlock` from `ImageSet` to `MediaSet`. Deprecate `ImageSet`.

**Tech Stack:** React, Next.js Image component, TypeScript

---

## Task 1: Add `gif` field to team data types

**Files:**

- Modify: `src/storage/team/data.ts`

**Step 1: Add `gif` field to TeamElement interface**

Add optional `gif` field after `images`:

```typescript
interface TeamElement {
  description: string;
  fullsizeImage: string;
  images: string[];
  gif?: string;
  name: string;
  position: string;
  slug: string;
  socials: Socials[];
}
```

**Step 2: Run lint to verify**

Run: `npm run lint`
Expected: No errors

**Step 3: Commit**

```bash
git add src/storage/team/data.ts
git commit -m "feat(team): add optional gif field to TeamElement interface"
```

---

## Task 2: Create MediaSet component

**Files:**

- Create: `src/components/MediaSet/MediaSet.tsx`
- Create: `src/components/MediaSet/index.ts`

**Step 1: Create MediaSet.tsx**

```typescript
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface MediaSetProps {
  className?: string;
  images: string[];
  gif?: string;
}

export const MediaSet = ({ className, images, gif }: MediaSetProps) => {
  const [isHover, setIsHover] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHover) {
      setCurrentImageIndex(0);
      return;
    }

    if (gif) return;

    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isHover, gif, images.length]);

  const src = isHover && gif ? gif : images[currentImageIndex];

  return (
    <Image
      fill
      alt="media"
      className={className}
      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
      src={src}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      priority={false}
    />
  );
};
```

**Step 2: Create index.ts**

```typescript
export { MediaSet } from './MediaSet';
export type { MediaSetProps } from './MediaSet';
```

**Step 3: Run lint to verify**

Run: `npm run lint`
Expected: No errors

**Step 4: Commit**

```bash
git add src/components/MediaSet/
git commit -m "feat: add MediaSet component for GIF and image cycling"
```

---

## Task 3: Migrate TeamRightBlock to MediaSet

**Files:**

- Modify: `src/components/Team/RightBlock.tsx`

**Step 1: Update import**

Replace ImageSet import with MediaSet:

```typescript
import { MediaSet } from '@/components/MediaSet/MediaSet';
```

**Step 2: Update JSX**

Replace ImageSet usage with MediaSet, passing gif prop:

```typescript
<MediaSet images={t.images} gif={t.gif} />
```

**Step 3: Run lint to verify**

Run: `npm run lint`
Expected: No errors

**Step 4: Commit**

```bash
git add src/components/Team/RightBlock.tsx
git commit -m "feat(team): migrate TeamRightBlock to MediaSet component"
```

---

## Task 4: Deprecate ImageSet component

**Files:**

- Modify: `src/components/ImageSet/ImageSet.tsx`

**Step 1: Add deprecation JSDoc comment**

Add above the interface:

```typescript
/**
 * @deprecated Use MediaSet instead. Will be removed in future cleanup.
 */
interface ImageSetProps {
  className?: string;
  images: string[];
}
```

Add above the component:

```typescript
/**
 * @deprecated Use MediaSet instead. Will be removed in future cleanup.
 */
export const ImageSet = (props: ImageSetProps) => {
```

**Step 2: Run lint to verify**

Run: `npm run lint`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/ImageSet/ImageSet.tsx
git commit -m "deprecate: mark ImageSet as deprecated, prefer MediaSet"
```

---

## Task 5: Verify implementation

**Step 1: Run lint**

Run: `npm run lint`
Expected: No errors

**Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Run dev server and test manually**

Run: `npm run dev`
Test: Navigate to homepage, hover over team members
Expected: Static image by default, cycling (no GIF) or GIF animation (with GIF) on hover

---

## Summary

| Task | Description                                 |
| ---- | ------------------------------------------- |
| 1    | Add `gif?: string` to TeamElement interface |
| 2    | Create MediaSet component                   |
| 3    | Migrate TeamRightBlock to MediaSet          |
| 4    | Deprecate ImageSet component                |
| 5    | Verify with lint, build, and manual test    |
