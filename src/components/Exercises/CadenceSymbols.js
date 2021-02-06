import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cadenceItem: {
        textAlign: 'center',
        maxWidth: "60px",
        minWidth: "60px",
        color: theme.palette.text.primary,
    },
}));

function CadenceSymbols() {
    const classes = useStyles();

    return (
        <Grid item container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1" align="center">ii</Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1" align="center"> - </Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1" align="center">V</Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1" align="center"> - </Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1" align="center">I</Typography></Grid>
            <Grid item xs></Grid>
        </Grid >
    )
}

export default CadenceSymbols
