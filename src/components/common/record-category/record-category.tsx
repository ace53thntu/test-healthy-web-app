import * as React from 'react';

type RecordCategoryProps = {
  image: React.ImgHTMLAttributes<HTMLImageElement>;
  name: string;
  caption: string;
};

export const RecordCategory: React.FC<RecordCategoryProps> = ({
  image,
  name,
  caption,
}: RecordCategoryProps) => {
  return (
    <div className="relative flex h-[288px] w-[288px] flex-col items-center justify-center">
      <picture className="absolute z-[1] bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[1] before:border-[24px] before:border-solid before:border-primary-300">
        <img
          src={image.src}
          alt={image.alt}
          className="h-[288px] w-[288px] object-cover object-left-top opacity-25 mix-blend-luminosity hover:object-scale-down"
        />
      </picture>

      <div className="relative z-[2] flex flex-col items-center justify-center">
        <h2 className="font-inter text-[25px] uppercase leading-[30px] tracking-[.125px] text-primary-300">
          {name}
        </h2>
        <div className="mt-[10px] flex h-[24px] w-[160px] items-center justify-center bg-primary-400">
          <p className="text-[14px] font-light leading-[20px] text-light">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

RecordCategory.displayName = 'RecordCategory';
