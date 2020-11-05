/*
  Documentação:
  https://reactjs.org/docs/state-and-lifecycle.html

  O que são estados
  - State é um objeto javascript que guarda os dados de component e determina
  seu comportamento
  - Quando um estado é atualizado o component é renderizado

  Diferença entre props e state
  - props: são passadas por outros componetes, de pai para filho ( vem de fora )
  - state: pertence a cada component ( algo mais interno )

  Componente de classe X Component funcional
  - Para declarar dentro de um component de classe
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }
  - Param manipular um component em um component de classe
    incrementCount() {
      this.setState((state) => {
        return { count: state.count + 1}
      })
    }
  - Para declarar dentro de um component funcional
    import React, { useState } from 'react'
    const [count, setCount] = useState(0)
  - Param manipular um component em um component funcional
    setCount(count + 1)

*/