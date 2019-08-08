import AddTodo from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
afterEach(cleanup);
const myMock = jest.fn();
describe(" testing add todo component", () => {
  const { getByTestId } = render(<AddTodo onAddTodo={myMock} />);
  it("should test add todo call back", () => {
    const enterTodo = "today todos";
    fireEvent.change(getByTestId("user-input"), {
      target: { value: enterTodo }
    });
    fireEvent.click(getByTestId("add-todo"));
    expect(myMock).toHaveBeenCalledWith(enterTodo);
  });
});
