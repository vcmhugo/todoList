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

  //console.log('Los usuraio buscan'+searchValue);

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  const searchsTodos = todos.filter((todo)=>{

    return todo.texto.toLowerCase().includes(searchValue.toLowerCase());

  });

  const completeTodo = (text)=>{
    const newTodos = [...todos];
    let todoindex = newTodos.findIndex((todo)=>todo.texto===text);
    newTodos[todoindex].completed = true;
    setTodos(newTodos);

  }

  const removeTodo = (text)=>{

    const newTodos = [...todos];
    let todoindex = newTodos.findIndex((todo)=>todo.texto===text);
    newTodos.splice(todoindex,1);
    setTodos(newTodos);

  }

  return (
    <>
      <TodoCounter complete={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoButton />

      <TodoList>
        {searchsTodos.map(todo=>(
          <TodoItems  
            key={todo.texto} 
            text={todo.texto} 
            complete={todo.completed}
            onComplete={()=>completeTodo(todo.texto)}
            onRemove={()=>removeTodo(todo.texto)}  
            />
        ))}
      </TodoList>

      
    </>
  );
}

export default App;
