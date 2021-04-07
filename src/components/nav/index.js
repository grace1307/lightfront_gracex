import React from 'react'
import LetterBlock from '../common/LetterBlock'
import NotificationButton from './NotificationButton'
import NavButton from './NavButton'
import UserInfo from './UserInfo'
import userData from '../../constants/user'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <LetterBlock letter="s" />
        <NavButton title="Summary" />
        <NavButton isDropdown title="Amazon Tools" />
        <NavButton isDropdown title="Warehouse Inventory" />
      </div>
      <div className="navbar__right">
        <NotificationButton notificationCount={userData.notificationCount} />
        <UserInfo userData={userData} />
      </div>
    </div>
  )
}

export default Navbar
