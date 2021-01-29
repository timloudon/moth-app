import React from "react";
import IntervalButtons from "../common/IntervalButtons";
import { Grid } from "@material-ui/core";

function ScaleTones({
    randomQuestions,
    currentQuestionIndex,
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
                    randomQuestions={randomQuestions}
                    currentQuestionIndex={currentQuestionIndex}
                    isFinishedQuestion={isFinishedQuestion}
                />
            </Grid>
        </>
    );
}

export default ScaleTones;
