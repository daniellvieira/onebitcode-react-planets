import './style.css'

const GrayImg = (props) => {
  return (
    <img className={props.gray ? 'gray-image' : 'color-image'} src={props.img_url} alt=""></img>
  )
}

export default GrayImg