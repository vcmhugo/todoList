
import './TodoCounter.css' 

function TodoCounter({total,complete}){

    return(
      complete===total ? <h1>Has completado todos los tofos</h1>
      : <h1>Has completado {complete} de {total} todos</h1>
    );
  
  }

  export {TodoCounter};