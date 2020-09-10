import React, {Fragment } from "react";
import {actualizarEstadoCocina} from '../../firebase/firestore'

const DetalleCard = ({detalle, idPedido }) => {
    const dataDetalles = detalle;
    return (
        <Fragment>
            {dataDetalles.map(prod => (
                <div key={prod.id.toString()}>
                    <section>cantidad</section>
                    <section><p>{prod.producto}</p></section>
                    <section>
                        <input type='checkbox' id={prod.id} value='' checked={prod.flagcocina} onClick={() => actualizarEstadoCocina(idPedido,prod.id) } /> 
                    </section>
                </div>
            ))}
        </Fragment>
    );
};

export default DetalleCard;