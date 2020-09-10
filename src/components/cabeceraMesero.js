import React from 'react'
import './styles/cabeceraMesero.scss'
import logo from '../images/logoBG.png'
import { Link } from "react-router-dom";

const Cabecera = () => {
    return (
        <header>
            <div className='contenedorBtn'>
                <div className='btnHeader'><Link to="/mesero/RealizarPedido" className='links'>REALIZAR PEDIDO</Link></div>
                <div className='btnHeader'><Link to="/mesero/EstadoDePedido" className='links'>ESTADO DEL PEDIDO</Link></div>
                <div className='btnHeader'><Link to="/mesero/HistorialDePedido" className='links'>HISTORIAL DE PEDIDO</Link></div>
            </div>
            <div className='contenedorSaludo'>
                <p className='saludo'>Hola, mesero</p>
                <Link to="/" className='linkHome'><img className='logo' src ={logo} alt="Logo Burger"/></Link>
            </div>
        </header>
    )
}

export default Cabecera;