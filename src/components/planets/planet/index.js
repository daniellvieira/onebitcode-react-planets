import React, { useState, useEffect } from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'

async function getSatellites(props) {
  let response = await fetch(`http://localhost:3000/api/${props.id}.json`)
  let data = await response.json()
  return data
}


const Planet = (props) => {
  const [satellites, setSatellites] = useState([])

  useEffect(() => {
    getSatellites(props).then(data => {
      setSatellites(data['satellites'])
    })    
  })

  let title
  if (props.title_with_underline)
    title = <h4><u>{props.name}</u></h4>
  else
    title = <h4>{props.name}</h4>
  
  return (
    <div>
      <h4>{title}</h4>
      <DescriptionWithLink 
        link={props.link}
        description={props.description}
      />
      <GrayImg
        img_url={props.img_url}
        gray={props.gray}
      />
      <h4>Satélites</h4>
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