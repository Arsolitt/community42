'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { Project } from '@/shared/assets/projects';

import { Projects } from '@/entities/Biography/Projects';
import { projects } from '@/shared/assets/projects';
import { tags } from '@/shared/assets/tags';

import { SearchInput } from './SearchInput';
import { SearchTags } from './SearchTags';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([...projects]);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    let results: Project[] = [...projects];

    if (searchTerm) {
      results = results.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeTags.length > 0) {
      results = results
        .map((project) => {
          const matchingTags = project.tags
            .filter((tag) => activeTags.includes(tag.slug))
            .length;
          return {
            ...project,
            matchingTags
          };
        })
        .filter((project) => project.matchingTags > 0)
        .sort((a, b) => b.matchingTags - a.matchingTags)
        .map(({ matchingTags, ...project }) => project);
    }

    setFilteredProjects(results);
  }, [searchTerm, activeTags]);

  useEffect(() => {
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      setActiveTags(tagsParam.split(','));
    }
  }, [searchParams]);

  const handleTagClick = (tagSlug: string) => {
    const newActiveTags = activeTags.includes(tagSlug)
      ? activeTags.filter((id) => id !== tagSlug)
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

  return (
    <div className='main_search'>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={(event) => setSearchTerm(event.target.value)}
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
