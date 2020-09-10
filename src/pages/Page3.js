import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraMesero'
import {obtenerPedidosMesero} from '../firebase/firestore'
import ListaPedidos from '../components/pedidos/ListaPedidos'
import './stylesPages/Page3.scss'

const Page3 =()=> {

    const [dataPedidos, setdataPedidos] = useState([]);
    
    useEffect(() => {
        obtenerPedidosMesero((data)=> {
        console.log(data);
        setdataPedidos(data);
      });  
       
    }, []); 

    return (
      <div className='contenedorEstadoPedidos'>
        <Cabecera/>
        <div className='contenedorListaPedidos'><ListaPedidos pedidos={dataPedidos}  esHistorico = 'false'/>  </div>        
      </div>
    )
 }

export default Page3