import { action, observable } from 'mobx';

export class LayoutStore {
  @observable public open: boolean = true;
  @action public toggle = () => {
    this.open = !this.open;
  };
}

export default new LayoutStore();
