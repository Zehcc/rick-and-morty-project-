import React from 'react'

const Character = ({image,name,id}) => {
  return (
    // link to = /singlechar/${id}
    <li>
      <img src={image} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default Character