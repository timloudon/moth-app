import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../../components/MainPage/MainPage";
import Layout from "./Layout"
import Options from "../../components/Options/Options"
import { instruments, keyMaps } from "../../resources/musicResources";
import "./App.css";
import SamplesProvider from "../../components/Exercises/SamplesProvider";
import { makeStyles } from "@material-ui/core";

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

  const [instrumentType, setInstrumentType] = useState(instruments[0].instrumentName);
  const [cadenceType, setCadenceType] = useState('451');
  const [keySignatures, setKeySignatures] = useState(() => [keyMaps[0].keys[0].keyName]);
  const [scaleTonesOrNoteNames, setScaleTonesOrNoteNames] = useState("Scale Tones");
  const [exerciseLength, setExerciseLength] = useState(10);

  const changeInstrumentSound = (event, instrumentName) => {
    setInstrumentType(instrumentName);
  }

  const changeCadenceType = (event, cadenceName) => {
    setCadenceType(cadenceName);
  }

  const changeKeySignatures = (event, keySignatures) => {
    if (keySignatures.length) {
      setKeySignatures(keySignatures);
    }
  }

  const changeScaleTonesOrNoteNames = (event, chosenOption) => {
    setScaleTonesOrNoteNames(chosenOption)
  }

  // const selectAllKeySignatures = () => {
  //   const allKeys = keyMaps[0].keys.map(key => key.keyName);
  //   console.log("allKeys: ", allKeys);
  //   setKeySignatures(allKeys);
  // }

  const mainPage = () => (
    <Layout
      title="MOTH"
      changeInstrumentSound={changeInstrumentSound}
    >
      <MainPage />
    </Layout>
  )

  const exercise = (props) => (
    <Layout
      title={props.location.state.cadence.type}
      changeInstrumentSound={changeInstrumentSound}
    >
      <SamplesProvider
        routeProps={props}
        instrumentType={instrumentType}
        cadenceType={cadenceType}
        keySignatures={keySignatures}
        exerciseLength={exerciseLength}
        ctx={ctx} />
    </Layout>
  )

  const options = () => (
    <Layout
      title="MOTH"
      changeInstrumentSound={changeInstrumentSound}
    >
      <Options
        changeCadenceType={changeCadenceType}
        cadenceType={cadenceType}
        changeInstrumentSound={changeInstrumentSound}
        instrumentType={instrumentType}
        changeKeySignatures={changeKeySignatures}
        keySignatures={keySignatures}
        changeScaleTonesOrNoteNames={changeScaleTonesOrNoteNames}
        scaleTonesOrNoteNames={scaleTonesOrNoteNames}
      />
    </Layout>
  )

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
        <Route
          exact
          path="/Options/Options"
          component={options}
        />
      </Switch>
    </div>
  );
}

export default App;
