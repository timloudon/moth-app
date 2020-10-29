// Considerations:
// i) Have the audio of each key pre-rendered as a component (longer initial loading time)?
// ii) Use styling rules to dynamically change the colour of the buttons on click:
// a) Current scale type (stays until another is clicked)
// b) Interval button changes colour on keydown and reverts on keyup

import React, { useState, useEffect } from "react";
// Components
import ScaleButtonContainer from "./ScaleButtonContainer";
import IntervalButtonContainer from "./IntervalButtonContainer";
// import IntervalSound from "./IntervalSound";
// Arrays & Functions
import {
    getScaleKeys,
    scalePatterns,
    scalePatternsEnum,
    pianoKeys,
    keyboardKeyValues,
    playSoundWithKeys
} from "../../shared/scales";
// MaterialUI
import {
    // Grid,
    Typography,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@material-ui/core";
import "typeface-roboto";

function ExerciseContainer() {

    // scale useState sets the note keys based on the scale tape button pressed
    const [scale, setScale] = useState(getScaleKeys(scalePatternsEnum.major, pianoKeys));
    // toggleSwitch useState toggles the event listeners in useEffect
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: false });
    // sets the state for the audio as an array of audio objects (currently identified by the index)
    // future: find a more precise and less breakable way of identifying each array
    // Cal's future problem:
    // ** On a server he had to use the play method and stop stragight away in order to have the note loaded
    const [allPianoKeys, setAllPianoKeys] = useState(getSoundObjects(pianoKeys));

    useEffect(() => {
        // If the toggle switch is on adds keydown event listener
        // playSoundWithKeys listens for key value and triggers the approriate sound (Wes Bos)
        toggleSwitch.keyboardSwitch
            ? window.addEventListener('keydown', playSoundWithKeys)
            : window.removeEventListener('keydown', playSoundWithKeys);
    })

    // Changes the state of the toggle switch
    const handleChange = (e) => {
        setToggleSwitch({ ...toggleSwitch, [e.target.name]: e.target.checked });
    }

    // Changes the state of the interval buttons (it is passed the string from the scale type button)
    const changeIntervalButtons = (scaleType) => {
        setScale(getScaleKeys(scalePatterns.find(item => item.scaleType === scaleType).pattern, pianoKeys));
        console.log(scaleType);
    }

    // Creates an array of audio objects
    function getSoundObjects(noteArray) {
        return noteArray.map((item) => {
            return new Audio(item.sound);
        })
    }
    getSoundObjects();

    // Plays the audio element where the id of the element matched the number property of the scale
    const playSound = (keyNumber) => {
        // To Do:
        // Which button was pressed (keyNumber)
        // Which Audio object has the matching id (to keynumber)
        // Play that audio object (how to access within this function)

        // Match the keyNumber to the corresponding index of the array of audio objects

        // Gets the audio element with an id that matches the key number of the button pressed
        // console.log(keyNumber, 'keyNumber');
        // console.log(document.getElementById(`${keyNumber}`))
        // const sound = document.getElementById(`${keyNumber}`);
        // console.log(sound, 'sound elements');
        // // Must reset currentTime otherwise have to wait for the sample to end to replay
        // sound.currentTime = 0;
        // sound.play();
    }

    return (
        <>
            <Typography variant="h1">Scale Selector</Typography>

            <ScaleButtonContainer
                changeIntervalButtons={changeIntervalButtons} />

            <IntervalButtonContainer
                scale={scale}
                playSound={playSound}
                keyboardKeyValues={keyboardKeyValues} />
            {/* <IntervalSound */}
            {/* allNotes={pianoKeys} /> */}

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
