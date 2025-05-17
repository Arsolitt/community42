import type { TeamMember } from '@/data/team';

import type { Project, ProjectSlug } from './data';

import { projects } from './data';

export function projectBySlug(slug: ProjectSlug): Project {
  return projects[slug];
}

export function allProjects(): Project[] {
  return Object.values(projects);
}

export function projectsByTeamMember(member: TeamMember): Project[] {
  return allProjects().filter((project) => {
    return project.collaborators.some((c) => c.slug === member.slug);
  });
}
