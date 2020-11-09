import React from "react";
// React Router DOM
import { Route, Switch } from "react-router-dom";
// Components
import MainPage from "./MainPage/MainPage";
import ExerciseContainer from "./Exercise/ExerciseContainer";
import Layout from "./Layouts/Layout";
import Options from "./Options/Options";
// Styles
import "./App.css";
// MaterialUI
import { Grid } from "@material-ui/core";
import "typeface-roboto";

// All grid components are containers - the grid components within the rendered components are items

function App() {

  const mainPage = (props) => (
    <Layout props={props}>
      <MainPage />
    </Layout>
  )

  const exerciseContainer = (props) => (
    <Layout props={props}>
      <ExerciseContainer props={props} />
    </Layout>
  )

  const options = () => (
    <Layout>
      <Options />
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
              component={Options} />
          </Switch>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default App;
