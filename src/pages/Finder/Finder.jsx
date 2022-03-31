import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Form from '../../components/Form/Form'
import Character from '../../components/Character/Character'

const Finder = () => {
  const [allCharacters, setAllCharacters] = useState([]);
useEffect(() => {
    let numbers = [];
    for (let i=1; i<826; i++) {
      numbers = [...numbers, i]
    }
    axios('https://rickandmortyapi.com/api/character/'+numbers)
      .then(res => {
                setAllCharacters(res.data)
              } 
      )
}, [])

  const [filterededList, setFilteredList] = useState([]);

return (
    <div>
    <Form characters = {allCharacters} setFilteredList = {setFilteredList}/>
    <ul>
            { filterededList && filterededList.map(character => {
                return (
                    <Character key = {character.id} id = {character.id} image = {character.image} name = {character.name}/>
                )
            })}
        </ul>
    </div>
  )
}

export default Finder