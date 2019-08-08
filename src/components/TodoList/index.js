import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
export default class TodoList extends Component {
  array = [];
  renderDisplay = () => {
    for (let i = 0; i < this.props.todos.length; i++) {
      this.array.push(
        <div role="todo ">{this.props.todos[i].description}</div>
      );
    }
    return this.array;
  };

  render() {
    return <div>{this.renderDisplay()}</div>;
  }
}
