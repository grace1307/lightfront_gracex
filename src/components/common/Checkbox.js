import React from 'react'
import PropTypes from 'prop-types'
import MuiCheckbox from '@material-ui/core/Checkbox'

const Checkbox = ({ isChecked, onCheckChange }) => {
  return (
    <MuiCheckbox
      checked={isChecked}
      onChange={(event) => {
        onCheckChange(event.target.checked)
      }}
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onCheckChange: PropTypes.func.isRequired
}

export default Checkbox
