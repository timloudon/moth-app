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
    cadencePatterns,
    midiCadencePatterns
} from "../../shared/musicResources";
// import { useTimeout } from "../../shared/helperFunctions";
// MaterialUI
import { Grid, IconButton, Button } from "@material-ui/core";
import { PlayCircleOutline, MusicNote } from "@material-ui/icons";
import "typeface-roboto";

function QuestionContainer(props) {

    const {
        scale,
        instrumentSounds,
        cadenceType,
        currentQuestionValue,
        checkIntervalAnswer,
        playNote
    } = props;

    // state used to force refresh when play cadence button is pressed (causing useEffect to play cadence)
    const [isPlayed, setPlayed] = useState({});

    // Finds the cadence pattern by matching the string passed in with the type property
    const findChordInCadencePattern = (index) => {
        // Finds the object within the array that matches the string
        const cadenceObject = cadencePatterns.find(
            (pattern) => pattern.type === cadenceType
        );
        // the cadence pattern that matches the index passed in (e.g. index of 0 relates to the values for a iim7 chord)
        const cadencePattern = cadenceObject.pattern[index];
        console.log(cadencePattern, 'cadencePattern')
        return cadencePattern;
    };

    // Plays each note within a chord (plays each chord from the 2D cadence pattern)
    const playChord = (pattern) => {
        // pattern.forEach((item) => playSound(item));
        pattern.forEach((item) => {
            console.log(item, 'playChord item');
            playNote(item);
            // playSound(item);
        });
    };

    // handlePlayNoteInput = (midiNumber1, midiNumber2, midiNumber3) => {
    //     this.props.onPlayNoteInput(midiNumber);
    //     this.props.onPlayNoteInput(midiNumber, { prevActiveNotes: prevState.activeNotes });
    //     this.props.onPlayNoteInput(midiNumber, { prevActiveNotes: prevState.activeNotes });
    // };

    // Plays the audio element where the id of the element matches the number property of the scale
    const playSound = (keyNumber) => {
        // Match the keyNumber to the corresponding index of the array of audio objects
        const sound = instrumentSounds[keyNumber];
        // Must reset currentTime otherwise have to wait for the sample to end to replay
        sound.currentTime = 0;
        sound.play();
    };

    // Forces a refresh by changing state
    const forceRefreshToPlayCadence = () => {
        console.log("set refresh");
        setPlayed({});
    };

    // USEEFFECTS

    // useEffect plays cadence and interval question tone on load and state change
    useEffect(() => {

        // IDEA: Have the play cadence and tone button disabled whilst this useEffect happens

        // Play the cadence followed by the interval question
        const playChordOne = setTimeout(() => { playChord(findChordInCadencePattern(0)) }, 1000)
        const playChordTwo = setTimeout(() => { playChord(findChordInCadencePattern(1)) }, 2000);
        const playChordThree = setTimeout(() => { playChord(findChordInCadencePattern(2)) }, 3000);
        const playTone = setTimeout(() => { playSound(currentQuestionValue) }, 5000);
        // Cleanup
        return () => {
            clearTimeout(playChordOne);
            clearTimeout(playChordTwo);
            clearTimeout(playChordThree);
            clearTimeout(playTone);
        };
        // useEffect will only be triggered by initial render and change of isPlayed state
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
                    playSound={playSound}
                    playNote={playNote}
                    checkIntervalAnswer={checkIntervalAnswer}
                    keyboardKeyValues={keyboardKeyValues}
                />
                {/* <Button onClick={() => playNote(72)}>C4</Button>
                <Button onClick={() => stopNote(72)}>Stop</Button> */}
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
    );
}

export default QuestionContainer;
