import React, { useEffect, useState, Fragment } from "react";
import { actualizarEstadoServido} from '../../firebase/firestore'

const DetallePedido = ({ detalle, idPedido , esHistorico }) => {
  return (
    <Fragment>
      <div>
      <div>
        <div primary="Producto"/>
        {esHistorico =='false'  &&
        <div primary="Preparado" />
        }
        { esHistorico =='false'  &&
          <div primary="Servido"/>
        }
      </div>


        {detalle.map(prod => (
          <div key={prod.id.toString()}>
            
            <div primary={prod.producto}/>

            { esHistorico =='false'  &&
              <input type='Checkbox' checked = {prod.flagcocina}  id = {prod.id} disabled={true}  />

            }

            { esHistorico =='false'   &&
                <input type='Checkbox' checked = {prod.flagservido} id = {prod.id}  disabled = { esHistorico == 'true'   }  onClick  = { () =>  actualizarEstadoServido(idPedido,prod.id)  }/>
            }
            
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default DetallePedido;
