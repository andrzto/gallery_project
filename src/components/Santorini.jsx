import santorini from '../assets/img/santorini.jpg'
import PropTypes from 'prop-types'


export const Santorini = ( {props} ) => {
  return (
    <img src= { santorini } alt="Paisaje de Santorini, Grecia" 
    className= {props.className}  />
  )
}

Santorini.PropTypes = {
    className: PropTypes.string
}