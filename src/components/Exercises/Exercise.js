import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import CadenceSymbols from "./CadenceSymbols";
import IntervalQuestionIcon from "../common/IntervalQuestionIcon";
import ScaleTones from "./ScaleTones";
import Footer from "../common/Footer";
import { getScaleMidiNumbers, findScalePattern, findChordInCadencePattern, generateNumberBetweenMinAndMax } from "../../resources/helperFunctions";
import { Grid, makeStyles } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import "./Exercise.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Exercise({ isLoading, routeProps, ctx, questionsNoteRange, instrument, exerciseKeys, exerciseLength }) {

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

  const createQuestion = (exerciseKeys) => {
    // const generateNumberBetweenMinAndMax = (min, max) => Math.round(Math.random() * (max - min) + min);
    const lowestNoteInQuestionsRange = questionsNoteRange[0];
    const highestNoteInQuestionsRange = questionsNoteRange[1];
    const noteRange = highestNoteInQuestionsRange - lowestNoteInQuestionsRange;
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

    for (let i = 0; i < keyMidiNumberScale.length; i++) {
      keyScale.push([keyMidiNumberScale[i], keyNoteNameScale[i]]);
    }

    return new Question(questionKey, midiNumber, noteName, keyScale);
  };

  const checkIntervalAnswer = (answerIntervalNumber) => {
    if (answerIntervalNumber === randomQuestion.midiNumber) {
      setIsFinishedQuestion(false);
      answerRef.current -= answerRef.current;
      if (dataLogRef.current.ctxTimeOnCorrect.length === exerciseLength) {
        console.log('exercise finished');
        console.log('dataLogRef.current.ctxTimeOnCorrect: ', dataLogRef.current.ctxTimeOnCorrect)
        return;
      }
      setIsWrongAnswer(0);
      answerRef = 0;
      dataLogRef.current.ctxTimeOnCorrect.push(ctx.currentTime);
      setIsCorrectAnswer(true);
    } else if (answerIntervalNumber !== randomQuestion.midiNumber) {
      answerRef.current += 1;
      setIsWrongAnswer(isWrongAnswer + 1);
    }
  };

  const forceRefreshToPlayCadence = () => {
    setPlayed({});
  };

  function playNote(number, when, offset, duration) {
    const note = instrument.instrumentSounds.find((note) => note.midiNumber === number);
    let bufferSource = ctx.createBufferSource();
    bufferSource.buffer = note.audioBuffer;
    bufferSource.connect(ctx.destination);
    bufferSource.start(when, offset, duration);
  }

  const playChord = (pattern, when) => {
    pattern.forEach((number) => {
      playNote((number + randomQuestion.keyScale[0][0]), when);
    });
  };

  const [scalePattern] = useState(findScalePattern(scaleType));
  const [randomQuestion, setRandomQuestion] = useState(createQuestion(exerciseKeys));
  // add in state that holds user data
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(0);
  const [isPlayed, setPlayed] = useState();
  const [isFinishedQuestion, setIsFinishedQuestion] = useState(false);

  let answerRef = useRef(isWrongAnswer);
  let dataLogRef = useRef({ ctxTimeOnCorrect: [] });
  let nodeRef = useRef(null);


  useEffect(() => {
    if (!isLoading) {
      setIsFinishedQuestion(false);
      playChord(findChordInCadencePattern(0, cadenceType), ctx.currentTime + 2);
      playChord(findChordInCadencePattern(1, cadenceType), ctx.currentTime + 3);
      playChord(findChordInCadencePattern(2, cadenceType), ctx.currentTime + 4);
      playNote(randomQuestion.midiNumber, ctx.currentTime + 6);
      const finishedQuestion = setTimeout(() => {
        setIsFinishedQuestion(true);
      }, 6000);
      return () => {
        clearTimeout(finishedQuestion);
      }
    }
  }, [isPlayed, isLoading, randomQuestion]);

  useEffect(() => {
    console.log('dataLogReg: ', dataLogRef);
  }, [randomQuestion])

  return (
    <>
      <ProgressBar
        randomQuestion={randomQuestion}
        exerciseLength={exerciseLength}
        dataLogRef={dataLogRef}
      />
      <CSSTransition
        in={!isCorrectAnswer}
        appear={true}
        enter={true}
        exit={true}
        onExited={() => {
          setIsCorrectAnswer(false);
          setRandomQuestion(() => createQuestion(exerciseKeys));
        }}
        timeout={{
          appear: 1000,
          enter: 1000,
          exit: 2000
        }}
        classNames="transition-"
        nodeRef={nodeRef}
      >
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          style={{ height: "75vh" }}
        >

          <CadenceSymbols />
          <IntervalQuestionIcon
            randomQuestion={randomQuestion}
            isFinishedQuestion={isFinishedQuestion}
            isCorrectAnswer={isCorrectAnswer}
            isWrongAnswer={isWrongAnswer}
            ref={answerRef}
          />
          <ScaleTones
            randomQuestion={randomQuestion}
            isFinishedQuestion={isFinishedQuestion}
            checkIntervalAnswer={checkIntervalAnswer}
            playNote={playNote}
          />
        </Grid>
      </CSSTransition>
      <Footer
        randomQuestion={randomQuestion}
        isLoading={isLoading}
        forceRefreshToPlayCadence={forceRefreshToPlayCadence}
        playNote={playNote}
        isFinishedQuestion={isFinishedQuestion}
      />
    </>
  );
}

export default Exercise;
