import TodolistItem from "../TodoListItem/index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoStore from "../../stores/TodoStore/index";

describe(" testing the todolistItem  component", () => {
  const todoStore = new TodoStore();

  afterEach(cleanup);
  it(" should test todo  update completion state", () => {
    todoStore.addTodo(" be focused");
    const { getByTestId } = render(<TodolistItem todo={todoStore.todos[0]} />);

    fireEvent.click(getByTestId("completed"));

    expect(todoStore.todos[0].isCompleted).toBe(true);
  });
});
