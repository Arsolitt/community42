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
    text: "Цифровые продукты",
    slug: "digital-products"
  },
  {
    text: "Графика и иллюстрации",
    slug: "graphics-illustration"
  },
  {
    text: "Логотипы",
    slug: "logotypes"
  },
  {
    text: "Айдентика",
    slug: "identity"
  },
  {
    text: "Motion",
    slug: "motion"
  },
  {
    text: "3D",
    slug: "3d"
  },
  {
    text: "Промышленный дизайн",
    slug: "industrial-design"
  },
  {
    text: "SMM-контент",
    slug: "smm-content"
  },
  {
    text: "Рекламная фотография",
    slug: "commercial-photo"
  },
  {
    text: "Рекламные ролики",
    slug: "commercial-video"
  }
] as const satisfies readonly TagElement[];

export const tags = tagsArray.reduce((acc, tag) => {
  acc[tag.slug] = tag;
  return acc;
}, {} as Record<TagSlug, Tag>);
