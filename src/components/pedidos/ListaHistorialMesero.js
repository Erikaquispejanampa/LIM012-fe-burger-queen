import React, { Fragment } from "react";
import DetalleHistorialMesero from "./DetalleHistorialMesero";

const ListaHistorialMesero = ({ pedidos }) => {
    return (
    <Fragment>
        {pedidos.map((pedido, key) => (
            <div key={key} className ="historicoListaCard">
                <div className="cardEstadoHistorico">
                    <div className='contenedorDetallesHistorial'>
                        <section>N° de Pedido: {pedido.numero}</section>
                        <section>N° de Mesa: {pedido.mesa}</section>
                        <section>Nombre: {pedido.nombre}</section>
                    </div>
                    <DetalleHistorialMesero detalle={pedido.detalle}/>
                    <div className ="precioTotal">TOTAL: {'          '+' S/'+ pedido.preciototal}</div>                  
                </div> 
            </div>
        ))}
    </Fragment>
  );
};

export default ListaHistorialMesero ;
