import Link from "next/link";
import React from "react";

import type { ProjectCollaborator } from "@storage/projects";
import type { TeamMemberWithRole } from "@storage/team/utils";

import { TEAM_PATH } from "@core/config/paths";

import styles from "./ProjectTeam.module.css";

interface ProjectTeamProps {
  collaborators: ProjectCollaborator[];
}

interface ProjectMember {
  link: string;
  name: string;
  role: string;
}

export const ProjectTeam: React.FC<ProjectTeamProps> = ({ collaborators }) => {
  const projectMembers: ProjectMember[] = collaborators.map((collaborator) => {
    if ("slug" in collaborator) {
      const teamMember = collaborator as TeamMemberWithRole;
      return {
        name: teamMember.name,
        role: teamMember.role,
        link: `${TEAM_PATH}/${teamMember.slug}`
      };
    } else {
      return {
        name: collaborator.name,
        role: collaborator.role,
        link: collaborator.link
      };
    }
  });

  return (
    <div className='flex flex-wrap gap-24 py-8'>
      {projectMembers.map((projectMember) => (
        <div key={`${projectMember.link}-${projectMember.role}`} className='flex flex-col'>
          <h3 className={styles.member_position}>{projectMember.role}</h3>
          <Link href={projectMember.link} className={styles.member_name}>
            {projectMember.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
