import React, {Fragment } from "react";

const DetalleHistorial = ({detalle}) => {
    const dataDetalles = detalle;
    return (
        <Fragment>
            {dataDetalles.map(prod => (
                <div key={prod.id.toString()}>
                    <p>cantidad</p>
                    <p>{prod.producto}</p>
                    <p>S/{prod.precio}</p>
                </div>
            ))}
        </Fragment>
    );
};

export default DetalleHistorial;