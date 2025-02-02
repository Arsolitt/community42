import type { Tag } from '@/shared/assets/tags';

interface TagsListProps {
  activeTags: string[];
  tags: Tag[];
  onTagClick: (tagSlug: string) => void;
}

export const TagsList = ({ tags, activeTags, onTagClick }: TagsListProps) => (
  <div className='container'>
    <div className='bubbleTags'>
      <div className='flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]'>
        {tags.map((tag) => (
          <div key={tag.slug} className='inline-flex gap-[8px]'>
            <button
              className={`rounded-[10px] border px-[10px] py-[4.5px] max-w-max text-[16px] font-medium ${
                activeTags.includes(tag.slug) ? 'border-purple-400 text-purple-400' : 'border-white'
              }`}
              type='button'
              onClick={() => onTagClick(tag.slug)}
            >
              {tag.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
