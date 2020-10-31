// Considerations:
// i) Create a more complex event listener:
// a) Keyup or mouseup triggering a new sample of the tail end of the note (the sample of the key in NI) 
// ii) Use styling rules to dynamically change the colour of the buttons on click:
// a) Current scale type (stays until another is clicked)
// b) Interval button changes colour on keydown and reverts on keyup

import React, { useState, useEffect } from "react";
// Components
import ScaleButtonContainer from "./ScaleButtonContainer";
import IntervalButtonContainer from "./IntervalButtonContainer";
import SoundButtonContainer from "./SoundButtonContainer";
// Arrays & Functions
import {
    getScaleKeys,
    scalePatterns,
    instruments,
    keyboardKeyValues,
    playSoundWithKeys
} from "../../shared/scales";
// MaterialUI
import {
    // makeStyles,
    Typography,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@material-ui/core";
import "typeface-roboto";

function ExerciseContainer() {

    // VARIABLES

    // Provides the all the available notes for setting the default state
    const defaultNotes = instruments[0].instrumentSounds;
    // Provides the major scale for the initial state
    const defaultScalePattern = scalePatterns[0].pattern;
    // Provides the major scale as the default state
    const defaultScaleType = scalePatterns[0].scaleType;

    // STATES

    // scale useState sets the note keys based on the scale tape button pressed
    const [scale, setScale] = useState(getScaleKeys(defaultScalePattern, defaultNotes));

    // changes the style of the selected scale type button (to show which is pressed)
    const [selectedScale, setSelectedScale] = useState(defaultScaleType);

    // toggleSwitch useState toggles the event listeners in useEffect
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: true });

    // sets the state for the audio as an array of audio objects (currently identified by the index)
    // future: find a more precise and less breakable way of identifying each array
    // Cal's future problem:
    // ** On a server he had to use the play method and stop straight away in order to have the note loaded
    const [instrumentSounds, setInstrumentSounds] = useState(getSoundObjects(defaultNotes));

    useEffect(() => {
        // If the toggle switch is on adds keydown event listener
        // playSoundWithKeys listens for key value and triggers the approriate sound (Wes Bos)
        toggleSwitch.keyboardSwitch
            ? window.addEventListener('keydown', playSoundWithKeys)
            : window.removeEventListener('keydown', playSoundWithKeys);
    })

    // STYLES

    // FUNCTIONS

    // Creates an array of audio objects
    function getSoundObjects(noteArray) {
        return noteArray.map((item) => {
            return new Audio(item.sound);
        })
    }

    // Changes the state of the sound objects
    const changeInstrumentSound = (instrumentSounds) => {
        setInstrumentSounds(getSoundObjects(instrumentSounds));
    }

    // Changes the state of the interval buttons (it is passed the string from the scale type button)
    const changeScale = (scaleType) => {
        setScale(getScaleKeys(scalePatterns.find(item => item.scaleType === scaleType).pattern, defaultNotes));
        // Sets the colour of the clicked button to a different colour to show which scale is selected
        setSelectedScale(scaleType);
    }

    // Plays the audio element where the id of the element matched the number property of the scale
    const playSound = (keyNumber) => {
        // Match the keyNumber to the corresponding index of the array of audio objects
        const sound = instrumentSounds[keyNumber];
        // Must reset currentTime otherwise have to wait for the sample to end to replay
        sound.currentTime = 0;
        sound.play();
    }

    // Changes the state of the toggle switch
    const handleChange = (e) => {
        setToggleSwitch({ ...toggleSwitch, [e.target.name]: e.target.checked });
    }

    return (
        <>
            <Typography variant="h1">Scale Selector</Typography>

            <SoundButtonContainer
                changeInstrumentSound={changeInstrumentSound}
            />

            <ScaleButtonContainer
                buttonIsClicked={selectedScale}
                changeScale={changeScale} />

            <IntervalButtonContainer
                scale={scale}
                playSound={playSound}
                keyboardKeyValues={keyboardKeyValues} />

            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={toggleSwitch.keyboardSwitch}
                            onChange={handleChange}
                            name="keyboardSwitch"
                            color="primary" />
                    }
                    label="Play with keyboard">
                </FormControlLabel>
            </FormGroup>
        </>
    );
}

export default ExerciseContainer;
