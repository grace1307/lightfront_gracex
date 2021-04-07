import React from 'react'
import PropTypes from 'prop-types'

// Only import component needed, the whole material-ui is too large
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const NOOP = () => true

const InPageNav = ({ path }) => {
  const crumbs = path.length
    ? path.map((node, index) => {
        if (index === path.length - 1)
          return (
            <Typography key={`breadcrumb-${node.title}`} color="textPrimary">
              {node.title}
            </Typography>
          )
        return (
          <Link
            color="inherit"
            href="/"
            key={`breadcrumb-${node.title}`}
            onClick={NOOP}
          >
            {node.title}
          </Link>
        )
      })
    : null

  return (
    <div className="inPageNav">
      <Breadcrumbs aria-label="breadcrumb">{crumbs}</Breadcrumbs>
    </div>
  )
}

InPageNav.propTypes = {
  path: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
}

export default InPageNav
