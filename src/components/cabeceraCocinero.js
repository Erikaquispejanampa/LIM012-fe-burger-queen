import React from 'react'
import './styles/cabeceraMesero.css'
import logo from '../images/logoBG.png'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

const Cabecera = () => {
    return (
        <header>
            <div className='contenedorBtn'>
                <div className='btnHeader'><Link to="/cocinero/OrdenesDePedido" className='links'>ESTADO DEL COCINERO</Link></div>
                <div className='btnHeader'><Link to="/cocinero/HistoricoCocina" className='links'>HISTORIAL DE COCINA</Link></div>
            </div>
            <div className='contenedorSaludo'>
                <p className='saludo'>Hola,cocinero</p>
                <Link to="/" className='linkHome'><img className='logo' src ={logo} alt="Logo Burger"/></Link>
            </div>
        </header>
    )
 }

export default Cabecera