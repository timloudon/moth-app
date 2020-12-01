import React from 'react';
// Components
import AppButton from "../../shared/AppButton";
// Arrays
import { scalePatterns } from "../../shared/scales";
// MaterialUI
import { Grid } from '@material-ui/core';

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
                        <Grid item xs={1}>
                            <AppButton
                                style={{ background: buttonIsClicked === item.scaleType ? 'red' : '' }}
                                key={item.scaleType}
                                onClickHandler={() => { changeScale(item.scaleType) }}
                                buttonText={item.scaleType} />
                        </Grid>
                    }
                </>
            );
        })
    )
}

export default ScaleButtonContainer
