
import React, { useState } from 'react';
import AgregarProducto from './AgregarProducto';
import Coleccion from './Coleccion';
//import { useState } from 'react';

function Productos() {

    //const [categorias, setCategorias] = useState([
        //'Gaseosas', 'Galletitas', 'Arroz', 'Azucar']);

        const [categorias, setCategorias] = useState([]);

        /*const handleAgregar = () => {
           // setCategorias([...categorias, ' Cervezas', 'Fideos']);
            
           setCategorias(['Cervezas', ...categorias]);

            //setCategorias(cat => [...cat, 'Cervezas']);
        }*/

    return (
        <>
         <h1>Productos</h1>
         <AgregarProducto
           setCategorias={setCategorias} 
        />

         <ol>
             {/* {
                categorias.map(categoria => {
                    return <li key={categoria}>{categoria}</li>
                })
             } */}

         </ol>

         {/*<button 
             onClick={handleAgregar} 
             type="button" 
             className="btn btn-secondary">
                  Agregar Productos
         </button>*/}

         <Coleccion categorias={categorias} />

        
        </>
    )
}

export default Productos;