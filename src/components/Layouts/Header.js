import React from 'react';
import { Link } from 'react-router-dom';
// MaterialUI
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    headerStyles: {
        boxShadow: "0px 0px 0px 0px"
    },
    titleStyles: {
        flex: 1
    }
}));

function Header(props) {

    const { title, handleOpen } = props

    const classes = useStyles();

    return (
        <AppBar className={classes.headerStyles} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.titleStyles}>{title}</Typography>
                <Button component={Link} to={'/'}>Main Page</Button>
                <Button onClick={() => handleOpen()}>Options</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
