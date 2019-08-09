import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class AddTodo extends Component {
  @observable input = "";
  handleChnage = e => {
    this.input = e.target.value;
  };
  submit = () => {
    this.props.onAddTodo(this.input);
    this.input = "";
  };

  render() {
    return (
      <div>
        <input
          value={this.input}
          data-testid="user-input"
          onChange={this.handleChnage}
        />
        <button data-testid="add-todo" onClick={this.submit}>
          AddTodo
        </button>
      </div>
    );
  }
}
export default AddTodo;
