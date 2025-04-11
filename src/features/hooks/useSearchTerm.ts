import { useState } from 'react';

export const useSearchTerm = (initialValue = '') => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return {
    searchTerm,
    handleSearchChange,
    setSearchTerm
  };
};
