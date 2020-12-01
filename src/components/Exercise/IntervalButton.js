import React from "react";
// MaterialUI
import { Button } from "@material-ui/core";

function IntervalButton(props) {

    const { intervalValue, onClickHandler } = props;

    return (
        <>
            <Button
                variant="contained"
                style={{ textTransform: 'lowercase' }}
                className="key"
                onClick={onClickHandler}>
                {intervalValue}
            </Button>
        </>
    );
}

export default IntervalButton;