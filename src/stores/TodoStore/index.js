import { observable } from "mobx";

class TodoStore {
  count = 0;
  @observable todos = [];
  addTodo(description) {
    const todo = {
      description: description,
      id: this.count++
    };
    console.log(todo);
    this.todos.push(todo);
  }
}
export default TodoStore;
