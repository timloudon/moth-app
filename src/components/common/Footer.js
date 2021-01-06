import React from 'react'
import { Grid, AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import { PlayCircleOutline, MusicNote } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[700],
        boxShadow: "0px 0px 0px 0px",
        top: 'auto',
        bottom: '0'
    },
    titleStyles: {
        color: theme.palette.grey[900]
    },
    button: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

function Footer({ forceRefreshToPlayCadence, playNote, currentQuestionValue }) {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <Grid item container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}>
                    <Grid item xs></Grid>
                    <Grid item xs className={classes.button}>
                        <Button
                            variant="text"
                            onClick={() => forceRefreshToPlayCadence()}
                            startIcon={<PlayCircleOutline />}>
                            <Typography variant="button" noWrap>REPLAY QUESTION</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs className={classes.button}>
                        <Button
                            variant="text"
                            onClick={() => playNote(currentQuestionValue)}
                            startIcon={<MusicNote />}>
                            <Typography variant="button" noWrap>REPLAY SCALE TONE</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Footer