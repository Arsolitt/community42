import Link from 'next/link';
import React from 'react';

import { TEAM_PATH } from '@/core/config/paths';
import type { ProjectCollaborator } from '@/data/projects';
import { allTeamMembers } from '@/data/team';

import { TeamMemberWithRole } from '@/data/team/utils';
import styles from './ProjectTeam.module.css';

interface ProjectTeamProps {
  collaborators: ProjectCollaborator[];
}

interface ProjectMember {
  name: string;
  role: string;
  link: string;
}

export const ProjectTeam: React.FC<ProjectTeamProps> = ({ collaborators }) => {
  const team = allTeamMembers();
  const projectMembers: ProjectMember[] = collaborators.map((collaborator) => {
    if ('slug' in collaborator) {
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
