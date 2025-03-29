import { LargeImage } from '@/components/ProjectBlocks/LargeImage';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { TextBlock } from '@/components/ProjectBlocks/TextBlock';
import { projects } from '@/shared/assets/projects';

const project = projects.find((project) => project.slug === 'logotip-magazina-monobuketov-modo');

const Page = () => {
  return (
    <div className='max-w-[1920px] mx-auto px-11'>
      <ProjectHeader project={project} />
      <LargeImage alt={project.name} src={project.image} />
      <TextBlock>
        В основе логотипа лежит геометричная форма одного цветка, что делает акцент на моно-формате магазина, <br />
        а также на их щепетильностью к подбору каждого цветочка. Простая и аккуратная форма значка подобрана <br />
        для онлайн-формата магазина
      </TextBlock>
    </div>
  );
};

export default Page;
