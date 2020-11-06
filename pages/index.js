import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Section from '../components/section/Section'
import Item from '../components/Item/Item'


const Home = () => {
  //initial State
  const [characters, setCharacters] = useState({lista: []})

  //get data
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      setCharacters({lista: data.results})
    })

  }, [])

  return (
    <>
      <main className={styles.content}>
        <Section>
          {characters.lista.map((character) => (
              <Item key={character.id} {...character} sectionTitle="Personajes" />
          ))}
        </Section>
      </main>
    </>
  )
}

export default Home
