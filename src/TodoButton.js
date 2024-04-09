import './TodoButton.css'
function TodoButton(){
    return(
        <button className="add-button" 
        onClick={
            (event)=> {
                console.log('has hecho click')
                console.log(event)
                console.log(event.target)
            }
            
        }
        >+</button>
    );
}

export {TodoButton};