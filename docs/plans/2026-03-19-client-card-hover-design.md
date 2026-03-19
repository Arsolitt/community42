# Client Card Hover Design

## Overview

Update the hover state of client cards in the Clients component.

## Changes

### Card Dimensions

- Image size: 108px → 134px (both width and height)

### Overlay States

**Default state:**

- No visible border (transparent)
- Arrow button hidden (opacity: 0)

**Hover state:**

- Border: `1px solid var(--color-gray-medium)`
- Arrow button appears (opacity: 1)

### Arrow Button

- Position: absolute, bottom-right corner (8px from edges)
- Size: 24px × 24px
- Border radius: 50%
- Border: `1px solid var(--color-gray-light)`
- Content: `›` character
- Color: `var(--color-gray-medium)`
- Font size: 16px
- Animation: fade in on card hover

### Text Changes

- "К проекту" → "Посмотреть проекты"
- Remove `<ArrowIcon />` from overlay content

### Client Name Hover

- Color changes to `var(--color-gray-medium)` (was `var(--link-hover-gray)`)
