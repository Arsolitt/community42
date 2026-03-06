import { classNames } from '@features/helpers/className';
import type { Tag, TagSlug } from '@storage/tags';

import styles from './TagItem.module.css';

interface TagItemProps {
  isActive: boolean;
  tag: Tag;
  onTagClick: (slug: TagSlug) => void;
}

export const TagItem = ({ tag, isActive, onTagClick }: TagItemProps) => (
  <div className={styles.wrapper}>
    <button
      className={classNames(styles.button, { [styles.buttonActive]: isActive })}
      type="button"
      onClick={() => onTagClick(tag.slug)}
    >
      {tag.text}
    </button>
  </div>
);
