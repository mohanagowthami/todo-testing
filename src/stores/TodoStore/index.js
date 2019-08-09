import { observable, computed } from "mobx";
import TodoModel from "../models/TodoModel/index";
import { all, active, completed } from "../../components/constants.js";
class TodoStore {
  count = 0;
  @observable todos = [];
  @observable todoSelectedType = all;
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
    this.todoSelectedType = value;
    console.log(this.todoSelectedType);
  }

  getTodos() {
    console.log(this.todoSelectedType);
    if (this.todoSelectedType == completed)
      return this.todos.filter(todo => {
        return todo.isCompleted === true;
      });
    else if (this.todoSelectedType == active)
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
