interface TagElement {
  slug: string;
  text: string;
}

export type Tag = (typeof tagsArray)[number];

export type TagSlug = typeof tagsArray[number]["slug"];

const tagsArray = [
  {
    text: "UX/UI",
    slug: "ux-ui"
  },
  {
    text: "Векторная графика",
    slug: "vektornaya-graphika"
  },
  {
    text: "Логотипы",
    slug: "logotypes"
  },
  {
    text: "Брендинг",
    slug: "branding"
  },
  {
    text: "Айдентика",
    slug: "aydentika"
  },
  {
    text: "Motion",
    slug: "motion"
  },
  {
    text: "3D",
    slug: "3D"
  },
  {
    text: "Видео",
    slug: "video"
  },
  {
    text: "Фотосессии",
    slug: "fotosessii"
  },
  {
    text: "Рекламная ретушь",
    slug: "reklamnaya-retush"
  },
  {
    text: "Фото",
    slug: "photo"
  },
  {
    text: "Цветы",
    slug: "flowers"
  },
  {
    text: "Бьюти и медицина",
    slug: "beauty-medicine"
  }
] as const satisfies readonly TagElement[];

export const tags = tagsArray.reduce((acc, tag) => {
  acc[tag.slug] = tag;
  return acc;
}, {} as Record<TagSlug, Tag>);
