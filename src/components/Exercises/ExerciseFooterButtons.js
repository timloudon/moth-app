import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { PlayCircleOutline, MusicNote } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    titleStyles: {
        color: theme.palette.grey[900]
    },
    button: {
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

function ExerciseFooterButtons({ randomQuestion, isLoading, forceRefreshToPlayCadence, playNote, isFinishedQuestion }) {
    const classes = useStyles();

    return (
        <>
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
        </>
    )
}

export default ExerciseFooterButtons
