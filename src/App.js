import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
// import { Button, Row, Col } from 'react-materialize';

// http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome

function App() {
  return (
    <div className="container md">
      <Router>
        <div>
          {/*          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
*/ }

          {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/job">
              <Job />
            </Route>
            <Route path="/cabin">
              <Cabin />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="header">
        <h2 className="header-text">
          Mark's Site
        </h2>
      </div>
      <div className="div-buttons">
        <Link to="/cabin"  className="div-button">Cabin in the Woods</Link>
        <Link to="/job"    className="div-button">Job</Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Job() {
  return (
    <div>
      <h2>Job</h2>
    </div>
  );
}

function Cabin() {
  return (
    <div className="div-buttons">
      <div className="div-button" onClick={() => { window.open("https://ambientweather.net/dashboard/8c8ef06c0f8bebfee287bbe57b4c060f", "_blank") }}>
        Weather Dashboard
      </div>
      <div className="div-button" onClick={() => { window.open("https://calendar.google.com/calendar/embed?src=c5k8fgk8j5tuoc69ncgahq4hmk%40group.calendar.google.com&ctz=America%2FLos_Angeles", "_blank") }}>
        Cabin Calendar
      </div>
      <div className="div-button" onClick={() => { window.open("https://www.epicpass.com/account/my-account.aspx?ma_1=4", "_blank") }}>
        My EPIC Reservations
      </div>
      <div className="div-button" onClick={() => { window.open("https://www.epicpass.com/plan-your-trip/lift-access/reservations.aspx", "_blank") }}>
        Reserve
      </div>
      <div className="div-button" onClick={() => { window.open("https://www.skiheavenly.com/the-mountain/mountain-conditions/mountain-cams.aspx", "_blank") }}>
        Heavenly Webcams
      </div>
      <div className="div-button" onClick={() => { window.open("https://opensnow.com/user/favorites#mountains-forecasts", "_blank") }}>
        OpenSnow 10 Day
      </div>
	  
    </div>

  );
}

export default App;
