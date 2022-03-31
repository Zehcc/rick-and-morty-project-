import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Form from '../../components/Form/Form'
import Character from '../../components/Character/Character'

const Finder = ({url}) => {
  const [allCharacters, setAllCharacters] = useState([]);
   useEffect(() => {
    axios(url)
      .then(res => {
                setAllCharacters(res.data)
              } 
      )
}, [])
  const [filterededList, setFilteredList] = useState([]);
  console.log(filterededList)
  return (
    <div>
    <Form characters = {allCharacters} setFilteredList = {setFilteredList}/>
    <ul>
            { filterededList && filterededList.map(character => {
                return (
                    <Character key = {character.id} image = {character.image} name = {character.name}/>
                )
            })}
        </ul>
    </div>
  )
}

export default Finder