import React from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  let i = 42;

  const clickHandler = function (arg1) {
    // alert("i: " + i++);
    console.log(arg1);
  }

  const msg = "Hello, World!"
  return (
    <div className="App">
      <ChildComponent message={msg} bloop="dawoop" click={() => {clickHandler("shoop")}}/>
      <ChildComponent message="Goodbye world" click={clickHandler("dawoop")}/>
    </div>
  );
}

export default App;
