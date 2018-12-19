import { action, observable } from 'mobx';
import { IFile, IPivotData } from 'src/datafiles/datafiles.store';

export class DataTableStore {
  @observable public data: IPivotData;
  @observable public loading: boolean = false;

  @action public fetchPivot = (file: IFile) => {
    console.log('fetching data', file);
    this.loading = true;
    fetch(`http://localhost:8080/pandas?taskid=${file.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        this.loading = false;
        this.data = data;
      });
  };
}

export default new DataTableStore();
