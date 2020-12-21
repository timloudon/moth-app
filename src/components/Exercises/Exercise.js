import React, { useState } from "react";
import useSamples from '../../resources/useSamples';
import { instruments } from "../../resources/musicResources";
import Questions from "./Questions";
import ProgressBar from "./ProgressBar";
import { scalePatterns } from "../../resources/musicResources";
import { Grid, Switch, FormGroup, FormControlLabel } from "@material-ui/core";
import "typeface-roboto";

function Exercise({ isLoading, routeProps, instrumentType, ctx, samples }) {

    console.log('Exercise rendered');

    // The string value passed in as a prop from the Main Menu component (string: e.g. "Major")
    const scaleType = routeProps.location.state.scale.type;
    const cadenceType = routeProps.location.state.cadence.type;
    const noteRange = [60, 72];

    function getScaleNotes(scalePattern, allNotes) {
        let scaleNotes = [];
        let firstNote = allNotes[0];
        scaleNotes.push(firstNote);
        let currentMidiNumber;
        let nextMidiNumber = firstNote.midiNumber;
        let lastAvailableMidiNumber = allNotes[allNotes.length - 1].midiNumber;
        for (let i = 0; nextMidiNumber < lastAvailableMidiNumber; i++) {
            let patternIndex = i % (scalePattern.length);
            let increment = scalePattern[patternIndex];
            currentMidiNumber = scaleNotes[i].midiNumber;
            nextMidiNumber = currentMidiNumber + increment;
            let nextNote = allNotes.find(note => note.midiNumber === nextMidiNumber);
            scaleNotes.push(nextNote);
        }
        return scaleNotes;
    }

    const findScalePattern = () => {
        const scaleObject = scalePatterns.find(pattern => pattern.type === scaleType);
        const scalePattern = scaleObject.pattern;
        return scalePattern;
    }

    const filterAvailableNotes = (noteRange) => {
        return scale.filter(item => item.midiNumber >= noteRange[0] && item.midiNumber <= noteRange[1]);
    }

    const createQuestions = () => {
        const randomQuestions = [];
        for (let i = 0; i < 10; i++) {
            const generateNumberBetweenMinAndMax = (min, max) => Math.round((Math.random() * (max - min) + min));
            const randomIndex = generateNumberBetweenMinAndMax(0, availableNotes.length - 1);
            randomQuestions.push(availableNotes[randomIndex].midiNumber);
        }
        return randomQuestions;
    }

    const checkIntervalAnswer = (answerIntervalNumber) => {
        if (answerIntervalNumber === currentQuestionValue) {
            const nextIndex = currentQuestionIndex + 1;
            const nextQuestion = randomQuestions[nextIndex];
            if (nextIndex >= randomQuestions.length) {
                console.log('end');
                return;
            }
            setCurrentQuestionValue(nextQuestion);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log('Wrong answer');
        }
    }

    function playNote(number) {
        const note = samples.find(note => (note.midiNumber === number));
        let bufferSource = ctx.createBufferSource();
        bufferSource.buffer = note.audioBuffer;
        bufferSource.connect(ctx.destination);
        bufferSource.start();
        bufferSource.onended = () => console.log('ended');
    }

    const [scale] = useState(getScaleNotes(findScalePattern(), samples));
    const [availableNotes, setAvailableNotes] = useState(filterAvailableNotes(noteRange));
    const [randomQuestions] = useState(createQuestions(noteRange));
    const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    return (
        <>
            <ProgressBar randomQuestions={randomQuestions} currentQuestionIndex={currentQuestionIndex} />
            {/* <Grid item xs={false} sm={1} />  */}
            <Grid container
                spacing={0}
                direction="row"
                justify="flex-start"
                alignItems="stretch">
                <Grid container item
                    xs={12}
                    sm={10}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    alignItems="stretch">

                    <Grid item
                        xs={12} >
                        <Questions
                            isLoading={isLoading}
                            noteRange={noteRange}
                            scale={scale}
                            availableNotes={availableNotes}
                            cadenceType={cadenceType}
                            currentQuestionValue={currentQuestionValue}
                            checkIntervalAnswer={checkIntervalAnswer}
                            playNote={playNote} />
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={false} sm={1} /> */}
        </>
    );
}

export default Exercise;
