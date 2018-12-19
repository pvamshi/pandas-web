import { action, observable } from 'mobx';
import dataTableStore, { DataTableStore } from '../datatable/datatable.store';

export interface IPivotData {
  columns: string[];
  data: string[][];
  index: string[] | number[];
}

export const convert = (raw: IPivotData) =>
  raw.data.map((row, rowIndex) =>
    raw.columns.reduce(
      (accumulated, current, index) => ({
        ...accumulated,
        [current]: row[index],
      }),
      {
        id: raw.index[rowIndex],
      },
    ),
  );

export interface IFile {
  id: number;
  name: string;
  path: string;
}

export class DataFilesStore {
  public readonly files = observable<IFile>([
    { id: 0, name: 'Test', path: 'test path' },
    { id: 1, name: 'Test1', path: 'test path' },
  ]);
  @observable public loading: boolean = false;
  @observable public error: string | null = null;
  private dataStore: DataTableStore = dataTableStore;

  @action public selectFile = (file: IFile) => {
    this.dataStore.fetchPivot(file);
  };
  @action public fetchFiles = () => {
    this.loading = true;
    fetch('http://localhost:8080/tasks')
      .then((response) => response.json())
      .then((files: IPivotData) => {
        this.files.replace(convert(files) as IFile[]);
        this.loading = false;
      })
      .catch((error) => {
        this.error = error;
        this.loading = false;
      });
  };
}

export default new DataFilesStore();
