import React, { useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import MothLogo from './MothLogo';

function IntervalQuestionIcon({ currentQuestionValue, isFinishedQuestion, isCorrectAnswer, isWrongAnswer, scale }) {
    const findNoteNameFromMidiNumber = (midiNumber) => {
        return scale.filter(item => item.midiNumber === midiNumber)[0];
    }

    const iconText = findNoteNameFromMidiNumber(currentQuestionValue).noteName;

    const widthAndHeight = 85;

    const useStyles = makeStyles((theme) => ({
        incorrectScaleTone: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            borderRadius: "50%",
            padding: '0',
            border: 'none',
            // Add in fade background when question is finished
            animation: 'fade 2s linear',
            backgroundColor: isWrongAnswer ? theme.palette.error.main : theme.palette.secondary.main,
        },
        '@keyframes fade': {
            '0%': { opacity: 0 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0 },
        },
        incorrectAnswer: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            borderRadius: "50%",
            padding: '0',
            border: 'none',
            // Add in fade background when question is finished
            transition: "backgroundColor 1s ease-in",
            backgroundColor: theme.palette.secondary.main,
        },
        correctAnswer: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            borderRadius: "50%",
            padding: '0',
            border: 'none',
            // Add in fade background when question is finished
            transition: "backgroundColor 1s ease-in",
            backgroundColor: theme.palette.primary.main,
        },
        text: {
            gridColumnStart: '1',
            gridColumnEnd: '2',
            gridRowStart: '1',
            gridRowEnd: '2',
            zIndex: '3',
            justifySelf: 'center',
            alignSelf: 'center',
            color: '#ffffff',
        },
        logo: {
            gridColumnStart: '1',
            gridColumnEnd: '2',
            gridRowStart: '1',
            gridRowEnd: '2',
            zIndex: '2',
            justifySelf: 'center',
            alignSelf: 'center',
        },
    }));

    const classes = useStyles(isFinishedQuestion, isWrongAnswer);

    return (
        <Grid item>
            <div className={isCorrectAnswer ? classes.correctAnswer : isWrongAnswer ? classes.incorrectScaleTone : classes.incorrectAnswer}>
                <Typography className={classes.text} variant="button">{isCorrectAnswer ? iconText : '?'}</Typography>
                <div className={classes.logo}>
                    <MothLogo widthAndHeight={widthAndHeight} />
                </div>
            </div>
        </Grid>
    )
}

export default IntervalQuestionIcon
