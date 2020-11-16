// Considerations:
// i) Create a more complex event listener:
// a) Keyup or mouseup triggering a new sample of the tail end of the note (the sample of the key in NI) 
// ii) Use styling rules to dynamically change the colour of the buttons on click:
// a) Current scale type (stays until another is clicked)
// b) Interval button changes colour on keydown and reverts on keyup

import React, { useState, useEffect } from "react";
// Components
// import ScaleButtonContainer from "./ScaleButtonContainer";
import IntervalButtonContainer from "./IntervalButtonContainer";
// Arrays & Functions
import {
    getScaleKeys,
    instruments,
    keyboardKeyValues,
    playSoundWithKeys
} from "../../shared/scales";
// MaterialUI
import {
    // makeStyles,
    Grid,
    Typography,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@material-ui/core";
import "typeface-roboto";

function ExerciseContainer(props) {

    console.log(props, 'props');

    const { routeProps, instrumentSounds, defaultNotes } = props;

    console.log(defaultNotes, 'defaultNotes')
    console.log(routeProps, 'routeProps');
    console.log(routeProps.location.state.pattern, 'routeProps.locatio.state.pattern')

    // useEffect plays cadence and interval question tone on load and state change
    useEffect(() => {
        // Play the cadence after a delay
        const cadenceTimer = setTimeout(() => {
            const cadenceSound = new Audio(cadence);
            cadenceSound.play();
        }, 1000);
        // Play the currentQuestionValue interval
        const toneTimer = setTimeout(() => {
            playQuizTone(currentQuestionValue);
        }, 6000);
        // Cleanup
        return () => {
            clearTimeout(cadenceTimer);
            clearTimeout(toneTimer);
        };
    });

    // Keyboard Toggle Switch useEffect
    useEffect(() => {
        // If the toggle switch is on adds keydown event listener
        // playSoundWithKeys listens for key value and triggers the approriate sound (Wes Bos)
        toggleSwitch.keyboardSwitch
            ? window.addEventListener('keydown', playSoundWithKeys)
            : window.removeEventListener('keydown', playSoundWithKeys);
    });

    // Changes the state of the toggle switch
    const handleChange = (e) => {
        setToggleSwitch({ ...toggleSwitch, [e.target.name]: e.target.checked });
    }

    // VARIABLES

    // scale useState sets the note keys based on the scale tape button pressed
    const [scale] = useState(getScaleKeys(routeProps.location.state.pattern, defaultNotes));

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

    const [randomQuestions] = useState(createQuestions());

    // sets the current question value (interval number)
    const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0]);
    // sets the current question index number
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    // plays the note from the current question value (triggered in useEffect)
    const playQuizTone = (interval) => {
        const intervalSound = instrumentSounds[interval];
        intervalSound.currentTime = 0;
        intervalSound.play();
    }

    // STATES

    // score useState keeps track of the user's score
    const [score, setScore] = useState(0);

    // showScore useState displays the user's score
    // const [showScore, setShowScore] = useState(false);

    // sets the cadence to be played at the beginning of each 'question'
    const [cadence] = useState(routeProps.location.state.cadence);

    // toggleSwitch useState toggles the event listeners in useEffect
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: true });

    // Plays the audio element where the id of the element matches the number property of the scale
    const playSound = (keyNumber) => {
        // Match the keyNumber to the corresponding index of the array of audio objects
        const sound = instrumentSounds[keyNumber];
        // Must reset currentTime otherwise have to wait for the sample to end to replay
        sound.currentTime = 0;
        sound.play();
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
                return
            }
            // sets the new question value state to the next value
            setCurrentQuestionValue(nextQuestion);
            // sets the new question index state to the next value
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            // Add one to the score state
            setScore(score + 1);
        } else {
            // Console log when answer is wrong
            console.log('wrong');
        }
    }

    return (
        <Grid container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="stretch">

            <Grid item xs={2}></Grid>
            <Grid container item
                spacing={7}
                xs={8}
                direction="row"
                justify="flex-start"
                alignItems="stretch">

                <Grid item
                    xs={12}>
                    <Typography variant="h3" align="center">Interval Quiz</Typography>
                </Grid>

                {/* <Grid item
                    xs={12}>
                    <SoundButtonContainer
                        changeInstrumentSound={changeInstrumentSound} />
                </Grid> */}

                <Grid item
                    xs={12} >
                    <IntervalButtonContainer
                        scale={scale}
                        playSound={playSound}
                        checkIntervalAnswer={checkIntervalAnswer}
                        keyboardKeyValues={keyboardKeyValues} />
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
            <Grid item xs={2}></Grid>

        </Grid>
    );
}

export default ExerciseContainer;

// DEPRECIATED CODE

// Changes the state of the interval buttons (it is passed the string from the scale type button)
    // const changeScale = (scaleType) => {
    //     setScale(getScaleKeys(scalePatterns.find(item => item.scaleType === scaleType).pattern, defaultNotes));
    //     // Sets the colour of the clicked button to a different colour to show which scale is selected
    //     setSelectedScale(scaleType);
    // }

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
