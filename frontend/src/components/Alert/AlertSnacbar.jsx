import { Alert, Slide, Snackbar } from '@mui/material'
import React from 'react'

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function AlertSnacbar({ open, onClose, status, message }) {
  return (
    <>
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            TransitionComponent={SlideTransition}
            open={ open }
            onClose={ onClose }
            autoHideDuration={ 10000 }
        >
            <Alert
                onClose={ onClose }
                severity={status}
                variant="filled"
            >
                { message }
            </Alert>
        </Snackbar>
    </>
  )
}

export default AlertSnacbar