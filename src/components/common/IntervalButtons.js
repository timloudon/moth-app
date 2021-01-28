import React from 'react';
import MothButton from "./MothButton";
import { Grid } from "@material-ui/core";

function IntervalButtons({
    currentQuestionMidiNumberScale,
    currentQuestionNoteNameScale,
    isFinishedQuestion,
    checkIntervalAnswer,
    playNote
}) {
    return (
        currentQuestionMidiNumberScale.map((item) => {
            return (
                <Grid key={item.midiNumber} item>
                    <MothButton
                        buttonText={item}
                        onClickHandler={() => {
                            playNote(item);
                            checkIntervalAnswer(item);
                        }}
                        isFinishedQuestion={isFinishedQuestion}
                    />
                </Grid>
            );
        })
    )
}

export default IntervalButtons
