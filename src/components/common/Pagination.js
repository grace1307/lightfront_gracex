import React from 'react'
import MuiPagination from '@material-ui/lab/Pagination'
import MuiPaginationItem from '@material-ui/lab/PaginationItem'

const Pagination = ({ maxPage, page, onPageChange }) => {
  return (
    <MuiPagination
      count={maxPage}
      page={page}
      onChange={(event, page) => onPageChange(page)}
      variant="outlined"
      renderItem={(item) => <MuiPaginationItem {...item} variant="text" />}
      shape="rounded"
    />
  )
}

export default Pagination
