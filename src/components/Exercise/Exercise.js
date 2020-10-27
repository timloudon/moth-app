import React, { useState, useEffect } from "react";
import ExerciseIntervalButton from "./ExerciseIntervalButton";
import ExerciseScaleButton from "./ExerciseScaleButton";
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
    FormControlLabel
} from "@material-ui/core";
// import KeyboardIcon from "@material-ui/icons/Keyboard";

import "typeface-roboto";

function Exercise() {

    const [scale, setScale] = useState(getScaleKeys(scalePatternsEnum.major, pianoKeys));
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: false });
    const [scaleButton, setScaleButton] = useState("default");

    useEffect(() => {
        toggleSwitch.keyboardSwitch
            ? window.addEventListener('keydown', playSoundWithKeys)
            : window.removeEventListener('keydown', playSoundWithKeys);
    })

    const handleChange = (e) => {
        setToggleSwitch({ ...toggleSwitch, [e.target.name]: e.target.checked });
    }

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Typography variant="h1">Scale Selector</Typography>
                <Typography variant="h2">{scaleButton}</Typography>
            </Grid>
            <Grid
                container
                spacing={4}
                direction="row"
                alignContent="center"
                alignItems="stretch"
                justify="center"
            >
                <Grid item width="200px">
                    {scalePatterns.map((item) => {
                        console.log(item.scaleType, 'item.scaleType')
                        return (
                            <ExerciseScaleButton
                                key={item.scaleType}
                                mykey={item.scaleType}
                                onClickHandler={() => {
                                    setScale(getScaleKeys(item.pattern, pianoKeys));
                                    setScaleButton("primary");
                                }}
                                scaleButton={scaleButton}
                                scaleType={item.scaleType}
                            />
                        );
                    })}
                </Grid>
                <Grid item>
                    {scale.map((item, index) => {
                        return (
                            <ExerciseIntervalButton
                                key={item.number}
                                name={item.name}
                                number={item.number}
                                sound={item.sound}
                                dataKey={keyboardKeyValues[index]}
                            />
                        );
                    })}
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

export default Exercise;
