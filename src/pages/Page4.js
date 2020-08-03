import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraMesero'
import {obtenerPedidosHistorico} from '../firebase-controller/firestore-controller'
import ListaPedidos from '../components/pedidos/ListaPedidos'

const Page4 =()=> {

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
            <ListaPedidos pedidos={dataPedidos}  esCocina = 'false' esHistorico ='true'/>
          </Fragment>
    )
    
 }

export default Page4