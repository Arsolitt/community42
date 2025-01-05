'use client';

import { useEffect, useState } from 'react';

import { Projects } from '@/entities/Biography/Projects';
import { projects } from '@/shared/assets/projects';

export const SearchBlock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const results = projects.filter((project) => project.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProjects(results);
  }, [searchTerm, projects]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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
            {projects.map((p) => (
              <div key={p.id} className='inline-flex gap-[8px]'>
                {p.tags.map((t) => (
                  <button
                    key={t.id}
                    className='rounded-[10px] border border-white px-[10px] py-[4.5px] max-w-max text-[16px] font-medium'
                    type='button'
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Projects projects={projects} />
    </div>
  );
};
