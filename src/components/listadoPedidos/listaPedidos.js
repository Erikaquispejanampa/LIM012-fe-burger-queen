import React, { useEffect, useState, Fragment } from "react";
import DetallePedido from "./detallePedido";
import {productoServido} from '../../firebase/firestore'
import './listaPedidos.css'

const ListaPedidos = ({ pedidos }) => {
  const listaPedidos = pedidos;
  return (
      <Fragment>
          {listaPedidos.map((pedido) => (
              <section key={pedido.numero.toString()} className='tarjetaEstado'> 
                  <section>
                      <section>N° {pedido.numero}</section>
                      <section>N° de Mesa: {pedido.mesa}</section>
                      <DetallePedido detalle={pedido.detalle} idPedido={pedido.id} />
                  </section>
                  <button onClick={() => {productoServido(pedido.id)}}>ENTREGADO</button>
              </section>
          ))}
      </Fragment>
  );
};

export default ListaPedidos;