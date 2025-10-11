import type { ProjectElement } from "@storage/projects";

import { PROJECT_IMG_URL } from "@core/config/paths";
import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "sistema-podarochnyh-sertifikatov-dlya-stomatologii-edemika";
const date = new Date("2025-02-15").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("ux-ui", 2),
  tagWithPriority("branding", 1),
  tagWithPriority("beauty-medicine", 1)
];
const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;

export const sistemaPodarochnyhSertifikatovDlyaStomatologiiEdemika: ProjectElement = {
  name: "Система подарочных сертификатов для стоматологии «Эдемика»",
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
