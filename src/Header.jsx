import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
const Header = () => {
  return (
    <section className='headerSec'>
    <div>
      <h1>Library <span>Portal</span></h1>
    </div>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/active">Active</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </div>
    </section>
  )
}

export default Header
