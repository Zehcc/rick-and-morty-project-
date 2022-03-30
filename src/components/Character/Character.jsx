import React from 'react'

const Character = ({image,name,id}) => {
  return (
    <li>
      <img src={image} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default Character