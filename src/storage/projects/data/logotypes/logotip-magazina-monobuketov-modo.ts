import type { ProjectElement } from "@storage/projects";

import { PROJECT_IMG_URL } from "@core/config/paths";
import { tagWithPriority } from "@storage/tags";
import { teamMemberWithRole } from "@storage/team";

const slug = "logotip-magazina-monobuketov-modo";
const date = new Date("2024-06-12").toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
const tags = [
  tagWithPriority("logotypes", 3),
];
const image = `${PROJECT_IMG_URL}/${tags[0].slug}/${slug}/main.webp`;

export const logotipMagazinaMonobuketovModo: ProjectElement = {
  name: "Логотип магазина монобукетов Modo",
  date,
  slug,
  summary: "Modo – это новый цветочный сервис в Кемерово, ориентированный на моно (иногда и дуо) букеты. Ребята делают монобукеты с акцентом на цветы в категории премиум и люкс. Их магазин базируется в интернете, а заказ можно делать в мессенджерах Телграм, Вотсап и по телефону. Наша задача была в короткие сроки создать логотип, определииться с графическими элементами и создать некоторые шаблоны для оформления сторис, постов, рекламных банеров и т.п.",
  image,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель"),
    teamMemberWithRole("polina-web-designer", "Дизайнер"),
    teamMemberWithRole("konstantin-graphic-designer", "Фотограф"),
    { name: "Балбес Балбесов", link: "https://bimbim.bambam", role: "Балбес" }
  ],
  tags
};
