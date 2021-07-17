import React, { useState } from "react";
import City from './citiies'

function App() {
  const [state1,setState1]=useState()
  const [state2,setState2]=useState()
  const [state3,setState3]=useState()
  const [state4,setState4]=useState()
  return (
  <div id="main">
      <p id='state1' onClick={()=>state1===0?setState1():setState1(0)}>Madhya pradesh</p>
      <City id={state1}/>
      <p id='state2' onClick={()=>state2?setState2():setState2(1)}>Jharkhand</p>
      <City id={state2}/>
      <p id='state3' onClick={()=>state3?setState3():setState3(2)}>Assam</p>
      <City id={state3}/>
      <p id='state4' onClick={()=>state4?setState4():setState4(3)}>Bihar</p>
      <City id={state4}/>
  </div>
  );
}

export default App;
