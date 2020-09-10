import React, { useEffect, useState } from 'react';
import Cabecera from '../components/cabeceraMesero';
import {obtenerPedidosHistorico} from '../firebase/firestore';
import ListaHistorialMesero from '../components/pedidos/ListaHistorialMesero';
import './stylesPages/Page4.scss';

const Page4 =()=> {
    const [dataPedidos, setdataPedidos] = useState([]);
    useEffect(() => {
        obtenerPedidosHistorico((data)=> {
        console.log(data);
        setdataPedidos(data);
        });  
    }, []); 
    return (
        <div className='contenedorHistorialMesero'>
            <Cabecera/>              
            <div className='contenedorPedidosMesero'>
                <ListaHistorialMesero pedidos={dataPedidos}/>
            </div>
        </div>
    )
}

export default Page4;