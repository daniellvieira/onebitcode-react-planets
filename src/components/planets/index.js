import React, { Fragment } from 'react'
import Planet from './planet'

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr/>
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      />
      <Planet 
        name="Vênus"
        description="Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."
        img_url="https://upload.wikimedia.org/wikipedia/commons/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
        link="https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
      />
    </Fragment>
  )
}

export default Planets