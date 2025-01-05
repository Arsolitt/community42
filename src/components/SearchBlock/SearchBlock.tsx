'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Projects } from '@/entities/Biography/Projects';
import { projects } from '@/shared/assets/projects';
import { services } from '@/shared/assets/services';

export const SearchBlock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [activeServiceIds, setActiveServiceIds] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const results = projects.filter((project) => project.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProjects(results);
  }, [searchTerm, projects]);

  useEffect(() => {
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      setActiveServiceIds(tagsParam.split(','));
    }
  }, [searchParams]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleServiceClick = (serviceId: string) => {
    let newActiveServiceIds;
    if (activeServiceIds.includes(serviceId)) {
      newActiveServiceIds = activeServiceIds.filter((id: string) => id !== serviceId);
    } else {
      newActiveServiceIds = [...activeServiceIds, serviceId];
    }
    setActiveServiceIds(newActiveServiceIds);

    const params = new URLSearchParams(searchParams.toString());
    if (newActiveServiceIds.length > 0) {
      params.set('tags', newActiveServiceIds.join(','));
    } else {
      params.delete('tags');
    }
    router.push(`${window.location.pathname}?${params.toString()}`);
  };
  return (
    <div className='main_search'>
      <div className='container'>
        <div className='flex w-full h-full items-center justify-center text-center border-b border-[#FFF] border-opacity-50 pb-[6px]'>
          <input
            placeholder='поиск работ'
            className='placeholder:text-[#fff] placeholder:text-[16px] bg-transparent placeholder:opacity-25 caret-[#666666] text-center h-full w-full focus:border-none focus:outline-none border-none appearance-none outline-none'
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='container'>
        <div className='bubbleTags'>
          <div className='flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]'>
            {services.map((s) => (
              <div key={s.id} className='inline-flex gap-[8px]'>
                <button
                  className={`rounded-[10px] border px-[10px] py-[4.5px] max-w-max text-[16px] font-medium ${
                    activeServiceIds.includes(s.id) ? 'border-purple-400 text-purple-400' : 'border-white'
                  }`}
                  type='button'
                  onClick={() => handleServiceClick(s.id)}
                >
                  {s.text}
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
