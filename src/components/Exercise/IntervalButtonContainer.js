import React from 'react';
// Components
import IntervalButton from "./IntervalButton";
// MaterialUI
import { Grid } from "@material-ui/core";

function IntervalButtonContainer(props) {

    const { scale, keyboardKeyValues, playSound, checkIntervalAnswer } = props;

    return (
        // Maps out note buttons based on the scale prop (passed in from Exercise Container)
        scale.map((item, index) => {
            return (
                <Grid key={item.number} item xs={3}>
                    <IntervalButton
                        name={item.name}
                        intervalValue={item.intervalValue}
                        sound={item.sound}
                        onClickHandler={() => {
                            playSound(item.number);
                            checkIntervalAnswer(item.number);
                        }}
                        dataKey={keyboardKeyValues[index]}
                        myKey={keyboardKeyValues[index]}
                    />
                </Grid>
            );
        })
    )
}

export default IntervalButtonContainer
