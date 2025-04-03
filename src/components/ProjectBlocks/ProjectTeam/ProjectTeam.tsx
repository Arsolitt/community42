import Link from 'next/link';
import React from 'react';

import { type Member, team } from '@/shared/assets/team';

import styles from './ProjectTeam.module.scss';

interface ProjectMember {
  role: string;
  slug: Member['slug'];
}

interface ProjectTeamProps {
  members: ProjectMember[];
}

export const ProjectTeam: React.FC<ProjectTeamProps> = ({ members }) => {
  const projectMembers = members.map((member) => {
    const teamMember = team.find((tm) => tm.slug === member.slug);
    if (teamMember) {
      return {
        ...teamMember,
        role: member.role
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className='flex flex-wrap gap-16 py-8'>
      {projectMembers.map((projectMember) => (
        <div key={`${projectMember.slug}-${projectMember.role}`} className='flex flex-col'>
          <h3 className={styles.member_position}>{projectMember.role}</h3>
          <Link href={`/team/${projectMember.slug}`} className={styles.member_name}>
            {projectMember.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
