import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function NavBar() {
  return (
    <>
        <div style={{textAlign:"center"}}>
            <h4>
                <Link to="/" style={{textDecoration:"none"}}>Login</Link> |
                <Link to="/home" style={{textDecoration:"none"}}>Home</Link> |
                <Link to="/about" style={{textDecoration:"none"}}>About</Link> |
                <Link to="/wow/contact" style={{textDecoration:"none"}}>Contact</Link> |
                <Link to="/sau/dti/regis" style={{textDecoration:"none"}}>Register</Link>
                
            </h4>
            <hr />
            <Header/>
        </div>
    </>
  )
}

export default NavBar