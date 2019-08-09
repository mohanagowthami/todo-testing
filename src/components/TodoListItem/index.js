import React, { Component } from "react";

export default class TodoListItem extends Component {
  submit = () => {
    this.props.todo.updateCompletionState();
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.submit} data-testid="completed" />
      </div>
    );
  }
}
