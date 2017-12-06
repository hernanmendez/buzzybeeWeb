// @flow
/* eslint-env browser */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  yellow500, yellow700,
  blue400, cyan500,
  grey100, grey300, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReactDOM from 'react-dom';
import about from './routes/About';
import jobs from './routes/Jobs';
import story from './routes/Story';
import contact from './routes/Contact';
import Nav from './components/navbar';
import Footer from './components/Footer';
import './css/Animations.css';
import './css/Animate.css';
import './css/Contact.css';
import './css/Footer.css';
import './css/Jobs.css';
import './css/Nav.css';
import './css/Story.css';
import './css/Subscribe.css';
import './css/Team.css';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider muiTheme={getMuiTheme({
      palette: {
        primary1Color: yellow500,
        primary2Color: yellow700,
        primary3Color: blue400,
        accent1Color: cyan500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
      },
    })}
    >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={story} />
          <Route path="/story/:name" component={story} />
          <Route path="/jobs" component={jobs} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
        </Switch>
        <Footer />
      </div>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
