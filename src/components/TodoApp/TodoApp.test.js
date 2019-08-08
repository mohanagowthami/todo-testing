import TodoApp from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoStore from "../../stores/TodoStore/index";

afterEach(cleanup);
describe("testing the todoApp", () => {
  it(" should test  todolistItem", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("todo test2");
    todoStore.addTodo("todo test3");
    const { getAllByRole } = render(<TodoApp todoStore={todoStore} />);
    const todosItemList = getAllByRole("todo");
    expect(todosItemList.length).toBe(todoStore.todos.length);
  });

  it("should test callbackfun adding todo in todo store", () => {
    const todoStore = new TodoStore();
    const { getByTestId } = render(<TodoApp todoStore={todoStore} />);
    const enterTodo = "todo test1";
    fireEvent.change(getByTestId("user-input"), {
      target: { value: enterTodo }
    });
    fireEvent.click(getByTestId("add-todo"));
    expect(todoStore.todos[0].description).toBe(enterTodo);
  });
});
