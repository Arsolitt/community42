import { motion } from "framer-motion";

import { classNames } from "@/features/helpers/className";
import { CloseContactsIcon, SearchIcon } from "@/shared/assets/icons";
import cls from "./NavbarSearchButton.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchButtonProps {
  className?: string;
}

export const NavbarSearchButton = ({ className }: SearchButtonProps) => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);

  const onToggleSearch = () => {
    setOpenSearch((prev) => !prev);
    router.push(!openSearch ? '/search' : '/');
  };

  return (
    <div className={classNames(cls.SearchButton, {}, [className])}>
      <button onClick={onToggleSearch}>
        <motion.div
          key={openSearch ? "shown" : "normal"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {!openSearch ? <SearchIcon /> : <CloseContactsIcon />}
        </motion.div>
      </button>
    </div>
  );
};
