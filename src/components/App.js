// NEW FEATURE: Have a practice mode where you're given a constant tone and the key/progression/cadence 
// changes and you have to identify the tone in relation to the changes
// PROBLEM: Need to figure out a way to make the scale and cadence patterns be affected by key changes
// i.e. have the cadence chords defined by differences in semitones and use maths to adjust them 
// (probably need a broader range of available notes - i.e. C2 - C4). Also have different voicings (inversions)
// for the most realistic changes (and figure out ways of selecting them)

import React, { useState } from "react";
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
import { Grid } from "@material-ui/core";
import "typeface-roboto";

function App() {

  // Provides the all the available notes for setting the default state (from Piano)
  const defaultNotes = instruments[0].instrumentSounds;

  // STATES

  // sets the state for the audio as an array of audio objects (currently identified by the index)
  const [instrumentSounds, setInstrumentSounds] = useState(getSoundObjects(defaultNotes));

  // sets the state of the options Modal
  const [open, setOpen] = useState(false);

  // Changes the state of the sound objects
  const changeInstrumentSound = (instrumentSounds) => {
    setInstrumentSounds(getSoundObjects(instrumentSounds));
  }

  // Handles the opening of the Options Modal
  const handleOpen = () => {
    console.log('handle open function')
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
      open={open}>
      <MainPage />
    </Layout>
  )

  const exerciseContainer = (props) => (
    <Layout
      title={props.location.state.type}
      handleOpen={handleOpen}
      handleClose={handleClose}
      changeInstrumentSound={changeInstrumentSound}
      open={open}>
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

        <Grid item>
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

      </Grid>
    </React.Fragment>
  );
}

export default App;
