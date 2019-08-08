import AddTodo from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { italic } from "ansi-colors";
afterEach(cleanup);
const myMock = jest.fn();
describe(" testing add todo component", () => {
  const { getByTestId } = render(<AddTodo onAddTodo={myMock} />);
  it("should test add todo call back", () => {
    fireEvent.change(getByTestId("user-input"), {
      target: { value: "today todos" }
    });
    fireEvent.click(getByTestId("add-todo"));
    expect(myMock).toHaveBeenCalledWith("today todos");
  });
});
