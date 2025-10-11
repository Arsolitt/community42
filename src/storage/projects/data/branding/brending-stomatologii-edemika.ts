import { PROJECT_IMG_URL } from "@core/config/paths";
import type { ProjectElement } from "@storage/projects";

import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "brending-stomatologii-edemika";
const date = new Date("2024-09-15").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("branding", 2),
  tagWithPriority("aydentika", 1),
  tagWithPriority("ux-ui", 1),
  tagWithPriority("logotypes", 1),
  tagWithPriority("motion", 1),
  tagWithPriority("3d", 1),
  tagWithPriority("video", 1),
  tagWithPriority("photo", 1),
  tagWithPriority("beauty-medicine", 1)
];
const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;

export const brendingStomatologiiEdemika: ProjectElement = {
  name: "Брендинг стоматологии «Эдемика»",
  date,
  slug,
  summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
  image,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
  ],
  tags
};
