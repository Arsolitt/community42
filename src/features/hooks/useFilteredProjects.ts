import { useMemo } from "react";

import type { Project } from "@/data/projects";

export const useFilteredProjects = (
  searchTerm: string,
  activeTags: string[],
  initialProjects: readonly Project[]
) => {
  const filteredProjects = useMemo(() => {
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ matchingTags, ...project }) => project as Project);
    }

    return results;
  }, [searchTerm, activeTags, initialProjects]);

  return filteredProjects;
};
