import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import Store from './context/Store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './components/theme';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {/* <Store> */}
        <App />
        {/* </Store> */}
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
