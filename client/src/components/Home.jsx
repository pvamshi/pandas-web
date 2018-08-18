import React from 'react';
import DataTable from './DataTable';
import Layout from './layout';
import Datafiles from './datafiles';

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
        {this.state.data && <DataTable data={this.state.data} />}
      </Layout>
    );
  }
}
