import TodoApp from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoStore from "../../stores/TodoStore/index";
afterEach(cleanup);
const myMock = jest.fn();
describe(" testing the todoApp", () => {
  const todoStore = new TodoStore();
  const todoDescription = " some daily todo";
  it("should test callbackfun adding todo in todo store", () => {
    const obj = render(<TodoApp todoDescription={todoDescription} />);
    expect(todoStore.todos[0].description).toBe(todoDescription);
  });
});
