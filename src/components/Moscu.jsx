import moscu from '../assets/img/moscu.jpg'
import PropTypes from 'prop-types'


export const Moscu = ( {props} ) => {
  return (
    <img src= { moscu } alt="Plaza Roja Moscú, Rusia" 
    className= {props.className}  />
  )
}

Moscu.PropTypes = {
    className: PropTypes.string
}