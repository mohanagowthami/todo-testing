import TodoStateSelection from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
describe("testing the todo state selection component", () => {
  afterEach(cleanup);
  const myMock = jest.fn();
  it("should test call back function with argument of selection state", () => {
    const { getByTestId } = render(<TodoStateSelection onSelection={myMock} />);
    fireEvent.click(getByTestId("completed"));
    expect(myMock).toHaveBeenCalledWith("completed");
  });
});
