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

  updateSelectedTodoState(state) {
    if (state == "completed")
      return this.todos.filter(todo => {
        return todo.isCompleted === true;
      });
    else if (state == "active")
      return this.todos.filter(todo => {
        return todo.isCompleted === false;
      });
    else return this.todos;
  }

  onClearCompleted() {
    this.todos = this.todos.filter(todo => {
      return todo.isCompleted === false;
    });
  }
}
export default TodoStore;
