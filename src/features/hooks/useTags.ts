import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useTags = (initialTags: string[] = []) => {
  const [activeTags, setActiveTags] = useState<string[]>(initialTags);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const tagsParam = searchParams.get('tags');
    const tagsFromUrl = tagsParam ? tagsParam.split(',') : initialTags;

    const areTagsEqual =
      activeTags.length === tagsFromUrl.length &&
      activeTags.every((tag, index) => tag === tagsFromUrl[index]);

    if (!areTagsEqual) {
      setActiveTags(tagsFromUrl);
    }
  }, [searchParams, initialTags, activeTags]);

  const handleTagClick = (tagSlug: string) => {
    const newActiveTags = activeTags.includes(tagSlug)
      ? activeTags.filter((slug) => slug !== tagSlug)
      : [...activeTags, tagSlug];

    setActiveTags(newActiveTags);

    const params = new URLSearchParams(searchParams.toString());
    if (newActiveTags.length > 0) {
      params.set('tags', newActiveTags.join(','));
    } else {
      params.delete('tags');
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    activeTags,
    handleTagClick,
    setActiveTags
  };
};
