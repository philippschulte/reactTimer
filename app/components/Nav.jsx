var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" >Timer</IndexLink>
            </li>
            <li>
              <Link to="countdown" activeClassName="active-link">Countdown</Link>
            </li>
            <li>
              <Link to="about" activeClassName="active-link">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created By <a href="https://www.linkedin.com/in/philipp-schulte-1809b4b5" target="_blank">Philipp Schulte</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
