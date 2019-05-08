import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col xs="auto" md='6' xl='4'>
              <p>
                <Counter data="reset" name="visitor"/>
              </p>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
