import TodoStore from "../../TodoStore/index";
import { italic } from "ansi-colors";
describe(" testing the todo model", () => {
  it(" should test todo model update completion state", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.todos[0].updateCompletionState();
    expect(todoStore.todos[0].isCompleted).toBe(true);
  });

  it("should test todomodel description updated or not", () => {
    const todo = "wheter todo is updated or not";
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.todos[0].updateTodoDescription(todo);
    expect(todoStore.todos[0].description).toBe(todo);
  });

  it("should test on remove todo in todo model", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    todoStore.addTodo("second Todo");
    todoStore.todos[0].removeTodo();
    expect(todoStore.todos.length).toBe(1);
    expect(todoStore.todos[0].description).toBe("second Todo");
  });
});
