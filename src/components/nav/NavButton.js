import React from 'react'
import PropTypes from 'prop-types'
import caretDown from '../../assets/caret_down.svg'

const NavButton = ({ isDropdown, title, className }) => {
  return (
    <button
      className={`navButton${className ? ` ${className}` : ''}`}
      onClick={() => console.log(`${title} button was clicked`)}
      type="button"
    >
      {title}
      {isDropdown && (
        <img className="navButton__icon" src={caretDown} alt="v" />
      )}
    </button>
  )
}

NavButton.propTypes = {
  className: PropTypes.string,
  isDropdown: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default NavButton
