import { action, computed, observable } from 'mobx';

export class Todo {
  @observable public todos: string[] = [];

  @action public addTodo = (t: string) => {
    this.todos.push(t);
  };

  @computed public get length(): number {
    return this.todos.length;
  }
}

const store = new Todo();
export default store;
