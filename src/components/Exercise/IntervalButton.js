import React from "react";
import { Button } from "@material-ui/core";

function IntervalButton(props) {

    const { number, name, sound, dataKey, mykey } = props;

    const note = new Audio(sound);

    // Plays the note from the ascociated file path
    const playSound = (e) => {
        // Must reset currentTime otherwise have to wait for the sample to end to replay
        note.currentTime = 0;
        note.play();
    };

    return (
        <>
            <Button
                // color={color}
                variant="contained"
                data-key={dataKey}
                className="key"
                data-mykey={mykey}
                onClick={playSound}>
                {number}({name})
            </Button>
        </>
    );
}

export default IntervalButton;