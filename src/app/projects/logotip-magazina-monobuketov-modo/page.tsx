import { ImgSquares } from '@/components/ProjectBlocks/ImgSquares';
import { ImgSquareUWide } from '@/components/ProjectBlocks/ImgSquareUWide/ImgSquareUWide';
import { LargeImage } from '@/components/ProjectBlocks/LargeImage';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { ProjectTeam } from '@/components/ProjectBlocks/ProjectTeam';
import { TextBlock } from '@/components/ProjectBlocks/TextBlock';
import { projects } from '@/shared/assets/projects';

import { ImgVertical } from '../../../components/ProjectBlocks/ImgVertical/ImgVertical';

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
      <ImgSquares
        images={[
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/logo_red_background.svg',
            alt: 'Логотип MODO на красном фоне'
          },
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/logo_white_background.svg',
            alt: 'Логотип MODO на белом фоне'
          }
        ]}
      />
      <ImgSquareUWide images={[
        {
          src: '/images/projects/logotip-magazina-monobuketov-modo/logo_mobile.webp',
          alt: 'Логотип MODO на мобильном устройстве'
        },
        {
          src: '/images/projects/logotip-magazina-monobuketov-modo/logo_uwide.svg',
          alt: 'Логотип MODO на широком устройстве'
        }
      ]}
      />
      <TextBlock>
        Также были разработаны основные графические элементы: иконки услуг, <br />
        оформления месссенджеров, пиктограммы сравнения размера букета с человеком
      </TextBlock>
      <ImgSquareUWide images={[
        {
          src: '/images/projects/logotip-magazina-monobuketov-modo/icon_square.webp',
          alt: 'Иконка квадратная'
        },
        {
          src: '/images/projects/logotip-magazina-monobuketov-modo/icon_wide.webp',
          alt: 'Иконка квадратная'
        }
      ]}
      />
      <TextBlock>
        Примеры фирменных фото:
      </TextBlock>
      <ImgVertical images={[
        { src: '/images/projects/logotip-magazina-monobuketov-modo/vertical1.webp', alt: 'Image 1' },
        { src: '/images/projects/logotip-magazina-monobuketov-modo/vertical2.webp', alt: 'Image 2' },
        { src: '/images/projects/logotip-magazina-monobuketov-modo/vertical3.webp', alt: 'Image 3' }
      ]}
      />
      <TextBlock>
        Примеры других фото и постов в соц-сетях:
      </TextBlock>
      <ImgSquares
        images={[
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/square1.webp',
            alt: 'Фото 1'
          },
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/square2.webp',
            alt: 'Фото 2'
          },
          {
            src: '/images/projects/logotip-magazina-monobuketov-modo/square3.webp',
            alt: 'Фото 3'
          }
        ]}
      />
      <ProjectTeam
        members={[
          { role: 'Руководитель', slug: 'konstantin-graphic-designer' },
          { role: 'Дизайнер', slug: 'konstantin-graphic-designer' },
          { role: 'Фотограф', slug: 'konstantin-graphic-designer' }
        ]}
      />
    </div>
  );
};

export default Page;
