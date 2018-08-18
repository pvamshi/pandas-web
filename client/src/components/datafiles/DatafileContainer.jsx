import React from 'react';

import { Menu, MenuItem } from '@blueprintjs/core';
const DatafileContainer = ({ files, isFetching }) =>
  isFetching ? (
    <p>Fetching data</p>
  ) : (
    <Menu>
      {files.map((data, index) => (
        <MenuItem
          key={index}
          text={data.name}
          onClick={() => this.menuSelected(data)}
        />
      ))}
    </Menu>
  );

export default DatafileContainer;
