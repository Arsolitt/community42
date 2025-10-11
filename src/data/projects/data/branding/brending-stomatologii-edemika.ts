import type { ProjectElement } from "@/data/projects";

import { PROJECT_IMG_URL } from "@/core/config/paths";
import { tagWithPriority } from "@/data/tags";
import { teamMemberWithRole } from "@/data/team";

const slug = "brending-stomatologii-edemika";
const date = new Date("2024-09-15");
const dateText = date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });

export const brendingStomatologiiEdemika: ProjectElement = {
  name: "Брендинг стоматологии «Эдемика»",
  date: dateText,
  slug,
  summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
  image: `${PROJECT_IMG_URL}/${slug}/main.webp`,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
  ],
  tags: [
    tagWithPriority("branding", 2),
    tagWithPriority("aydentika", 1),
    tagWithPriority("ux-ui", 1),
    tagWithPriority("logotypes", 1),
    tagWithPriority("motion", 1),
    tagWithPriority("3D", 1),
    tagWithPriority("video", 1),
    tagWithPriority("photo", 1),
    tagWithPriority("beauty-medicine", 1)
  ]
};
