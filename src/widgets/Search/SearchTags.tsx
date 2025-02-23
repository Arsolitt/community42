import type { Tag } from '@/shared/assets/tags';

import { TagItem } from '@/shared/ui/TagItem/TagItem';

interface SearchTagsProps {
  activeTags: string[];
  tags: readonly Tag[];
  onTagClick: (slug: Tag['slug']) => void;
}

export const SearchTags = ({ tags, activeTags, onTagClick }: SearchTagsProps) => (
  <div className='container'>
    <div className='flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]'>
      {tags.map((tag) => (
        <TagItem
          key={tag.slug}
          isActive={activeTags.includes(tag.slug)}
          tag={tag}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  </div>
);
