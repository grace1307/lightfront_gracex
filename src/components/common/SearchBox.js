import React from 'react'
import PropTypes from 'prop-types'
import search from '../../assets/search_gray.svg'

const SearchBox = ({ placeholder, className, value, onSearchKeyUp }) => {
  const handleKeyUp = (event) => onSearchKeyUp(event.target.value)

  return (
    <div className={`searchBox${className ? ` ${className}` : ''}`}>
      <img className="searchBox__icon" src={search} alt="search" />
      <input
        className="searchBox__input"
        onKeyUp={handleKeyUp}
        onChange={handleKeyUp}
        placeholder={placeholder || 'Enter text here...'}
        value={value || ''}
        type="text"
      />
    </div>
  )
}

SearchBox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onSearchKeyUp: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default SearchBox
