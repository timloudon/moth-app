import React from 'react';
// React Router DOM
import { Route, Switch } from 'react-router-dom';
// Components
import MainPage from './MainPage/MainPage';
import ExerciseContainer from './Exercise/ExerciseContainer';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Options from './Options/Options';
// Styles
import './App.css';
// MaterialUI
import { Grid } from '@material-ui/core';
import "typeface-roboto";

// All grid components are containers - the grid components within the rendered components are items

function App() {
  return (
    <React.Fragment>
      <Grid container
        // spacing={0}
        direction="column"
        justify="flex-start"
        alignItems="stretch">

        <Grid item>
          {/* Need to pass in the title of each page into the title prop */}
          <Header title={'Title'} />
          {/* include splash page here */}
        </Grid>

        <Grid item>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/components/Exercise" component={ExerciseContainer} />
            <Route exact path="/components/Options" component={Options} />
          </Switch>
        </Grid>

        <Grid item>
          <Footer />
        </Grid>

      </Grid>

    </React.Fragment>
  );
}

export default App;
