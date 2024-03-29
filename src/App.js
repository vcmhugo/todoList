import './app.css';

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from './TodoList';
import { TodoItems } from "./TodoItem";
import { TodoButton } from "./TodoButton";
import React from "react";

const defaultTodos = [
  {
  texto:"prueba uno",
  completed:false
  },
  {
    texto:"prueba dos",
    completed:true
  },
  {
    texto:"prueba tres",
    completed:false
  }
];

function App() {
  return (
    <>
      <TodoCounter complete={15} total={23}/>
      <TodoSearch />

      <TodoButton />

      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItems  
            key={todo.texto} 
            text={todo.texto} 
            complete={todo.completed}/>
        ))}
      </TodoList>

      
    </>
  );
}

export default App;
