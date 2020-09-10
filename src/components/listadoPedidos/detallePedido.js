import React, {Fragment } from "react";
import {actualizarEstadoMesero} from '../../firebase/firestore'

const DetallePedido = ({ detalle, idPedido }) => {
    const dataDetalles = detalle;
    return (
        <Fragment>
            {dataDetalles.map(prod => (
                <div key={prod.id.toString()}>
                    <section><p>{prod.producto}</p></section>
                    <section>
                        <input type='checkbox' id={prod.id} value='' checked={prod.flagcocina}/>
                        <input  type='checkbox' id={prod.id} value='' checked={prod.flagservido} onClick={() =>  {
                            if(prod.flagcocina===true){
                                actualizarEstadoMesero(idPedido,prod.id)
                            }
                        } } />
                    </section>
                </div>
            ))}
        </Fragment>
    );
};

export default DetallePedido;