'use client';

import Link from 'next/link';
import React from 'react';

import type { ProjectTag } from '@storage/projects';

import { TagItem } from '@/components/TagItem/TagItem';
import { CrossIcon } from '@shared/assets/icons/crossIcon';

import styles from './ProjectHeader.module.css';

interface ProjectTagsProps {
  tags: ProjectTag[];
}

export const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className={styles.tagsWrapper}>
      {tags.map((tag, index) => (
        <React.Fragment key={tag.slug}>
          <Link href={`/search?tags=${tag.slug}`}>
            <TagItem isActive tag={tag} onTagClick={() => {}} />
          </Link>
          {index !== tags.length - 1 && <CrossIcon />}
        </React.Fragment>
      ))}
    </div>
  );
};
