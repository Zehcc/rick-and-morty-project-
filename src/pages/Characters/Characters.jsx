import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Character from '../../components/Character/Character'

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
        <div>
            {counter > 1 && <button onClick={previousPage}>Pagina anterior</button>}
            {counter < 42 && <button onClick={nextPage}>Siguiente pagina</button>}
        </div>
        <ul>
            { characters && characters.map(character => {
                return (
                    <Character key = {character.id} image = {character.image} name = {character.name}/>
                )
            })}
        </ul>
    </div>
  )
}

export default Characters