import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const API =  'https://rickandmortyapi.com/api/character/'
console.log(API)

const productItem = () => {
  const [character, setCharacter] = useState({episode: []})
  const { query: { id }, } = useRouter([]);
  console.log(character)
    useEffect(() => {
    if(id) {
      window.fetch(`${API}${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      }
    }, [id])

    console.log(character)

  return (
    <div>
    <h1>hola: {id}</h1>
      <div>
        <img src={character.image}/>
      </div>
      <div>
        <ul>
          <li>Nombre: {character.name}</li>
          <li>Estado: {character.status}</li>
          <li>Especie: {character.species}</li>
          <li>Genero: {character.gender}</li>
          <li>Episodios: {character.episode.length}</li>
        </ul>
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const response = await fetch('')

//   const paths = {
//     params: {id: character.id},
//   }

//   return {
//     paths, 
//     fallback: false
//   }
// }

export default productItem
