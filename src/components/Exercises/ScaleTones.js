import React from "react";
import IntervalButtons from "../common/IntervalButtons";
import { Grid } from "@material-ui/core";

function ScaleTones({
    randomQuestion,
    checkIntervalAnswer,
    playNote,
    isFinishedQuestion
}) {


    return (
        <>
            <Grid item container direction="row" justify="center" alignItems="center" spacing={1}>
                <IntervalButtons
                    playNote={playNote}
                    checkIntervalAnswer={checkIntervalAnswer}
                    randomQuestion={randomQuestion}
                    isFinishedQuestion={isFinishedQuestion}
                />
            </Grid>
        </>
    );
}

export default ScaleTones;
