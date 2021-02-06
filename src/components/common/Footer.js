import React, { useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import { PlayCircleOutline, MusicNote } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[700],
        boxShadow: "0px 0px 0px 0px",
        // top: 'auto',
        bottom: '0'
    },
    titleStyles: {
        color: theme.palette.grey[900]
    },
    button: {
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    footer: {
        // padding: theme.spacing(0, 2),
        margin: "auto 0 0 0",
        backgroundColor: theme.palette.grey[700],
    },
}));

function Footer({ randomQuestion, isLoading, forceRefreshToPlayCadence, playNote, isFinishedQuestion }) {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid item container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs className={classes.button}>
                    {isLoading
                        ? <></>
                        : <Button
                            disabled={!isFinishedQuestion}
                            variant="text"
                            onClick={() => forceRefreshToPlayCadence()}
                            startIcon={<PlayCircleOutline />}>
                            <Typography variant="button" noWrap>REPLAY QUESTION</Typography>
                        </Button>}
                </Grid>
                <Grid item xs className={classes.button}>
                    {isLoading
                        ? <></>
                        : <Button
                            variant="text"
                            onClick={() => playNote(randomQuestion.midiNumber)}
                            startIcon={<MusicNote />}>
                            <Typography variant="button" noWrap>REPLAY SCALE TONE</Typography>
                        </Button>}
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
