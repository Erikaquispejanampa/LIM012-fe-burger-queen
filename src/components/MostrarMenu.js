import React from 'react'
import Producto from './contenedorProducto'
import './styles/show.css'

const MostrarMenu = ({ tipoDeProducto, menu, onClick }) => {
    const menuTodo = menu;
        return (
            <div className='contenedorProducto'>
                {
                    menuTodo && menuTodo !== undefined ? menuTodo.map((item,key) => {
                        if (item.data.tipo === tipoDeProducto) {
                            return(
                                <Producto key={key}
                                    click={onClick}
                                    idProducto={item.id}
                                    ImageProducto={item.data.imgProducto}
                                    nombreProducto={item.data.nombreProducto}
                                    precioProducto={item.data.precioProducto}
                                />                              
                            );
                        }   
                    }):null
                }
            </div>
        );        
}  

export default MostrarMenu;
