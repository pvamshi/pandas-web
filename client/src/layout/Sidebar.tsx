import { Card, Elevation } from '@blueprintjs/core';
import * as React from 'react';

export default class Sidebar extends React.Component<{
  elem: React.ReactNode;
}> {
  public render() {
    const { elem } = this.props;
    return (
      <Card elevation={Elevation.TWO} className="sidebar">
        {elem}
      </Card>
    );
  }
}
