import React, { Component } from 'react';
import { Card,Button, Row, Col } from 'reactstrap';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
     counter: 0
    }
  }
  add = () => {
    this.setState({counter: this.state.counter + 1}); 
  }
  substract = () => {
    if(this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1});
    }
  }
  resetCounter = () => {
    this.setState({counter: 0});
  }
  render() {
    return (
      <div>
        <Card body inverse w-100 style={{ backgroundColor: '#222', borderColor: '#333',borderStyle: 'inset', borderRadius: '5px 10px / 2em 3em', borderWidth: '0.5em 0.2em 0.5em 0.2em'}}>
          <p style={{fontFamily: 'Roboto',}}><b  className="text-info">Welcome</b> {this.props.name}</p>
          <p style={{fontFamily: 'Roboto',}}><b  className="text-info">counter :</b> [{this.state.counter}]</p>
          <Row noGutters>
            <Col><Button style={{backgRoundColor: '#004D40', width: '100%', borderColor: '#0097A7', borderWidth: '0.1em 0.2em 0.1em 0.2em'}} active onClick={this.add}>+</Button></Col>
            <Col><Button style={{backgroundColor: '#005D40', width: '100%', borderColor: '#0097A7', borderWidth: '0.1em 0.2em 0.1em 0.2em'}} active onClick={this.substract}>-</Button></Col>
          </Row>
          <Button style={{color:'#009688'}} size="md" onClick={this.resetCounter}>{this.props.data}</Button>
        </Card>
      </div>
    )
  }
}


export default Counter;