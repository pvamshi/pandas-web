import {
  Cell,
  Column,
  RowHeaderCell,
  Table,
  TableLoadingOption,
} from '@blueprintjs/table';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IPivotData } from 'src/datafiles/datafiles.store';
import { DataTableStore } from './datatable.store';
import Pagination from './Pagination';

@inject('dataTableStore')
@observer
export default class DataTable extends React.Component<{
  dataTableStore?: DataTableStore;
}> {
  public render() {
    const dts: DataTableStore | undefined = this.props.dataTableStore;
    const getCellRenderer = (data: string[][]) => (
      rowIndex: number,
      columnIndex: number,
    ) => <Cell>{data[rowIndex][columnIndex]}</Cell>;

    // // Helps in displaying the index
    const getRowHeaderCellRenderer = (data: IPivotData) => (
      rowIndex: number,
    ) => <RowHeaderCell>{data && data.index[rowIndex]}</RowHeaderCell>;
    return !dts!.loading && !dts!.data ? (
      <p>Nothing to display</p>
    ) : (
      <div>
        <Table
          loadingOptions={
            dts!.loading
              ? [
                  TableLoadingOption.CELLS,
                  TableLoadingOption.COLUMN_HEADERS,
                  TableLoadingOption.ROW_HEADERS,
                ]
              : []
          }
          numRows={dts!.data && dts!.data.data.length}
          rowHeaderCellRenderer={getRowHeaderCellRenderer(dts!.data)}
        >
          {dts!.data &&
            dts!.data.columns.map((column, index) => (
              <Column
                key={index}
                name={column}
                cellRenderer={getCellRenderer(dts!.data.data)}
              />
            ))}
        </Table>
        <Pagination />
      </div>
    );
  }
}
