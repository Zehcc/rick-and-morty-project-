import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Character = ({character}) => {
  console.log(character.species)
 /*  const [type, setType] = useState('')
  character.type === 'Human' ? setType('human') 
  : character.type === 'Alien' ? setType('alien')
  : character.type === 'Humanoid' ? setType('humanoid')
  : character.type === 'unknown' ? setType('unknown')
  : character.type === 'Poopybutthole' ? setType('poppy')
  : setType('mythological') */
  
  return (
    <Link to ={`/characters/character${character.id}`}>
    <li className={character.species.toLowerCase().replace(" ","")}>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
      <p>{(character.status === 'Alive') ? '💖'
      : (character.status === 'Dead') ? '💀'
      : '❓'}</p>
      {/* {paintButton &&
      (character.)} */}
    </li>
    </Link>
  )
}

export default Character