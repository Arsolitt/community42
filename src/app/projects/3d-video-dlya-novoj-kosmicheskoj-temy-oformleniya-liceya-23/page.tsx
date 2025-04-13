import { ImgLarge } from '@/components/ProjectBlocks/ImgLarge';
import { ProjectFeed } from '@/components/ProjectBlocks/ProjectFeed';
import { ProjectFeedback } from '@/components/ProjectBlocks/ProjectFeedback';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { ProjectTeam } from '@/components/ProjectBlocks/ProjectTeam';
import { projects } from '@/shared/assets/projects';

const project = projects.find((project) => project.slug === '3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23');

const Page = () => {
  return (
    <div className='max-w-[1920px] mx-auto px-11'>
      <ProjectHeader project={project} />
      <ImgLarge alt={project.name} src={project.image} />
      <ProjectTeam
        members={project.collaborators}
      />
      <ProjectFeedback
        likes={project.likes}
        creationDate={project.date}
        creationTimeText='Создано за 10 дней'
      />
      <ProjectFeed sourceProject={project} />
    </div>
  );
};

export default Page;
