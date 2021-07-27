import React from 'react';
import { Grid, CircularProgress, Typography, Box } from '@material-ui/core'
import { useSelector } from 'react-redux';//fetch data from global redux store

import Post from './Post/Post';
    
const Posts = ({ setCurrentId, setOpen }) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        !posts.length ? 
            <Box>
                <Typography variant="body1" color="textSecondary" align="center">there are currently no notes</Typography> 
                <Typography variant="body1" color="textSecondary" align="center">write a note! &#127850; </Typography>
            </Box>
            : (
            <Grid container spacing={2}>
                {posts.slice(0).reverse().map((post) => (
                    <Grid key={post._id} item xs={12} md={3}>
                        <Post post={post} setCurrentId={setCurrentId} setOpen={setOpen} />
                    </Grid>
                ))}
                {/* {posts.map((post) => (
                    <Grid key={post._id} item xs={12} md={3}>
                        <Post post={post} setCurrentId={setCurrentId} setOpen={setOpen} />
                    </Grid>
                ))} */}
            </Grid>
        )
    );
}

export default Posts;