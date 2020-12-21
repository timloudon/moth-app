import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[700],
        boxShadow: "0px 0px 0px 0px",
        top: 'auto',
        bottom: '0'
    },
    titleStyles: {
        color: theme.palette.grey[900]
    }
}));

function Footer() {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                {/* put buttons here */}
            </Toolbar>
        </AppBar>
    )
}

export default Footer
