import React, { useState, useEffect } from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/description_with_link'
import Form from '../planet/form'
import { useParams } from 'react-router-dom'

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}

const Planet = () => {
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState({})

  let { id } = useParams()

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    })

  }, [])

  let title
  if (planet.title_with_underline)
    title = <h4><u>{planet.name}</u></h4>
  else
    title = <h4>{planet.name}</h4>
  
  return (
    <div>
      <h4>{title}</h4>
      <DescriptionWithLink 
        link={planet.link}
        description={planet.description}
      />
      <GrayImg
        img_url={planet.img_url}
        gray={planet.gray}
      />
      <h4>Satélites</h4>
      <Form addSatellite={addSatellite} />
      <ul>
        {satellites.map((satellite, index) => 
          <li key={index}>{satellite.name}</li> 
        )}
      </ul>
      <hr />
    </div>
  )
}

export default Planet