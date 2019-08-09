import React, { Component } from "react";
//import { todoStore } from "../../stores/index";
import { observer } from "mobx-react";
import AddTodo from "../AddTodo/index";
import TodoList from "../TodoList/index";
import TodoStateSelection from "../TodoStateSelection";
@observer
class TodoApp extends Component {
  onAddTodo = todoDescription => {
    this.props.todoStore.addTodo(todoDescription);
  };
  onStateUpdate = type => {
    this.props.todoStore.updateSelectedTodoState(type);
  };
  render() {
    const todos = this.props.todoStore.filteredTodos;
    return (
      <div>
        <AddTodo onAddTodo={this.onAddTodo} />
        <TodoList todos={todos} />
        <TodoStateSelection onStateUpdate={this.onStateUpdate} />
      </div>
    );
  }
}
export default TodoApp;
