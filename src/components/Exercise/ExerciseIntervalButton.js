import React from "react";
import { Button } from "@material-ui/core";

function ExerciseIntervalButton(props) {

    const { number, name, sound } = props;

    const note = new Audio(sound);

    const playSound = () => {
        note.currentTime = 0;
        note.play();
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={playSound}>
                {number}({name})
            </Button>
        </>
    );
}

export default ExerciseIntervalButton;