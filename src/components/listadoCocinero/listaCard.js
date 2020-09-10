import React, { useEffect, useState, Fragment } from "react";
import DetalleCard from "./detallesCard";
import {productoPreparado} from '../../firebase/firestore'

const ListaCard = ({ pedidos }) => {
  const listaPedidos = pedidos;
  return (
      <Fragment>
          {listaPedidos.map((pedido, key) => (
              <section key={pedido.numero.toString()}> 
                  <section>
                      <section>N° {key+1} MODIFICAR</section>
                      <section>N° de Mesa: {pedido.mesa}</section>
                      <DetalleCard detalle={pedido.detalle} idPedido={pedido.id}/>
                  </section>
                  <button onClick={() => {productoPreparado(pedido.id)}}>PEDIDO TERMINADO</button>
              </section>
          ))}
      </Fragment>
  );
};

export default ListaCard;