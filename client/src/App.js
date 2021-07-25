import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Container, Typography, Grow, Grid, Button, Toolbar, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import Form from './components/Form/Form';
import EditDialog from './components/EditDialog/EditDialog';
import Copyright from './components/Copyright/Copyright'
// import FormDialog from './components/FormDialog/FormDialog';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false); // for edit dialog

  // useEffect(() => {
  //   document.title = "google keep clone";
  // }, []);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="md">
        {/* <FormDialog currentId={currentId} setCurrentId={setCurrentId} open={open} setOpen={setOpen}/> */}
        <Box my={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} /> 
        </Box>

        <EditDialog currentId={currentId} setCurrentId={setCurrentId} open={open} setOpen={setOpen} />
        <Grow in>
          <Box mb={4}>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12}>
                <Posts setCurrentId={setCurrentId} setOpen={setOpen} />
              </Grid>
            </Grid>
          </Box>
        </Grow>
        <Copyright />
    </Container>
  );
}

export default App;
