import { ImgSquares } from '@/components/ProjectBlocks/ImgSquares';
import { ImgSquareUWide } from '@/components/ProjectBlocks/ImgSquareUWide/ImgSquareUWide';
import { ImgVertical } from '@/components/ProjectBlocks/ImgVertical/ImgVertical';
import { TextBlock } from '@/components/ProjectBlocks/TextBlock';
import { ProjectPageLayout } from '@/components/ProjectPageLayout/ProjectPageLayout';
import { PROJECT_IMG_URL } from '@/core/config/paths';
import { projectBySlug } from '@/data/projects';

const project = projectBySlug('logotip-magazina-monobuketov-modo');

const Page = () => {
  return (
    <ProjectPageLayout project={project}>
      <TextBlock>
        В основе логотипа лежит геометричная форма одного цветка, что делает акцент на моно-формате магазина, <br />
        а также на их щепетильностью к подбору каждого цветочка. Простая и аккуратная форма значка подобрана <br />
        для онлайн-формата магазина
      </TextBlock>
      <ImgSquares
        images={[
          {
            src: `${PROJECT_IMG_URL}/${project.slug}/logo_red_background.svg`,
            alt: 'Логотип MODO на красном фоне'
          },
          {
            src: `${PROJECT_IMG_URL}/${project.slug}/logo_white_background.svg`,
            alt: 'Логотип MODO на белом фоне'
          }
        ]}
      />
      <ImgSquareUWide images={[
        {
          src: `${PROJECT_IMG_URL}/${project.slug}/logo_mobile.webp`,
          alt: 'Логотип MODO на мобильном устройстве'
        },
        {
          src: `${PROJECT_IMG_URL}/${project.slug}/logo_wide.webp`,
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
          src: `${PROJECT_IMG_URL}/${project.slug}/icon_square.webp`,
          alt: 'Иконка квадратная'
        },
        {
          src: `${PROJECT_IMG_URL}/${project.slug}/icon_wide.webp`,
          alt: 'Иконка квадратная'
        }
      ]}
      />
      <TextBlock>
        Примеры фирменных фото:
      </TextBlock>
      <ImgVertical images={[
        { src: `${PROJECT_IMG_URL}/${project.slug}/vertical1.webp`, alt: 'Image 1' },
        { src: `${PROJECT_IMG_URL}/${project.slug}/vertical2.webp`, alt: 'Image 2' },
        { src: `${PROJECT_IMG_URL}/${project.slug}/vertical3.webp`, alt: 'Image 3' }
      ]}
      />
      <TextBlock>
        Примеры других фото и постов в соц-сетях:
      </TextBlock>
      <ImgSquares
        images={[
          {
            src: `${PROJECT_IMG_URL}/${project.slug}/square1.webp`,
            alt: 'Фото 1'
          },
          {
            src: `${PROJECT_IMG_URL}/${project.slug}/square2.webp`,
            alt: 'Фото 2'
          },
          {
            src: `${PROJECT_IMG_URL}/${project.slug}/square3.webp`,
            alt: 'Фото 3'
          }
        ]}
      />
    </ProjectPageLayout>
  );
};

export default Page;
