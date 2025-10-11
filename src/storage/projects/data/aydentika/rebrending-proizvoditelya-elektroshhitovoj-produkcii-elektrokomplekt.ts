import type { ProjectElement } from "@storage/projects";

import { PROJECT_IMG_URL } from "@/core/config/paths";
import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt";
const date = new Date("2024-08-31").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("aydentika", 2),
  tagWithPriority("logotypes", 1),
  tagWithPriority("motion", 1)
];
const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;

export const rebrendingProizvoditelyaElektroshhitovojProdukciiElektrokomplekt: ProjectElement = {
  name: "Ребрендинг производителя электрощитовой продукции «Электрокомплект»",
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
