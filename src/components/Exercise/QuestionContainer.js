// Considerations:
// i) Create a more complex event listener:
// a) Keyup or mouseup triggering a new sample of the tail end of the note (the sample of the key in NI) 
// ii) Use styling rules to dynamically change the colour of the buttons on click:
// a) Current scale type (stays until another is clicked)
// b) Interval button changes colour on keydown and reverts on keyup

import React, { useState, useEffect } from "react";
// Components
// import ScaleButtonContainer from "./ScaleButtonContainer";
import IntervalButtonContainer from "./IntervalButtonContainer";
// Arrays & Functions
import {
    keyboardKeyValues,
    cadencePatterns
} from "../../shared/musicResources";
// MaterialUI
import {
    Grid,
    IconButton
} from "@material-ui/core";
import {
    PlayCircleOutline,
    MusicNote
} from "@material-ui/icons";
import "typeface-roboto";

function QuestionContainer(props) {

    const { scale, instrumentSounds, cadenceAndScaleType, currentQuestionValue, checkIntervalAnswer } = props;

    // state used to force refresh when play cadence button is pressed (causing useEffect to play cadence)
    const [, setRefresh] = useState({})

    // Finds the cadence pattern by matching the string passed in with the type property
    const findChordInCadencePattern = (index) => {
        // Finds the object within the array that matches the string
        const cadenceObject = cadencePatterns.find(pattern => pattern.type === cadenceAndScaleType);
        // the cadence pattern that matches the index passed in (e.g. index of 0 relates to the values for a iim7 chord)
        const cadencePattern = cadenceObject.pattern[index];
        return cadencePattern;
    }

    // Plays each note within a chord (plays each chord from the 2D cadence pattern)
    const playChord = (pattern) => {
        pattern.forEach(item => playSound(item))
    }

    // Plays the audio element where the id of the element matches the number property of the scale
    const playSound = (keyNumber) => {
        // Match the keyNumber to the corresponding index of the array of audio objects
        const sound = instrumentSounds[keyNumber];
        // Must reset currentTime otherwise have to wait for the sample to end to replay
        sound.currentTime = 0;
        sound.play();
    }

    // Forces a refresh by changing state
    const forceRefreshToPlayCadence = () => {
        setRefresh({});
    }

    // USEEFFECTS

    // useEffect plays cadence and interval question tone on load and state change
    useEffect(() => {
        // Play the cadence after a delay (nested timeouts, waits 1 second after render)
        const cadenceTimer = setTimeout(() => {
            // first chord (instant)
            playChord(findChordInCadencePattern(0));
            // second chord (1 second)
            setTimeout(() => {
                playChord(findChordInCadencePattern(1));
            }, 1000);
            // third chord (2 seconds)
            setTimeout(() => {
                playChord(findChordInCadencePattern(2));
            }, 2000);
        }, 1000);
        // Play the currentQuestionValue interval (5 seconds delay for cadence)
        const toneTimer = setTimeout(() => {
            playSound(currentQuestionValue);
        }, 5000);
        // Cleanup
        return () => {
            clearTimeout(cadenceTimer);
            clearTimeout(toneTimer);
        };
    });

    return (
        <Grid container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="stretch">

            <Grid item xs={2}></Grid>
            <Grid container item
                spacing={7}
                xs={8}
                direction="row"
                justify="flex-start"
                alignItems="stretch">

                <Grid item
                    xs={12} >
                    <IntervalButtonContainer
                        scale={scale}
                        playSound={playSound}
                        checkIntervalAnswer={checkIntervalAnswer}
                        keyboardKeyValues={keyboardKeyValues} />
                </Grid>

                <Grid item xs={12}>
                    <IconButton onClick={() => forceRefreshToPlayCadence()}>
                        <PlayCircleOutline />
                    </IconButton>
                    <IconButton onClick={() => playSound(currentQuestionValue)}>
                        <MusicNote />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={2}></Grid>

        </Grid >
    );
}

export default QuestionContainer;
