import React, { Component } from "react";
import { all, active, completed } from "../constants.js";

class TodoStateSelection extends Component {
  submit = e => {
    this.props.onStateUpdate(e.target.value);
  };

  render() {
    return (
      <div>
        <button value={completed} onClick={this.submit} data-testid={completed}>
          completed
        </button>
        <button value={all} onClick={this.submit} data-testid={all}>
          all
        </button>
        <button value={active} onClick={this.submit} data-testid={active}>
          active
        </button>
        <button
          data-testid="onClearCompleted"
          onClick={this.props.onClearCompleted}
        >
          {" "}
          onClearCompleted
        </button>
      </div>
    );
  }
}

export default TodoStateSelection;
