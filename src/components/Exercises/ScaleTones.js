import React from "react";
import IntervalButtons from "../common/IntervalButtons";
import { Grid } from "@material-ui/core";

function ScaleTones({
    currentQuestionMidiNumberScale,
    currentQuestionNoteNameScale,
    checkIntervalAnswer,
    playNote,
    isFinishedQuestion
}) {


    return (
        <>
            <Grid item container justify="center" alignItems="center" spacing={2}>
                <IntervalButtons
                    playNote={playNote}
                    checkIntervalAnswer={checkIntervalAnswer}
                    currentQuestionMidiNumberScale={currentQuestionMidiNumberScale}
                    currentQuestionNoteNameScale={currentQuestionNoteNameScale}
                    isFinishedQuestion={isFinishedQuestion}
                />
            </Grid>
        </>
    );
}

export default ScaleTones;
