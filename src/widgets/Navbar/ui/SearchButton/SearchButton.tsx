import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { classNames } from '@/features/helpers/className';
import { CloseContactsIcon, SearchIcon } from '@/shared/assets/icons';

import cls from './NavbarSearchButton.module.scss';

interface SearchButtonProps {
  className?: string;
}

export const NavbarSearchButton = ({ className }: SearchButtonProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    if (pathName === '/search') {
      setOpenSearch(true);
    } else {
      setOpenSearch(false);
    }
  }, [pathName]);

  const onToggleSearch = () => {
    setOpenSearch((prev) => !prev);
    router.push(!openSearch ? '/search' : '/');
  };

  return (
    <div className={classNames(cls.SearchButton, {}, [className])}>
      <button type='button' onClick={onToggleSearch}>
        <motion.div
          key={openSearch ? 'shown' : 'normal'}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          {!openSearch ? <SearchIcon /> : <CloseContactsIcon />}
        </motion.div>
      </button>
    </div>
  );
};
