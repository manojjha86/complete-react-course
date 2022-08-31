import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import React from 'react';
import RefsDemo from './Components/RefsDemo';

function App() {
  return (
    <React.Fragment>
      {/* <h1>This is App Component</h1>
      <Component1></Component1> */}
      <RefsDemo></RefsDemo>
    </React.Fragment>
  );
}

export default App;
