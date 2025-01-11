'use client';

import type { SetStateAction } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Projects } from '@/entities/Biography/Projects';
import { projects } from '@/shared/assets/projects';
import { tags } from '@/shared/assets/tags';

export const SearchBlock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [activeTags, setActiveTags] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();

  useEffect(() => {
    let results = projects;

    if (searchTerm) {
      results = results.filter((project) => project.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (activeTags.length > 0) {
      results = results.filter((project) =>
        activeTags.every((tagSlug) => project.tags.some((tag) => tag.slug === tagSlug))
      );
    }

    setFilteredProjects(results);
  }, [searchTerm, activeTags, projects]);

  useEffect(() => {
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      setActiveTags(tagsParam.split(','));
    }
  }, [searchParams]);

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };

  const handleServiceClick = (serviceId: string) => {
    let newActiveServiceIds: SetStateAction<any[]>;
    if (activeTags.includes(serviceId)) {
      newActiveServiceIds = activeTags.filter((id: string) => id !== serviceId);
    } else {
      newActiveServiceIds = [...activeTags, serviceId];
    }
    setActiveTags(newActiveServiceIds);

    const params = new URLSearchParams(searchParams.toString());
    if (newActiveServiceIds.length > 0) {
      params.set('tags', newActiveServiceIds.join(','));
    } else {
      params.delete('tags');
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className='main_search'>
      <div className='container'>
        <div className='flex w-full h-full items-center justify-center text-center border-b border-[#FFF] border-opacity-50 pb-[6px]'>
          <input
            className='placeholder:text-[#fff] placeholder:text-[16px] bg-transparent placeholder:opacity-25 caret-[#666666] text-center h-full w-full focus:border-none focus:outline-none border-none appearance-none outline-none'
            value={searchTerm}
            onChange={handleInputChange}
            placeholder='поиск работ'
          />
        </div>
      </div>
      <div className='container'>
        <div className='bubbleTags'>
          <div className='flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]'>
            {tags.map((t) => (
              <div key={t.slug} className='inline-flex gap-[8px]'>
                <button
                  className={`rounded-[10px] border px-[10px] py-[4.5px] max-w-max text-[16px] font-medium ${
                    activeTags.includes(t.slug) ? 'border-purple-400 text-purple-400' : 'border-white'
                  }`}
                  type='button'
                  onClick={() => handleServiceClick(t.slug)}
                >
                  {t.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Projects projects={filteredProjects} />
    </div>
  );
};
