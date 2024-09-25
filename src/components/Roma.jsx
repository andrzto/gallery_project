import roma from '../assets/img/roma.jpg'
import PropTypes from 'prop-types'


export const Roma = ( {props} ) => {
  return (
    <img src= { roma } alt="Coliseo Romano Roma, Italia" 
    className= {props.className}  />
  )
}

Roma.PropTypes = {
    className: PropTypes.string
}