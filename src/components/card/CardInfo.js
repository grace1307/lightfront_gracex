import React from 'react'
import PropTypes from 'prop-types'

export const CardInfoGroup = ({ children }) => (
  <div className="cardInfoGroup">{children}</div>
)

const CardInfo = ({ fieldName, value, className, icon }) => {
  return (
    <div className={`cardInfo${className ? ` ${className}` : ''}`}>
      {icon && (
        <div className="cardInfo__iconWrap">
          <img src={icon} alt="icon" />
        </div>
      )}
      <div className="cardInfo__info">
        <div className="cardInfo__field">{fieldName}</div>
        <div className="cardInfo__value">{value}</div>
      </div>
    </div>
  )
}

CardInfo.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default CardInfo
