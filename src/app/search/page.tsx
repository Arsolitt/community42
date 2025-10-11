import { Suspense } from "react";

import { Header } from "@/components/Header";
import Search from "@/components/Search";

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
