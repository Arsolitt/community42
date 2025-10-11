import type { Tag, TagSlug } from "./data";

import { tags } from "./data";

export function tagBySlug(slug: TagSlug) {
  return tags[slug];
}

export type TagWithPriority = Tag & { priority: number };
export function tagWithPriority(slug: TagSlug, priority: number): TagWithPriority {
  return {
    ...tags[slug],
    priority
  };
}

export function allTags(): Tag[] {
  return Object.values(tags);
}
