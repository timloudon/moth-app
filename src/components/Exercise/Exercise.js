import React, { useState } from "react";
import ExerciseIntervalButton from "./ExerciseIntervalButton";
import { getScaleKeys, scalePatterns, pianoKeys } from "../../shared/scales";
import { Button } from "@material-ui/core";

function Exercise() {

    const [scale, setScale] = useState(getScaleKeys(scalePatterns[0].pattern, pianoKeys));

    return (
        <>
            <h1>SCALE SELECTOR</h1>
            {scalePatterns.map((item) => {
                return <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setScale(getScaleKeys(item.pattern, pianoKeys))}>
                    {item.scaleType}
                </Button>
            }
            )}
            {scale.map((item) => {
                return <ExerciseIntervalButton
                    key={item.name}
                    name={item.name}
                    number={item.number}
                    sound={item.sound}
                />
            })}
        </>
    )
}

export default Exercise;