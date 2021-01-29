import React from 'react';
import MothButton from "./MothButton";
import { Grid } from "@material-ui/core";

function IntervalButtons({
    randomQuestions,
    currentQuestionIndex,
    isFinishedQuestion,
    checkIntervalAnswer,
    playNote
}) {
    return (
        randomQuestions[currentQuestionIndex].keyScale.map((item) => {
            return (
                <Grid key={item[0]} item>
                    <MothButton
                        buttonText={item[1]}
                        onClickHandler={() => {
                            playNote(item[0]);
                            checkIntervalAnswer(item[0]);
                        }}
                        isFinishedQuestion={isFinishedQuestion}
                    />
                </Grid>
            );
        })
    )
}

export default IntervalButtons
