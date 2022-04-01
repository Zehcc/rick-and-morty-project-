import React from 'react'
import { Link } from 'react-router-dom'
import { useAvatarContext } from '../../context/AvatarContext/AvatarContext';

const Navbar = () => {
  const {avatar} = useAvatarContext();
  return (
    <nav>
      <Link to="/home">
        <div className='navItem'>Home</div>
      </Link>
      <Link to="/characters">
        <div className='navItem'>Personajes</div>
      </Link>
      <Link to="/finder">
        <div className='navItem'>Buscador</div>
      </Link>
      <div className='avatarDiv'>
        <img src={avatar.image} alt={avatar.name} />
        <p>{avatar.name}</p>
      </div>
    </nav>
  )
}

export default Navbar