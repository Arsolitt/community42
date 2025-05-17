import { useEffect, useState } from 'react';

import type { Project } from '@/data/projects';

import { allProjects } from '@/data/projects';

export const useFilteredProjects = (
  searchTerm: string,
  activeTags: string[],
  initialProjects: readonly Project[] = allProjects()
) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([...initialProjects]);

  useEffect(() => {
    let results: Project[] = [...initialProjects];

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
        .map(({ matchingTags, ...project }) => project as Project);
    }

    setFilteredProjects(results);
  }, [searchTerm, activeTags, initialProjects]);

  return filteredProjects;
};
