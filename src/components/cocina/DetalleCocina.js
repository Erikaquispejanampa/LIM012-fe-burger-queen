import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {actualizarEstadoCocina} from '../../firebase/firestore'


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
  grids: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: "blue",
  },
  title1:{
    width:"300px",
  },
  title2:{
    width:"80px",
  },
});

const DetalleCocina = ({ detalle, idPedido , esHistorico }) => {
  const classes = useStyles();
console.log(detalle);
  return (
    <Fragment>
      <List >
        <ListItem>
          <ListItemText primary="Producto" className={classes.title1} />
        
          {esHistorico =='false'  &&
            <ListItemText primary="Preparado" className={classes.title2} />
          }
        
        </ListItem>


        {detalle.map(prod => (
          <ListItem key={prod.id.toString()}>
            
            <ListItemText primary={prod.producto} className={classes.title1} />

            { esHistorico =='false'  &&
              <Checkbox   checked = {prod.flagcocina}  id = {prod.id} className={classes.title2}  disabled = {   esHistorico == 'true'     }  onClick  = { () =>  actualizarEstadoCocina(idPedido,prod.id)  } />

            }
            
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};
export default DetalleCocina;
