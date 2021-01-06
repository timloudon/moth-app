import React, { useState, useEffect } from "react";
import { useTimeout } from "../../resources/useTimeout";
import ProgressBar from "./ProgressBar";
import CadenceSymbols from "./CadenceSymbols";
import IntervalQuestionIcon from '../common/IntervalQuestionIcon';
import ScaleTones from "./ScaleTones";
import Footer from '../common/Footer';
import { scalePatterns } from "../../resources/musicResources";
import { Grid makeStyles } from "@material-ui/core";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Exercise({ isLoading, routeProps, instrumentType, ctx, samples }) {

    const classes = useStyles();

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
            setIsCorrectAnswer(true);
            // consider different way to do this using useEffect?
            setTimeout(() => {
                setCurrentQuestionValue(nextQuestion);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrectAnswer(false);
            }, 2000);
        } else {
            setIsCorrectAnswer(false);
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
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    console.log('isCorrectAnswer: ', isCorrectAnswer);
    console.log('questions: ', randomQuestions);

    useEffect(() => {
        console.log('useEffect');
        setIsCorrectAnswer(false);
    }, [currentQuestionIndex])

    return (
        <Grid item container direction="column" justify="space-between" alignItems="center" style={{ height: '75vh' }}>
            <ProgressBar randomQuestions={randomQuestions} currentQuestionIndex={currentQuestionIndex} />
            <CadenceSymbols />
            <IntervalQuestionIcon scale={scale} currentQuestionValue={currentQuestionValue} isCorrectAnswer={isCorrectAnswer} />
            <ScaleTones
                isLoading={isLoading}
                noteRange={noteRange}
                scale={scale}
                availableNotes={availableNotes}
                cadenceType={cadenceType}
                currentQuestionValue={currentQuestionValue}
                currentQuestionIndex={currentQuestionIndex}
                checkIntervalAnswer={checkIntervalAnswer}
                playNote={playNote} />
            <Footer
            // forceRefreshToPlayCadence={forceRefreshToPlayCadence}
            // playNote={playNote}
            // currentQuestionValue={currentQuestionValue} 
            />
        </Grid>
    );
}

export default Exercise;
