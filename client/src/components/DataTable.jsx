import React from 'react';
import { Cell, Column, Table, RowHeaderCell } from '@blueprintjs/table';

const DataTable = (props) => {
  const cellRenderer = (rowIndex, columnIndex) => {
    return <Cell>{props.data[rowIndex][columnIndex]}</Cell>;
  };
  const rowHeaderCellRenderer = (rowIndex) => {
    return <RowHeaderCell>{props.data.index[rowIndex]}</RowHeaderCell>;
  };
  return (
    <Table
      numRows={props.data.index.length}
      rowHeaderCellRenderer={rowHeaderCellRenderer}
    >
      {props.data.columns.map((column, index) => (
        <Column key={index} name={column} cellRenderer={cellRenderer} />
      ))}
    </Table>
  );
};
export default DataTable;
