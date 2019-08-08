import TodoStore from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
const todoStore = new TodoStore();
afterEach(cleanup);
describe(" todostore test suit", () => {
  it(" should test add todo function", () => {
    todoStore.addTodo("work properly");
    expect(todoStore.todos.length).toBe(1);
  });
});
