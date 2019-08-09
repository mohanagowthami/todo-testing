import { observable, computed } from "mobx";
import TodoModel from "../models/TodoModel/index";
import { all, active, completed } from "../../components/constants.js";
class TodoStore {
  count = 0;
  @observable todos = [];
  @observable state = all;
  addTodo(description) {
    const todo = {
      description: description,
      id: this.count++,
      isCompleted: false
    };
    console.log("todo are ", todo.description);
    this.todos.push(new TodoModel(todo, this));
  }

  updateSelectedTodoState(value) {
    this.state = value;
    console.log(this.state);
  }

  getTodos() {
    console.log(this.state);
    if (this.state == completed)
      return this.todos.filter(todo => {
        return todo.isCompleted === true;
      });
    else if (this.state == active)
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
