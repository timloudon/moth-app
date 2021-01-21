import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from "../common/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(1),
        },
        minHeight: '85vh',
    },
}));

function SpinnerLogo({ isLoading }) {

    const classes = useStyles();

    return (
        <>
            <Grid container item
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.root}
            >
                <CircularProgress />
            </Grid>
            <Footer isLoading={isLoading} />
        </>
    )
}

export default SpinnerLogo
