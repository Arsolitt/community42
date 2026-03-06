import type { Tag, TagSlug } from '@storage/tags';

import { TagItem } from '@/components/TagItem/TagItem';

import styles from './SearchTags.module.css';

interface SearchTagsProps {
  activeTags: string[];
  tags: Tag[];
  onTagClick: (slug: TagSlug) => void;
}

export const SearchTags = ({ tags, activeTags, onTagClick }: SearchTagsProps) => (
  <div className="container">
    <div className={styles.tagsWrapper}>
      {tags.map((tag) => (
        <TagItem key={tag.slug} isActive={activeTags.includes(tag.slug)} tag={tag} onTagClick={onTagClick} />
      ))}
    </div>
  </div>
);
