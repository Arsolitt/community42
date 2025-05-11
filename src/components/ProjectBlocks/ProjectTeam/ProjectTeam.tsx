import Link from 'next/link';
import React from 'react';

import type { ProjectCollaborator } from '@/shared/assets/projects';

import { TEAM_PATH } from '@/core/config/paths';
import { team } from '@/shared/assets/team';

import styles from './ProjectTeam.module.css';

interface ProjectTeamProps {
  members: ProjectCollaborator[];
}

interface ProjectMember {
  link?: string;
  name?: string;
  role: string;
}

export const ProjectTeam: React.FC<ProjectTeamProps> = ({ members }) => {
  // const projectMembers = members.map((member) => {
  //   const teamMember = team.find((tm) => tm.slug === member.slug);
  //   if (teamMember) {
  //     return {
  //       ...teamMember,
  //       role: member.role
  //     };
  //   } else if (member.link && member.name) {
  //     return member;
  //   }
  //   return null;
  // }).filter(Boolean);
  const projectMembers = members.map((member) => {
    const projectMember: ProjectMember = {
      role: member.role
    };
    if (member.slug) {
      const teamMember = team.find((tm) => tm.slug === member.slug);
      if (teamMember) {
        projectMember.link = `${TEAM_PATH}/${member.slug}`;
        projectMember.name = teamMember.name;
      }
    }
    if (member.link) {
      projectMember.link = member.link;
    }
    if (member.name) {
      projectMember.name = member.name;
    }
    if (projectMember.link && projectMember.name) {
      return projectMember;
    }
    return null;
  }).filter(Boolean);

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
