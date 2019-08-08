import React, { Component } from "react";
import { todoStore } from "../../stores/index";
import { observer } from "mobx-react";
@observer
export default class TodoApp extends Component {
  updateTodos = () => {
    this.props.todoStore.addTodo(this.props.todoDescription);
  };
  render() {
    return <div>{this.updateTodos()}</div>;
  }
}
