import React from 'react';
import logo from './logo.svg';
import vlogo from './Vue.js_Logo_2.svg';
import ButtonA from './component/buttonA';
import ButtonB from './component/buttonB';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

//Displays React logo if the state is "R", Displays Vue logo if the state is "V"
function logoDisp (cond){  
  if (cond === 'R')
    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome, to React</h1>
      </header>
      );
  else (cond === 'V')
    return (<header className="App-header">
    <img src={vlogo} className="App-logo" alt="logo" />
    <h1>Welcome, to Vue</h1>
  </header>); 
}

export function App(){
  const type = useSelector((state)=>{state.type.value})    
  console.log(type) //this outputs 'undefined'
    return (
      <div className="App">        
          {logoDisp(type)}      
        <p className="App-intro">
          <ButtonA/><br/>
          <ButtonB/>
        </p>
      </div>
    );
  
}

export default App;
