'use client';

import { Projects } from '@/entities/Biography/Projects';
import { useFilteredProjects } from '@/features/hooks/useFilteredProjects';
import { useSearchTerm } from '@/features/hooks/useSearchTerm';
import { useTags } from '@/features/hooks/useTags';
import { projects } from '@/shared/assets/projects';
import { tags } from '@/shared/assets/tags';

import { SearchInput } from './SearchInput';
import { SearchTags } from './SearchTags';

export const Search = () => {
  const { searchTerm, handleSearchChange } = useSearchTerm();
  const { activeTags, handleTagClick } = useTags();
  const filteredProjects = useFilteredProjects(searchTerm, activeTags, projects);

  return (
    <div className='main_search'>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <SearchTags
        activeTags={activeTags}
        tags={tags}
        onTagClick={handleTagClick}
      />
      <Projects projects={filteredProjects} />
    </div>
  );
};
