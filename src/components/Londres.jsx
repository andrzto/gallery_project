import londres from '../assets/img/londres.jpg'
import PropTypes from 'prop-types'


export const Londres = ( {props} ) => {
  return (
    <img src= { londres } alt="Paisaje Londres, Inglaterra" 
    className= {props.className}  />
  )
}

Londres.PropTypes = {
    className: PropTypes.string
}