import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/characters">
    <ul>
        <li>Personajes</li>
    </ul>
    </Link>
  )
}

export default Navbar