import React from 'react';
// Components
import AppButton from "../../shared/AppButton";
// Arrays
import { scalePatterns } from "../../shared/scales";

function ScaleButtonContainer(props) {

    // add in butonPressed prop - component needs to render it's own style conditionally
    const { changeScale, buttonIsClicked } = props;

    return (
        // Maps out scale type buttons based on scales contained in the scalePatterns array
        // Conditionally renders the clicked button with styling to show scale selection
        scalePatterns.map((item) => {
            return (
                <>
                    {
                        <AppButton
                            style={{ background: buttonIsClicked === item.scaleType ? 'red' : '' }}
                            key={item.scaleType}
                            onClickHandler={() => { changeScale(item.scaleType) }}
                            buttonText={item.scaleType} />
                    }
                </>
            );
        })
    )
}

export default ScaleButtonContainer
