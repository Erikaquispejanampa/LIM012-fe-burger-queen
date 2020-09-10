import React, { Fragment } from "react";
import DetallePedido from "./DetallePedido";
import {productoServido} from '../../firebase/firestore'
import './ListaPedidos.scss';

const ListaPedidos = ({ pedidos, esHistorico }) => {
    console.log(esHistorico);
    return (
        <div className='contenedorCards'>
            {pedidos.map((pedido, key) => (
                <section className='cardEstadoPedido' key={key}>
                    <section className='contenedorCardEstadoPedido'>
                      <center className='tituloNroOrden'><strong>Orden N° {pedido.numero}</strong></center>
                      <p className='tituloNroMesa'>N° de Mesa: {pedido.mesa}</p>
                      <DetallePedido detalle={pedido.detalle}  idPedido={pedido.id} esHistorico={esHistorico} />
                    </section>
                    <button className='btnEntregado' onClick={()=>{productoServido(pedido.id)}}>ENTREGADO</button>
                </section>
            ))}
        </div>
    );
};

export default ListaPedidos;