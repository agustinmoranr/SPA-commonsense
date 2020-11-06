import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import style from './character.module.css'

const API =  'https://rickandmortyapi.com/api/character/'

const productItem = () => {
  //initialState
  const [character, setCharacter] = useState({episode: []})

  //get id
  const { query: { id }, } = useRouter([]);

  //getData
    useEffect(() => {
    if(id) {
      window.fetch(`${API}${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      }
    }, [id])

  return (
    <main className={style.section}>
      <div className={style.container}>
        <div className={style.picture}>
          <img src={character.image}/>
          <h1>{character.name}</h1>
        </div>
        <div className={style.list}>
          <h3>Nombre: {character.name}</h3>
          <h3>Estado: {character.status}</h3>
          <h3>Especie: {character.species}</h3>
          <h3>Genero: {character.gender}</h3>
          <h3>Episodios: {character.episode.length}</h3>
        </div>
      </div>
    </main>
  )
}

export default productItem
