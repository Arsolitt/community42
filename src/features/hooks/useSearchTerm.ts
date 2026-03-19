import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchTerm = (initialValue = "") => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const qParam = searchParams.get("q");
    const termFromUrl = qParam || initialValue;

    if (searchTerm !== termFromUrl) {
      setSearchTerm(termFromUrl);
    }
  }, [searchParams, initialValue, searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);

    const params = new URLSearchParams(searchParams.toString());
    if (newValue) {
      params.set("q", newValue);
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    searchTerm,
    handleSearchChange,
    setSearchTerm,
  };
};
