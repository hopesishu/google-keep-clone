import React, { useState, useEffect } from 'react';
import { Grid, Button, TextField, Card, CardContent, CardActions, InputBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

export default function Form({ currentId, setCurrentId }) {
    const classes = useStyles();
    const [postData, setPostData] = useState({title: '', content: ''});
    // const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const post = useSelector((state) => null);
    const dispatch = useDispatch();
 
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]); //when post value changes, run function in useEffect

    const handleSubmit = (e) => {
      e.preventDefault(); //prevent refresh in browser
      if (currentId) {
        dispatch(updatePost(currentId, postData));
      } else {
        dispatch(createPost(postData));
      }
      clear();
    };

    const clear = () => {
      setCurrentId(null);
      setPostData({title: '', content: ''});
    };

    return (
        <Grid container justify="center">
            <Grid item md={8} xs={12}>
                <Card>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <CardContent>
                            <InputBase
                                className={classes.formTitle}
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
                                rows={1}
                                multiline
                                fullWidth
                            /> */}
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" type="submit" color="primary">
                                Post
                            </Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}