// NEW FEATURE: Have a practice mode where you're given a constant tone and the key/progresultsion/cadence 
// changes and you have to identify the tone in relation to the changes
// PROBLEM: Need to figure out a way to make the scale and cadence patterns be affected by key changes
// i.e. have the cadence chords defined by differences in semitones and use maths to adjust them 
// (probably need a broader range of available notes - i.e. C2 - C4). Also have different voicings (inversions)
// for the most realistic changes (and figure out ways of selecting them)

import React, { useState, useEffect, useRef } from "react";
// React Router DOM
import { Route, Switch } from "react-router-dom";
// Components
import MainPage from "./MainPage/MainPage";
import ExerciseContainer from "./Exercise/ExerciseContainer";
import Layout from "./Layouts/Layout";
// Arrays & Functions
import {
  getSoundObjects,
  instruments
} from "../shared/musicResources";
// Styles
import "./App.css";
// MaterialUI
import { Grid, Button } from "@material-ui/core";
import "typeface-roboto";

/*
  Snippets to use:

  anfn: anon func
  dar: array destr. (for useState)
  dob: obj. destr. (for porps)
  cmmb: comment block
 */

function App() {

  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  // Create a 2D array of all instrument sound file paths
  const allTheInstrumentSounds = [...instruments.map(item => item.instrumentSounds.map(item => item.sound))];
  // Merge all instrument sound file paths into a single array
  const mergedInstrumentSounds = [].concat.apply([], allTheInstrumentSounds);

  const [samples, setSamples] = useState();

  const getFile = async (audioContext, filePath) => {
    const resultponse = await fetch(filePath);
    const arrayBuffer = await resultponse.arrayBuffer();
    const decodedAudio = await audioContext.decodeAudioData(arrayBuffer);
    return decodedAudio;
  }

  const setupSamples = async (samplesArr) => {
    // const fetchFile = await getFile(ctx, samplesArr[0]);
    const allSamples = await samplesArr.map(async (filePath) => {
      return await getFile(ctx, filePath);
    });
    console.log(allSamples, 'allSamples');
    return allSamples;
  }

  /**
   * To Do (5/12/20):
   * 
   * i) Sort out how the samples are loaded (accessesing the samples in the 'instruments' object in musicResources)
   * ii) Change the logo to take size variables (rem) so it can be used for different sizings
   * 
   */

  useEffect(() => {

    const samplesArr = [];

    setupSamples(mergedInstrumentSounds)
      .then(result => {
        result.forEach(item => {
          item
            .then(promiseResult => {
              samplesArr.push(promiseResult);
            })
        });
        setSamples(samplesArr);
      })
      .catch(err => console.log(err, 'err'));

    // Cleanup the audioConext (needed?)
    return () => ctx.close();
  }, []);

  function playNote(index) {
    let bufferSource = ctx.createBufferSource();
    console.log(samples[index], 'samplesInPlayNote[index]');
    bufferSource.buffer = samples[index];
    // bufferSource.buffer = await fullArr[note];
    bufferSource.connect(ctx.destination);
    bufferSource.start();
    return bufferSource;
  }

  // Provides the all the available notes for setting the default state (from Piano)
  const defaultNotes = instruments[0].instrumentSounds;

  // STATES

  // sets the state for the audio as an array of audio objects (currently identified by the index)
  const [instrumentSounds, setInstrumentSounds] = useState(getSoundObjects(defaultNotes));

  // sets the state of the options Modal
  const [isOpen, setOpen] = useState(false);

  // Changes the state of the sound objects
  const changeInstrumentSound = (instrumentSounds) => {
    setInstrumentSounds(getSoundObjects(instrumentSounds));
  }

  // Handles the isOpening of the Options Modal
  const handleOpen = () => {
    console.log('handle isOpen function');
    setOpen(true);
  };

  // Handles the closing of the Options Modal
  const handleClose = () => {
    setOpen(false);
  };

  // COMPONENTS

  const mainPage = () => (
    <Layout
      title="Main Menu"
      handleOpen={handleOpen}
      handleClose={handleClose}
      changeInstrumentSound={changeInstrumentSound}
      isOpen={isOpen}>
      <MainPage />
    </Layout>
  )

  const exerciseContainer = (props) => (
    <Layout
      title={props.location.state.cadence.type}
      handleOpen={handleOpen}
      handleClose={handleClose}
      changeInstrumentSound={changeInstrumentSound}
      isOpen={isOpen}>
      <ExerciseContainer
        routeProps={props}
        instrumentSounds={instrumentSounds}
        defaultNotes={defaultNotes}
        playNote={playNote} />
    </Layout>
  )

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Switch>
          <Route
            exact
            path="/"
            component={mainPage} />
          <Route
            exact
            path="/Exercise/ExerciseContainer"
            component={exerciseContainer}
          />
        </Switch>
        {/* <Button onClick={() => playNote(2)}>Play Note</Button>
        <Button onClick={() => console.log(samples)}>Console Samples</Button> */}
      </Grid>
    </React.Fragment >
  );
}

export default App;
