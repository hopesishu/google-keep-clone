import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function Copyright() {
    return (
        <Box mb={6} textAlign="center">
            <Typography variant="subtitle2" color="textSecondary">
                {'copyright © '}
                    hopesishu
                {' '}
                {new Date().getFullYear()}
            </Typography>
        </Box>
    );
}