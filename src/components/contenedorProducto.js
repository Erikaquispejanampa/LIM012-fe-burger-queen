import React from 'react';
import './styles/contenedorProducto.css';

const Producto = ({ ImageProducto, nombreProducto, precioProducto, idProducto, click }) => {
    return (
        <div className='contenedorProductoUno'>
            <div className='contenedorComida'>
                <img className='imagenProducto' src={ImageProducto} alt={nombreProducto}/>
            </div>
            <div className='contenedorNombre'>
                <p className='nombre'>{nombreProducto}</p>
            </div>
            <button className='contenedorPrecio' id={idProducto} onClick={click}>
                S/ {precioProducto}
            </button>
        </div>
    )
}

export default Producto;