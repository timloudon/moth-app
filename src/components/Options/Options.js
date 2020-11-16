import React from "react";
// Components
import SoundButtonContainer from "../Exercise/SoundButtonContainer";
// MaterialUI
import {
    // makeStyles,
    Grid,
    Typography
} from "@material-ui/core";
import "typeface-roboto";

function Options(props) {

    const { changeInstrumentSound } = props;
    console.log(changeInstrumentSound, 'changeInstrumentSound(Options)');

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
                    xs={12}>
                    <Typography variant="h3" align="center">Options</Typography>
                </Grid>

                <Grid item
                    xs={12}>
                    <SoundButtonContainer
                        changeInstrumentSound={changeInstrumentSound} />
                </Grid>

            </Grid>
            <Grid item xs={2}></Grid>

        </Grid>
    );
}

export default Options;
