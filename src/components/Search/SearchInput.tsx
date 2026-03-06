import type { SetStateAction } from 'react';

import styles from './SearchInput.module.css';

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (event: { target: { value: SetStateAction<string> } }) => void;
}

export const SearchInput = ({ searchTerm, onSearchChange }: SearchInputProps) => (
  <div className="container">
    <div className={styles.inputWrapper}>
      <input className={styles.input} value={searchTerm} onChange={onSearchChange} placeholder="поиск работ" />
    </div>
  </div>
);
