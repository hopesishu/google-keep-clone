import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import useStyles from './styles';

import { deletePost } from '../../actions/posts'; 

const ConfirmDialog = ({ post, openConfirm, setOpenConfirm }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpenConfirm(false);
    };
 
    return (
        <div>
          <Dialog
            open={openConfirm}
            onClose={handleClose}
            maxWidth="xs"
            >
            <DialogContent>
              <DialogContentText>
                delete note?
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              {/* <Button onClick={handleClose} color="primary">
                Cancel
              </Button> */}
              <IconButton size="small" onClick={handleClose}>
                <CloseOutlinedIcon />
              </IconButton>
              <IconButton size="small" onClick={() => dispatch(deletePost(post._id))} color="primary" autoFocus>
                <DeleteOutlinedIcon />
              </IconButton>
              {/* <Button onClick={() => dispatch(deletePost(post._id))} color="primary" autoFocus>
                Delete
              </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default ConfirmDialog;