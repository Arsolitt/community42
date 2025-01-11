import { Suspense } from 'react';

import SearchBlock from '@/components/SearchBlock';
import { Header } from '@/widgets/Header';

const Search = () => {
  return (
    <>
      <Header manualScrolled />
      <Suspense>
        <SearchBlock />
      </Suspense>
    </>
  );
};

export default Search;
