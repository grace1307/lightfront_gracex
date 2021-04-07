import React from 'react'
import PropTypes from 'prop-types'
import caretDown from '../../assets/caret_down.svg'

const AvatarButton = ({ avatar }) => {
  return (
    <button
      className="avatarButton"
      onClick={() => console.log(`avatar button was clicked`)}
      type="button"
    >
      <img className="avatarButton__img" src={avatar} alt="avatar" />
      <img className="avatarButton__icon" src={caretDown} alt="v" />
    </button>
  )
}

AvatarButton.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default AvatarButton
