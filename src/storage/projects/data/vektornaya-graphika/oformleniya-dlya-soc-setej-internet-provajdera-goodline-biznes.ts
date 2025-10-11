import type { ProjectElement } from "@storage/projects";

import { PROJECT_IMG_URL } from "@core/config/paths";
import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "oformleniya-dlya-soc-setej-internet-provajdera-goodline-biznes";
const date = new Date("2024-03-06").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("vektornaya-graphika", 1),
];
// const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;
const image = `${PROJECT_IMG_URL}/fallback.webp`;

export const oformleniyaDlyaSocSetejInternetProvajderaGoodlineBiznes: ProjectElement = {
  name: "Оформления для соц-сетей интернет-провайдера Goodline бизнес",
  date,
  slug,
  summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
  image,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель"),
  ],
  tags
};
