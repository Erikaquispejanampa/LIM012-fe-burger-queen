import React from 'react'
import Botones from '../components/botones'
import logo from '../images/logoBG.png'
import './Page1.css'

class Pages1 extends React.Component {
    render(){
        return (
            <div className='contenedor'>
                <div className='contenedorImagen'>
                    <img className='logoPage1' src = {logo} alt="Logo Burger"/>
                </div>
                <div className='contenedorBotones'>
                    <Botones tituloBonton='MESERO' referencia='/mesero/RealizarPedido'/>
                    <Botones tituloBonton='COCINERO' referencia='/cocinero/OrdenesDePedido'/>  
                </div>              
            </div>
        )
    }
 }

export default Pages1