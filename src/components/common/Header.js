import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[700],
        boxShadow: "0px 0px 0px 0px"
    },
    titleStyles: {
        flex: 1,
        color: theme.palette.grey[900]
    }
}));

function Header({ title, handleOpen }) {

    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h1" className={classes.titleStyles}>{title}</Typography>
                <Button component={Link} to={'/'}>Main Page</Button>
                <Button onClick={() => handleOpen()}>Options</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
