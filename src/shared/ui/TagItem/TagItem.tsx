import type { Tag } from '@/shared/assets/tags';

interface TagItemProps {
  isActive: boolean;
  tag: Tag;
  onTagClick: (slug: Tag['slug']) => void;
}

export const TagItem = ({ tag, isActive, onTagClick }: TagItemProps) => (
  <div className='inline-flex gap-[8px]'>
    <button
      className={`rounded-[10px] border px-[10px] py-[4.5px] max-w-max text-[16px] font-medium ${
        isActive ? 'border-[#FF66D0] text-[#FF66D0]' : 'border-white'
      } hover:text-[#FF66D0] hover:border-[#FF66D0]`}
      type='button'
      onClick={() => onTagClick(tag.slug)}
    >
      {tag.text}
    </button>
  </div>
);
