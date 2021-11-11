

import React, { useState, useEffect } from 'react'
import Card from './Card'
const Coleccion = ({categorias}) => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        peticion();
    });
    const peticion = async () => {
        const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2`;
        //const URL = 'https://api.giphy.com/v1/gifs/trending?q=Goku&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2'
        const respuesta = await fetch(URL);
        const { data } = await respuesta.json();
        const imagenes = data.map(imagen => {
            return {
                id: imagen.id,
                title: imagen.title,
                url: imagen.images?.downsized_medium.url
            }
        });        
        console.log(imagenes);
        setDatos(imagenes);
    }
    //peticion();
    return (
        <div>
            <h1>Imágenes</h1>
            <ol>
            {
                    datos.map(({id, title}) => {
                        return <li key={id} >{ title }</li>
                    })
            }
            </ol>
            {
                datos.map(({id, title, url}) => {
                    return <Card 
                    key={id} 
                    title={title} 
                    url={url} 
                    />
                })
            }
        </div>
    )
}
export default Coleccion