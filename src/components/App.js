import React, { useState } from "react";
// React Router DOM
import { Route, Switch } from "react-router-dom";
// Components
import MainPage from "./MainPage/MainPage";
import ExerciseContainer from "./Exercise/ExerciseContainer";
import Layout from "./Layouts/Layout";
import Options from "./Options/Options";
// Arrays & Functions
import {
  getSoundObjects,
  instruments
} from "../shared/scales";
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

  // Changes the state of the sound objects
  const changeInstrumentSound = (instrumentSounds) => {
    setInstrumentSounds(getSoundObjects(instrumentSounds));
  }

  console.log((instrumentSounds[0]), 'instrumentSound state');
  console.log(defaultNotes, 'defaultNotes(App)')

  // COMPONENTS

  const mainPage = () => (
    <Layout>
      <MainPage />
    </Layout>
  )

  const exerciseContainer = (props) => (
    <Layout>
      <ExerciseContainer routeProps={props} instrumentSounds={instrumentSounds} defaultNotes={defaultNotes} />
    </Layout>
  )

  const options = () => (
    <Layout>
      <Options changeInstrumentSound={changeInstrumentSound} />
    </Layout>
  )

  return (
    <React.Fragment>
      <Grid
        container
        // spacing={0}
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
            <Route
              exact
              path="/Options/Options"
              component={options} />
          </Switch>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default App;
