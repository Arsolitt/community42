import { Suspense } from 'react';

import { Header } from '@/widgets/Header';
import Search from '@/widgets/Search';

const SearchPage = () => {
  return (
    <>
      <Header manualScrolled />
      <Suspense>
        <Search />
      </Suspense>
    </>
  );
};

export default SearchPage;
