import type { ProjectElement } from "@storage/projects";

import { PROJECT_IMG_URL } from "@core/config/paths";
import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23";
const date = new Date("2024-09-01").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("3D", 2),
  tagWithPriority("motion", 1)
].toSorted((a, b) => b.priority - a.priority );
const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;

export const videoDlyaNovojKosmicheskojTemyOformleniyaLiceya: ProjectElement = {
  name: "3D-видео для новой космической темы оформления Лицея№23",
  date,
  slug,
  summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
  image,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель"),
    teamMemberWithRole("konstantin-graphic-designer", "Дизайнер"),
    teamMemberWithRole("konstantin-graphic-designer", "Фотограф")
  ],
  tags
};
