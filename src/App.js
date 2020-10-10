import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import { Button, Row, Col } from 'react-materialize';

// http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome

function App() {
  return (
    <div className="container md">
    
      <div className="header">
        <h2 className="header-text">
          Mark's Site
        </h2>
      </div>
      <Row className="buttons">
        <Col s={4}>
          <Button className="waves-effect waves-light btn" onClick={ () => { window.open("https://ambientweather.net/dashboard/8c8ef06c0f8bebfee287bbe57b4c060f", "_blank")} }>Weather Dashboard</Button>
        </Col>
        <Col s={3}>
        </Col>
        <Col s={3}>
        </Col>
      </Row>
    </div>
  );
}
export default App;
