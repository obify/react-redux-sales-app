import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../redux/user/userActionTypes'

import {API_URL} from '../config';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [msg, setMsg] = useState("")

    const login = (event) => {
        event.preventDefault();
        const request = { email, password };
        dispatch({type: FETCH_USER_REQUEST})
        axios.post(`${API_URL}`+"/login", request)
        .then((data)=>{
            if(data){
                sessionStorage.setItem('token', data.data.token)
                dispatch({type: FETCH_USER_SUCCESS, payload: data.data.user})
                navigate("/addSales")
            }
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: FETCH_USER_ERROR})
            setMsg("Invalid Credentials!");
        });
    }

  return (
    <div className='container'>
        <h3 className='text-center text-uppercase pt-4'>Login Form</h3>
        <h4 className='text-danger'>{msg}</h4>
            <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(event)=>login(event)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={(event)=>setEmail(event.target.value)} type="text" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" id="password" required/>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login