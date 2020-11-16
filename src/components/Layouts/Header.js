import React from 'react';
import { Link } from 'react-router-dom';
// MaterialUI
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {

    const { title } = props

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h6">{title}</Typography>
                    </Grid>
                    <Grid container
                        item xs={6}
                        spacing={4}
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                        {/* Link points back to routing in App component */}
                        <Grid item><Link to={'/'}>Main Page</Link></Grid>
                        <Grid item><Link to={`../Options/Options`}>Options</Link></Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
