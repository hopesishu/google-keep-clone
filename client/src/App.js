import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Container, Typography, Grow, Grid, Button, Toolbar, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import FormDialog from './components/FormDialog/FormDialog';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false); //for edit dialog
   
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar position="absolute">
        <Toolbar>
          <Typography className={classes.appBar} variant="h6">My Project</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      
      <FormDialog currentId={currentId} setCurrentId={setCurrentId} open={open} setOpen={setOpen}/>
      <Grow in>
        <Container>
          <Typography className={classes.title} variant="h4">Home</Typography>
          <Button className={classes.newPost} variant="outlined" color="primary" onClick={() => setOpen(true)}>
            Add new post!
          </Button>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts setCurrentId={setCurrentId} setOpen={setOpen}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
