import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import MothLogo from './MothLogo';

function IntervalQuestionIcon({ currentQuestionValue, isFinishedQuestion, isCorrectAnswer, scale }) {

    console.log('IntervalQuestionIcon rendered');

    const findNoteNameFromMidiNumber = (midiNumber) => {
        return scale.filter(item => item.midiNumber === midiNumber)[0];
    }

    const iconText = findNoteNameFromMidiNumber(currentQuestionValue).noteName;

    const widthAndHeight = 85;

    const useStyles = makeStyles((theme) => ({
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

    const classes = useStyles(isFinishedQuestion);

    return (
        <div className={isCorrectAnswer ? classes.correctAnswer : classes.incorrectAnswer}>
            <Typography className={classes.text} variant="button">{isCorrectAnswer ? iconText : '?'}</Typography>
            <div className={classes.logo}>
                <MothLogo widthAndHeight={widthAndHeight} />
            </div>
        </div>
    )
}

export default IntervalQuestionIcon
