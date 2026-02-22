# GIF Support for Team Member Photos

## Overview

Add GIF support to team member photos on the homepage. When a team member has a GIF, the default state shows a static photo, and hovering triggers the GIF animation. Team members without GIFs retain the existing image cycling behavior.

## Requirements

- Static image shown by default (first image in `images` array)
- On hover: play GIF if available, otherwise cycle through images
- On mouse leave: instant reset to default image
- Backward compatible with existing team data

## Design

### New Component: MediaSet

A unified component handling both static image cycling and GIF playback.

**Location:** `src/components/MediaSet/`

**Interface:**

```typescript
interface MediaSetProps {
  className?: string;
  images: string[];
  gif?: string;
}
```

**Behavior:**

| State     | With `gif`                     | Without `gif`                        |
| --------- | ------------------------------ | ------------------------------------ |
| Default   | Show `images[0]`               | Show `images[0]`                     |
| Hover     | Show `gif`                     | Cycle through `images` (1s interval) |
| Hover end | Reset to `images[0]` instantly | Reset to `images[0]`                 |

**Implementation:**

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

    if (gif) return; // GIF plays on its own, no cycling needed

    // Cycle through images
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

### Data Structure Changes

**File:** `src/storage/team/data.ts`

Add optional `gif` field to `TeamElement`:

```typescript
interface TeamElement {
  description: string;
  fullsizeImage: string;
  images: string[];
  name: string;
  position: string;
  slug: string;
  socials: Socials[];
  gif?: string; // NEW: optional animated GIF
}
```

**Example:**

```typescript
{
  slug: "konstantin-graphic-designer",
  name: "Константин",
  position: "Граф дизайнер",
  images: [`${TEAM_IMG_URL}/konstantin.png`],
  gif: `${TEAM_IMG_URL}/konstantin.gif`,
  // ... other fields
}
```

### Consumer Migration

**File:** `src/components/Team/RightBlock.tsx`

```typescript
// Before
import { ImageSet } from "@/components/ImageSet/ImageSet";
// ...
<ImageSet images={t.images} />

// After
import { MediaSet } from "@/components/MediaSet/MediaSet";
// ...
<MediaSet images={t.images} gif={t.gif} />
```

**Note:** `BiographyRightBlock` uses `fullsizeImage` directly (not `ImageSet`), so no changes needed.

### ImageSet Deprecation

Mark `ImageSet` as deprecated via JSDoc comment. Remove in future cleanup.

```typescript
/**
 * @deprecated Use MediaSet instead. Will be removed in future cleanup.
 */
export const ImageSet = ...
```

## Files Changed

| File                                   | Action                             |
| -------------------------------------- | ---------------------------------- |
| `src/components/MediaSet/MediaSet.tsx` | Create                             |
| `src/components/MediaSet/index.ts`     | Create                             |
| `src/storage/team/data.ts`             | Add `gif?: string` to interface    |
| `src/components/Team/RightBlock.tsx`   | Replace `ImageSet` with `MediaSet` |
| `src/components/ImageSet/ImageSet.tsx` | Add deprecation notice             |

## Out of Scope

- GIF creation/asset preparation
- Biography page changes (uses `fullsizeImage` directly)
- Other potential `ImageSet` consumers (none identified)
