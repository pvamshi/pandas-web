import { Menu, MenuItem } from '@blueprintjs/core';
import React from 'react';

const DatafileContainer = ({ files, isFetching, fileSelect }) =>
  isFetching ? (
    <p>Fetching data</p>
  ) : (
    <Menu>
      {files.map((data, index) => (
        <MenuItem
          key={index}
          text={data.name}
          onClick={() => fileSelect(data.name)}
        />
      ))}
    </Menu>
  );

export default DatafileContainer;
