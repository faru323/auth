import React from 'react'
import { Link } from 'react-router-dom'
import'./style.css'

const Navbar = () => {
  return (
    <div className='navb'>
    <div className='navbLeft'>
    <p id='nameCompany'>Leuschke Group</p>
    </div>
    <div className='navbRight'>
        <ul>
        <li>
        {" "}
        <Link className=" aaa Links" to="/">
         Home
        </Link>
      </li>
            <li>  {" "}
            <Link className=" aaa Links" to="/login">
            Login
            </Link>
            </li>
            <li>  {" "}
            <Link className=" aaa Links" to="/register">
            Register
            </Link>
            </li>
        </ul>
    </div>
    
    </div>
  )
}

export default Navbar