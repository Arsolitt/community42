import type { ProjectElement } from "@/data/projects";

import { PROJECT_IMG_URL } from "@/core/config/paths";
import { tagWithPriority } from "@/data/tags";
import { teamMemberWithRole } from "@/data/team";

const slug = "logotip-magazina-monobuketov-modo";
const date = new Date("2024-06-12");
const dateText = date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });

export const logotipMagazinaMonobuketovModo: ProjectElement = {
  name: "Логотип магазина монобукетов Modo",
  date: dateText,
  slug,
  summary: "Modo – это новый цветочный сервис в Кемерово, ориентированный на моно (иногда и дуо) букеты. Ребята делают монобукеты с акцентом на цветы в категории премиум и люкс. Их магазин базируется в интернете, а заказ можно делать в мессенджерах Телграм, Вотсап и по телефону. Наша задача была в короткие сроки создать логотип, определииться с графическими элементами и создать некоторые шаблоны для оформления сторис, постов, рекламных банеров и т.п.",
  image: `${PROJECT_IMG_URL}/${slug}/main.webp`,
  creationTimeText: "Создано за 10 дней",
  collaborators: [
    teamMemberWithRole("konstantin-graphic-designer", "Руководитель"),
    teamMemberWithRole("polina-web-designer", "Дизайнер"),
    teamMemberWithRole("konstantin-graphic-designer", "Фотограф"),
    { name: "Балбес Балбесов", link: "https://bimbim.bambam", role: "Балбес" }
  ],
  tags: [
    tagWithPriority("logotypes", 3),
    tagWithPriority("photo", 1),
    tagWithPriority("flowers", 1)
  ]
};
