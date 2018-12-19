import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import DataFiles from './datafiles/DataFiles';
import dataFilesStore from './datafiles/datafiles.store';
import DataTable from './datatable/DataTable';
import datatableStore from './datatable/datatable.store';
import Layout from './layout/Layout';
import layoutStore from './layout/layout.store';

@observer
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <Provider layoutStore={layoutStore} dataTableStore={datatableStore}>
        <Layout>
          <DataFiles dataFilesStore={dataFilesStore} />
          <DataTable />
        </Layout>
      </Provider>
    );
  }
}
