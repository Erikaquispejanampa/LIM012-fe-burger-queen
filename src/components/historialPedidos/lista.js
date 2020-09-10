import React, { Fragment } from "react";
import DetalleHistorial from "./detalles";

const ListaHistorial = ({pedidos}) => {
  const listaPedidos = pedidos;
  return (
  <Fragment>
      {listaPedidos.map((pedido) => (
          <section key={pedido.numero.toString()}> 
              <section>
                  <section>N° de pedido: {pedido.numero}</section>
                  <section>N° de mesa: {pedido.mesa}</section>
                  <section>Cliente: {pedido.cliente}</section>
                  <DetalleHistorial detalle={pedido.detalle} idPedido={ pedido.id} />
                  <section>Tiempode elaborarión: 10min</section>
                  <section><strong>TOTAL: S/{pedido.preciototal}</strong></section>
              </section>
          </section>
      ))}
  </Fragment>
  );
};

export default ListaHistorial;