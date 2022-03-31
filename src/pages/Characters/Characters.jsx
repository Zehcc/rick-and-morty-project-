import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Character from '../../components/Character/Character'
import Buttons from '../../components/Buttons/Buttons';

const Characters = () => {
    const [counter, setCounter] = useState(1);
    const url = `https://rickandmortyapi.com/api/character?page=${counter}`;
    
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios(url)
          .then(res => {
                    setCharacters(res.data.results)
                } 
          )
    }, [url])  

    const nextPage = () => {
            setCounter(counter + 1) 
    }

    const previousPage = () => {
            setCounter(counter - 1)  
    }
    
return (
    <div>
        <Buttons counter = {counter} nextPage={nextPage} previousPage={previousPage}/>
        <ul>
            { characters && characters.map(character => {
                return (
                    <Character 
                    key = {character.id} 
                    character= {character} />
                )
            })}
        </ul>
        <Buttons counter = {counter} nextPage={nextPage} previousPage={previousPage}/>
    </div>
  )
}

export default Characters