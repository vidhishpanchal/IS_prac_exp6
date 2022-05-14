import { makeStyles, Modal, Paper } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: '10px'
    },
})

function Success({success, open, handleClose}) {
    const classes = styles()
    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper className={classes.paper}>
                {success ? (
                    <>
                        <img src='https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif' alt='Success' width='400px' />
                        <h2 style={{textAlign: 'center'}}>Successful</h2>
                    </>
                ) : (
                    <>
                        <img src='https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif' alt='Failed' width='400px' />
                        <h2 style={{textAlign: 'center'}}>Failed</h2>
                    </>
                )}
            </Paper>
        </Modal>
    )
}

export default Success
