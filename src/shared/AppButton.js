// Editetd this component to be a generic button that can receive inner text and a clickhandler

import React from "react";
// MaterialUI
import { Button } from "@material-ui/core";

function AppButton(props) {

    const { onClickHandler, buttonText } = props;

    return (
        <Button
            variant="contained"
            onClick={onClickHandler}
        >
            {buttonText}
        </Button>
    );
}

export default AppButton;