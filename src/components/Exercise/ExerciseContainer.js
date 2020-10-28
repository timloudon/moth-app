// Considerations:
// i) Have the audio of each key pre-rendered as a component (longer initial loading time)?

import React, { useState, useEffect } from "react";
import ScaleButtonContainer from "./ScaleButtonContainer";
import {
    getScaleKeys,
    scalePatterns,
    scalePatternsEnum,
    pianoKeys,
    keyboardKeyValues,
    playSoundWithKeys
} from "../../shared/scales";
import {
    Grid,
    Typography,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@material-ui/core";
import "typeface-roboto";
import IntervalButtonContainer from "./IntervalButtonContainer";

function ExerciseContainer() {

    // scale useState sets the note keys based on the scale tape button pressed
    const [scale, setScale] = useState(getScaleKeys(scalePatternsEnum.major, pianoKeys));
    // toggleSwitch useState toggles the event listeners in useEffect
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: false });

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
    }

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Typography variant="h1">Scale Selector</Typography>
            </Grid>
            <Grid
                container
                spacing={4}
                direction="row"
                alignContent="center"
                alignItems="stretch"
                justify="center"
            >
                {/* <ButtonStyled /> */}
                <Grid item width="200px">
                    <ScaleButtonContainer
                        changeIntervalButtons={changeIntervalButtons}
                    />
                </Grid>
                <Grid item>
                    <IntervalButtonContainer
                        scale={scale}
                        keyboardKeyValues={keyboardKeyValues}
                    />
                </Grid>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={toggleSwitch.keyboardSwitch}
                                onChange={handleChange}
                                name="keyboardSwitch"
                                color="primary"
                            />
                        }
                        label="Play with keyboard"
                    >
                    </FormControlLabel>
                </FormGroup>
            </Grid>
        </>
    );
}

export default ExerciseContainer;
