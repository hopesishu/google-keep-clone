import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function Copyright() {
    return (
        <Box mb={6}>
            <Typography variant="body1" color="textPrimary" align="center">
                {'copyright © '}
                    hopesishu
                {' '}
                {new Date().getFullYear()}
            </Typography>
        </Box>
    );
}