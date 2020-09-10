import React from 'react'
import './styles/botones.scss'
import { Link } from 'react-router-dom'

const Botones = ({ tituloBonton, referencia }) => {
    return(
        <Link className='elegirUsuario' to={referencia}>
            {tituloBonton}
        </Link>
    )
}

export default Botones;