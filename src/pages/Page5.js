import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraCocinero'
import {obtenerPedidosCocina} from '../firebase/firestore'
import ListaCocina from '../components/cocina/ListaCocina'

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
            <ListaCocina pedidos={dataPedidos}   esHistorico = 'false'/>
          </Fragment>
        )    

   
 }

export default Page5