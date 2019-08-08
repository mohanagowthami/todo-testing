import TodoStore from "./index";
const todoStore = new TodoStore();
describe(" todostore test suit", () => {
  it(" should test add todo function", () => {
    todoStore.addTodo("complete todo tdd task throughly");
    expect(todoStore.todos.length).toBe(1);
  });
});
