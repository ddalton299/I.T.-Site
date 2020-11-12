import './App.css';
import React, { Component } from 'react'; 
import Qual from './components/qualifications';  
import Main from './components/main';
import ProgrammingProjects from './components/programmingProjects' 
import HomeLab from './components/homeLab'; 
import { Route, Switch } from 'react-router-dom';

function App(){

    return(
      <main>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/Qualifications" component={Qual}/>
          <Route exact path="/ProgrammingProjects" component={ProgrammingProjects}/>
          <Route exact path="/HomeLab" component={HomeLab}/>
          <Route component={Error}/>
        </Switch>
      </main>
    ); 
    
}

export default App; 