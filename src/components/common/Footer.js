import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ExerciseFooterButtons from '../Exercises/ExerciseFooterButtons';
import Exercise from '../Exercises/Exercise';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[700],
        boxShadow: "0px 0px 0px 0px",
        // top: 'auto',
        bottom: '0',
    },
    footer: {
        // padding: theme.spacing(0, 2),
        margin: "auto 0 0 0",
        backgroundColor: theme.palette.grey[700],
        height: '54px',
    },
}));

function Footer({ randomQuestion, isLoading, forceRefreshToPlayCadence, playNote, isFinishedQuestion }) {
    const classes = useStyles();

    const page = 'dashboard';

    function renderSwitch(page) {
        switch (page) {
            case 'dashboard':
                return <></>
            case 'exercise':
                return <ExerciseFooterButtons
                    randomQuestion={randomQuestion}
                    isLoading={isLoading}
                    forceRefreshToPlayCadence={forceRefreshToPlayCadence}
                    playNote={playNote}
                    isFinishedQuestion={isFinishedQuestion}
                />
            case 'options':
                return <></>
        }
    }

    return (
        <footer className={classes.footer}>
            <Grid item container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                {renderSwitch(page)}
            </Grid>
        </footer>
    )
}

export default Footer
