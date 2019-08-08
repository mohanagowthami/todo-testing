class TodoStore {
  todos = [];
  addTodo(description) {
    this.todos.push(description);
  }
}
export default TodoStore;
