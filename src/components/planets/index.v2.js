import React, { Fragment } from 'react'
import Planet from './planet'

class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
        { 
          name: "Mercúrio",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
          title_with_underline: true
        },
        {
          name: "Vênus",
          description: "Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg",
          link: "https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)",
          gray: true
        },
        {
          name: "Terra",
          description: "A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos.",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/300px-The_Earth_seen_from_Apollo_17.jpg"
        }
      ]
    }
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
        {this.state.planets.map((planet) => 
          <Planet
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
            gray={planet.gray}
            title_with_underline={planet.title_with_underline}
          />
        )}
      </Fragment>
    )
  }
}

export default Planets