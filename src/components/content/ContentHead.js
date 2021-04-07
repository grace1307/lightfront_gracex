import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InPageNav from '../common/InPageNav'
import Title from '../common/Title'
import Button from '../common/Button'
import SearchBox from '../common/SearchBox'
import plus from '../../assets/plus.svg'
import trashCanWhite from '../../assets/trashcan_white.svg'

const ContentHead = ({ onModalOpen, searchText, onSearchTextChange }) => {
  const path = [
    { title: 'Settings', path: '/' },
    { title: 'Warehouse', path: '/' }
  ]

  // Leaving this no-op for now
  const [text, setText] = useState('')

  return (
    <div className="contentHead">
      <InPageNav path={path} />
      <div className="contentHead__content">
        <Title className="contentHead__title" title="Create shipment" />
        <div className="contentHead__actions">
          <SearchBox
            className="contentHead__searchName"
            placeholder="Search by Name, Brand etc."
            onSearchKeyUp={onSearchTextChange}
            value={searchText}
          />
          <SearchBox
            className="contentHead__searchShipment"
            placeholder="Shipment Name"
            onSearchKeyUp={setText}
            value={text}
          />
          <Button
            icon={plus}
            title="New Product"
            onButtonClick={onModalOpen}
            className="contentHead__button contentHead__button--newProduct"
          />
          <Button
            title="Save Shipment"
            className="contentHead__button contentHead__button--saveShipment"
          />
          <Button
            icon={trashCanWhite}
            title="Delete"
            className="contentHead__button contentHead__button--delete"
          />
          <Button
            title="Check in"
            className="contentHead__button contentHead__button--checkIn"
          />
        </div>
      </div>
    </div>
  )
}

ContentHead.propTypes = {
  onModalOpen: PropTypes.func.isRequired
}

export default ContentHead
