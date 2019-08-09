import TodoStore from "./index";
describe(" todostore test suit", () => {
  it(" should test add todo function", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("complete todo tdd task throughly");
    expect(todoStore.todos.length).toBe(1);
  });

  it(" should test the selected state of todos whether they are selected or not", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.todos[0].updateCompletionState();
    todoStore.addTodo("daily todos");
    const selectedStateTodos = todoStore.todos.filter(todo => {
      return todo.isCompleted === false;
    });
    const updatedSelectedStateTodos = todoStore.updateSelectedTodoState(
      "active"
    );
    console.log(selectedStateTodos, "selectedStateTodos");
    console.log(updatedSelectedStateTodos, " updatedSelectedStateTodos");
    expect(selectedStateTodos).toStrictEqual(updatedSelectedStateTodos);
  });

  it("should test on clear completed test case", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.todos[0].updateCompletionState();
    todoStore.addTodo("daily todos");
    const clearCompletedTodosCalculated = todoStore.todos.filter(todo => {
      return todo.isCompleted === false;
    });
    todoStore.onClearCompleted();
    expect(clearCompletedTodosCalculated).toStrictEqual(todoStore.todos);
  });
});
