import { Cell, Column, Table } from '@blueprintjs/table';
import React from 'react';

const getCellRenderer = (data) => (rowIndex, columnIndex) => (
  <Cell>{data[rowIndex][columnIndex]}</Cell>
);
// const getRowHeaderCellRenderer = (rows) => (rowIndex) => (
//   <RowHeaderCell>{rows[rowIndex]}</RowHeaderCell>
// );
const DataTableContainer = ({ data }) =>
  !!data && (
    <Table numRows={data.data.length}>
      {data.columns.map((column, index) => (
        <Column
          key={index}
          name={column}
          cellRenderer={getCellRenderer(data.data)}
        />
      ))}
    </Table>
  );
export default DataTableContainer;
