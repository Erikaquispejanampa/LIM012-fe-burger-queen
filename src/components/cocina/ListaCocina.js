import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";


import DetalleCocina from "./DetalleCocina";

const useStyles = makeStyles({
  root: {
    //  minWidth: 275,
    // background: 'yellow',
    border: 8,
    borderColor: "black",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  CardContents: {
    // marginBottom: 12,
    background: "gray",
    // border: 4,
    // borderColor: 'black',
    // flex: 1
  },
  CardEstado: {
    // marginBottom: 12,
    background: "green",
    bottom:0,
//    position: "absolute",
    //width:"100%",
    // border: 4,
    // borderColor: 'black',
    // flex: 1
  },
  grids: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: "blue",
  },
});

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
  const classes = useStyles();
  console.log(esHistorico);
  return (
    <Fragment>
      <Grid container item xs={12} spacing={1}>
        <Grid container className={classes.grids} item xs={12} spacing={3}>
          {pedidos.map((pedido) => (
            <Card key={pedido.numero.toString()} className={classes.root}>

              { esHistorico  =='true'  &&
                <CardContent >
                  <div>Orden Nª {pedido.numero}</div>
                  <div>Nª de Mesa: {pedido.mesa}</div>
                  <div>Cliente: {pedido.cliente}</div>
                  <div>Inicio : {formatoFecha(pedido.fechaini.toDate())}</div>
                  <div>Fin: {formatoFecha(pedido.fechafin.toDate()) }</div>
                  <div>Tiempo: { intervaloTiempo(pedido.fechaini.toDate() , pedido.fechafin.toDate()) } </div>
                  
                  <DetalleCocina detalle={pedido.detalle}  idPedido = { pedido.id} esHistorico = {esHistorico} />
                </CardContent>
              }
              
              { esHistorico  == 'false'  &&
                <CardContent >
                  <div>Orden Nª {pedido.numero}</div>
                  <div>Nª de Mesa: {pedido.mesa}</div>
                  <DetalleCocina detalle={pedido.detalle} idPedido = { pedido.id} esHistorico = {esHistorico} />
                </CardContent>
              } 

              <CardHeader className={classes.CardEstado}
                title= {pedido.flagterminadococina ? "PEDIDO TERMINADO":"PEDIDO PENDIENTE" }
              />
              
            </Card>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ListaCocina;
