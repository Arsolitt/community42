import type { ProjectElement } from "@storage/projects";

import { PROJECT_IMG_URL } from "@core/config/paths";
import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "firmennoe-b-roll-video-dlya-stilista-po-brovyam";
const date = new Date("2022-06-12").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("video", 2),
  tagWithPriority("beauty-medicine", 1),
  tagWithPriority("3d", 1),
];
// const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;
const image = `${PROJECT_IMG_URL}/fallback.webp`;

export const firmennoeBRollVideoDlyaStilistaPoBrovyam: ProjectElement = {
  name: "Фирменное Б-ролл видео для стилиста по бровям",
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
