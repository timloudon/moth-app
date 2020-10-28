import React from 'react';
import './App.css';
// import Splash from './SplashScreen/withSplashScreen';
// import MainHeader from '../shared/MainHeader';
import MainPage from './MainPage/MainPage';
import ExerciseContainer from './Exercise/ExerciseContainer';
import Options from './Options/Options';

// React Router DOM

import { Link, Route, Switch } from 'react-router-dom';

// Material UI Imports

import "typeface-roboto";
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='md'
        style={{
          height: '100vh',
        }}
      >
        {/* include splash page here */}
        <Link to={`/`}>Main Page</Link>
        <Link to={`/components/ExerciseContainer`}>Exercise</Link>
        <Link to={`/components/Options`}>Options</Link>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/components/Exercise" component={ExerciseContainer} />
          <Route exact path="/components/Options" component={Options} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;

// Ideas

// Possibility of having the exercise components in a JSON (major scale, minor scale etc.) 
// and have an arrow function component return a particular object with the correct scales,
// controlled by the state which is passed by what is currently selected in the options

// const Scale = () => {
//   return(
//     // return object here with corresponding options
//   )
// }