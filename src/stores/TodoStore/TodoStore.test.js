import TodoStore from "./index";
describe(" todostore test suit", () => {
  it(" should test add todo function", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("complete todo tdd task throughly");
    expect(todoStore.todos.length).toBe(1);
  });

  it(" should test the selected state of todos whether they are selected or not", () => {
    const todoStore = new TodoStore();
    const selectedStateTodos = todoStore.todos.filter(todo => {
      return todo.isCompleted === true;
    });
    updatedSelectedStateTodos = todoStore.updateSelectedTodoState("completed");
    expected(JSON.stringify(selectedStateTodos)).toBe(
      updatedSelectedStateTodos
    );
  });
});
