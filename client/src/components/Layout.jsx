import React from 'react';

import {
  Alignment,
  Button,
  Card,
  Classes,
  Elevation,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className={Classes.MINIMAL}>
          <NavbarGroup align={Alignment.LEFT}>
            <Button
              className={[Classes.MINIMAL, Classes.SMALL]}
              icon="menu"
              onClick={this.toggleSidebar}
            />
            <NavbarHeading className="ml1">Pandas Web</NavbarHeading>
          </NavbarGroup>
        </Navbar>
        {this.state.sidebarOpen && (
          <Card elevation={Elevation.TWO} className="sidebar">
            {this.props.children[0]}
          </Card>
        )}
        <div className={this.state.sidebarOpen ? 'main-open' : 'main'}>
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}
