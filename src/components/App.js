import React from 'react';
import './App.css';
import Splash from './SplashScreen/withSplashScreen';
import MainPage from './MainPage/MainPage';
// import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Splash />
      <MainPage />
      {/* <Link to="/">MAJOR</Link>
      <Link to="/">MINOR</Link>
      <Link to="/">MAJOR CHROMATIC</Link>
      <Link to="/">MINOR CHROMATIC</Link> */}
      {/* <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Major} path="/" />
        <Route component={Minor} path="/" />
        <Route component={MajorChromatic} path="/" />
        <Route component={MinorChromatic} path="/" />
      </Switch> */}
    </div>
  );
}

export default App;
