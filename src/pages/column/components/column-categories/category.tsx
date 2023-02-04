import * as React from 'react';

type CategoryProps = {
  id: string;
  name: string;
  nameJp: string;
};

export const Category: React.FC<CategoryProps> = ({
  id,
  name,
  nameJp,
}: CategoryProps) => {
  const handleFilterPosts = () => {
    console.log('id: ', id);
  };

  return (
    <button
      className="flex h-[144px] w-[216px] flex-col items-center bg-dark-600 px-[8px] pt-[24px] pb-[22px]"
      onClick={handleFilterPosts}
    >
      <h2 className="text-center font-inter text-[1.375rem] uppercase leading-[1.688rem] tracking-[0.11px] text-primary-300">
        {name}
      </h2>
      <div className="bg-[rgba(0, 0, 0, 0.0001)] mt-[10px] mb-[8px] h-[1px] w-[56px] border-t border-white"></div>
      <p className="text-center text-[1.125rem] font-light leading-[1.625rem] text-white">
        {nameJp}
      </p>
    </button>
  );
};

Category.displayName = 'Category';
