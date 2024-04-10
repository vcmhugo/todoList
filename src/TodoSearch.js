import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){

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