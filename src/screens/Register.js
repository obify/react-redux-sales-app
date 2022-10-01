import React, {useState} from 'react'
import axios from 'axios';

import {API_URL} from '../config';

const Register = () => {

    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [msg, setMsg] = useState("")

    const register = (event) => {
        event.preventDefault();
        const request = { fname, lname, email, password };

        axios.post(`${API_URL}`+"/register", request)
        .then((data)=>{
            if(data){
                setMsg("Registered successfully");
            }
        })
        .catch((err)=>{
            console.log(err);
            setMsg("Some error occurred, try again later");
        });

    }

  return (
    <div className='container'>
        <h3 className='text-center text-uppercase pt-4'>Registration Form</h3>
        <h4 className='text-danger'>{msg}</h4>
            <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(event)=>register(event)}>
                <div className="mb-3">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input onChange={(event)=>setFname(event.target.value)} type="text" className="form-control" id="fname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input onChange={(event)=>setLname(event.target.value)} type="text" className="form-control" id="lname" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" id="email" required />
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

export default Register