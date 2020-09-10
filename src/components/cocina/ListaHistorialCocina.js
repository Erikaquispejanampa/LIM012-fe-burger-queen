import React, { Fragment } from "react";
import DetalleHistorialCocina from "./DetalleHitorialCocina";

const formatoFecha = (time) => {
  let date = new Date(time);
  return date.toLocaleString();
};

const intervaloTiempo = (date1, date2) => {
  // Convert both dates to milliseconds
  let date1_ms = date1.getTime();
  let date2_ms = date2.getTime();
  // Calculate the difference in milliseconds
  let difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms / 1000;
  let seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  let minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  let hours = Math.floor(difference_ms % 24);

  return hours + " h " + minutes + " m " + seconds + ' s';
};

const ListaHistorialCocina = ({ pedidos }) => {
    console.log("pedidos", pedidos);
    return (
        <Fragment>
            {pedidos.map((pedido) => (
                <div key={pedido.numero.toString()} className="historicoListaCard">
                    <div className="cardEstadoHistorico">
                        <div className="contenedorDetallesHistorial">
                            <label>N° de Pedido: {pedido.numero}</label>
                            <label>HORA INICIO: {formatoFecha(pedido.fechaini.toDate())}</label>
                            <label>HORA FIN: {formatoFecha(pedido.fechafin.toDate())}</label>
                            <label>
                                Duración:{" "}
                                {intervaloTiempo(
                                    pedido.fechaini.toDate(),
                                    pedido.fechafin.toDate()
                                )}{" "}
                            </label>
                        </div>
                        <DetalleHistorialCocina detalle={pedido.detalle}/>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default ListaHistorialCocina;
