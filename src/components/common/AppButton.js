import React from "react";
import { Button } from "@material-ui/core";

function AppButton({ onClickHandler, buttonText, style }) {
    return (
        <Button
            style={style}
            color="primary"
            variant="contained"
            onClick={onClickHandler}
        >
            {buttonText}
        </Button>
    );
}

export default AppButton;
