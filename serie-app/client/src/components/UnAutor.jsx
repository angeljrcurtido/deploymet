import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const UnAutor = () => {
        //edicion de objeto

        const [autor, setAutor] = useState ({})

        //obtener id
        const {id} = useParams()
        //redireccionamiento
        const navigate = useNavigate()

    useEffect (()=>{

        axios.get(`http://localhost:8000/api/obtenerunaautores/${id}`)
        .then((res)=>{
            console.log(res)
            setAutor(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const borrarSerie = () => {
        axios.delete(`http://localhost:8000/api/borrarautores/${id}`)
        .then((res)=>{
            console.log(res)
            setAutor(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>

        {/*<img src={serie.portada} alt="" />*/}
        <p>Titulo:{autor.title}</p>
        {/*<p>Año:{serie.year}</p>
        <p>Creador:{serie.creador}</p>*/}
        <Link to={`/editarunautor/${id}`}>Editar Autor</Link>
        <button className='btn btn-danger' onClick={borrarSerie}>Borrar Producto</button>

    </div>
  )
}

export default UnAutor