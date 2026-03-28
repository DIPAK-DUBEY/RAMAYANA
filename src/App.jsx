import React from "react";
import Hero from "./Components/Hero/Hero";
import NeonCursor from "./Components/NeonCursor";
import SecondPage from "./Components/Numbers_Description/SecondPage";
import Warriors from "./Components/Warriors/Warriors";
const App = ()=>{
  return (
    <>
      <canvas id="canvas"></canvas>
      <NeonCursor />
    <Hero/>
    <SecondPage/>
    <Warriors/>
    </>
  )
}
export default App;