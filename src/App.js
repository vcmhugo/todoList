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
  completed:true
  },
  {
    texto:"prueba dos",
    completed:true
  },
  {
    texto:"prueba tres",
    completed:false
  },
  {
    texto:"prueba cuadro",
    completed:false
  }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuraio buscan'+searchValue);

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter complete={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

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
