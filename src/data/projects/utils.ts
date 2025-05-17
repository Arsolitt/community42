import type { Project, ProjectSlug } from './data';

import { projects } from './data';

export function projectBySlug(slug: ProjectSlug): Project {
  return projects[slug];
}

