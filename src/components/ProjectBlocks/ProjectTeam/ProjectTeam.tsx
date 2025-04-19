import Link from 'next/link';
import React from 'react';

import type { ProjectCollaborator } from '@/shared/assets/projects';

import { TEAM_PATH } from '@/core/config/paths';
import { team } from '@/shared/assets/team';

import styles from './ProjectTeam.module.scss';

interface ProjectTeamProps {
  members: ProjectCollaborator[];
}

export const ProjectTeam: React.FC<ProjectTeamProps> = ({ members }) => {
  const projectMembers = members.map((member) => {
    const teamMember = team.find((tm) => tm.slug === member.slug);
    if (teamMember) {
      return {
        ...teamMember,
        role: member.role
      };
    } else if (member.link && member.name) {
      return member;
    }
    return null;
  }).filter(Boolean);

  return (
    <div className='flex flex-wrap gap-24 py-8'>
      {projectMembers.map((projectMember) => (
        <div key={`${projectMember.slug}-${projectMember.role}`} className='flex flex-col'>
          <h3 className={styles.member_position}>{projectMember.role}</h3>
          <Link href={projectMember.link ?? `${TEAM_PATH}/${projectMember.slug}`} className={styles.member_name}>
            {projectMember.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
