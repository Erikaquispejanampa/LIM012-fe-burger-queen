import React, { useEffect, useState, Fragment } from "react";
import {actualizarEstadoCocina} from '../../firebase/firestore'
import './DetalleCocina.scss'

const DetalleCocina = ({ detalle, idPedido , esHistorico }) => {
console.log(detalle);
  return (
    <div className='detallesEstadoPreparado'>
        <table className='tbMesero'>
            <tbody>
              {detalle.map(prod => (
                  <tr key={prod.id.toString()}>
                      <td>{prod.contador}</td>
                      <td>{prod.producto}</td>
                      { esHistorico =='false'  &&
                        <td className='checks'><input type='Checkbox' checked={prod.flagcocina} className='controlChecks' id={prod.id} disabled={esHistorico=='true'} onClick={()=>  actualizarEstadoCocina(idPedido,prod.id)} /></td>
                      }
                  </tr>
              ))}          
            </tbody>
        </table>      
    </div>
  );
};
export default DetalleCocina;