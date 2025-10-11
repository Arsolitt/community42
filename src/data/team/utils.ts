import type { TeamMember, TeamMemberSlug } from "./data";

import { team } from "./data";

export type TeamMemberWithRole = TeamMember & { role: string; };

export function teamMemberBySlug(slug: TeamMemberSlug): TeamMember {
  return team[slug];
}

export function allTeamMembers(): TeamMember[] {
  return Object.values(team);
}

export function teamMemberWithRole(slug: TeamMemberSlug, role: string): TeamMemberWithRole {
  return {
    ...team[slug],
    role
  };
}
