import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import * as React from 'react';

export default class AppNavbar extends React.Component<
  { toggle: React.MouseEventHandler },
  any
> {
  public render() {
    const { toggle } = this.props;
    return (
      <Navbar className={Classes.MINIMAL}>
        <NavbarGroup align={Alignment.LEFT}>
          <Button
            className={[Classes.MINIMAL, Classes.SMALL].join(' ')}
            icon="menu"
            onClick={toggle}
          />
          <NavbarHeading className="ml1">Pandas Web</NavbarHeading>
        </NavbarGroup>
      </Navbar>
    );
  }
}
