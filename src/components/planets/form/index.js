import React, { Fragment, useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const handleChange = (event) => setName(event.target.value)

  const handleSubmit = event => {
    props.addPlanet({name: name})
    event.preventDefault()
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={handleChange}/>
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}
export default Form