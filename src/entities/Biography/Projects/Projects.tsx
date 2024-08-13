import Image from "next/image";

import { classNames } from "@/features/helpers/className";
import { projects } from "@/shared/assets/projects";
import cls from "./Projects.module.scss";

interface ProjectsProps {
  collaboratorSlug: string;
  className?: string;
}

export const Projects = (props: ProjectsProps) => {
  const { collaboratorSlug, className } = props;

  const filteredProjects = projects.filter((p) =>
    p.collaborators.includes(collaboratorSlug),
  );

  return (
    <section className={classNames(cls.Projects, {}, [className])}>
      {filteredProjects.map((p) => (
        <div className={cls.project} key={p.id}>
          <Image src={p.image} alt="image" width={444} height={251} />
        </div>
      ))}
    </section>
  );
};
