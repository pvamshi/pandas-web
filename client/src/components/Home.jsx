import React from 'react';

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

// const mySpinner = <Spinner intent={Intent.PRIMARY} />;
//  => <div className="home">Home {mySpinner}</div>;
// const { alignRight } = this.state;
// const options = (
//   <>
//     <H5>Props</H5>
//     <Switch
//       checked={alignRight}
//       label="Align right"
//       onChange={this.handleAlignRightChange}
//     />
//   </>
// );
const Home = (props) => (
  <Navbar className={Classes.MINIMAL}>
    <NavbarGroup align={Alignment.LEFT}>
      <Button className={[Classes.MINIMAL, Classes.SMALL]} icon="menu" />

      <NavbarHeading className="ml1">Pandas Web</NavbarHeading>
      {/* <NavbarDivider /> */}
      {/* <Button className={Classes.MINIMAL} icon="home" text="Home" />
      <Button className={Classes.MINIMAL} icon="document" text="Files" /> */}
    </NavbarGroup>
  </Navbar>
);
export default Home;
