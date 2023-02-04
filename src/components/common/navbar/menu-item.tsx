import * as React from 'react';
import { NavLink } from 'react-router-dom';

type MenuItemProps = {
  to: string;
  label: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  to,
  label,
}: MenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={`flex w-full items-center border-t border-b border-b-menu-divide-bottom border-t-menu-divide-top px-[32px] py-[23px] text-[1.125rem] font-light leading-[1.625rem] text-light hover:text-primary-400 bg-gray-400`}
    >
      {label}
    </NavLink>
  );
};

MenuItem.displayName = 'MenuItem';
