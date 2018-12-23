import { Menu, MenuItem } from '@blueprintjs/core';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { DataTableStore } from 'src/datatable/datatable.store';
import { DataFilesStore, IFile } from './datafiles.store';

@inject('dataTableStore')
@observer
export default class DataFiles extends React.Component<{
  dataFilesStore: DataFilesStore;
  dataTableStore?: DataTableStore;
}> {
  public selectFile(file: IFile) {
    this.props.dataTableStore!.fetchPivot(file);
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
