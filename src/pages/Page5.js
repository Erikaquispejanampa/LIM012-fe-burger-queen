import React from 'react'
import Cabecera from '../components/cabeceraCocinero'
import AppCheck from '../components/AppCheck'
 import {obtenerPedidosTodos} from '../firebase-controller/firestore-controller'

class Page4 extends React.Component {
   
    

    render(){

        obtenerPedidosTodos((data)=> {
            console.log(data)
        });
        return (
            <div>
                <div><Cabecera/></div>
                <div>
                <AppCheck/>
                </div>
            </div>
        )
    }
 }

export default Page4