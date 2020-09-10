import React from "react";
import DetalleCocina from "./DetalleCocina";
import {productoPreparado} from '../../firebase/firestore'
import './ListaCocina.scss'

const ListaCocina = ({ pedidos, esHistorico }) => {
  return (
        <div className='contenedorCardCocinero'>
          {pedidos.map((pedido) => (
            <section className='cardCocinero' key={pedido.numero.toString()}>
                <section >
                  <center className='tituloNroOrden'><strong>Orden N° {pedido.numero}</strong></center>
                  <DetalleCocina detalle={pedido.detalle} idPedido = { pedido.id} esHistorico = {esHistorico} />
                </section>
                <button className='btnPedidoTerminado' onClick={()=>{productoPreparado(pedido.id)}}>PEDIDO TERMINADO</button>
            </section>
          ))}
        </div>
  );
};

export default ListaCocina;