import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { AccessAlarm, FilterBAndWRounded } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import DetallePedido from "./DetallePedido";

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

const ListaPedidos = ({ pedidos, esCocina }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container item xs={12} spacing={1}>
        <Grid container className={classes.grids} item xs={12} spacing={3}>
          {pedidos.map((pedido) => (
            <Card key={pedido.numero.toString()} className={classes.root}>
             
            <CardContent >
                <div>Nª {pedido.numero}</div>
                <div>Nª de Mesa: {pedido.mesa}</div>
                <DetallePedido detalle={pedido.detalle} esCocina={esCocina} idPedido = { pedido.id} />
              </CardContent>

              { esCocina =='true' &&
              <CardHeader className={classes.CardEstado}
                title= {pedido.flagterminadococina ? "PEDIDO TERMINADO":"PEDIDO PENDIENTE" }
              />
              }

              { esCocina  =='false'  &&
                <CardHeader className={classes.CardEstado}
                  title= {pedido.flagentregadomesero ? "ENTREGADO":"PENDIENTE DE ENTREGAR" }
                />
                }

            </Card>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ListaPedidos;
