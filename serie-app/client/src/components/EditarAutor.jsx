import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom';



const EditarAutor = () => {

    const [autor, setAutor] = useState ({})
    const [errors, setErrors] = useState({})

     //obtener id
     const {id} = useParams()
     //redireccionamiento
     const navigate = useNavigate()

     useEffect (()=>{

        axios.get(`http://localhost:8000/api/obtenerunaautores/${id}`)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


  const [title, setTitle] = useState ('');
 


  const submitHandler = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/editarautores/${id}`,{
      title
    }).then((res)=>{
      console.log(res)
      navigate('/todosautores')
    }).catch((err)=>{
      console.log(err)
      setErrors(err.response.data.errors)
    })
  }

  return (
    <div className='col-6 mx-auto'>
      <h1>Editar Autor</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='' className='form-label'>Titulo Serie</label>
        <input type="text" value={title} className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
        {errors.title ?<span className='text-danger'>{errors.title.message}</span>:null} <br/>

        <button className='btn btn-success mt-3'>Editar...</button>

      </form>
    </div>
  )
}

export default EditarAutor