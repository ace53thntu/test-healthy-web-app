import * as React from 'react';

type FooterProps = React.PropsWithChildren<Record<string, unknown>>;

export const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
  return (
    <footer className="bg-dark-500 w-full h-[8rem] flex items-center">
      {children}
    </footer>
  );
};

Footer.displayName = 'Footer';
