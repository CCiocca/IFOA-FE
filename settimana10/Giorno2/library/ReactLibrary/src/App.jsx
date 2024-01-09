import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row} from 'react-bootstrap';
import NavBarComponent from './components/NavBarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import AllTheBooksComponent from './components/AllTheBooksComponent';
import FooterComponent from './components/FooterComponent';


function App() {

  return (
    <>
      <NavBarComponent/>
      <Container>
        <Row>
          <JumbotronComponent/>
        </Row>
        <Row>
          <AllTheBooksComponent/>
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default App
