import './App.css';
import React, { Component } from 'react'; 
import Qual from './components/qualifications';  
import Main from './components/main';
import ReactDOM from 'react-dom';   


class App extends Component {
  /*
    A state with the vale renderView to 
    keep track of which view to component to display. 
  */
  state = {
    renderView: true
  };
  /*
    Function btnclick alters the state to change which component is displayed. 
  */
  btnclick = e =>{
    this.setState({
      renderView: !e.target.value
    });
  };

  render(){
    /*
      Switch statement that controls which component is displayed. 
    */
    switch(this.state.renderView){
      case false:
        return <Qual btnclick={this.btnclick}/>;  
      default: return <Main btnclick={this.btnclick}/>; 
    }
  }  
}

export default App; 