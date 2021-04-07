import React from 'react'
import PropTypes from 'prop-types'
import AvatarButton from './AvatarButton'

const UserInfo = ({ userData }) => {
  return (
    <div className="userInfo">
      <div className="userInfo__name">{`${userData.firstName} ${userData.lastName}`}</div>
      <AvatarButton avatar={userData.avatar} />
    </div>
  )
}

UserInfo.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
}

export default UserInfo
