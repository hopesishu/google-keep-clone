import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';//fetch data from global redux store

import Post from './Post/Post';
    
const Posts = ({ setCurrentId, setOpen }) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        !posts.length ? <Typography variant="body1">there are currently no posts</Typography> : (
            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} md={3}>
                        <Post post={post} setCurrentId={setCurrentId} setOpen={setOpen} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;