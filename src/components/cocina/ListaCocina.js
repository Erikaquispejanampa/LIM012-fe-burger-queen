import React, { useEffect, useState, Fragment } from "react";
import DetalleCocina from "./DetalleCocina";



const formatoFecha = (time) => {
  
  let date = new Date(time);
  // let dia = date.getDay();
  // let mes =  date.getMonth() + 1;
  // let anio = date.getFullYear();

  // console.log(date);
  // console.log(dia);
  // console.log(mes);
  // console.log(anio);
  // console.log(date.toLocaleString())
  
  return date.toLocaleString();
}


const intervaloTiempo = (date1,date2) => {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);
  
  // return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
  return  hours + ' hours, ' + minutes + ' minutes ';
}




const ListaCocina = ({ pedidos, esHistorico }) => {
  console.log('pedidos',pedidos);
  return (
    <Fragment>
        <div>
          {pedidos.map((pedido) => (
            <section key={pedido.numero.toString()}>

              { esHistorico  =='true'  &&
                <section >
                  <div>Orden Nª {pedido.numero}</div>
                  <div>Nª de Mesa: {pedido.mesa}</div>
                  <div>Cliente: {pedido.cliente}</div>
                  <div>Inicio : {formatoFecha(pedido.fechaini.toDate())}</div>
                  <div>Fin: {formatoFecha(pedido.fechafin.toDate()) }</div>
                  <div>Tiempo: { intervaloTiempo(pedido.fechaini.toDate() , pedido.fechafin.toDate()) } </div>
                  
                  <DetalleCocina detalle={pedido.detalle}  idPedido = { pedido.id} esHistorico = {esHistorico} />
                </section>
              }
              
              { esHistorico  == 'false'  &&
                <section >
                  <div>Orden Nª {pedido.numero}</div>
                  <div>Nª de Mesa: {pedido.mesa}</div>
                  <DetalleCocina detalle={pedido.detalle} idPedido = { pedido.id} esHistorico = {esHistorico} />
                </section>
              } 

              <button
                title= {pedido.flagterminadococina ? "PEDIDO TERMINADO":"PEDIDO PENDIENTE" }
              ></button>
              
            </section>
          ))}
        </div>
    </Fragment>
  );
};

export default ListaCocina;
