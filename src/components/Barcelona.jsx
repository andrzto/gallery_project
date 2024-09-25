import barcelona from '../assets/img/barcelona.jpg'
import PropTypes from 'prop-types'


export const Barcelona = ( {props} ) => {
  return (
    <img src= { barcelona } alt="Sagrada Familia Barcelona, España" 
    className= {props.className}  />
  )
}

Barcelona.PropTypes = {
    className: PropTypes.string
}