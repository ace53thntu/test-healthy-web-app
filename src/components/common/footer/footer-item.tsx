import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const FooterItem = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <NavLink
        ref={ref}
        {...rest}
        className={`font-light text-[11px] leading-4 text-light tracking-[.033px]`}
      >
        {children}
      </NavLink>
    );
  }
);

FooterItem.displayName = 'FooterItem';
