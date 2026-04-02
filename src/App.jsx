import React, { useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import NeonCursor from "./Components/NeonCursor";
import SecondPage from "./Components/Numbers_Description/SecondPage";
import Warriors from "./Components/Warriors/Warriors";
import Kandas from "./Components/Chapters/Kandas";
import TimeLine from "./Components/Chapters/TimeLine";
import Weapons from "./Components/Astras/Weapons";

const App = () => {
  useEffect(() => {
    //  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>

      <NeonCursor />
      <Hero />
      <SecondPage />
      <Warriors />
      <Kandas />
      <TimeLine />
      <Weapons />
    </>
  )
}
export default App;