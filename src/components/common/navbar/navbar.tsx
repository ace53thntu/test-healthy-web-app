import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/assets/logo.svg';
import { Badge } from '@/components/base/badge';
import { ChallengeIcon, InfoIcon, MemoIcon } from '@/components/icons';
import { NAVBAR_HEIGHT } from '@/configs/menu.config';
import { ROUTE_PATHS } from '@/configs/routes.config';

import { Link } from './link';
import { Menu } from './menu';

const flexBetween = 'flex items-center justify-between';

export const Navbar: React.FC = () => {
  return (
    <nav className={`h-[${NAVBAR_HEIGHT}px]`}>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full bg-dark-500 h-[${NAVBAR_HEIGHT}px]`}
      >
        <div className={`${flexBetween} mx-auto w-9/12`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <NavLink to={'/'}>
              <img alt="logo" src={Logo} />
            </NavLink>

            {/* RIGHT SIDE */}
            <div className={`flex w-full items-center justify-end`}>
              <div className={`flex items-center gap-8`}>
                <Link
                  to={ROUTE_PATHS.MY_RECORDS}
                  label="自分の記録"
                  icon={<MemoIcon />}
                  className="leading-[23px]"
                />
                <Link
                  to={ROUTE_PATHS.CHALLENGES}
                  label="チャレンジ"
                  icon={<ChallengeIcon />}
                  className="leading-[23px]"
                />
                <Link
                  to={ROUTE_PATHS.NOTIFICATIONS}
                  label="お知らせ"
                  className="leading-[23px]"
                  icon={
                    <Badge count={1}>
                      <InfoIcon />
                    </Badge>
                  }
                />
              </div>

              {/* MENU */}
              <div className="ml-[72px]">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
