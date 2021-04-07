import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MuiModal from '@material-ui/core/Modal'
import ModalContent from './ModalContent'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 745,
    height: 'calc(100vh - 150px)',
    minHeight: '380px',
    padding: theme.spacing(2, 4, 3),
    boxShadow: theme.shadows[5],
    backgroundColor: '#fff',
    borderRadius: '20px'
  }
}))

const Modal = ({ isOpen, onClose }) => {
  const classes = useStyles()

  return (
    <>
      <MuiModal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          className={classes.paper}
        >
          <ModalContent onClose={onClose} />
        </div>
      </MuiModal>
    </>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
