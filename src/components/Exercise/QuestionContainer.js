import React, { useState, useEffect } from "react";
// Components
import IntervalButtonContainer from "./IntervalButtonContainer";
// Arrays & Functions
import { keyboardKeyValues, cadencePatterns } from "../../shared/musicResources";
// MaterialUI
import { Grid, IconButton } from "@material-ui/core";
import { PlayCircleOutline, MusicNote } from "@material-ui/icons";
import "typeface-roboto";

function QuestionContainer(props) {

    const {
        scale,
        cadenceType,
        currentQuestionValue,
        checkIntervalAnswer,
        playNote
    } = props;

    // state used to force refresh when play cadence button is pressed (causing useEffect to play cadence)
    const [isPlayed, setPlayed] = useState({});
    // state to determine the key of the exercise (may change for each question)
    // const [questionKey, setQuestionKey] = useState('C');

    // Finds the cadence pattern by matching the string passed in with the type property
    const findChordInCadencePattern = (index) => {
        // Finds the object within the array that matches the string
        const cadenceObject = cadencePatterns.find((pattern) => pattern.type === cadenceType);
        // the cadence pattern that matches the index passed in (e.g. index of 0 relates to the values for a iim7 chord)
        const cadencePattern = cadenceObject.pattern[index];
        return cadencePattern;
    };

    const playChord = (pattern) => {
        pattern.forEach((number) => {
            playNote(number);
        });
    };

    const forceRefreshToPlayCadence = () => {
        setPlayed({});
    };

    // USEEFFECTS

    // useEffect plays cadence and interval question tone
    useEffect(() => {
        const playChordOne = setTimeout(() => { playChord(findChordInCadencePattern(0)) }, 1000)
        const playChordTwo = setTimeout(() => { playChord(findChordInCadencePattern(1)) }, 2000);
        const playChordThree = setTimeout(() => { playChord(findChordInCadencePattern(2)) }, 3000);
        const playTone = setTimeout(() => { playNote(currentQuestionValue) }, 5000);
        return () => {
            clearTimeout(playChordOne);
            clearTimeout(playChordTwo);
            clearTimeout(playChordThree);
            clearTimeout(playTone);
        };
    });

    return (
        <Grid
            container
            item
            spacing={7}
            xs={12}
            direction="row"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item container xs={12} spacing={2}>
                <IntervalButtonContainer
                    scale={scale}
                    playNote={playNote}
                    checkIntervalAnswer={checkIntervalAnswer}
                    keyboardKeyValues={keyboardKeyValues}
                />
            </Grid>

            <Grid item xs={12}>
                <IconButton onClick={() => forceRefreshToPlayCadence()}>
                    <PlayCircleOutline />
                </IconButton>
                <IconButton onClick={() => playNote(currentQuestionValue)}>
                    <MusicNote />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default QuestionContainer;
