import React from 'react';
import Layout from './Layout';
import Datafiles from './Datafiles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.menuSelected = this.menuSelected.bind(this);
  }

  menuSelected(dataFile) {
    console.log('d', dataFile);
  }
  render() {
    return (
      <Layout>
        <Datafiles menuSelected={this.menuSelected} />
        <p>second</p>
      </Layout>
    );
  }
}
