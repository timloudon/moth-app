import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from "../common/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function SpinnerLogo({ isLoading }) {

    const classes = useStyles();

    return (
        <>
            <Grid container item
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.root}
            >
                <CircularProgress color="secondary" />
            </Grid>
            <Footer />
        </>
    )
}

export default SpinnerLogo
