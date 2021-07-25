import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
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
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardTitle} variant="body1">{post.title}</Typography>
                    <Typography variant="body1" gutterBottom>{post.content}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton size="small" color="primary" onClick={() => setOpenConfirm(true)}>
                        <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="primary" onClick={handleEdit}>
                        <EditOutlinedIcon fontSize="small" />
                    </IconButton>
                    <Typography className={classes.date} variant="caption" color="textSecondary">{moment(post.createdAt).format("DD/MM/YY LT")}</Typography>
                </CardActions>
            </Card>
        </>
    );
}

export default Post;