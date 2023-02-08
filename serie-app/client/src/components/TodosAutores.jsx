import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const TodosAutores = () => {

    const [lista,setLista] = useState([])
    
    useEffect(()=>{

        axios.get('http://localhost:8000/api/obtenerautores/', {withCredentials:true})
        .then((res)=>{
            console.log(res)
            setLista(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='border m-3rem'>

    {

        lista.map((autores)=>(
          
            <div className='border pb-4 ms-5 me-5 pt-3 mt-3'>
            <h2 >{autores.title}</h2>
            <Link to={`/obtenerunautor/${autores._id}`} className='d-block' >Mas informacion</Link>
            </div>
        ))

    }

    </div>
  )
}

export default TodosAutores