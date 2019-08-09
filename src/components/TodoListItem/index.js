import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
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
    this.editState = false;
  };
  handleChange = e => {
    this.input = e.target.value;
  };
  onRemove = () => {
    this.props.todo.removeTodo();
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.submit} data-testid="completed" />
        {this.editState ? (
          <input
            type="text"
            onChange={this.handleChange}
            data-testid="user-edit-input"
          />
        ) : null}

        <button onClick={this.todoEdit} data-testid="edit">
          edit
        </button>
        <button onClick={this.todoUpdate} data-testid="update">
          update
        </button>
        <button onClick={this.onRemove} data-testid="remove" />
      </div>
    );
  }
}
