import React from 'react'
import { NavLink } from 'react-router-dom'

const BarraNavegacion = () => {
  return (
    <div className='bg-success bg-gradient'>
        <h1 className='text-light'>
            Autores DB
        </h1>
        <NavLink to="/nuevoautor" className='mb-3 ml-3'>Todos los Autores</NavLink>
        <NavLink to="/todosautores"className='mb-3 ml-3' >Home</NavLink>
    </div>
  )
}

export default BarraNavegacion