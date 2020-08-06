import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraCocinero';
import {obtenerCocinaHistorico} from '../firebase/firestore';
import ListaCocina from '../components/cocina/ListaCocina';

const Page6 =()=> {

    const [dataPedidos, setdataPedidos] = useState([]);
    
    useEffect(() => {
      obtenerCocinaHistorico((data)=> {
        console.log(data);
        setdataPedidos(data);
      });  
       
    }, []); 

    return (
            <Fragment>
            <Cabecera/>              
            <ListaCocina pedidos={dataPedidos}  esHistorico ='true'/>
          </Fragment>
    )
    
 }

export default Page6