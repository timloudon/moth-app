// NEW FEATURE: Have a practice mode where you're given a constant tone and the key/progression/cadence 
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

  let triggerSound;
  let samples = [];

  useEffect(() => {
    // Create new audio context
    const ctx = new AudioContext();
    // Create a 2D array of all instrument sound file paths
    const instrumentSounds = [...instruments.map(item => item.instrumentSounds.map(item => item.sound))];
    console.log(instrumentSounds, 'first steplet');
    // Merge all instrument sound file paths into a single array
    const mergedInstrumentSounds = [].concat.apply([], instrumentSounds);
    console.log(mergedInstrumentSounds, 'mergedArray');

    async function getFile(audioContext, filePath) {
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
      const decodedAudio = await audioContext.decodeAudioData(arrayBuffer);
      return decodedAudio;
    }

    async function setupSamples(samplesArr) {
      const samples = samplesArr.map(async (filePath) => {
        return await getFile(ctx, filePath);
      });
      return samples;
    }

    async function playNote(note) {
      let bufferSource = ctx.createBufferSource();
      const fullArr = await setupSamples(mergedInstrumentSounds);
      bufferSource.buffer = await fullArr[note];
      bufferSource.connect(ctx.destination);
      bufferSource.start();
      return bufferSource;
    }

    triggerSound = async () => {
      playNote(0);
    };
    triggerSound();

    // Cleanup the audioConext (needed?)
    return () => ctx.close();
  });

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
        defaultNotes={defaultNotes} />
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
      </Grid>
    </React.Fragment >
  );
}

export default App;
