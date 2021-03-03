import React from "react";
// Components
import { cadencePatterns, instruments, keyMaps } from "../../resources/musicResources";
// MaterialUI
import { makeStyles, Grid, Typography } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

const useStyles = makeStyles(() => ({
    text: {
        textTransform: 'none',
    }
}));

function Options({
    changeInstrumentSound,
    changeCadenceType,
    changeKeySignatures,
    changeScaleTonesOrNoteNames,
    keySignatures,
    instrumentType,
    cadenceType,
    scaleTonesOrNoteNames
}) {
    const classes = useStyles();
    // const allKeys = keyMaps[0].keys.map(key => key.keyName);
    return (
        <Grid container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center" >
            <Grid item
                xs={12}>
                <ToggleButtonGroup
                    value={cadenceType}
                    exclusive
                    onChange={changeCadenceType}
                    alignItems="center"
                    aria-label="cadence type"
                >
                    {cadencePatterns.map((cadence, i) => {
                        return (
                            <ToggleButton value={cadence.type} key={i}>
                                <Typography
                                    variant="button"
                                    className={classes.text}
                                    align="center"
                                >
                                    {cadence.type}
                                </Typography>
                            </ToggleButton>
                        )
                    })}
                </ToggleButtonGroup>
            </Grid>
            <Grid item
                xs={12}>
                <ToggleButtonGroup
                    value={instrumentType}
                    exclusive
                    onChange={changeInstrumentSound}
                    alignItems="center"
                    aria-label="instrument sound"
                >
                    {instruments.map((instrument, i) => {
                        return (
                            <ToggleButton key={i} value={instrument} >
                                <Typography variant="button" align="center">{instrument}</Typography>
                            </ToggleButton>
                        )
                    })}
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                <ToggleButtonGroup value={keySignatures} onChange={changeKeySignatures} aria-label="change key signatures">
                    {keyMaps[0].keys.map((key, i) => {
                        return (
                            <ToggleButton key={i} value={key.keyName}>
                                {key.keyName}
                            </ToggleButton>
                        )
                    })}
                </ToggleButtonGroup>
            </Grid>
            <Grid item
                xs={12}>
                <ToggleButtonGroup
                    value={scaleTonesOrNoteNames}
                    exclusive
                    onChange={changeScaleTonesOrNoteNames}
                    alignItems="center"
                    aria-label="scale tones or note names"
                >
                    <ToggleButton value="Scale Tones" >
                        <Typography variant="button" align="center">Scale Tones</Typography>
                    </ToggleButton>
                    <ToggleButton value="Note Names" >
                        <Typography variant="button" align="center">Note Names</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );
}

export default Options;
