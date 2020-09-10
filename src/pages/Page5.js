import React, { useEffect, useState} from 'react';
import Cabecera from '../components/cabeceraCocinero'
import {obtenerPedidosCocina} from '../firebase/firestore'
import ListaCocina from '../components/cocina/ListaCocina'
import './stylesPages/Page5.scss'

const Page5 =()=> {
    const [dataPedidos, setdataPedidos] = useState([]);
    useEffect(() => {
      obtenerPedidosCocina((data)=> {
        console.log(data);
        setdataPedidos(data);
      });  
    }, []); 
    return (
      <div className='contenedorEstadoCocinero'>
        <Cabecera/>              
        <div className='contenedorListaCocinero'><ListaCocina pedidos={dataPedidos} esHistorico = 'false'/></div>
      </div>
    )
 }
export default Page5;