function TodoItems(props){

    return(
      <li>
        <span>{props.complete}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  
  }

  export {TodoItems};