import React, { Fragment } from 'react'
import Planet from './planet'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
      ]
    }
  }

  componentDidMount() {
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }

  removeLast = () => {
    let new_planets = [...this.state.planets]
    new_planets.pop()
    this.setState(state => ({
      planets: new_planets
    }))
  }

  duplicateLastPlanet = () => {
    let lastPlanet = this.state.planets[this.state.planets.length - 1]
    let new_planets = [...this.state.planets, lastPlanet]
    this.setState(state => ({
      planets: new_planets
    }))
  }

  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate Last Planet</button>
        <hr/>
        {this.state.planets.map((planet, index) => 
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
}

export default Planets