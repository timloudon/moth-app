import React from "react";
// Components
import { instruments, keyMaps } from "../../resources/musicResources";
// MaterialUI
import { makeStyles, Grid, Typography } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

const useStyles = makeStyles(() => ({
    text: {
        textTransform: 'none',
    }
}));

function Options({ changeInstrumentSound, changeCadenceType, changeKeySignatures, changeScaleTonesOrNoteNames, keySignatures, instrumentType, cadenceType, scaleTonesOrNoteNames }) {

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
                    <ToggleButton value="251" >
                        <Typography
                            variant="button"
                            className={classes.text}
                            align="center">
                            ii - V - I
                        </Typography>
                    </ToggleButton>
                    <ToggleButton value="451" >
                        <Typography
                            variant="button"
                            className={classes.text}
                            align="center">
                            IV - V - I
                        </Typography>
                    </ToggleButton>
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
                    <ToggleButton value={instruments[0].instrumentName} >
                        <Typography variant="button" align="center">{instruments[0].instrumentName}</Typography>
                    </ToggleButton>
                    <ToggleButton value={instruments[1].instrumentName} >
                        <Typography variant="button" align="center">{instruments[1].instrumentName}</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                <ToggleButtonGroup value={keySignatures} onChange={changeKeySignatures} aria-label="change key signatures">
                    {/* <ToggleButton value={allKeys}>All Keys</ToggleButton> */}
                    <ToggleButton value={keyMaps[0].keys[0].keyName}>
                        {keyMaps[0].keys[0].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[1].keyName}>
                        {keyMaps[0].keys[1].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[2].keyName}>
                        {keyMaps[0].keys[2].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[3].keyName}>
                        {keyMaps[0].keys[3].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[4].keyName}>
                        {keyMaps[0].keys[4].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[5].keyName}>
                        {keyMaps[0].keys[5].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[6].keyName}>
                        {keyMaps[0].keys[6].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[7].keyName}>
                        {keyMaps[0].keys[7].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[8].keyName}>
                        {keyMaps[0].keys[8].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[9].keyName}>
                        {keyMaps[0].keys[9].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[10].keyName}>
                        {keyMaps[0].keys[10].keyName}
                    </ToggleButton>
                    <ToggleButton value={keyMaps[0].keys[11].keyName}>
                        {keyMaps[0].keys[11].keyName}
                    </ToggleButton>
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
