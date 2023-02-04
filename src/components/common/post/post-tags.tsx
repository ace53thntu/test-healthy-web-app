import * as React from 'react';

import { PostTag } from './post-tag';

export type PostTagsProps = {
  tags: string[];
};

export const PostTags: React.FC<PostTagsProps> = ({ tags }: PostTagsProps) => {
  return (
    <div className="flex gap-3">
      {tags.map((tag, index) => (
        <PostTag key={index}>{tag}</PostTag>
      ))}
    </div>
  );
};

PostTags.displayName = 'PostTags';
