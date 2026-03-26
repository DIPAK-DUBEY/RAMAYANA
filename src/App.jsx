import React from "react";
import Hero from "./Components/Hero/Hero";
import NeonCursor from "./Components/NeonCursor";
const App = ()=>{
  return (
    <>
      <canvas id="canvas"></canvas>
      <NeonCursor />
    <Hero/>
    </>
  )
}
export default App;