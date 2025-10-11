import type { ProjectElement } from "@/data/projects";

import { PROJECT_IMG_URL } from "@/core/config/paths";
import { tagWithPriority } from "@/data/tags";
import { teamMemberWithRole } from "@/data/team";

const slug = "3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23";
const date = new Date("2024-09-01");
const dateText = date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });

export const videoDlyaNovojKosmicheskojTemyOformleniyaLiceya: ProjectElement = {
  name: "3D-видео для новой космической темы оформления Лицея№23",
  date: dateText,
  slug,
  summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
  image: `${PROJECT_IMG_URL}/${slug}/main.webp`,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель"),
    teamMemberWithRole("konstantin-graphic-designer", "Дизайнер"),
    teamMemberWithRole("konstantin-graphic-designer", "Фотограф")
  ],
  tags: [
    tagWithPriority("3D", 2),
    tagWithPriority("motion", 1)
  ]
};
