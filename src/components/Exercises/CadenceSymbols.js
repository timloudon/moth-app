import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cadenceItem: {
        padding: theme.spacing(2),
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
            spacing={2}>
            <Grid item xs></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1">ii</Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1"> - </Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1">V</Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1"> - </Typography></Grid>
            <Grid item className={classes.cadenceItem} xs={1}><Typography variant="h1">I</Typography></Grid>
            <Grid item xs></Grid>
        </Grid>
    )
}

export default CadenceSymbols
