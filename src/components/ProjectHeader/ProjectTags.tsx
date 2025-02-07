'use client';

import Link from 'next/link';

import type { Project } from '@/shared/assets/projects';

import { TagItem } from '@/shared/ui/TagItem/TagItem';

interface ProjectTagsProps {
  tags: Project['tags'];
}

export const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <>
      {tags.map((tag) => (
        <Link href={`/search?tags=${tag.slug}`} key={tag.slug}>
          <TagItem isActive={false} tag={tag} onTagClick={() => {}} />
        </Link>
      ))}
    </>
  );
};
