import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../../components/MainPage/MainPage";
import Layout from "./Layout"
import { instruments } from "../../resources/musicResources";
import "./App.css";
import SamplesProvider from "../../components/Exercises/SamplesProvider";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: "100vw",
    padding: 0,
  },
}));

function App() {
  const classes = useStyles();

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
    <Layout
      title={props.location.state.cadence.type}
      handleOpen={handleOpen}
      handleClose={handleClose}
      changeInstrumentSound={changeInstrumentSound}
      isOpen={isOpen}>
      <SamplesProvider
        routeProps={props}
        instrumentType={instrumentType}
        ctx={ctx} />
    </Layout>
  )

  // const options = () => (
  //   <Layout
  //     title="MOTH"
  //     handleOpen={handleOpen}
  //     handleClose={handleClose}
  //     changeInstrumentSound={changeInstrumentSound}
  //     isOpen={isOpen}>
  //     <Options />
  //   </Layout>
  // )

  return (
    <div className={classes.root}>
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
    </div>
  );
}

export default App;
