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
    keyboardKeyValues,
    playSoundWithKeys,
    cadencePatterns,
    scalePatterns
} from "../../shared/musicResources";
// MaterialUI
import {
    // makeStyles,
    Grid,
    // Typography,
    Switch,
    FormGroup,
    FormControlLabel,
    IconButton
} from "@material-ui/core";
import {
    PlayCircleOutline,
    MusicNote
} from "@material-ui/icons";
import "typeface-roboto";
// import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

function ExerciseContainer(props) {

    const { routeProps, instrumentSounds, defaultNotes } = props;

    // VARIABLES

    // The string value passed in as a prop from the Main Menu component (string: e.g. "Major")
    const cadenceAndScaleType = routeProps.location.state.type;

    // METHODS

    // Finds the scale pattern by matching the string passed in above with the type property
    const findScalePattern = () => {
        // Finds the object within the array that matches the string
        const scaleObject = scalePatterns.find(pattern => pattern.type === cadenceAndScaleType);
        // the scale pattern within the ascociated obect
        const scalePattern = scaleObject.pattern;
        return scalePattern;
    }

    // Finds the cadence pattern by matching the string passed in with the type property
    const findChordInCadencePattern = (index) => {
        // Finds the object within the array that matches the string
        const cadenceObject = cadencePatterns.find(pattern => pattern.type === cadenceAndScaleType);
        // the cadence pattern that matches the index passed in (e.g. index of 0 relates to the values for a iim7 chord)
        const cadencePattern = cadenceObject.pattern[index];
        return cadencePattern;
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

    // Plays each note within a chord (plays each chord from the 2D cadence pattern)
    const playChord = (pattern) => {
        pattern.forEach(item => playSound(item))
    }

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

    // Changes the state of the toggle switch
    const handleChange = (e) => {
        setToggleSwitch({ ...toggleSwitch, [e.target.name]: e.target.checked });
    }

    // STATES

    // CONSDIER PUTTING RANDOM QUESTIONS ARRAY IS A REF SO IT ISN'T AFFECTED BY RE-RENDER

    // scale useState sets the note keys based on the scale type button pressed
    const [scale] = useState(getScaleKeys(findScalePattern(), defaultNotes));

    const [randomQuestions] = useState(createQuestions());

    // sets the current question value (interval number)
    const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0]);
    // sets the current question index number
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    // score useState keeps track of the user's score
    const [score, setScore] = useState(0);

    // showScore useState displays the user's score
    // const [showScore, setShowScore] = useState(false);

    // toggleSwitch useState toggles the event listeners in useEffect
    const [toggleSwitch, setToggleSwitch] = useState({ keyboardSwitch: true });

    // USEEFFECTS

    // useEffect test logic:

    function playCadence() {
        setTimeout(() => {
            // first chord (instant)
            playChord(findChordInCadencePattern(0));
            // second chord (1 second)
            setTimeout(() => {
                playChord(findChordInCadencePattern(1));
            }, 1000);
            // third chord (2 seconds)
            setTimeout(() => {
                playChord(findChordInCadencePattern(2));
            }, 2000);
        }, 1000);
    }

    // useEffect plays cadence and interval question tone on load and state change
    useEffect(() => {
        // Play the cadence after a delay (nested timeouts, waits 1 second after render)
        // const cadenceTimer = setTimeout(() => {
        //     // first chord (instant)
        //     playChord(findChordInCadencePattern(0));
        //     // second chord (1 second)
        //     setTimeout(() => {
        //         playChord(findChordInCadencePattern(1));
        //     }, 1000);
        //     // third chord (2 seconds)
        //     setTimeout(() => {
        //         playChord(findChordInCadencePattern(2));
        //     }, 2000);
        // }, 1000);
        playCadence();
        // Play the currentQuestionValue interval (5 seconds delay for cadence)
        const toneTimer = setTimeout(() => {
            playSound(currentQuestionValue);
        }, 5000);
        // Cleanup
        return () => {
            // clearTimeout(cadenceTimer);
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
                    xs={12} >
                    <IntervalButtonContainer
                        scale={scale}
                        playSound={playSound}
                        checkIntervalAnswer={checkIntervalAnswer}
                        keyboardKeyValues={keyboardKeyValues} />
                </Grid>

                <Grid item xs={12}>
                    <IconButton onClick={() => playCadence()}>
                        <PlayCircleOutline />
                    </IconButton>
                    <IconButton onClick={() => playSound(currentQuestionValue)}>
                        <MusicNote />
                    </IconButton>
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
    // const changeScale = (type) => {
    //     setScale(getScaleKeys(scalePatterns.find(item => item.type === type).pattern, defaultNotes));
    //     // Sets the colour of the clicked button to a different colour to show which scale is selected
    //     setSelectedScale(type);
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
