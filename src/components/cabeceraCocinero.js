import React from 'react'
import './styles/cabeceraMesero.scss'
import logo from '../images/logoBG.png'
import { Link } from "react-router-dom";

const Cabecera = () => {
    return (
        <header>
            <div className='contenedorBtn'>
                <div className='btnHeader btnHeaderCocinero'><Link to="/cocinero/EstadoCocinero" className='links'>LISTA DE PEDIDOS</Link></div>
                <div className='btnHeader btnHeaderCocinero'><Link to="/cocinero/HistorialDeCocinero" className='links'>HISTORIAL DE PEDIDOS</Link></div>
            </div>
            <div className='contenedorSaludo'>
                <p className='saludo'>Hola,cocinero</p>
                <Link to="/" className='linkHome'><img className='logo' src ={logo} alt="Logo Burger"/></Link>
            </div>
        </header>
    )
}

export default Cabecera;