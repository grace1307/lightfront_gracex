import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, className }) => {
  return <h2 className={`title${className ? ` ${className}` : ''}`}>{title}</h2>
}

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Title
