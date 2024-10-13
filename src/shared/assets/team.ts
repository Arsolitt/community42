interface Member {
  id: number;
  name: string;
  position: string;
  images: string[];
  fullsizeImage: string;
  description: string;
  slug: string;
  socials: Socials[];
}

interface Socials {
  name: string;
  href: string;
}

export const team: Member[] = [
  {
    id: 1,
    name: 'Константин',
    position: 'Граф дизайнер',
    images: [
      '/images/team/konstantin.png',
      '/images/team/egor.png'
    ],
    fullsizeImage: '/images/team/full-size/konstantin.png',
    description: 'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    slug: 'konstantin-graphic-designer',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1'
      },
      {
        name: 'telegram',
        href: 'https://t.me/konstantin_1'
      }
    ]
  },
  {
    id: 2,
    name: 'Егор',
    position: '3D специалист',
    images: [
      '/images/team/egor.png'
    ],
    fullsizeImage: '/images/team/full-size/polina.png',
    description: 'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    slug: 'egor-3d-specialist',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1'
      },
      { name: 'whatsapp', href: 'https://t.me/konstantin_1' }
    ]
  },
  {
    id: 3,
    name: 'Полина',
    position: 'Веб-дизайнер',
    images: ['/images/team/wooman.png'],
    fullsizeImage: '/images/team/full-size/polina.png',
    description: 'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    slug: 'polina-web-designer',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1'
      },
      { name: 'whatsapp', href: 'https://t.me/konstantin_1' }
    ]
  },
  {
    id: 4,
    name: 'Егор',
    position: 'Фотограф',
    images: [
      '/images/team/egor.png'
    ],
    fullsizeImage: '/images/team/full-size/polina.png',
    description: 'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    slug: 'egor-photographer',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1'
      },
      { name: 'whatsapp', href: ' http s ://t.me/konstantin_1' }
    ]
  },
  {
    id: 5,
    name: 'Полина',
    position: 'Поддержка',
    images: [
      '/images/team/wooman.png'
    ],
    fullsizeImage: '/images/team/full-size/polina.png',
    description: 'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    slug: 'polina-customer-support',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1'
      },
      { name: 'whatsapp', href: 'https://t.me/konstantin_1' }
    ]
  }
];

