import React from 'react';
// Components
import AppButton from "../../shared/AppButton";
// Arrays
import { scalePatterns } from "../../shared/scales";
// MaterialUI
import { Grid } from '@material-ui/core';

function ScaleButtonContainer(props) {

    const { changeScale, buttonIsClicked } = props;

    return (
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
