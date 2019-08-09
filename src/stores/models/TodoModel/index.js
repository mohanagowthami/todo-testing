import { observable, action } from "mobx";

class TodoModel {
  id;

  @observable isCompleted;
  @observable description;
  constructor(todo, todoStore) {
    this.id = todo.id;
    this.description = todo.description;
    this.isCompleted = todo.isCompleted;
    this.todoStore = todoStore;
  }
  @action updateCompletionState() {
    this.isCompleted = !this.isCompleted;
  }
  @action updateTodoDescription(description) {
    this.description = description;
  }
  @action removeTodo() {
    this.todoStore.todos.remove(this);
  }
}
export default TodoModel;
