import React, { Fragment } from 'react'

// Aprenda mais sobre renderização condicional
// https://reactjs.org/docs/conditional-rendering.html
const DescriptionWithLink = (props) => {
  if (!props.description)
    return null

  if (props.link) {
    return (
      <Fragment>
        <p>{props.description}</p>
        <p><a href={props.link} rel="noreferrer">{props.link}</a></p>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <p><u>{props.description}</u></p>
      </Fragment>
    )
  }
}

export default DescriptionWithLink