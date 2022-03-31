import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <Link to="/home">
      <li>Home</li>
    </Link>
    <Link to="/characters">
        <li>Personajes</li>
    </Link>
    <Link to="/finder">
    <div>Buscador</div>
    </Link>
    </nav>
  )
}

export default Navbar