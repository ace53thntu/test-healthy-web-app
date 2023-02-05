import * as React from 'react';

type FooterProps = React.PropsWithChildren<Record<string, unknown>>;

export const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
  return (
    <footer className="flex h-[128px] w-full items-center bg-dark-500">
      {children}
    </footer>
  );
};

Footer.displayName = 'Footer';
