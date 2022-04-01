import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const DetailedChar = () => {
  const [detailedChar, setDetailedChar] = useState({})
  const {id} = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  console.log(url)

  useEffect(() => {
    axios(url)
      .then(res=>{
        console.log(res.data)
        setDetailedChar(res.data)
      })
    
  }, [id]);
  
  return (
    detailedChar &&
    <div className='detailedContainer'>
      <div className='detailedChar'>
      <div className='detailedImage'>
      <img src={detailedChar.image} alt={detailedChar.name} />
      </div>
      <div className='detailedText'>
      <h3>#{detailedChar.id}</h3>
      <p><b>Nombre</b></p>
      <p>{detailedChar.name}</p>
      <p><b>Estado</b></p>
      <p>{detailedChar.status}</p>
      <p><b>Genero</b></p>
      <p>{detailedChar.gender}</p>
      <p><b>Especie</b></p>
      <p>{detailedChar.species}</p>
      <a href={url}><b>Api URL</b></a>
      </div>
      </div>
    </div>
    
  )
}

export default DetailedChar