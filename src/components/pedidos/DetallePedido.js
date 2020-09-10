import React, { useEffect, useState, Fragment } from "react";
import { actualizarEstadoServido} from '../../firebase/firestore'
import './DetallePedido.scss'

const DetallePedido = ({ detalle, idPedido , esHistorico }) => {
  return (
    <div className='detallesEstadoCocina'>
        <table className='tbMesero'>
              <tbody>
                  <tr className='contenedorTitulos'>
                    <th></th>
                    <th></th>
                    <th className='titulosTabla'>PREPARADO</th>
                    <th className='titulosTabla'>SERVIDO</th>
                  </tr>
                  {detalle.map(prod => (
                      <tr key={prod.id.toString()} className='descripcionTabla'>
                          <td>{prod.contador}</td>
                          <td>{prod.producto}</td>
                          <td className='checks'><input type='Checkbox' checked={prod.flagcocina} className='checkCocinero controlChecks' id={prod.id}/></td>
                          <td className='checks'><input type='Checkbox' checked={prod.flagservido} className='controlChecks' id={prod.id} disabled={esHistorico == 'true'}  onClick={() => {
                                if(prod.flagcocina === true)
                                actualizarEstadoServido(idPedido,prod.id);
                              }}/>
                          </td>
                      </tr>
                  ))}
              </tbody>
        </table>
    </div>
  );
};
export default DetallePedido;
{/*
<div>
  {esHistorico =='false'  &&
    <div primary="Servido"/>
  }
</div> */}