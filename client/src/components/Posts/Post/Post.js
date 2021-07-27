import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import moment from 'moment';
import ConfirmDialog from '../../ConfirmDialog/ConfirmDialog';
import useStyles from './styles';

 
const Post = ({ post, setCurrentId, setOpen }) => {
    const [openConfirm, setOpenConfirm] = useState(false);
    const [hover, setHover] = useState(false);
    const classes = useStyles();
    
    const handleEdit = () => {
        setCurrentId(post._id);
        setOpen(true);
    }

    const onHover = () => {
        setHover(true);
    }
    const onUnhover = () => {
        setHover(false);
    }

    return (
        <>
            <ConfirmDialog post={post} openConfirm={openConfirm} setOpenConfirm={setOpenConfirm} />
            <Card className={classes.card} elevation={hover ? 2 : 0} onMouseOver={onHover} onMouseOut={onUnhover}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardTitle} variant="body1">{post.title}</Typography>
                    <Typography variant="body1" gutterBottom>{post.content}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <Typography className={classes.date} variant="caption" color="textSecondary">{moment(post.createdAt).format("DD/MM/YY LT")}</Typography>
                    <IconButton size="small" color="primary" onClick={handleEdit}>
                        <EditOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="primary" onClick={() => setOpenConfirm(true)}>
                        <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
}

export default Post;