import './TodoItems.css';

function TodoItems(props){

    return(
      <li className="todo-item">
      <span className={props.complete ? 'complete' : 'incomplete'}>
        {props.complete ? '✔' : '◻'}
      </span>
      <p>{props.text}</p>
      <span className="delete-btn">X</span>
    </li>
    );
  
  }

  export {TodoItems};