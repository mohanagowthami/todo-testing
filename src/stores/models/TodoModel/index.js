import { observable, action } from "mobx";

class TodoModel {
  id;

  @observable isCompleted;
  @observable description;
  constructor(todo) {
    this.id = todo.id;
    this.description = todo.description;
    this.isCompleted = todo.isCompleted;
  }
  @action updateCompletionState() {
    this.isCompleted = !this.isCompleted;
  }
  @action updateTodoDescription(description) {
    this.description = description;
  }
}
export default TodoModel;
