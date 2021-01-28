import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import MothLogo from './MothLogo';

const IntervalQuestionIcon = React.forwardRef((
    { currentQuestionValue, currentQuestionNoteName, isFinishedQuestion, isCorrectAnswer, isWrongAnswer, instrument, exerciseKeys },
    ref) => {
    // const findNoteNameFromMidiNumber = (midiNumber) => {
    //     return instrument.instrumentSounds.filter(item => item.midiNumber === midiNumber)[0];
    // }

    const widthAndHeight = 85;

    const useStyles = makeStyles((theme) => ({
        scaleTone: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            borderRadius: "50%",
            padding: '0',
            border: 'none',
        },
        '@keyframes fade-wrong': {
            '0%': { backgroundColor: theme.palette.secondary.main },
            '50%': { backgroundColor: theme.palette.error.main },
            '100%': { backgroundColor: theme.palette.secondary.main },
        },
        '@keyframes fade-correct': {
            '0%': { backgroundColor: theme.palette.secondary.main },
            '100%': { backgroundColor: theme.palette.primary.main },
        },
        questionBackground: {
            backgroundColor: theme.palette.secondary.main,
        },
        incorrectBackground: {
            animation: '$fade-wrong 1s ease-out',
            backgroundColor: theme.palette.secondary.main
        },
        correctBackground: {
            animation: '$fade-correct 400ms ease-out',
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
            textTransform: "none",
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
            <div className={`${classes.scaleTone} 
                ${(isWrongAnswer === ref.current && isWrongAnswer !== 0) ? classes.incorrectBackground
                    : isCorrectAnswer ? classes.correctBackground
                        : classes.questionBackground}`}>
                <Typography className={classes.text} variant="button">{isCorrectAnswer ? currentQuestionNoteName : '?'}</Typography>
                <div className={classes.logo}>
                    <MothLogo widthAndHeight={widthAndHeight} />
                </div>
            </div>
        </Grid>
    )
});

export default IntervalQuestionIcon
