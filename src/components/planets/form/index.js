import React, { Fragment, useState } from 'react'

const Form = (props) => {
  const initialState = {
    id: '',
    name: '',
    description: '',
    img_url: '',
    link: ''
  }
  const [fields, setFields] = useState(initialState)
  const handleFieldsChange = (event) => setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleSubmit = event => {
    props.addPlanet(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>     
        {/* <div>
          <label htmlFor="id">ID: </label>
          <input type="text" name="id" id="id" value={fields.id} onChange={handleFieldsChange}/>
        </div> */}
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={fields.name} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="name">Description: </label>
          <input type="text" name="description" id="description" value={fields.description} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="img_url">Image: </label>
          <input type="text" name="img_url" id="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="link">Link: </label>
          <input type="text" name="link" id="link" value={fields.link} onChange={handleFieldsChange}/>
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}
export default Form