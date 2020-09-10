import React, { useEffect, useState }from 'react';
import Cabecera from '../components/cabeceraMesero';
import MostrarMenu from '../components/MostrarMenu';
import {obtenerMenu,obtenerNumeroPedido,crearPedido} from '../firebase/firestore'
import './stylesPages/Page2.scss';
import OrdenPedidos from '../components/ordenPedidos';

const Page2 = () => {
    const [Menu, setMenu] = useState([]);
    useEffect(() => {
        obtenerMenu((data)=>{
            setMenu(data);
        })
    }, []);

    const [tipoProducto, settipoProducto] = useState('desayuno');
    const [nombreCli, setnombreCli] = useState('');
    const [numeroMesa, setnumeroMesa] = useState('');
    const [pedido, setpedido] = useState([]);
    const [precioTotal, setprecioTotal] = useState(0);

    const nombreChange = (e) => {
        setnombreCli(e.target.value);
    }
    const mesaChange = (e) => {
        setnumeroMesa(e.target.value);
    }

    const onIncrementClick = (event) => {
        const elemento = event.target.id;
        const sumandoContador =  pedido.map((dato) => {
            if(dato.id === elemento)
                dato.contador = dato.contador + 1;
            return dato;
            });
        const precioT = sumandoContador.map((dato) => {
            const total = dato.contador*dato.precio;
            return total;           
        })
        let PrecioTo = 0;
        for(let i = 0; i< precioT.length; i++){
            PrecioTo = PrecioTo + precioT[i];
        }
        setpedido(sumandoContador);
        setprecioTotal(PrecioTo);
    }

    const onDecrementClick = (event) => {
        const elemento = event.target.id;
        const RestandoContador =  pedido.map((dato) => {
            if(dato.id === elemento)
                dato.contador = dato.contador - 1;
            return dato;
            });
        const precioT = RestandoContador.map((dato) => { 
            if(dato.contador !== 0){
                const total = dato.contador*dato.precio; 
                return total;
            } else {
                const total = 0
                return total;
            }   
        })
        const eliminandoProducto = RestandoContador.filter((data) => {
            return data.contador !== 0; 
        });
        let PrecioTo = 0;
        for(let i = 0; i< precioT.length; i++){
            PrecioTo = PrecioTo + precioT[i];
        }   
        setpedido(eliminandoProducto);
        setprecioTotal(PrecioTo);
    }

    const selecttipoProducto = (tipo) => {
        settipoProducto(tipo);
    }

    const obtenerPedido = (event) => {
        const idElemento = event.target.id;
        const producto =  Menu.filter((data) => data.id === idElemento);
        const obj = {
            id: producto[0].id,
            contador: 1,
            producto: producto[0].data.nombreProducto,
            precio: producto[0].data.precioProducto,
            flagcocina: false,
            flagservido: false,
        }
        const total =  precioTotal;
        setprecioTotal(total + producto[0].data.precioProducto);
        setpedido([... pedido, obj]);
    } 

    const enviarPedido = () => {
        let num = 1;
        obtenerNumeroPedido().then( (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                num = doc.data().numero + 1;
                console.log(num);
            });
            crearPedido({
                fechaini: new Date(),
                fechafin: '',
                cliente:  nombreCli,
                mesa:  numeroMesa,
                detalle:  pedido,
                preciototal:  precioTotal,
                flagentregadomesero: false,
                flagterminadococina: false,
                numero:  num
            }).then(() => {
                document.querySelector('.nroMesa').value = '';
                document.querySelector('.nombreCliente').value = '';        
                setpedido([]);
                setprecioTotal(0);
                console.log('Subido exitosamente');
            }).catch(() => {
               console.log('error');
            })
        });
    }

    const cancelarPedido = () => {
        document.querySelector('.nroMesa').value = '';
        document.querySelector('.nombreCliente').value = '';          
        setpedido([]);
        setprecioTotal(0);
    }
    return (
        <div className=''>
            <Cabecera/>
            <div className='contenedorCuerpo'>
                <div className='contenedorPedido'>
                    <section className='descripcionPedido'>
                        <div>
                            <div className='titulo'>ORDEN  DE  PEDIDO</div>
                                <form className="formulario">
                                    N° de mesa:<input type="text" className="nroMesa ingresoDatos" onChange={mesaChange}/><br/>
                                    Cliente:<input type="text" className="nombreCliente ingresoDatos" onChange={nombreChange}/>
                                </form>
                                <div className='contenedorTabla'>
                                    <table className='tabla'>
                                        <tbody>
                                            {pedido.map((item, key) => {
                                                return (
                                                    <OrdenPedidos key={key}
                                                        idcontenedor={item.id}
                                                        Increment={onIncrementClick}
                                                        Decrement={onDecrementClick}
                                                        counter={item.contador}
                                                        nombre={item.producto}
                                                        precio={item.precio}
                                                    />                        
                                                );   
                                            })}
                                        </tbody>
                                    </table>
                                </div>   
                        </div>    
                        <div className='total'>Total: { precioTotal}</div>
                    </section>
                    <button className='btnEnviar' onClick={enviarPedido}>ENVIAR</button>
                    <button className='btnCancelar' onClick={cancelarPedido}>CANCELAR</button>
                </div>
                <div className='productos'>
                    <section className='selectorMenu'>
                        <button className='btnMenu' onClick={()=>{selecttipoProducto('desayuno')}}>DESAYUNO</button>
                        <button className='btnMenu' onClick={()=>{selecttipoProducto('almuerzo')}}>ALMUERZO Y CENA</button>
                        <button className='btnMenu' onClick={()=>{selecttipoProducto('bebida')}}>BEBIDAS</button>
                    </section>
                    <section className='mostradorPedidos'>
                        <MostrarMenu menu={Menu} tipoDeProducto={tipoProducto} onClick={obtenerPedido}/>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Page2;