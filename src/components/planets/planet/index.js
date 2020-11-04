import React, { Fragment } from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'

const Planet = (props) => {
  return (
    <Fragment>
      <h4>{props.name}</h4>
      <DescriptionWithLink 
        link={props.link}
        description={props.description}
      />
      <GrayImg
        img_url={props.img_url}
      />
    </Fragment>
  )
}

export default Planet