import React from 'react'
import './styles/ordenPedidos.scss'

const OrdenPedidos = ({idcontenedor, Increment, Decrement, counter, nombre, precio }) => {
    return (
        <tr>
            <td className='controladorContador'>
                <button id={idcontenedor} className='btnContador' type='button' onClick={Increment}>+</button>
                <strong>&nbsp;&nbsp;{counter}&nbsp;&nbsp;</strong>
                <button id={idcontenedor}  className='btnContador' type='button' onClick={Decrement}>-</button>
            </td>
            <td>{nombre}</td>
            <td className='contPrecio'>{precio}</td>
        </tr>
    );
}

export default OrdenPedidos;