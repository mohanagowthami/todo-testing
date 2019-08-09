import React from "react";
import TodoApp from "./components/TodoApp/index";
import { todoStore } from "./stores/index";
function App() {
  return (
    <div>
      <TodoApp todoStore={todoStore} />
    </div>
  );
}

export default App;
