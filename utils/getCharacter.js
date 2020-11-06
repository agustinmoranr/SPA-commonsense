let API = 'https://rickandmortyapi.com/api/character/'

const getCharacter = async () => {
  const URL = `${API}`

  try {
    const response =  await window.fetch(URL)
    const characterData = await response.json()
    return characterData;
  } catch (error) {
    // throw new Error('ERROR: ', error)
    console.error(error)
  }
}

export default getCharacter;