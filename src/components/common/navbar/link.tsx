import cn from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  to: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

const classes = {
  root: 'flex items-center gap-2 text-light font-light',
};

export const Link: React.FC<LinkProps> = ({
  to,
  icon,
  label,
  className,
}: LinkProps) => {
  const classesName = cn(classes.root, className);

  return (
    <NavLink to={to} className={classesName}>
      {icon} {label}
    </NavLink>
  );
};

Link.displayName = 'Link';
