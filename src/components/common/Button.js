import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ icon, title, className, onButtonClick }) => {
  return (
    <button
      className={`button${className ? ` ${className}` : ''}`}
      onClick={
        onButtonClick || (() => console.log(`${title} button was clicked`))
      }
      type="button"
    >
      {icon && <img className="button__icon" src={icon} alt="icon" />}
      {title}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onButtonClick: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default Button
