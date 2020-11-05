import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'


const Planet = (props) => {
  const names = ['a', 'b']
  const satellites = names.map((n) => <li>Satélite {n}</li>)

  let title
  if (props.title_with_underline)
    title = <h4><u>{props.name}</u></h4>
  else
    title = <h4>{props.name}</h4>

  return (
    // <div onClick={() => props.clickOnPlanet(props.name)}>
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
      <h4>
        <ul>{satellites}</ul>
        <ol>{['a', 'b', 'c'].map((n) => <li>Satélite {n}</li>)}</ol>
      </h4>
      <hr />
    </div>
  )
}

export default Planet