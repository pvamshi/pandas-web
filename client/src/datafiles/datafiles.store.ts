import { action, observable } from 'mobx';

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
  public readonly files = observable<IFile>([]);
  @observable public loading: boolean = false;
  @observable public error: string | null = null;

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
