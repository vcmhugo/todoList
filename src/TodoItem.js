import './TodoItems.css';

function TodoItems(props){

    return(
      <li className="todo-item">
      <span
        onClick={props.onComplete}
        className={props.complete ? 'complete' : 'incomplete'}>
        {props.complete ? '✔' : '◻'}
      </span>
      <p>{props.text}</p>
      <span onClick={props.onRemove} className="delete-btn">X</span>
    </li>
    );
  
  }

  export {TodoItems};