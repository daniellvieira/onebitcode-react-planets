import React, { Fragment } from 'react'

const DescriptionWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <p><a href={props.link} target="_blank">{props.link}</a></p>
    </Fragment>
  )
}

export default DescriptionWithLink