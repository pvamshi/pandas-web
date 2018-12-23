import { Button, ButtonGroup, Classes } from '@blueprintjs/core';
import * as React from 'react';

export default class Pagination extends React.Component {
  public render() {
    return (
      <div>
        <div className="button-text">Some et</div>
        <ButtonGroup minimal={true}>
          <Button
            className={[Classes.MINIMAL, Classes.LARGE].join(' ')}
            icon="caret-left"
          />
          <Button
            className={[Classes.MINIMAL, Classes.LARGE].join(' ')}
            icon="caret-right"
          />
        </ButtonGroup>
      </div>
    );
  }
}
