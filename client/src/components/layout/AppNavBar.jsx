import React from 'react';
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

const AppNavbar = ({ toggle }) => (
  <Navbar className={Classes.MINIMAL}>
    <NavbarGroup align={Alignment.LEFT}>
      <Button
        className={[Classes.MINIMAL, Classes.SMALL]}
        icon="menu"
        onClick={toggle}
      />
      <NavbarHeading className="ml1">Pandas Web</NavbarHeading>
    </NavbarGroup>
  </Navbar>
);

export default AppNavbar;
