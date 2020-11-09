/*
  O que são Hooks
  - Os hooks são uma forma de usarmos state, lifecycle e compartilharmos
  lógica em components funcionais.
  - Eles foram inserido na versão 16.8

  - Os components de função são mais fácesi de comporeender
  - Hooks nos ajudam a compartilhar lógica entre components

*/

import React, { useState, useEffect } from 'react'
function Exemplo() {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title usinf the browser API
    document.title = `You clicked ${count} times.`
  })

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

  )
}