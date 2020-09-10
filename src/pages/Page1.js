import React from 'react'
import Botones from '../components/botones'
import logo from '../images/logoBG.png'
import './stylesPages/Page1.scss'

const Pages1 = () => {
    return (
        <div className='contenedor'>
            <div className='contenedorImagen'>
                <img className='logoPage1' src = {logo} alt="Logo Burger"/>
            </div>
            <div className='contenedorBotones'>
                <Botones tituloBonton='MESERO' referencia='/mesero/RealizarPedido'/>
                <Botones tituloBonton='COCINERO' referencia='/cocinero/EstadoCocinero'/>  
            </div>              
        </div>
    )
}

export default Pages1;