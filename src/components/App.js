import React, { useState, useEffect } from "react";
// React Router DOM
import { Route, Switch } from "react-router-dom";
// Components
import MainPage from "./MainPage/MainPage";
import ExerciseContainer from "./Exercise/ExerciseContainer";
import Layout from "./Layouts/Layout";
// Arrays & Functions
import { instruments } from "../shared/musicResources";
// Styles
import "./App.css";
// MaterialUI
import { Grid } from "@material-ui/core";
import "typeface-roboto";

function App() {

  // Creates a new audioContext when the App component is mounted
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  // Provides the all the available notes for setting the default state (from Piano)
  const defaultNotes = instruments[0].instrumentSounds;

  // STATES

  // sets the state of the options Modal
  const [isOpen, setOpen] = useState(false);
  // State containing all of the samples loaded in as decodedAudio
  const [samples, setSamples] = useState();
  // State for the selected instrument type
  const [instrumentType, setInstrumentType] = useState(instruments[0].instrumentName);

  // METHODS

  // Fetch audio file and decode the audio for use
  const getFile = async (audioContext, filePath) => {
    const resultponse = await fetch(filePath);
    const arrayBuffer = await resultponse.arrayBuffer();
    const decodedAudio = await audioContext.decodeAudioData(arrayBuffer);
    return decodedAudio;
  }

  // Augments each note object in the instruments array by adding the audioBuffer property with each audioBBuffer value
  const setupSamples = async (instruments) => {
    await instruments.forEach(async instrumentObject => {
      instrumentObject.instrumentSounds.forEach(async note => {
        note.audioBuffer = await getFile(ctx, note.filePath);
      })
    });
    return instruments;
  }

  // Changethe instrument type
  const changeInstrumentSound = (instrumentName) => {
    setInstrumentType(instrumentName);
  }

  // Handles the isOpening of the Options Modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Handles the closing of the Options Modal
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    setupSamples(instruments)
      .then(result => {
        setSamples(result);
        console.log('samples loaded');
      })
      .catch(err => {
        console.log('error: ', err.value);
      })
    return () => ctx.close();
  }, []);

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
        ctx={ctx}
        // instrumentSounds={instrumentSounds}
        defaultNotes={defaultNotes}
        samples={samples} />
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
