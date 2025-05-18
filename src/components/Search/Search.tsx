'use client';

import { Projects } from '@/components/ProjectsList';
import { allProjects } from '@/data/projects';
import { allTags } from '@/data/tags';
import { useFilteredProjects } from '@/features/hooks/useFilteredProjects';
import { useSearchTags } from '@/features/hooks/useSearchTags';
import { useSearchTerm } from '@/features/hooks/useSearchTerm';

import { SearchInput } from './SearchInput';
import { SearchTags } from './SearchTags';

export const Search = () => {
  const { searchTerm, handleSearchChange } = useSearchTerm();
  const { activeTags, handleTagClick } = useSearchTags();
  const filteredProjects = useFilteredProjects(searchTerm, activeTags, allProjects());

  return (
    <div className='main_search pb-60'>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <SearchTags
        activeTags={activeTags}
        tags={allTags()}
        onTagClick={handleTagClick}
      />
      <Projects projects={filteredProjects} />
    </div>
  );
};
