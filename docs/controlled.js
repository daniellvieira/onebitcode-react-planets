/*
  O que é um Uncontrolled component?
  - Em geral é um component que tem sesu dados gerenciados pelo próprio
  DOM ( como um input normal ) sem relação com o state do component.
*/
import React from 'react'
const Form = () => {
  return(
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" />
    </div>
  )
}
export default Form

/*
  O que é um Controlled component?
  - Components controlados estão associados aos estados do component, 
  ou seja, eles exibem informações baseadas no state e quando
  alterados alteram também o state.
*/

import React, { useState } from 'react'
const Form = () => {
  const [name, setName] = useState('')
  const handleChange = (e) => setName(e.currentTarget.value)

  return(
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" onChange={handleChange}/>
    </div>
  )
}
export default Form