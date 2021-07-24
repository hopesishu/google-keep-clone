import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../actions/posts'; 

const ConfirmDialog = ({ post, openConfirm, setOpenConfirm }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpenConfirm(false);
    };

    return (
        <div>
          <Dialog
            open={openConfirm}
            onClose={handleClose}
            >
            <DialogTitle>Delete Post</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this post?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={() => dispatch(deletePost(post._id))} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default ConfirmDialog;