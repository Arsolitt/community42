import { LargeImage } from '@/components/ProjectBlocks/LargeImage';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { projects } from '@/shared/assets/projects';

const project = projects.find((project) => project.slug === 'logotip-magazina-monobuketov-modo');

const Page = () => {
  return (
    <div>
      <ProjectHeader project={project} />
      <LargeImage alt={project.name} src={project.image} />
    </div>
  );
};

export default Page;
