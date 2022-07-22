import React from "react";
import {AppUI} from "../App/AppUI"


// const defaultTodos = [
//   {
//     text: "pasarme el cuphead",
//     completed: false,
//   },
//   {
//     text: "comprar el dark souls",
//     completed: false,
//   },
//   {
//     text: "levantarme temprano",
//     completed: false,
//   },
//   {
//     text: "terminar este to-do",
//     completed: false,
//   },
//   {
//     text: "pasarme el dragon de cuphead",
//     completed: false,
//   },
//   {
//     text: "comer verduras",
//     completed: false,
//   },
  
// ]
  
function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1")
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem("TODOS_V1", [])
    console.log(parsedTodos)
    parsedTodos = [];
  }
  else {
    parsedTodos = JSON.parse(localStorageTodos)
    console.log(localStorageTodos)
  }
  
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length 
  const totalTodos = todos.length

  let searchedTodos = [];

if (!searchValue.length >= 1){
  searchedTodos = todos
}

else{
  searchedTodos = todos.filter(todo => {
    const searchText = searchValue.toLowerCase()
    const todoText = todo.text.toLowerCase()

    return todoText.includes(searchText)
  })
}

const saveTodos = (newTodos) => {
  const stringifiedTodos = JSON.stringify(newTodos)
  localStorage.setItem("TODOS_V1" ,stringifiedTodos)
  setTodos(newTodos)
}

const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  
  const newTodos = [...todos]
  
  newTodos[todoIndex].completed = true
  saveTodos(newTodos)
}


const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
}


  return(
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}


export default App;
