'use client';

import Link from 'next/link';
import React from 'react';

import type { Project } from '@/shared/assets/projects';

import { CrossIcon } from '@/shared/ui/icons/CrossIcon';
import { TagItem } from '@/shared/ui/TagItem/TagItem';

interface ProjectTagsProps {
  tags: Project['tags'];
}

export const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className='flex items-center flex-wrap gap-2'>
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
