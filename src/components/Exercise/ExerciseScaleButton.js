import React from "react";
import { Button } from "@material-ui/core";

function ExerciseScaleButton(props) {

    const { onClickHandler, scaleButton, scaleType } = props;

    return (
        <Button
            fullWidth={true}
            size="small"
            variant="contained"
            color={scaleButton}
            onClick={onClickHandler}
        >
            {scaleType}
        </Button>
    );
}

export default ExerciseScaleButton;