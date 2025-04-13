import { ProjectPageLayout } from '@/components/ProjectPageLayout/ProjectPageLayout';
import { projects } from '@/shared/assets/projects';

const project = projects.find((project) => project.slug === '3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23');

const Page = () => {
  return (
    <ProjectPageLayout project={project}>
    </ProjectPageLayout>
  );
};

export default Page;
