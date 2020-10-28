import React from 'react';
import IntervalButton from "./IntervalButton";

function IntervalButtonContainer(props) {

    const { scale, keyboardKeyValues } = props;

    return (
        // maps out note buttons based on the scale prop (passed in from Exercise Container)
        scale.map((item, index) => {
            return (
                <IntervalButton
                    key={item.number}
                    name={item.name}
                    number={item.number}
                    sound={item.sound}
                    dataKey={keyboardKeyValues[index]}
                />
            );
        })
    )
}

export default IntervalButtonContainer
