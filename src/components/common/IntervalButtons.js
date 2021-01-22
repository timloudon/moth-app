import React from 'react';
import MothButton from "./MothButton";
import { Grid } from "@material-ui/core";

function IntervalButtons({ isFinishedQuestion, availableNotes, checkIntervalAnswer, checkIsWrongAnswer, isWrongAnswer, playNote }) {
    return (
        availableNotes.map((item) => {
            return (
                <Grid key={item.midiNumber} item>
                    <MothButton
                        buttonText={item.noteName}
                        onClickHandler={() => {
                            playNote(item.midiNumber);
                            checkIntervalAnswer(item.midiNumber);
                            checkIsWrongAnswer(item.midiNumber);
                        }}
                        isWrongAnswer={isWrongAnswer}
                        isFinishedQuestion={isFinishedQuestion}
                    // dataKey={keyboardKeyValues[index]}
                    />
                </Grid>
            );
        })
    )
}

export default IntervalButtons
