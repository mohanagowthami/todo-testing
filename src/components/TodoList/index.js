import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoListItem from "../TodoListItem/index.js";
@observer
class TodoList extends Component {
  renderDisplay = () => {
    let array = [];
    for (let i = 0; i < this.props.todos.length; i++) {
      array.push(
        <TodoListItem todo={this.props.todos[i]} key={this.props.todos[i].id} />
      );
    }
    return array;
  };

  render() {
    return <div>{this.renderDisplay()}</div>;
  }
}
export default TodoList;
