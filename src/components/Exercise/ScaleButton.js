import React from "react";
import { Button } from "@material-ui/core";

function ScaleButton(props) {

    const { onClickHandler, scaleType } = props;

    return (
        <Button
            fullWidth={true}
            size="small"
            variant="contained"
            onClick={onClickHandler}
        >
            {scaleType}
        </Button>
    );
}

export default ScaleButton;