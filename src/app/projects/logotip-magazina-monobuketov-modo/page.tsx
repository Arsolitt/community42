import { ProjectHeader } from '@/components/ProjectBlocks/Header';
import { LargeImage } from '@/components/ProjectBlocks/LargeImage';
import { projects } from '@/shared/assets/projects';

const project = projects.find((project) => project.slug === 'logotip-magazina-monobuketov-modo');

const Page = () => {
  return (
    <>
      <ProjectHeader project={project} />
      <LargeImage alt={project.name} src={project.image} />
    </>
  );
};

export default Page;
