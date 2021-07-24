import React, { useState } from 'react';
import { Card, CardHeader, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import ConfirmDialog from '../../ConfirmDialog/ConfirmDialog';
import useStyles from './styles';

 
const Post = ({ post, setCurrentId, setOpen }) => {
    const [openConfirm, setOpenConfirm] = useState(false);
    const classes = useStyles();
    
    const handleEdit = () => {
        setCurrentId(post._id);
        setOpen(true);
    }

    return (
        <>
        <ConfirmDialog post={post} openConfirm={openConfirm} setOpenConfirm={setOpenConfirm} />
        <Card>
            <CardHeader 
                title={post.title} 
                subheader={moment(post.createdAt).format("LLL")}
                action={
                    <Button style={{color: 'black'}} size="small" onClick={handleEdit}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>}
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body1" gutterBottom>{post.content}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => setOpenConfirm(true)}>
                    <DeleteIcon fontSize="small" />
                </Button>
            </CardActions>
        </Card>
        </>
    );
}

export default Post;