import React from 'react';
import './TodoSearch.css';

function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState('');

    console.log('Los usuraio buscan'+searchValue);

    return(
        <input className="txtBuscar" placeholder="buscar" value={searchValue}
        onChange={(event)=>{
            let texto = event.target.value;
            setSearchValue(texto)
        }}
        ></input>
    );


}


export {TodoSearch};