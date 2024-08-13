"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import { team } from "@/shared/assets/team";
import cls from "../Biography.module.scss";

export const BiographyRightBlock = () => {
  const slugCollaborator = useParams().slug;
  const collaborator = team.find((t) => t.link === slugCollaborator);

  return (
    <Image
      src={collaborator?.fullsizeImage}
      width={400}
      height={310}
      className={cls.image}
      alt={`Фотография сотрудника ${collaborator?.name}`}
    />
  );
};
