import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, FooterItem, Navbar, ScrollTop } from '@/components/common';
import { FOOTER_CONFIG } from '@/configs/footer.config';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer>
        <div className="mx-auto w-[60rem] flex items-center gap-[2.75rem]">
          {FOOTER_CONFIG.map((item, index) => (
            <FooterItem key={index} to={item.to}>
              {item.label}
            </FooterItem>
          ))}
        </div>
      </Footer>

      <ScrollTop />
    </>
  );
};

MainLayout.displayName = 'MainLayout';
