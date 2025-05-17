import type { Tag, TagSlug, TagWithPriority } from './data';

import { tags } from './data';

export function tagBySlug(slug: TagSlug) {
  return tags[slug];
}

export function tagWithPriority(slug: TagSlug, priority: number): TagWithPriority {
  return {
    ...tags[slug],
    priority
  } as TagWithPriority;
}

export function allTags(): Tag[] {
  return Object.values(tags);
}
