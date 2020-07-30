import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraCocinero'
import {obtenerPedidosCocina} from '../firebase-controller/firestore-controller'
import ListaPedidos from '../components/pedidos/ListaPedidos'

const Page5 =()=> {
   const [dataPedidos, setdataPedidos] = useState([]);
    
      useEffect(() => {
        obtenerPedidosCocina((data)=> {
          console.log(data);
          setdataPedidos(data);
        });  
         
      }, []); 
   

        return (
          <Fragment>
            <Cabecera/>              
            <ListaPedidos pedidos={dataPedidos}  esCocina = 'true'/>
          </Fragment>
        )    

   
 }

export default Page5