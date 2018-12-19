import { Menu, MenuItem } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import { DataFilesStore, IFile } from './datafiles.store';

@observer
export default class DataFiles extends React.Component<{
  dataFilesStore: DataFilesStore;
}> {
  public selectFile(file: IFile) {
    this.props.dataFilesStore.selectFile(file);
  }

  public componentDidMount() {
    this.props.dataFilesStore.fetchFiles();
  }

  public render() {
    const { dataFilesStore } = this.props;
    return (
      <Menu>
        {dataFilesStore.files.map((data, index) => (
          <MenuItem
            key={index}
            text={data.name}
            onClick={this.selectFile.bind(this, data)}
          />
        ))}
      </Menu>
    );
  }
}
