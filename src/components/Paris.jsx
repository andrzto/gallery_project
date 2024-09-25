import paris from '../assets/img/paris.jpg'
import PropTypes from 'prop-types'


export const Paris = ( {props} ) => {
  return (
    <img src= { paris } alt="Torre Effiel Paris, Francia" 
    className= {props.className}  />
  )
}

Paris.PropTypes = {
    className: PropTypes.string
}