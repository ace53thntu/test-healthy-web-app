import * as React from 'react';

type PostProps = {
  title: string;
  image: React.ImgHTMLAttributes<HTMLImageElement>;
  time?: React.ReactNode;
  tags?: React.ReactNode;
};

export const Post: React.FC<PostProps> = ({
  title,
  image,
  time,
  tags,
}: PostProps) => {
  return (
    <article className="flex w-[234px] flex-col">
      <figure className="relative h-[145px] w-[234px]">
        <picture>
          <img
            src={image.src}
            alt={image.alt}
            className="h-[145px] w-[234px] object-cover"
          />
        </picture>

        {time}
      </figure>

      <h3 className="mt-[8px] text-[15px] font-light leading-[22px] tracking-[.075px]">
        {title}
      </h3>

      {tags}
    </article>
  );
};

Post.displayName = 'Post';
