import React, { useEffect, useState } from 'react';
import Cabecera from '../components/cabeceraCocinero';
import {obtenerCocinaHistorico} from '../firebase/firestore';
import ListaHistorialMesero from '../components/cocina/ListaHistorialCocina';
import './stylesPages/Page4.scss';

const Page6 =()=> {
    const [dataPedidos, setdataPedidos] = useState([]);
    useEffect(() => {
        obtenerCocinaHistorico((data)=> {
            console.log(data);
            setdataPedidos(data);
        });   
    }, []); 
    return (
        <div className ="contenedorHistorialMesero">
            <Cabecera/>              
            <div className='contenedorPedidosMesero'>
                <ListaHistorialMesero pedidos={dataPedidos}/>
            </div>
        </div>
    ) 
}

export default Page6;