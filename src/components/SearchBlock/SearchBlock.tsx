import { projects } from '@/shared/assets/projects';

export const SearchBlock = () => {
  return (

    <div className='main_search'>
      <div className='container'>
        <div className='flex w-full h-full items-center justify-center text-center'>
          <input
            placeholder='поиск работ'
            className='placeholder:text-[#fff] placeholder:text-[16px] bg-transparent placeholder:opacity-25 caret-[#666666] text-center h-full w-full focus:border-none focus:outline-none border-none appearance-none outline-none'
          />
        </div>
      </div>
      <div className='container'>
        <div className='bubbleTags'>
          <div className='flex flex-row flex-wrap w-full h-full pt-[28.5px] items-center justify-center gap-[8px]'>
            {projects.map((p) => (
              <div key={p.id} className='inline-flex gap-[8px]'>
                {p.tags.map((t) => (
                  <p key={t.id} className='rounded-[10px] border border-white px-[10px] py-[4.5px] max-w-max text-[16px] font-medium'>{t.name}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
