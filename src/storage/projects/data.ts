import type { TagWithPriority } from "@storage/tags";
import type { TeamMemberWithRole } from "@storage/team";

import { videoDlyaNovojKosmicheskojTemyOformleniyaLiceya } from "./data/3d/3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23";
import { aydentikaServisaDostavkiAvtomobilejIzYaponiLikemobil } from "./data/identity/aydentika-servisa-dostavki-avtomobilej-iz-yaponi-likemobil";
import { navigatsiyaIProrabotkaZonaOtdyhaVStomatologiiEdemika } from "./data/identity/navigatsiya-i-prorabotka-zon-otdyha-v-stomatologii-edemika";
import { rebrendingProizvoditelyaElektroshhitovojProdukciiElektrokomplekt } from "./data/identity/rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt";
import { brendingStomatologiiEdemika } from "./data/branding/brending-stomatologii-edemika";
import { logotipMagazinaMonobuketovModo } from "./data/logotypes/logotip-magazina-monobuketov-modo";
import { logotipNauchnoIssledovatelьskojEstafetyPoSledamChihachyova } from "./data/logotypes/logotip-nauchno-issledovatelьskoj-estafety-po-sledam-chihachyova";
import { firmennyeMotionVideoDlyaStomatologiiEdemika } from "./data/motion/firmennye-motion-video-dlya-stomatologii-edemika";
import { landingUslugPoVideonablyudeniyuDlyaInternetProvayderaGoodlineBiznes } from "./data/ux-ui/landing-uslug-po-videonablyudeniyu-dlya-internet-provaydera-goodline-biznes";
import { saitStomatologiiEdemika } from "./data/ux-ui/sait-stomatologii-edemika";
import { sistemaPodarochnyhSertifikatovDlyaStomatologiiEdemika } from "./data/ux-ui/sistema-podarochnyh-sertifikatov-dlya-stomatologii-edemika";
import { firmennyePaketyDlyaInternetProvayderaGoodlineBiznes } from "./data/graphics-illustration/firmennye-pakety-dlya-internet-provaydera-goodline-biznes";
import { oformleniyaDlyaSocSetejInternetProvajderaGoodlineBiznes } from "./data/graphics-illustration/oformleniya-dlya-soc-setej-internet-provajdera-goodline-biznes";
import { suvenirIllustriaciyaKartaKuzbassaDlyaVisitKuzbass } from "./data/graphics-illustration/suvenir-illyustraciya-karta-kuzbassa-dlya-visit-kuzbass";
import { firmennoeBRollVideoDlyaStilistaPoBrovyam } from "./data/commercial-video/firmennoe-b-roll-video-dlya-stilista-po-brovyam";
import { videoDlyaMagazinaMonobuketovModo } from "./data/commercial-video/video-dlya-magazina-monobuketov-modo";

export type ProjectCollaborator = TeamMemberWithRole | {
  role: string;
  name: string;
  link: string;
};

export interface ProjectElement {
  collaborators: ProjectCollaborator[];
  creationTimeText: string;
  date: string;
  image: string;
  name: string;
  slug: string;
  summary: string;
  tags: TagWithPriority[];
}

export type ProjectSlug = (typeof projectsArray)[number]["slug"];

export type ProjectTag = (typeof projectsArray)[number]["tags"][number];

export type Project = (typeof projectsArray)[number];

const projectsArray = [
  logotipMagazinaMonobuketovModo,
  videoDlyaNovojKosmicheskojTemyOformleniyaLiceya,
  rebrendingProizvoditelyaElektroshhitovojProdukciiElektrokomplekt,
  brendingStomatologiiEdemika,
  firmennyeMotionVideoDlyaStomatologiiEdemika,
  saitStomatologiiEdemika,
  sistemaPodarochnyhSertifikatovDlyaStomatologiiEdemika,
  navigatsiyaIProrabotkaZonaOtdyhaVStomatologiiEdemika,
  videoDlyaMagazinaMonobuketovModo,
  aydentikaServisaDostavkiAvtomobilejIzYaponiLikemobil,
  landingUslugPoVideonablyudeniyuDlyaInternetProvayderaGoodlineBiznes,
  oformleniyaDlyaSocSetejInternetProvajderaGoodlineBiznes,
  firmennyePaketyDlyaInternetProvayderaGoodlineBiznes,
  logotipNauchnoIssledovatelьskojEstafetyPoSledamChihachyova,
  suvenirIllustriaciyaKartaKuzbassaDlyaVisitKuzbass,
  firmennoeBRollVideoDlyaStilistaPoBrovyam,
] as const satisfies readonly ProjectElement[];

export const projects = projectsArray.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {} as Record<ProjectSlug, Project>);
