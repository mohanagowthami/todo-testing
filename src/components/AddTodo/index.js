import React, { Component } from "react";
import { observable } from "mobx";

export default class AddTodo extends Component {
  @observable input;
  handleChnage = e => {
    this.input = e.target.value;
  };
  submit = () => {
    this.props.onAddTodo(this.input);
  };

  render() {
    return (
      <div>
        <input data-testid="user-input" onChange={this.handleChnage} />
        <button data-testid="add-todo" onClick={this.submit}>
          AddTodo
        </button>
      </div>
    );
  }
}
