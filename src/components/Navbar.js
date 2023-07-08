import React from 'react'
import "./Mystyle.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to="/" className='Lnks'> Home </Link>
        </li>
        <li>
          <Link to="/cart" className='Lnks'> Cart </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar