import React from 'react'
import PropTypes from 'prop-types'

const PerPageInput = ({ value, className, onValueChange, max }) => {
  return (
    <div className={`perPageInput${className ? ` ${className}` : ''}`}>
      <div className="perPageInput__number">{value}</div>
      <div className="perPageInput__buttons">
        <button
          className="perPageInput__button perPageInput__button--up"
          onClick={() => value < max && onValueChange(value + 1)}
          type="button"
        >
          ▲
        </button>
        <button
          className="perPageInput__button perPageInput__button--down"
          onClick={() => value > 1 && onValueChange(value - 1)}
          type="button"
        >
          ▼
        </button>
      </div>
    </div>
  )
}

PerPageInput.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired
}

export default PerPageInput
