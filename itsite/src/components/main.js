import '../App.css';
import React, { Component } from 'react';
import {Container, Button} from 'reactstrap'; 

export default class main extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="main">
        <Container className= "Display">
          <h2>
            Hello, my name is Denzel and I help with technology. 
          </h2>
        </Container>
        <Container className="Display" id="Link">
          <h3>
            <Button value={true} color="primary" onClick={this.props.btnclick}>
              Learn how I can help you
            </Button>
          </h3>
        </Container>
        </div>
    );       
  }     
}

 