import React from 'react';
// Components
import IntervalButton from "./IntervalButton";
// MaterialUI
import { Grid } from "@material-ui/core";

function IntervalButtonContainer(props) {

    const { scale, keyboardKeyValues, checkIntervalAnswer, playNote } = props;

    return (
        scale.map((item, index) => {
            return (
                <Grid key={item.midiNumber} item xs={3}>
                    <IntervalButton
                        buttonText={item.noteName}
                        onClickHandler={() => {
                            playNote(item.midiNumber);
                            checkIntervalAnswer(item.midiNumber);
                        }}
                        dataKey={keyboardKeyValues[index]}
                    />
                </Grid>
            );
        })
    )
}

export default IntervalButtonContainer
