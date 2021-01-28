import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import CadenceSymbols from "./CadenceSymbols";
import IntervalQuestionIcon from "../common/IntervalQuestionIcon";
import ScaleTones from "./ScaleTones";
import Footer from "../common/Footer";
import { getScaleMidiNumbers, findScalePattern, findChordInCadencePattern } from "../../resources/helperFunctions";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Exercise({ isLoading, routeProps, ctx, questionsNoteRange, instrument, exerciseKeys }) {

  // console.log('instrument: ', instrument);
  // console.log('exerciseKeys: ', exerciseKeys);

  const classes = useStyles();

  // The string value passed in as a prop from the Main Menu component (string: e.g. "Major")
  const scaleType = routeProps.location.state.scale.type;
  const cadenceType = routeProps.location.state.cadence.type;

  const createQuestions = (exerciseKeys) => {
    const generateNumberBetweenMinAndMax = (min, max) => Math.round(Math.random() * (max - min) + min);
    const randomQuestions = [];
    const lowestNoteInQuestionsRange = questionsNoteRange[0];
    const highestNoteInQuestionsRange = questionsNoteRange[1];
    const noteRange = highestNoteInQuestionsRange - lowestNoteInQuestionsRange;

    for (let i = 0; i < 10; i++) {
      const question = [];
      const randomKeyIndex = generateNumberBetweenMinAndMax(0, exerciseKeys.length - 1);
      question.push(exerciseKeys[randomKeyIndex].keyName);
      randomQuestions.push(question);

      // contains object reference problem (the adding the tonic to the end of the scale references a single object - not a clone of it)

      const questionKey = randomQuestions[i][0];
      const instrumentNotesInRange = instrument.instrumentSounds.filter((note) => note.midiNumber >= lowestNoteInQuestionsRange && note.midiNumber <= highestNoteInQuestionsRange);
      const lowestNoteInKey = instrumentNotesInRange.find((note) => note.noteName.includes(questionKey));
      const lowestMidiNumberInKey = lowestNoteInKey.midiNumber;
      const availableScaleTones = getScaleMidiNumbers(scalePattern, lowestMidiNumberInKey, noteRange);
      const randomNoteIndex = generateNumberBetweenMinAndMax(0, availableScaleTones.length - 1);
      const questionNoteNameScale = exerciseKeys.filter((key) => key.keyName === questionKey)[0];
      // fix for bug where just pushing the question key without the while condition results in multiple pushes
      while (questionNoteNameScale.scale.length < 8) {
        questionNoteNameScale.scale.push(questionKey);
      }
      randomQuestions[i].push(availableScaleTones[randomNoteIndex], questionNoteNameScale.scale[randomNoteIndex], availableScaleTones, questionNoteNameScale.scale);
    }
    console.log('randomQuestions: ', randomQuestions);
    return randomQuestions;
  };

  const checkIntervalAnswer = (answerIntervalNumber) => {
    if (answerIntervalNumber === currentQuestionValue) {
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
        setCurrentQuestionKey(nextQuestion[0]);
        setCurrentQuestionValue(nextQuestion[1]);
        setCurrentQuestionNoteName(nextQuestion[2])
        setCurrentQuestionMidiNumberScale(nextQuestion[3])
        setCurrentQuestionNoteNameScale(nextQuestion[4])
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsCorrectAnswer(false);
        setIsWrongAnswer(0);
        answerRef = 0;
      }, 2000);
    } else if (answerIntervalNumber !== currentQuestionValue) {
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
      playNote((number + currentQuestionMidiNumberScale[0]), when);
    });
  };

  const [scalePattern] = useState(findScalePattern(scaleType));
  const [randomQuestions] = useState(createQuestions(exerciseKeys));
  const [currentQuestionKey, setCurrentQuestionKey] = useState(randomQuestions[0][0]);
  const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0][1]);
  const [currentQuestionNoteName, setCurrentQuestionNoteName] = useState(randomQuestions[0][2]);
  const [currentQuestionMidiNumberScale, setCurrentQuestionMidiNumberScale] = useState(randomQuestions[0][3]);
  const [currentQuestionNoteNameScale, setCurrentQuestionNoteNameScale] = useState(randomQuestions[0][4]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(0);
  const [isPlayed, setPlayed] = useState();
  const [isFinishedQuestion, setIsFinishedQuestion] = useState(false);
  // console.log('scalePattern: ', scalePattern);
  console.log('randomQuestions: ', randomQuestions);
  // console.log('currentQuestionKey: ', currentQuestionKey);
  // console.log('currentQuestionValue: ', currentQuestionValue);
  // console.log(`currentQuestionNoteName: `, currentQuestionNoteName);
  // console.log('currentQuestionMidiNumberScale: ', currentQuestionMidiNumberScale);
  // console.log(`currentQuestionNoteNameScale: `, currentQuestionNoteNameScale);
  // console.log('currentQuestionIndex: ', currentQuestionIndex);

  let answerRef = useRef(isWrongAnswer);

  useEffect(() => {
    if (!isLoading) {
      setIsFinishedQuestion(false);
      playChord(findChordInCadencePattern(0, cadenceType), ctx.currentTime + 2);
      playChord(findChordInCadencePattern(1, cadenceType), ctx.currentTime + 3);
      playChord(findChordInCadencePattern(2, cadenceType), ctx.currentTime + 4);
      playNote(currentQuestionValue, ctx.currentTime + 6);
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
        isFinishedQuestion={isFinishedQuestion}
        currentQuestionValue={currentQuestionValue}
        currentQuestionNoteName={currentQuestionNoteName}
        isCorrectAnswer={isCorrectAnswer}
        isWrongAnswer={isWrongAnswer}
        ref={answerRef}
      />
      <ScaleTones
        currentQuestionMidiNumberScale={currentQuestionMidiNumberScale}
        currentQuestionNoteNameScale={currentQuestionNoteNameScale}
        isFinishedQuestion={isFinishedQuestion}
        checkIntervalAnswer={checkIntervalAnswer}
        playNote={playNote}
      />
      <Footer
        isLoading={isLoading}
        forceRefreshToPlayCadence={forceRefreshToPlayCadence}
        playNote={playNote}
        currentQuestionValue={currentQuestionValue}
        isFinishedQuestion={isFinishedQuestion}
      />
    </Grid>
  );
}

export default Exercise;
