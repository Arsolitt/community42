import type { SetStateAction } from 'react';

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (event: { target: { value: SetStateAction<string> } }) => void;
}

export const SearchInput = ({ searchTerm, onSearchChange }: SearchInputProps) => (
  <div className='container'>
    <div className='flex w-full h-full items-center justify-center text-center border-b border-[#FFF] border-opacity-50 pb-[6px]'>
      <input
        className='placeholder:text-[#fff] placeholder:text-[16px] bg-transparent placeholder:opacity-25 caret-[#666666] text-center h-full w-full focus:border-none focus:outline-none border-none appearance-none outline-none'
        value={searchTerm}
        onChange={onSearchChange}
        placeholder='поиск работ'
      />
    </div>
  </div>
);
