import TodolistItem from "../TodoListItem/index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoStore from "../../stores/TodoStore/index";

describe(" testing the todolistItem  component", () => {
  afterEach(cleanup);
  it(" should test todo  update completion state", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    const { getByTestId } = render(<TodolistItem todo={todoStore.todos[0]} />);

    fireEvent.click(getByTestId("completed"));

    expect(todoStore.todos[0].isCompleted).toBe(true);
  });
  it(" should test the todo description update", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo(" be focused");
    const { getByTestId } = render(<TodolistItem todo={todoStore.todos[0]} />);
    fireEvent.click(getByTestId("edit"));
    fireEvent.change(getByTestId("user-edit-input"), {
      target: { value: "changed todo description" }
    });
    fireEvent.click(getByTestId("update"));
    expect(todoStore.todos[0].description).toBe("changed todo description");
  });
});
