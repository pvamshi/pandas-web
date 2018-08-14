import React from 'react';
import Layout from './Layout';
import Datafiles from './Datafiles';
import { Cell, Column, Table, RowHeaderCell } from '@blueprintjs/table';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.menuSelected = this.menuSelected.bind(this);
  }

  menuSelected(dataFile) {
    console.log('d', dataFile);
    fetch('http://localhost:5000/api/pandas/head?name=' + dataFile.name)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        this.setState({ data });
      });
  }
  render() {
    const cellRenderer = (rowIndex, columnIndex) => {
      return <Cell>{this.state.data.data[rowIndex][columnIndex]}</Cell>;
    };
    const rowHeaderCellRenderer = (rowIndex) => {
      return <RowHeaderCell>{this.state.data.index[rowIndex]}</RowHeaderCell>;
    };
    return (
      <Layout>
        <Datafiles menuSelected={this.menuSelected} />
        {this.state.data && (
          <Table
            numRows={this.state.data.index.length}
            rowHeaderCellRenderer={rowHeaderCellRenderer}
          >
            {this.state.data.columns.map((column, index) => (
              <Column key={index} name={column} cellRenderer={cellRenderer} />
            ))}
          </Table>
        )}
      </Layout>
    );
  }
}
