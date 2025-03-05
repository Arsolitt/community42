import { LargeImage } from '@/components/ProjectBlocks/LargeImage';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { projects } from '@/shared/assets/projects';
import { Footer } from '@/widgets/Footer';

const project = projects.find((project) => project.slug === 'logotip-magazina-monobuketov-modo');

const Page = () => {
  return (
    <>
      <ProjectHeader project={project} />
      <LargeImage alt={project.name} src={project.image} />
      <Footer />
    </>
  );
};

export default Page;
