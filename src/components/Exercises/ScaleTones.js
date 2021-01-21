import React, { useState, useEffect } from "react";
import IntervalButtons from "../common/IntervalButtons";
import { cadencePatterns } from "../../resources/musicResources";
import { Grid } from "@material-ui/core";

function ScaleTones({
    scale,
    availableNotes,
    currentQuestionValue,
    checkIntervalAnswer,
    playNote,
    isFinishedQuestion
}) {


    return (
        <>
            <Grid item container justify="center" alignItems="center" spacing={2}>
                <IntervalButtons
                    scale={scale}
                    availableNotes={availableNotes}
                    playNote={playNote}
                    checkIntervalAnswer={checkIntervalAnswer}
                    currentQuestionValue={currentQuestionValue}
                    isFinishedQuestion={isFinishedQuestion}
                />
            </Grid>
        </>
    );
}

export default ScaleTones;
