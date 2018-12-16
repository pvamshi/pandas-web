import { Column, Table } from '@blueprintjs/table';
import React from 'react';

// const DataTable = (props) => {
//   const cellRenderer = (rowIndex, columnIndex) => {
//     return <Cell>{props.data[rowIndex][columnIndex]}</Cell>;
//   };
//   const rowHeaderCellRenderer = (rowIndex) => {
//     return <RowHeaderCell>{props.data.index[rowIndex]}</RowHeaderCell>;
//   };
//   return (
//     <Table
//       numRows={props.data.index.length}
//       rowHeaderCellRenderer={rowHeaderCellRenderer}
//     >
//       {props.data.columns.map((column, index) => (
//         <Column key={index} name={column} cellRenderer={cellRenderer} />
//       ))}
//     </Table>
//   );
// };
// export default DataTable;

const getCellRenderer = (data) => (rowIndex, columnIndex) => (
  <Cell>{data[rowIndex][columnIndex]}</Cell>
);
const getRowHeaderCellRenderer = (rows) => (rowIndex) => (
  <RowHeaderCell>{rows[rowIndex]}</RowHeaderCell>
);
const DataTableContainer = ({ data }) => (
  <Table
    numRows={data.index.length}
    rowHeaderCellRenderer={getRowHeaderCellRenderer(data.index)}
  >
    {data.columns.map((column, index) => (
      <Column key={index} name={column} cellRenderer={getCellRenderer(data)} />
    ))}
  </Table>
);

export default DataTableContainer;
