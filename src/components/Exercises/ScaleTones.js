import React, { useState, useEffect } from "react";
import IntervalButtons from "../common/IntervalButtons";

import { cadencePatterns } from "../../resources/musicResources";
import { Grid, IconButton } from "@material-ui/core";

function ScaleTones({
    scale,
    availableNotes,
    cadenceType,
    currentQuestionValue,
    currentQuestionIndex,
    checkIntervalAnswer,
    playNote,
    isLoading
}) {

    // force refresh when play cadence button is pressed
    const [isPlayed, setPlayed] = useState({});
    const [isFinishedQuestion, setIsFinishedQuestion] = useState(false);
    // state to determine the key of the exercise (may change for each question)
    // const [questionKey, setQuestionKey] = useState('C');

    const findChordInCadencePattern = (index) => {
        const cadenceObject = cadencePatterns.find((pattern) => pattern.type === cadenceType);
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

    useEffect(() => {
        setIsFinishedQuestion(false);
        if (!isLoading) {
            // debugger;
            const playChordOne = setTimeout(() => { playChord(findChordInCadencePattern(0)) }, 1000);
            const playChordTwo = setTimeout(() => { playChord(findChordInCadencePattern(1)) }, 2000);
            const playChordThree = setTimeout(() => { playChord(findChordInCadencePattern(2)) }, 3000);
            const playTone = setTimeout(() => { playNote(currentQuestionValue) }, 5000);
            const finishedQuestion = setTimeout(() => {
                setIsFinishedQuestion(true);
            }, 6000);
            return () => {
                clearTimeout(playChordOne);
                clearTimeout(playChordTwo);
                clearTimeout(playChordThree);
                clearTimeout(playTone);
                clearTimeout(finishedQuestion);
            };
        }

    }, [isPlayed, currentQuestionIndex, isLoading]);

    return (
        <>
            <Grid item container justify="center" alignItems="center" spacing={2}>
                <IntervalButtons
                    scale={scale}
                    availableNotes={availableNotes}
                    playNote={playNote}
                    checkIntervalAnswer={checkIntervalAnswer}
                    currentQuestionValue={currentQuestionValue}
                    isFinishedQuestion={isFinishedQuestion}
                />
            </Grid>
        </>
    );
}

export default ScaleTones;
