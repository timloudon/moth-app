import React from 'react';
import IntervalButton from "./IntervalButton";
import { Grid } from "@material-ui/core";

function IntervalButtons({ isFinishedQuestion, scale, availableNotes, checkIntervalAnswer, playNote }) {
    return (
        availableNotes.map((item) => {
            return (
                <Grid key={item.midiNumber} item xs={6} md={3} lg='auto'>
                    <IntervalButton
                        buttonText={item.noteName}
                        onClickHandler={() => {
                            playNote(item.midiNumber);
                            checkIntervalAnswer(item.midiNumber);
                        }}
                        isFinishedQuestion={isFinishedQuestion}
                    // dataKey={keyboardKeyValues[index]}
                    />
                </Grid>
            );
        })
    )
}

export default IntervalButtons
