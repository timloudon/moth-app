import React from 'react';
// MaterialUI
import {
    AppBar,
    Toolbar,
    Typography,
    // Button,
    // IconButton
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {

    const { title } = props

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">{title}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
