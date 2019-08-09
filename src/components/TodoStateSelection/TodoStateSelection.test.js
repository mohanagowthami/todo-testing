import TodoStateSelection from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { all, active, completed } from "../constants.js";

describe("testing the todo state selection component", () => {
  afterEach(cleanup);
  const myMock = jest.fn();
  it("should test call back function with argument of selection state", () => {
    const { getByTestId } = render(
      <TodoStateSelection onStateUpdate={myMock} onClearCompleted={myMock} />
    );
    fireEvent.click(getByTestId(active));
    expect(myMock).toHaveBeenCalledWith(active);
    fireEvent.click(getByTestId(completed));
    expect(myMock).toHaveBeenCalledWith(completed);

    fireEvent.click(getByTestId(all));
    expect(myMock).toHaveBeenCalledWith(all);
    fireEvent.click(getByTestId("onClearCompleted"));
    expect(myMock).toHaveBeenCalled();
  });
});
