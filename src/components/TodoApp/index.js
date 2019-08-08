import React, { Component } from "react";
//import { todoStore } from "../../stores/index";
import { observer } from "mobx-react";
import AddTodo from "../AddTodo/index";
import TodoList from "../TodoList/index";
@observer
export default class TodoApp extends Component {
  onAddTodo = todoDescription => {
    this.props.todoStore.addTodo(todoDescription);
  };
  render() {
    return (
      <div>
        <AddTodo onAddTodo={this.onAddTodo} />
        <TodoList todos={this.props.todoStore.todos} />
      </div>
    );
  }
}
