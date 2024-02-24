"use client";
import StartBox from "./components/StartBox";
import OurProject from "./components/OurProject";
import { useRef } from "react";
import Technologies from "./components/Technologies";
import Partners from "./components/Partners";
import PreceduralAndTechnologies from "./components/ProceduralAndTechnologies";
import Footer from "./components/Footer";
import Viewer from "./components/Animation";
import { Parallax } from "react-scroll-parallax";
const Home = () => {
  const parallaxRef = useRef();

  return (
    <div>
      
      <StartBox />
      <Parallax speed={1}>
      <OurProject />
      </Parallax>
      
      <Technologies></Technologies>
      <PreceduralAndTechnologies></PreceduralAndTechnologies>
      <Partners></Partners>
    </div>
  );
 
};
export default Home;
