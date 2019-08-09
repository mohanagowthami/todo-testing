import { observable } from "mobx";
import TodoModel from "../models/TodoModel/index";
class TodoStore {
  count = 0;
  @observable todos = [];
  addTodo(description) {
    const todo = {
      description: description,
      id: this.count++,
      isCompleted: false
    };
    console.log("todo are ", todo.description);
    this.todos.push(new TodoModel(todo, this));
  }
}
export default TodoStore;
