import React from 'react';
// Components
import ScaleButton from "./ScaleButton";
// Arrays
import { scalePatterns } from "../../shared/scales";

function ScaleButtonContainer(props) {

    const { changeIntervalButtons } = props;

    return (
        // Maps out scale type buttons based on scales contained in the scalePatterns array
        scalePatterns.map((item) => {
            return (
                <ScaleButton
                    key={item.scaleType}
                    mykey={item.scaleType}
                    onClickHandler={() => { changeIntervalButtons(item.scaleType) }}
                    scaleType={item.scaleType}
                />
            );
        })
    )
}

export default ScaleButtonContainer
