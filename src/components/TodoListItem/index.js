import React, { Component } from "react";
import { observable } from "mobx";

export default class TodoListItem extends Component {
  @observable editState = false;
  @observable input = this.props.todo.description;
  submit = () => {
    this.props.todo.updateCompletionState();
  };
  todoEdit = () => {
    this.editState = true;
  };
  todoUpdate = () => {
    this.props.todo.updateTodoDescription(this.input);
  };
  handleChange = e => {
    this.input = e.target.value;
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.submit} data-testid="completed" />

        <input
          type="text"
          onChange={this.handleChange}
          data-testid="user-edit-input"
        />

        <button onClick={this.todoEdit} data-testid="edit">
          edit
        </button>
        <button onClick={this.todoUpdate} data-testid="update">
          update
        </button>
      </div>
    );
  }
}
