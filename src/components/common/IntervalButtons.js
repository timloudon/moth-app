import React from 'react';
import MothButton from "./MothButton";
import { Grid } from "@material-ui/core";

function IntervalButtons({
    randomQuestion,
    isFinishedQuestion,
    checkIntervalAnswer,
    playNote
}) {
    return (
        randomQuestion.keyScale.map((item) => {
            return (
                <Grid key={item.midiNumber} item >
                    <MothButton
                        buttonText={item.scaleTone}
                        onClickHandler={() => {
                            playNote(item.midiNumber);
                            checkIntervalAnswer(item.midiNumber);
                        }}
                        isFinishedQuestion={isFinishedQuestion}
                    />
                </Grid >
            );
        })
    )
}

export default IntervalButtons
