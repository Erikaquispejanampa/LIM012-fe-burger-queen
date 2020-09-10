import React from "react";

const DetalleHistorialCocina = ({ detalle }) => {
  console.log(detalle);
  return (
    <div className="detallePedidoHistorico">
        <table>
            <tbody>
                {detalle.map((prod) => (
                    <tr key= {prod.id}>
                        <td className ="td1">{prod.contador +' '}</td>
                        <td className ="td2">{prod.producto + ' '}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};
export default DetalleHistorialCocina;
