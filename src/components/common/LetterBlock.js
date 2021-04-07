import React from 'react'
import PropTypes from 'prop-types'

const LetterBlock = ({ letter }) => {
  return <div className="letterBlock">{letter}</div>
}

LetterBlock.propTypes = {
  letter: PropTypes.string.isRequired
}

export default LetterBlock
