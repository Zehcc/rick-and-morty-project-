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
    <div>
      <img src={detailedChar.image} alt={detailedChar.name} />
      <h3>#{detailedChar.id}</h3>
      <p><b>Nombre</b></p>
      <p>{detailedChar.name}</p>
      <p><b>Estado</b></p>
      <p>{detailedChar.status}</p>
      <p><b>Genero</b></p>
      <p>{detailedChar.gender}</p>
      <p><b>Especie</b></p>
      <p>{detailedChar.species}</p>
      <p><b>Api URL</b></p>
      <a href={url}>{url}</a>
    </div>
    
  )
}

export default DetailedChar