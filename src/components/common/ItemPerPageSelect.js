import React from 'react'
import PropTypes from 'prop-types'

// Only import component needed, the whole material-ui is too large
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const ItemPerPageSelect = ({ value, onSelectChange, max }) => {
  return (
    <div className="itemPerPageSelect">
      <TextField
        id="item-per-page-select"
        select
        value={value}
        onChange={(event) => onSelectChange(parseInt(event.target.value))}
        SelectProps={{ native: true }}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">Show:</InputAdornment>
          )
        }}
      >
        {[...Array(max).keys()].map((i) => {
          const current = i + 1

          return (
            <option key={current} value={current}>
              {current}
            </option>
          )
        })}
      </TextField>
    </div>
  )
}

ItemPerPageSelect.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default ItemPerPageSelect
