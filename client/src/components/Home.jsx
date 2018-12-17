import React from 'react';
import Datafiles from './datafiles';
// import DataTable from './DataTable';
import DataTable from './datatable';
import Layout from './layout';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.menuSelected = this.menuSelected.bind(this);
  }

  menuSelected(dataFile) {
    fetch('http://localhost:5000/api/pandas/head?name=' + dataFile.name)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        this.setState({ data });
      });
  }
  render() {
    return (
      <Layout sidebarOpen={true} toggle={() => console.log('clicked')}>
        <Datafiles menuSelected={this.menuSelected} />
        <DataTable />
      </Layout>
    );
  }
}
