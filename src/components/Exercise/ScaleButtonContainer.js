import React from 'react';
// Components
import AppButton from "../../shared/AppButton";
// Arrays
import { scalePatterns } from "../../shared/scales";

function ScaleButtonContainer(props) {

    const { changeIntervalButtons } = props;

    return (
        // Maps out scale type buttons based on scales contained in the scalePatterns array
        scalePatterns.map((item) => {
            return (
                <AppButton
                    key={item.scaleType}
                    onClickHandler={() => { changeIntervalButtons(item.scaleType) }}
                    buttonText={item.scaleType}
                />
            );
        })
    )
}

export default ScaleButtonContainer
