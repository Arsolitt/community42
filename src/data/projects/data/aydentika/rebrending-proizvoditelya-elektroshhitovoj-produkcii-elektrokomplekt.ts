import type { ProjectElement } from '@/data/projects';

import { PROJECT_IMG_URL } from '@/core/config/paths';
import { tagWithPriority } from '@/data/tags';
import { teamMemberWithRole } from '@/data/team';

const slug = 'rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt';
const date = new Date('2024-08-31');
const dateText = date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });

export const rebrendingProizvoditelyaElektroshhitovojProdukciiElektrokomplekt: ProjectElement = {
  name: 'Ребрендинг производителя электрощитовой продукции «Электрокомплект»',
  date: dateText,
  slug,
  summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
  image: `${PROJECT_IMG_URL}/${slug}/main.webp`,
  creationTimeText: 'Создано за 10 дней',
  collaborators: [
    teamMemberWithRole('konstantin-graphic-designer', 'Руководитель')
  ],
  tags: [
    tagWithPriority('aydentika', 2),
    tagWithPriority('logotypes', 1),
    tagWithPriority('motion', 1)
  ]
};
