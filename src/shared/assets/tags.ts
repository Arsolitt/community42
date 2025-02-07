interface TagElement {
  slug: string;
  text: string;
}

export type Tag = typeof tags[number];

export const tags = [
  {
    text: 'UX/UI',
    slug: 'ux-ui'
  },
  {
    text: 'Векторная графика',
    slug: 'vektornaya-graphika'
  },
  {
    text: 'Логотипы',
    slug: 'logotypes'
  },
  {
    text: 'Брендинг',
    slug: 'branding'
  },
  {
    text: 'Айдентика',
    slug: 'aydentika'
  },
  {
    text: 'Motion',
    slug: 'motion'
  },
  {
    text: '3D',
    slug: '3D'
  },
  {
    text: 'Видео',
    slug: 'video'
  },
  {
    text: 'Фотосессии',
    slug: 'fotosessii'
  },
  {
    text: 'Рекламная ретушь',
    slug: 'reklamnaya-retush'
  },
  {
    text: 'Фото',
    slug: 'photo'
  },
  {
    text: 'Цветы',
    slug: 'flowers'
  }
] as const satisfies readonly TagElement[];
