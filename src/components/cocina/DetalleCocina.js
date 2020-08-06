import React, { useEffect, useState, Fragment } from "react";
import {actualizarEstadoCocina} from '../../firebase/firestore'

const DetalleCocina = ({ detalle, idPedido , esHistorico }) => {
console.log(detalle);
  return (
      <div>
        {detalle.map(prod => (
          <section key={prod.id.toString()}>
            { esHistorico =='false'  &&
              <input type='Checkbox'   checked = {prod.flagcocina}  id = {prod.id} disabled = {   esHistorico == 'true'     }  onClick  = { () =>  actualizarEstadoCocina(idPedido,prod.id)  } />
            }
          </section>
        ))}
      </div>
  );
};
export default DetalleCocina;
