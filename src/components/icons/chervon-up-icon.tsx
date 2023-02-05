import * as React from 'react';

type ChervonUpIconProps = {
  fill?: string;
};

export const ChervonUpIcon: React.FC<ChervonUpIconProps> = ({
  fill = '#777777',
}: ChervonUpIconProps) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5853 9.04198L8.00023 2.65788L1.41519 9.04198L0.539001 8.19253L8.00024 0.958984L15.4615 8.19253L14.5853 9.04198Z"
        fill={fill}
      />
    </svg>
  );
};

ChervonUpIcon.displayName = 'ChervonUpIcon';
