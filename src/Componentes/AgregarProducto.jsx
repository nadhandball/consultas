

import React, { useState } from 'react';
import { PropTypes } from  'prop-types';

function AgregarProducto({setCategorias}) {


    const [input, setInput] = useState();

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim().length >= 2){
            //setCategorias(cat => [input, ...cat]);
            setCategorias(input);
            console.log(input);
            setInput('');
        }       
    }

    return(
        <div>

            <hr></hr>
            <h1>Agregar Productos</h1>

            <form onSubmit={handleSubmit} >
                 <input 
                      type="text" 
                      value= {input}
                      onChange={handleChange} 
                 />
            </form>
        <div className="row justify-content-center">
        <button 
             //onClick={handleAgregar} 
             type="button" 
             className="btn btn-success w-50">
                  Agregar Productos
         </button>
         </div>

        <hr></hr>

        </div>
    )
}

AgregarProducto.propTypes = {
    setCategorias: PropTypes.func.isRequired

}

export default AgregarProducto;