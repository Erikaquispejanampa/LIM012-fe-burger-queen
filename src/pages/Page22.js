import React from 'react'
import Cabecera from '../components/cabeceraMesero'
// import Producto from '../components/contenedorProducto'
import Show from '../components/show'
import './Page2.css'

class Page2 extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            counter: 1,
            tipoProducto: 'desayuno',
            nombreCli: '',
            numeroMesa: '',            
            pedido: {
                    nombre: '',
                    cantidad: 1,
                    precio: 0
            },
            precioTotal: 0
        }
    }
    render(){
        const onIncrementClick = () => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }
        const onDecrementClick = () => {
            this.setState({
              counter: this.state.counter - 1,
            });
          }
        const tipoDesayuno = () => {
            this.setState({
                tipoProducto: 'desayuno',
            })
        }
        const tipoAlmuerzo = () => {
            this.setState({
                tipoProducto: 'almuerzo',
            })            
        }
        const tipoBebida = () => {
            this.setState({
                tipoProducto: 'bebida',
            })            
        }   
        const obtenerPedido = () => {
            // this.setState({
            //     pedido: this.state.Menu,
            // })
            console.log(this.state)
        } 
        return (
            <React.Fragment>
                <Cabecera/>
                <div className='contenedorCuerpo'>
                    <div className='contenedorPedido'>
                        <section className='descripcionPedido'>
                            <div className='titulo'><p>ORDEN DE PEDIDO</p></div>
                            <form className="formulario">
                                N° de mesa:<input type="text" className="nroMesa"/><br/>
                                Nombre del cliente:<input type="text" className="nombreCliente:"/>
                            </form>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <button className='add-button' type='button' onClick={onIncrementClick}>+</button>
                                                <p>{this.state.counter}</p>
                                                <button className='add-button' type='button' onClick={onDecrementClick}>-</button>
                                            </td>
                                            <td>Nombre</td>
                                            <td>precio</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>Total:</strong></p>
                        </section>
                        <button className='btnEnviar'>ENVIAR</button>
                        <button className='btnCancelar'>CANCELAR</button>
                    </div>
                    <div className='productos'>
                        <section className='selectorMenu'>
                            <button className='btnMenu' onClick={tipoDesayuno}>DESAYUNO</button>
                            <button className='btnMenu' onClick={tipoAlmuerzo}>ALMUERZO Y CENA</button>
                            <button className='btnMenu' onClick={tipoBebida}>BEBIDAS</button>
                        </section>
                        <section>
                            <Show tipoDeProducto={this.state.tipoProducto} onClick={obtenerPedido}/>
                        </section>
                    </div>
                </div>
            </React.Fragment>
        )
    }
 }

export default Page2