import '../App.css';
import React, { Component } from 'react';
import {Container, Button} from 'reactstrap'; 
import {Link} from 'react-router-dom'; 

export default class Main extends Component{
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
            <Link to="/Qualifications">
            <Button value={true} color="primary">
              Learn how I can help you
            </Button>
            </Link>
          </h3>
        </Container>
        </div>
    );       
  }     
}

 