import React from "react";

const DetalleHistorialMesero = ({ detalle }) => {
    console.log('detalle',detalle) 
    return (
        <div className = "detallePedidoHistorico" >
            <table>
                <tbody>
                    {detalle.map(prod => (  
                        <tr key= {prod.id}>
                            <td className ="td1">{prod.contador +' '}</td>
                            <td className ="td2">{prod.producto + ' '}</td>
                            <td className ="td3">{'S/ ' +prod.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default DetalleHistorialMesero;
