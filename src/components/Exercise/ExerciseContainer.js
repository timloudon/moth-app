// Considerations:
// i) Create a more complex event listener:
// a) Keyup or mouseup triggering a new sample of the tail end of the note (the sample of the key in NI) 
// ii) Use styling rules to dynamically change the colour of the buttons on click:
// a) Current scale type (stays until another is clicked)
// b) Interval button changes colour on keydown and reverts on keyup

import React, { useState, useEffect } from "react";
// Components
// import ScaleButtonContainer from "./ScaleButtonContainer";
import QuestionContainer from "./QuestionContainer";
import SoundfontProvider from '../../shared/SoundfontProvider';
// Arrays & Functions
import {
    getScaleKeys,
    playSoundWithKeys,
    scalePatterns
} from "../../shared/musicResources";
// MaterialUI
import {
    Grid,
    Button,
    Switch,
    FormGroup,
    FormControlLabel
} from "@material-ui/core";
import "typeface-roboto";

function ExerciseContainer(props) {

    const { routeProps, instrumentSounds, defaultNotes } = props;

    // VARIABLES

    // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

    // The string value passed in as a prop from the Main Menu component (string: e.g. "Major")
    const scaleType = routeProps.location.state.scale.type;
    const cadenceType = routeProps.location.state.cadence.type;
    let answerLog = [[]];

    // METHODS

    // Finds the scale pattern by matching the string passed in above with the type property
    const findScalePattern = () => {
        // Finds the object within the array that matches the string
        const scaleObject = scalePatterns.find(pattern => pattern.type === scaleType);
        // the scale pattern within the ascociated obect
        const scalePattern = scaleObject.pattern;
        return scalePattern;
    }

    const createQuestions = () => {
        // create empty array that will hold the randomly generated interval questions
        const randomQuestionsArray = [];
        // create a list of available scale tones (based on the scale state)
        const scaleTonesArray = [];
        // populate the scaleTonesArray
        scale.forEach(element => scaleTonesArray.push(element.number));
        // creates an array of 10 questions
        for (let i = 0; i < 10; i++) {
            // generate random number between 0 and scaleTonesArray.length
            const generateNumberBetweenMinAndMax = (min, max) => Math.round((Math.random() * (max - min) + min));
            const randomNumber = generateNumberBetweenMinAndMax(0, (scaleTonesArray.length - 1));
            // populate the randomQuestionsArray by selecting a note from scaleTonesArray using a random index number
            randomQuestionsArray.push(scaleTonesArray[randomNumber]);
        }
        return randomQuestionsArray;
    }

    const checkIntervalAnswer = (answerIntervalNumber) => {
        // Check if the interval number of the pressed button is equal to the current question
        if (answerIntervalNumber === currentQuestionValue) {
            // new index value to be one higher than the current
            const nextIndex = currentQuestionIndex + 1;
            // next question value to be the next index
            const nextQuestion = randomQuestions[nextIndex];
            // stop the quiz after the last question in the randomQuestionsArray
            if (nextIndex >= randomQuestions.length) {
                console.log('end');
                return;
            }
            // add a new empty array to the answerLog array
            // answerLog.push([]);
            // sets the new question value state to the next value
            setCurrentQuestionValue(nextQuestion);
            // sets the new question index state to the next value
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            console.log('CORRECT!');
        } else {
            // Console log when answer is wrong
            console.log('wrong');
        }
    }

    // const addAnswerToLog = (answerIntervalNumber, currentQuestionIndex) => {
    //     console.log(answerLog, 'answerLog')
    //     answerLog.splice(currentQuestionIndex, 0, answerIntervalNumber);
    //     console.log(answerLog, 'answerLog after push')
    // }

    // Changes the state of the toggle switch
    const handleChange = (e) => {
        setToggleSwitch({ ...toggleSwitch, [e.target.name]: e.target.checked });
    }

    // STATES

    // scale useState sets the note keys based on the scale type button pressed
    const [scale] = useState(getScaleKeys(findScalePattern(), defaultNotes));

    const [randomQuestions] = useState(createQuestions());

    // sets the current question value (interval number)
    const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0]);
    // sets the current question index number
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    // toggleSwitch useState toggles the event listeners in useEffect
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: true });

    // USEEFFECTS

    // Keyboard Toggle Switch useEffect
    useEffect(() => {
        // If the toggle switch is on adds keydown event listener
        // playSoundWithKeys listens for key value and triggers the approriate sound (Wes Bos)
        toggleSwitch.keyboardSwitch
            ? window.addEventListener('keydown', playSoundWithKeys)
            : window.removeEventListener('keydown', playSoundWithKeys);
    });

    return (
        <Grid container
            spacing={4}
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            {/* <Grid item xs={2}></Grid> */}
            <Grid container item
                xs={12}
                direction="row"
                justify="flex-start"
                alignItems="stretch">

                <Grid item
                    xs={12} >
                    <QuestionContainer
                        instrumentSounds={instrumentSounds}
                        scale={scale}
                        cadenceType={cadenceType}
                        currentQuestionValue={currentQuestionValue}
                        checkIntervalAnswer={checkIntervalAnswer} />
                    {/* <SoundfontProvider
                        hostname={soundfontHostname}
                        audioContext={audioContext}
                        render={({ playNote, stopNote, stopAllNotes }) => (
                            <QuestionContainer
                                playNote={playNote}
                                stopNote={stopNote}
                                stopAllNotes={stopAllNotes}
                                instrumentSounds={instrumentSounds}
                                scale={scale}
                                cadenceType={cadenceType}
                                currentQuestionValue={currentQuestionValue}
                                checkIntervalAnswer={checkIntervalAnswer} />
                        )} /> */}
                </Grid>

                <Grid item
                    xs={12} >
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={toggleSwitch.keyboardSwitch}
                                    onChange={handleChange}
                                    name="keyboardSwitch"
                                    color="primary" />
                            }
                            label="Play with keyboard">
                        </FormControlLabel>
                    </FormGroup>
                </Grid>
            </Grid>
            {/* <Grid item xs={2}></Grid> */}

        </Grid>
    );
}

export default ExerciseContainer;

// DEPRECIATED CODE

// cadenceSound.oncanplaythrough = (e) => {
            //     const playedPromise = cadenceSound.play();
            //     if (playedPromise) {
            //         playedPromise.catch((e) => {
            //             console.log(e, 'e');
            //             if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
            //                 console.log(e.name, 'e.name');
            //             }
            //         }).then(() => {
            //             console.log('playing sound');
            //         }
            //         )
            //     }
            // }
