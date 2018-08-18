import React from 'react';

import Sidebar from './Sidebar';
import AppNavbar from './AppNavBar';

const LayoutContainer = ({ sidebarOpen, toggle, children }) => (
  <div>
    <AppNavbar toggle={toggle} />
    {sidebarOpen && <Sidebar elem={children[0]} />}
    <div className={sidebarOpen ? 'main-open' : 'main'}>{children[1]}</div>
  </div>
);

export default LayoutContainer;
