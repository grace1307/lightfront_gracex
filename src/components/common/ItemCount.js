import React from 'react'
import PropTypes from 'prop-types'

const ItemCount = ({ totalItemCount, page, size, className }) => {
  return (
    <div className={`itemCount${className ? ` ${className}` : ''}`}>
      {(page - 1) * size + 1}-{Math.min(totalItemCount, page * size)} of{' '}
      {totalItemCount} items
    </div>
  )
}

ItemCount.propTypes = {
  totalItemCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  className: PropTypes.string,
  size: PropTypes.number.isRequired
}

export default ItemCount
