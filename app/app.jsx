var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
var About = require('About');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');

// Start foundation
$(document).foundation();

// Load Custom Style Sheet (app.styl)
require('style!css!stylus!applicationStyles');

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <Route path="countdown" component={ Countdown }/>
      <Route path="about" component={ About }/>
      <IndexRoute component={ Timer }/>
    </Route>
  </Router>,
  document.getElementById('app')
);
