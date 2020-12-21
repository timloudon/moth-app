import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../../components/MainPage/MainPage";
import Exercise from "../../components/Exercises/Exercise";
import Footer from '../../components/common/Footer';
import Layout from "./Layout"
import { instruments } from "../../resources/musicResources";
import "./App.css";
import { Grid } from "@material-ui/core";
import SamplesProvider from "../../components/Exercises/SamplesProvider";

function App() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const [isOpen, setOpen] = useState(false);
  const [instrumentType, setInstrumentType] = useState(instruments[0].instrumentName);

  const changeInstrumentSound = (instrumentName) => {
    setInstrumentType(instrumentName);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mainPage = () => (
    <Layout
      title="MOTH"
      handleOpen={handleOpen}
      handleClose={handleClose}
      changeInstrumentSound={changeInstrumentSound}
      isOpen={isOpen}>
      <MainPage />
    </Layout>
  )

  const exercise = (props) => (
    <>
      <Layout
        title={"SCALE TONES - " + (props.location.state.cadence.type)}
        handleOpen={handleOpen}
        handleClose={handleClose}
        changeInstrumentSound={changeInstrumentSound}
        isOpen={isOpen}>
        <SamplesProvider
          routeProps={props}
          instrumentType={instrumentType}
          ctx={ctx} />
      </Layout>
      <Footer />
    </>
  )

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={0}
      >
        <Switch>
          <Route
            exact
            path="/"
            component={mainPage} />
          <Route
            exact
            path="/Exercise/ExerciseContainer"
            component={exercise}
          />
        </Switch>
      </Grid>
    </React.Fragment >
  );
}

export default App;
