import React, { useState, useEffect } from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'
import Form from '../../planet/form'

const Planet = (props) => {
  let title
  if (props.title_with_underline)
    title = <h4><u>{props.name}</u></h4>
  else
    title = <h4>{props.name}</h4>
  
  return (
    <div>
      <h4>{title}</h4>
      <DescriptionWithLink 
        link={props.link}
        description={props.description}
      />
      <GrayImg
        img_url={props.img_url}
        gray={props.gray}
      />
      <hr />
    </div>
  )
}

export default Planet