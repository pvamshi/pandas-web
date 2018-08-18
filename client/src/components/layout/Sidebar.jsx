import React from 'react';

import { Card, Elevation } from '@blueprintjs/core';

const Sidebar = ({ elem }) => (
  <Card elevation={Elevation.TWO} className="sidebar">
    {elem}
  </Card>
);

export default Sidebar;
