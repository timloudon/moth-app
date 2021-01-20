import React, { useState, useEffect, useLayoutEffect } from "react";
// import { useTimeout } from "../../resources/useTimeout";
import ProgressBar from "./ProgressBar";
import CadenceSymbols from "./CadenceSymbols";
import IntervalQuestionIcon from "../common/IntervalQuestionIcon";
import ScaleTones from "./ScaleTones";
import Footer from "../common/Footer";
import { getScaleNotes, findScalePattern, findChordInCadencePattern } from "../../resources/helperFunctions";
import { Grid, makeStyles } from "@material-ui/core";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Exercise({ isLoading, routeProps, ctx, samples }) {
  console.log('exercise rendered');

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
      const nextIndex = currentQuestionIndex + 1;
      const nextQuestion = randomQuestions[nextIndex];
      if (nextIndex >= randomQuestions.length) {
        console.log("end");
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
      console.log("Wrong answer");
    }
  };

  const forceRefreshToPlayCadence = () => {
    setPlayed({});
  };

  function playNote(number) {
    const note = samples.find((note) => note.midiNumber === number);
    let bufferSource = ctx.createBufferSource();
    bufferSource.buffer = note.audioBuffer;
    bufferSource.connect(ctx.destination);
    bufferSource.start();
  }

  const playChord = (pattern) => {
    pattern.forEach((number) => {
      playNote(number);
      console.log('playChord: ', number);
    });
  };

  const [scale] = useState(getScaleNotes(findScalePattern(scaleType), samples));
  const [availableNotes, setAvailableNotes] = useState(filterAvailableNotes(noteRange));
  const [randomQuestions] = useState(createQuestions(noteRange));
  const [currentQuestionValue, setCurrentQuestionValue] = useState(randomQuestions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isPlayed, setPlayed] = useState();
  const [isFinishedQuestion, setIsFinishedQuestion] = useState(false);

  useEffect(() => {
    setIsCorrectAnswer(false);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (!isLoading) {
      setIsFinishedQuestion(false);
      console.log('cadence started');
      const playChordOne = setTimeout(() => { playChord(findChordInCadencePattern(0, cadenceType)) }, 1000);
      const playChordTwo = setTimeout(() => { playChord(findChordInCadencePattern(1, cadenceType)) }, 2000);
      const playChordThree = setTimeout(() => { playChord(findChordInCadencePattern(2, cadenceType)) }, 3000);
      const playTone = setTimeout(() => { playNote(currentQuestionValue) }, 5000);
      const finishedQuestion = setTimeout(() => {
        setIsFinishedQuestion(true);
      }, 6000);
      return () => {
        clearTimeout(playChordOne);
        clearTimeout(playChordTwo);
        clearTimeout(playChordThree);
        clearTimeout(playTone);
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
        scale={scale}
        currentQuestionValue={currentQuestionValue}
        isCorrectAnswer={isCorrectAnswer}
      />
      <ScaleTones
        noteRange={noteRange}
        scale={scale}
        availableNotes={availableNotes}
        currentQuestionValue={currentQuestionValue}
        isFinishedQuestion={isFinishedQuestion}
        checkIntervalAnswer={checkIntervalAnswer}
        playNote={playNote}
      />
      <Footer
        forceRefreshToPlayCadence={forceRefreshToPlayCadence}
        playNote={playNote}
        currentQuestionValue={currentQuestionValue}
        isFinishedQuestion={isFinishedQuestion}
      />
    </Grid>
  );
}

export default Exercise;
