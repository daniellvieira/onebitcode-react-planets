import React, { Fragment, useState } from 'react'

const Form = (props) => {
  const initialState = {
    name: ''
  }
  const [fields, setFields] = useState(initialState)
  const handleFieldsChange = (event) => setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleSubmit = (event) => {
    props.addSatellite(fields)
    setFields(initialState)
    event.preventDefault()
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>     
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={fields.name} onChange={handleFieldsChange}/>
          <input type="submit" />
        </div>
        <br />
      </form>
    </Fragment>
  )
}
export default Form