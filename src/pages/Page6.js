import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraCocinero'
import {obtenerPedidosHistorico} from '../firebase-controller/firestore-controller'
import ListaPedidos from '../components/pedidos/ListaPedidos'

const Page6 =()=> {

    const [dataPedidos, setdataPedidos] = useState([]);
    
    useEffect(() => {
        obtenerPedidosHistorico((data)=> {
        console.log(data);
        setdataPedidos(data);
      });  
       
    }, []); 

    return (
            <Fragment>
            <Cabecera/>              
            <ListaPedidos pedidos={dataPedidos}  esCocina = 'true' esHistorico ='true'/>
          </Fragment>
    )
    
 }

export default Page6