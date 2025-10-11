import { ProjectPageLayout } from "@/components/ProjectPageLayout/ProjectPageLayout";
import { projectBySlug } from "@storage/projects";

const project = projectBySlug("3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23");

const Page = () => {
  return (
    <ProjectPageLayout project={project}>
    </ProjectPageLayout>
  );
};

export default Page;
