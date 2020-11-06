import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import getCharacters from '../utils/getCharacter'
import { Button } from '@material-ui/core'
const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then(({results}) => {
      setCharacters(results)
    })

  }, [])

  console.log(characters)

  return (
    <div>
      <Header />
      <Button>
        Button
      </Button>
      <Button onClick={() => alert('Hola')} variant="contained" color="primary">
        Primary
      </Button>
      <div>
        <div>Characters</div>
        {characters.map((character) => (
          <div key={character.id}>
            <div >{character.name}</div>
            <img src={character.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

// export async function getStaticProps () {
//   const response =  await fetch('https://rickandmortyapi.com/api/character/')
//   const characters = await response.json()
//   console.log(characters)

//   return {
//     props: {
//       characters,
//     },
//   }
// }

export default Home
