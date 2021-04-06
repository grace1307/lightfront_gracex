import React from 'react'
import PropTypes from 'prop-types'
import bell from '../../assets/bell.svg'

const NotificationButton = ({ notificationCount }) => {
  return (
    <button
      className="notificationButton"
      onClick={() => console.log('notification button was clicked')}
      type="button"
    >
      <img className="notificationButtonn__icon" src={bell} alt="v" />
      {notificationCount && (
        <div className="notificationButton__dot">{notificationCount}</div>
      )}
    </button>
  )
}

NotificationButton.propTypes = {
  notificationCount: PropTypes.number.isRequired
}

export default NotificationButton
