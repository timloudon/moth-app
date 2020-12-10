import React from "react";
// MaterialUI
import { Button } from "@material-ui/core";

function IntervalButton(props) {

    const { buttonText, onClickHandler } = props;

    return (
        <>
            <Button
                variant="contained"
                style={{ textTransform: 'lowercase' }}
                className="key"
                onClick={onClickHandler}>
                {buttonText}
            </Button>
        </>
    );
}

export default IntervalButton;