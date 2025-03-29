import { ImageGrid } from '@/components/ProjectBlocks/ImageGrid';
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
      <ImageGrid
        images={[
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/logo_red_background.svg',
            alt: 'Логотип MODO на красном фоне'
          },
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/logo_white_background.svg',
            alt: 'Логотип MODO на белом фоне'
          },
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/variant3.webp',
            alt: 'Логотип MODO на красном фоне крупным планом'
          },
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/variant4.webp',
            alt: 'Логотип MODO с информацией о сайте'
          }
        ]}
      />
    </div>
  );
};

export default Page;
