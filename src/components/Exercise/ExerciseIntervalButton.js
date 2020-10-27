import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

function ExerciseIntervalButton(props) {

    const [color, setColor] = useState("default");

    useEffect(() => {
        window.addEventListener('keydown', changeButtonColor);
        window.addEventListener('keyup', removeButtonColor);
        // add cleanup function!
        return () => {
            console.log('cleanup')
            window.removeEventListener('keydown', changeButtonColor);
            window.removeEventListener('keyup', removeButtonColor);
        }
    })

    const { number, name, sound, dataKey, mykey } = props;

    const note = new Audio(sound);

    const changeButtonColor = () => {
        setColor("primary")
    }

    const removeButtonColor = () => {
        setColor("default")
    }

    const playSound = (e) => {
        note.currentTime = 0;
        note.play();
    };

    return (
        <>
            <Button
                color={color}
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

export default ExerciseIntervalButton;