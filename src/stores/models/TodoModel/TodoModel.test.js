import TodoStore from "../../TodoStore/index";
import { italic } from "ansi-colors";
describe(" testing the todo model", () => {
  it(" should test todo model update completion state", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.todos[0].updateCompletionState();
    expect(todoStore.todos[0].isCompleted).toBe(true);
  });

  it("it should test todomodel description", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.todos[0].updateTodoDescription("wheter todo is updated or not");
    expect(todoStore.todos[0].description).toBe(
      "wheter todo is updated or not"
    );
    console.log(todoStore.todos[0].description);
  });
});
