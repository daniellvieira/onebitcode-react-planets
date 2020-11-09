import React, { Fragment, useState, useEffect } from 'react'
import Planet from './planet'
import Form from './form'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

const Planets = () => {
  const [planets, setPlanets] = useState([])
 
  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })  
  }, [])

  const removeLast = () => {
    let new_planets = [...planets]
    new_planets.pop()
    setPlanets(new_planets)
  }
  
  const duplicateLastPlanet = () => {
    let lastPlanet = planets[planets.length - 1]
    let new_planets = [...planets, lastPlanet]
    setPlanets(new_planets)
  }

  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }

  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr/>
      <Form addPlanet={addPlanet} />
      <hr/>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLastPlanet}>Duplicate Last Planet</button>
      <hr/>
      {planets.map((planet, index) => 
        <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          gray={planet.gray}
          title_with_underline={planet.title_with_underline}
          key={index}
        />
      )}
    </Fragment>
  )
}

export default Planets