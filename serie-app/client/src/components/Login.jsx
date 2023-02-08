import axios from 'axios'
import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const Login = () => {
    const navigate = useNavigate ()
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')


    
    
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, {withCredentials: true})
        .then((res)=>{
            console.log(res)
            navigate('/todosautores')
        }).catch((err)=>{
            console.log(err)
        })
    }
    

  return (
    <div>

        <form onSubmit={submitHandler} className='col-6 mx-auto'>
            <label htmlFor='' className='form-label'>Email:</label>
            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='' className='form-label'>Password:</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn btn-success mt-3'>Login!!!</button>
        </form>
    </div>
  )
}

export default Login