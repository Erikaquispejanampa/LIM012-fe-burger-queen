import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraMesero'
import {obtenerPedidosMesero} from '../firebase-controller/firestore-controller'
import ListaPedidos from '../components/pedidos/ListaPedidos'

const Page3 =()=> {

    const [dataPedidos, setdataPedidos] = useState([]);
    
    useEffect(() => {
        obtenerPedidosMesero((data)=> {
        console.log(data);
        setdataPedidos(data);
      });  
       
    }, []); 

    return (
            <Fragment>
            <Cabecera/>              
            <ListaPedidos pedidos={dataPedidos}  esCocina = 'false'/>
          </Fragment>
    )
    
 }

export default Page3