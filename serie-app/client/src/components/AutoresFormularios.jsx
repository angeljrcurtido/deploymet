import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const AutoresFormulario = () => {

  const [title, setTitle] = useState ('');
  const [errors, setErrors] = useState({})

  const navigate = useNavigate ()

  const submitHandler = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/crearautores',{
      title
    }).then((res)=>{
      console.log(res, 'Llega por then')
      navigate('/todosautores')
    }).catch((err)=>{
      console.log(err, 'Llega por catch')
      setErrors(err.response.data.errors)
    })
  }

  return (
    <div className='col-6 mx-auto'>
      <h1>Crear Autores</h1>
      <form onSubmit={submitHandler} className='border'>
        <label htmlFor='' className='form-label' >Autores:</label>
        <input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
        {errors.title ?<span className='text-danger'>{errors.title.message}</span>:null} <br/>
        <button className='btn btn-success mt-3'>Crear Autor</button>

      </form>
    </div>
  )
}

export default AutoresFormulario