import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const MenuItem = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <NavLink
        ref={ref}
        {...rest}
        className={`flex w-full items-center border-t border-b border-b-menu-divide-bottom border-t-menu-divide-top px-[32px] py-[23px] text-[1.125rem] font-light leading-[1.625rem] text-light hover:text-primary-400 bg-gray-400`}
      >
        {children}
      </NavLink>
    );
  }
);

MenuItem.displayName = 'MenuItem';
