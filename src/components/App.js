import React from 'react';
// React Router DOM
import { Link, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <React.Fragment>

      {/* Need to pass in the title of each page into the title prop */}
      <Header title={'Exercise'} />

      {/* include splash page here */}
      <Link to={`/`}>Main Page</Link>
      <Link to={`/components/Exercise`}>Exercise</Link>
      <Link to={`/components/Options`}>Options</Link>

      <Grid container>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/components/Exercise" component={ExerciseContainer} />
          <Route exact path="/components/Options" component={Options} />
        </Switch>
      </Grid>

      <Footer />

    </React.Fragment>
  );
}

export default App;
