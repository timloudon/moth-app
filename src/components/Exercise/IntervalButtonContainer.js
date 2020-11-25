import React from 'react';
// Components
import IntervalButton from "./IntervalButton";

function IntervalButtonContainer(props) {

    const { scale, keyboardKeyValues, playSound, checkIntervalAnswer, addAnswerToLog } = props;

    return (
        // Maps out note buttons based on the scale prop (passed in from Exercise Container)
        scale.map((item, index) => {
            return (
                <IntervalButton
                    key={item.number}
                    name={item.name}
                    intervalValue={item.intervalValue}
                    sound={item.sound}
                    onClickHandler={() => {
                        playSound(item.number);
                        checkIntervalAnswer(item.number);
                        addAnswerToLog(item.number);
                    }}
                    dataKey={keyboardKeyValues[index]}
                    myKey={keyboardKeyValues[index]}
                />
            );
        })
    )
}

export default IntervalButtonContainer
