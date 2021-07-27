import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Container, Typography, Grow, Grid, Paper, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
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
      <Box mt={4} mb={2}>
        <Grid container justify="center">
          <Grid item md={8} xs={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId} /> 
          </Grid>
        </Grid>
      </Box>

        <EditDialog currentId={currentId} setCurrentId={setCurrentId} open={open} setOpen={setOpen} />
        <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={1} style={{minHeight: "55vh"}}>
            <Grid item xs={12}>
              <Posts setCurrentId={setCurrentId} setOpen={setOpen} />
            </Grid>
          </Grid>
        </Grow>
        <Copyright />
    </Container>
  );
}

export default App;
