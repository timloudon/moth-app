import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import CadenceSymbols from "./CadenceSymbols";
import IntervalQuestionIcon from "../common/IntervalQuestionIcon";
import ScaleTones from "./ScaleTones";
import Footer from "../common/Footer";
import { getScaleNotes, findScalePattern, findChordInCadencePattern } from "../../resources/helperFunctions";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Exercise({ isLoading, routeProps, ctx, samples }) {
  const classes = useStyles();

  // The string value passed in as a prop from the Main Menu component (string: e.g. "Major")
  const scaleType = routeProps.location.state.scale.type;
  const cadenceType = routeProps.location.state.cadence.type;
  const noteRange = [60, 72];

  const filterAvailableNotes = (noteRange) => {
    return scale.filter(
      (item) =>
        item.midiNumber >= noteRange[0] && item.midiNumber <= noteRange[1]
    );
  };

  const createQuestions = () => {
    const randomQuestions = [];
    for (let i = 0; i < 10; i++) {
      const generateNumberBetweenMinAndMax = (min, max) =>
        Math.round(Math.random() * (max - min) + min);
      const randomIndex = generateNumberBetweenMinAndMax(
        0,
        availableNotes.length - 1
      );
      randomQuestions.push(availableNotes[randomIndex].midiNumber);
    }
    return randomQuestions;
  };

  const checkIntervalAnswer = (answerIntervalNumber) => {
    if (answerIntervalNumber === currentQuestionValue) {
      setIsFinishedQuestion(false);
      answerRef.current -= answerRef.current;
      const nextIndex = currentQuestionIndex + 1;
      const nextQuestion = randomQuestions[nextIndex];
      if (nextIndex >= randomQuestions.length) {
        console.log("questions ended");
        return;
      }
      setIsCorrectAnswer(true);
      console.log('answer state now correct');
      // consider different way to do this using useEffect?
      setTimeout(() => {
        setCurrentQuestionValue(nextQuestion);
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
    const note = samples.find((note) => note.midiNumber === number);
    let bufferSource = ctx.createBufferSource();
    bufferSource.buffer = note.audioBuffer;
    bufferSource.connect(ctx.destination);
    bufferSource.start(when, offset, duration);
  }

  const playChord = (pattern, when) => {
    pattern.forEach((number) => {
      playNote(number, when);
    });
  };

  const [scale] = useState(getScaleNotes(findScalePattern(scaleType), samples));
  const [availableNotes, setAvailableNotes] = useState(filterAvailableNotes(noteRange));
  const [randomQuestions] = useState(createQuestions(noteRange));
  const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(0);
  const [isPlayed, setPlayed] = useState();
  const [isFinishedQuestion, setIsFinishedQuestion] = useState(false);

  console.log('isWrongAnswer: ', isWrongAnswer);

  let answerRef = useRef(isWrongAnswer);
  console.log('answerRef: ', answerRef);

  useEffect(() => {
    if (!isLoading) {
      setIsFinishedQuestion(false);
      playChord(findChordInCadencePattern(0, cadenceType), ctx.currentTime);
      playChord(findChordInCadencePattern(1, cadenceType), ctx.currentTime + 1);
      playChord(findChordInCadencePattern(2, cadenceType), ctx.currentTime + 2);
      playNote(currentQuestionValue, ctx.currentTime + 4);
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
      <span>{isWrongAnswer.toString()}</span>
      <CadenceSymbols />
      <IntervalQuestionIcon
        scale={scale}
        currentQuestionValue={currentQuestionValue}
        isCorrectAnswer={isCorrectAnswer}
        isWrongAnswer={isWrongAnswer}
        ref={answerRef}
      />
      <ScaleTones
        noteRange={noteRange}
        scale={scale}
        availableNotes={availableNotes}
        currentQuestionValue={currentQuestionValue}
        isFinishedQuestion={isFinishedQuestion}
        checkIntervalAnswer={checkIntervalAnswer}
        isWrongAnswer={isWrongAnswer}
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
