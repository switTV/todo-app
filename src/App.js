import React from "react";

// JS -----------------------------------------------
import {TodoCounter} from "./jsx/TodoCounter";
import {TodoSearch} from "./jsx/TodoSearch";
import {TodoList} from "./jsx/TodoList";
import {TodoItem} from "./jsx/TodoItem";
import {CreateTodoButton} from "./jsx/CreateTodoButton";

// CSS ----------------------------------------------
import "./TodoCounter.css" ;
import "./TodoItem.css" ;
import "./TodoList.css" ;
import "./TodoSearch.css" ;
import "./CreateTodoButton.css" ;
import "./App.css" ;

const todos = [
  {
    text: "hacer la tarea 1°",
    completed: true,
  },
  {
    text: "hacer la tarea 2°",
    completed: false,
  },
  {
    text: "hacer la tarea 3°",
    completed: false,
  },
  {
    text: "hacer la tarea 3°",
    completed: false,
  },
  {
    text: "HOLALALALALALALAL",
    completed: false,
  },
  
]

function App() {
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key = {todo.text} text = {todo.text} completed = {todo.completed}></TodoItem>  
        ))
        }
      </TodoList>

        <CreateTodoButton/>

    </React.Fragment>
  );
}


export default App;
