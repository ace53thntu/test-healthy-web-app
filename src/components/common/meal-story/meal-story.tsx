import * as React from 'react';

type MealStoryProps = {
  image: React.ImgHTMLAttributes<HTMLImageElement>;
  date: React.ReactNode;
};

export const MealStory: React.FC<MealStoryProps> = ({
  image,
  date,
}: MealStoryProps) => {
  return (
    <figure className="relative h-[234px] w-[234px]">
      <picture>
        <img
          src={image.src}
          alt={image.alt}
          className="h-[234px] w-[234px] object-cover"
        />
      </picture>

      {date}
    </figure>
  );
};

MealStory.displayName = 'MealStory';
