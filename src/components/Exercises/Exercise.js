import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import CadenceSymbols from "./CadenceSymbols";
import IntervalQuestionIcon from "../common/IntervalQuestionIcon";
import ScaleTones from "./ScaleTones";
import Footer from "../common/Footer";
import { getScaleMidiNumbers, findScalePattern, findChordInCadencePattern, generateNumberBetweenMinAndMax } from "../../resources/helperFunctions";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Exercise({ isLoading, routeProps, ctx, questionsNoteRange, instrument, exerciseKeys }) {

  class Question {
    constructor(key, midiNumber, noteName, keyScale) {
      this.key = key;
      this.midiNumber = midiNumber;
      this.noteName = noteName;
      this.keyScale = keyScale;
    }
  }

  const classes = useStyles();

  // The string value passed in as a prop from the Main Menu component (string: e.g. "Major")
  const scaleType = routeProps.location.state.scale.type;
  const cadenceType = routeProps.location.state.cadence.type;

  const createQuestions = (exerciseKeys) => {
    // const generateNumberBetweenMinAndMax = (min, max) => Math.round(Math.random() * (max - min) + min);
    const randomQuestions = [];
    const lowestNoteInQuestionsRange = questionsNoteRange[0];
    const highestNoteInQuestionsRange = questionsNoteRange[1];
    const noteRange = highestNoteInQuestionsRange - lowestNoteInQuestionsRange;

    for (let i = 0; i < 10; i++) {
      // 1) Generate random key from available exerciseKeys
      const randomKeyIndex = generateNumberBetweenMinAndMax(0, exerciseKeys.length - 1);
      const questionKey = exerciseKeys[randomKeyIndex].keyName;
      // 2) Find lowest tonic note in note range for the key
      const instrumentNotesInRange = instrument.instrumentSounds.filter((note) => note.midiNumber >= lowestNoteInQuestionsRange && note.midiNumber <= highestNoteInQuestionsRange);
      // finds the first element in instrumentNotesInRange - without [0] at the end it returns all notes that match (e.g. two C notes)
      const lowestNoteInKey = instrumentNotesInRange.filter((note) => note.noteName.find((noteName) => noteName === questionKey))[0];
      const lowestMidiNumberInKey = lowestNoteInKey.midiNumber;

      // 3) Generate midi number scale using the lowest tonic note (key centre)
      const keyMidiNumberScale = getScaleMidiNumbers(scalePattern, lowestMidiNumberInKey, noteRange);

      // 4) Generate random midiNumber from scale
      const randomNoteIndex = generateNumberBetweenMinAndMax(0, keyMidiNumberScale.length - 1);
      const midiNumber = keyMidiNumberScale[randomNoteIndex];

      // 5) Generate noteName scale
      const exerciseKey = exerciseKeys.filter((key) => key.keyName === questionKey)[0];
      // fix to make sure the final note on the scale is the tonic, no matter the length of the original array
      if (exerciseKey.scale[exerciseKey.scale.length - 1] !== exerciseKey.scale[0]) {
        exerciseKey.scale.push(questionKey);
      }
      const keyNoteNameScale = exerciseKey.scale;

      // 6) Generate noteName for question
      const noteName = exerciseKey.scale[randomNoteIndex];

      // 7) Generate 2D array of keyScale
      let keyScale = [];
      for (let j = 0; j < keyMidiNumberScale.length; j++) {
        keyScale.push([keyMidiNumberScale[j], keyNoteNameScale[j]]);
      }

      randomQuestions.push(new Question(questionKey, midiNumber, noteName, keyScale));
    }
    return randomQuestions;
  };

  const checkIntervalAnswer = (answerIntervalNumber) => {
    if (answerIntervalNumber === randomQuestions[currentQuestionIndex].midiNumber) {
      setIsFinishedQuestion(false);
      answerRef.current -= answerRef.current;
      const nextIndex = currentQuestionIndex + 1;
      const nextQuestion = randomQuestions[nextIndex];
      console.log(`nextQuestion: `, nextQuestion);
      // const nextQuestionKey = ;
      if (nextIndex >= randomQuestions.length) {
        console.log("questions ended");
        return;
      }
      setIsCorrectAnswer(true);
      // consider different way to do this using useEffect?
      setTimeout(() => {
        // set the currentQuestionKey to the nextQuestionKey
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsCorrectAnswer(false);
        setIsWrongAnswer(0);
        answerRef = 0;
      }, 2000);
    } else if (answerIntervalNumber !== randomQuestions[currentQuestionIndex].midiNumber) {
      answerRef.current += 1;
      setIsWrongAnswer(isWrongAnswer + 1);
    }
  };

  const forceRefreshToPlayCadence = () => {
    setPlayed({});
  };

  function playNote(number, when, offset, duration) {
    console.log(`number: `, number);
    const note = instrument.instrumentSounds.find((note) => note.midiNumber === number);
    let bufferSource = ctx.createBufferSource();
    bufferSource.buffer = note.audioBuffer;
    bufferSource.connect(ctx.destination);
    bufferSource.start(when, offset, duration);
  }

  const playChord = (pattern, when) => {
    pattern.forEach((number) => {
      playNote((number + randomQuestions[currentQuestionIndex].keyScale[currentQuestionIndex][0]), when);
    });
  };

  const [scalePattern] = useState(findScalePattern(scaleType));
  const [randomQuestions] = useState(createQuestions(exerciseKeys));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(0);
  const [isPlayed, setPlayed] = useState();
  const [isFinishedQuestion, setIsFinishedQuestion] = useState(false);
  console.log('randomQuestions: ', randomQuestions);

  let answerRef = useRef(isWrongAnswer);

  useEffect(() => {
    if (!isLoading) {
      setIsFinishedQuestion(false);
      playChord(findChordInCadencePattern(0, cadenceType), ctx.currentTime + 2);
      playChord(findChordInCadencePattern(1, cadenceType), ctx.currentTime + 3);
      playChord(findChordInCadencePattern(2, cadenceType), ctx.currentTime + 4);
      playNote(randomQuestions[currentQuestionIndex].midiNumber, ctx.currentTime + 6);
      const finishedQuestion = setTimeout(() => {
        setIsFinishedQuestion(true);
      }, 5000);
      return () => {
        clearTimeout(finishedQuestion);
      }
    }
  }, [isPlayed, currentQuestionIndex, isLoading]);

  return (
    <Grid
      item
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      style={{ height: "75vh" }}
    >
      <ProgressBar
        randomQuestions={randomQuestions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <CadenceSymbols />
      <IntervalQuestionIcon
        randomQuestions={randomQuestions}
        currentQuestionIndex={currentQuestionIndex}
        isFinishedQuestion={isFinishedQuestion}
        isCorrectAnswer={isCorrectAnswer}
        isWrongAnswer={isWrongAnswer}
        ref={answerRef}
      />
      <ScaleTones
        randomQuestions={randomQuestions}
        currentQuestionIndex={currentQuestionIndex}
        isFinishedQuestion={isFinishedQuestion}
        checkIntervalAnswer={checkIntervalAnswer}
        playNote={playNote}
      />
      <Footer
        randomQuestions={randomQuestions}
        currentQuestionIndex={currentQuestionIndex}
        isLoading={isLoading}
        forceRefreshToPlayCadence={forceRefreshToPlayCadence}
        playNote={playNote}
        isFinishedQuestion={isFinishedQuestion}
      />
    </Grid>
  );
}

export default Exercise;
