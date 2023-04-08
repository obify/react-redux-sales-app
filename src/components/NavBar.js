import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {FETCH_USER_REQUEST} from '../redux/user/userActionTypes'

function NavBar() {

    const user = useSelector(state=> state.user)
    const dispatch = useDispatch()

    const logout = ()=>{
        sessionStorage.removeItem('token')
        dispatch({type: FETCH_USER_REQUEST})
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-uppercase" to="/top5Sales">Sales App V2</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {user.user.firstName ?<li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/addSales">Add Sales</NavLink>
                            </li>: ''}
                            {user.user.firstName ?<li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/top5Sales">Top 5 Sales</NavLink>
                            </li>: ''}
                            {user.user.firstName ?<li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/totalRevenue">Today's total revenue</NavLink>
                            </li>: ''}
                            {user.user.firstName ? '' : <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/login">Login</NavLink>
                            </li>}
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/register">Register</NavLink>
                            </li>
                            {user.user.firstName ? <li className="nav-item">
                                <button className="btn btn-primary" onClick={()=>logout()}>Logout</button>
                            </li>: ''}
                            <div className="text-uppercase text-white">Welcome {user.user.firstName} {user.user.lastName}</div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
