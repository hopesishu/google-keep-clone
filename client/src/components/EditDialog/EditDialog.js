import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, IconButton, InputBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import useStyles from './styles';

export default function FormDialog({ currentId, setCurrentId, open, setOpen }) {
    const [postData, setPostData] = useState({title: '', content: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();
 
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]); //when post value changes, run function in useEffect

    const handleClose = () => {
        setOpen(false);
        clear();
    };

    const handleSubmit = (e) => {
      e.preventDefault(); //prevent refresh in browser
      if (currentId) {
        dispatch(updatePost(currentId, postData));
      } else {
        dispatch(createPost(postData));
      }
      handleClose();
    };

    const clear = () => {
      setCurrentId(null);
      setPostData({title: '', content: ''});
    };

    return (
        <div>
          <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <DialogContent>
                <InputBase
                  className={classes.title}
                  placeholder="title"
                  inputProps={{ 'aria-label': 'title' }}
                  value={postData.title}
                  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  multiline
                  fullWidth
                />
                <InputBase
                    placeholder="take a note..."
                    inputProps={{ 'aria-label': 'take a note' }}
                    value={postData.content}
                    onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                    multiline
                    fullWidth
                />
                {/* <TextField
                  name="title"
                  id="title-textarea"
                  label="Title"
                  placeholder="Enter title here"
                  variant="outlined"
                  value={postData.title}
                  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  multiline
                  fullWidth
                  />
                <TextField
                  name="content"
                  id="content-textarea"
                  label="Content"
                  placeholder="Enter text here"
                  variant="outlined"
                  value={postData.content}
                  onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                  rows={6}
                  multiline
                  fullWidth
                /> */}
              </DialogContent>
              <DialogActions className={classes.dialogActions}>
                <IconButton size="small" onClick={handleClose}>
                  <CloseOutlinedIcon />
                </IconButton>
                <IconButton size="small" type="submit" color="primary">
                  <DoneOutlinedIcon />
                </IconButton>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      );
}