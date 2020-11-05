import './style.css'

const GrayImg = (props) => {
  return (
    <img className={props.gray ? 'gray-image' : 'color-image'} src={props.img_url}></img>
  )
}

export default GrayImg