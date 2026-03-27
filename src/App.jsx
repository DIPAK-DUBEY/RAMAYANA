import React from "react";
import Hero from "./Components/Hero/Hero";
import NeonCursor from "./Components/NeonCursor";
import SecondPage from "./Components/Numbers_Description/SecondPage";
const App = ()=>{
  return (
    <>
      <canvas id="canvas"></canvas>
      <NeonCursor />
    <Hero/>
    <SecondPage/>
    </>
  )
}
export default App;