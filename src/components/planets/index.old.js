import React, { Fragment } from 'react'
import Planet from './planet'

// Leitura recomendada sobre Eventos
// https://reactjs.org/docs/handling-events.html
const showMessage = () => {
  alert('Meu primeiro evento.')
}

const clickOnPlanet = (name) => {
  console.log(`Um clique no planeta: ${name}`)
}

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <button onClick={showMessage}>Show message !</button>
      <hr/>
      <Planet
        name="Mercúrio"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        clickOnPlanet={clickOnPlanet}
        title_with_underline={true}
      />
      <Planet 
        name="Vênus"
        description="Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."
        img_url="https://upload.wikimedia.org/wikipedia/commons/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
        link="https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
        clickOnPlanet={clickOnPlanet}
        gray={true}
      />
      <Planet 
        name="Terra"
        description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/300px-The_Earth_seen_from_Apollo_17.jpg"
        clickOnPlanet={clickOnPlanet}
      />
    </Fragment>
  )
}

export default Planets