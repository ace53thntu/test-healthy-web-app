import * as React from 'react';

type PostTagProps = React.PropsWithChildren<Record<string, unknown>>;

export const PostTag: React.FC<PostTagProps> = ({ children }: PostTagProps) => {
  return (
    <span className="text-[12px] font-light leading-[22px] tracking-[.06px] text-primary-400">
      {children}
    </span>
  );
};

PostTag.displayName = 'PostTag';
