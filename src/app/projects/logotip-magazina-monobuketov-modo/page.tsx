import { ProjectHeader } from '@/components/ProjectHeader';
import { projects } from '@/shared/assets/projects';
import { Typography } from '@/shared/ui/Typography';

const project = projects.find((project) => project.slug === 'logotip-magazina-monobuketov-modo');

const Page = () => {
  return (
    <>
      <ProjectHeader project={project} />
      <Typography variant='h1'>{project?.name}</Typography>
    </>
  );
};

export default Page;
