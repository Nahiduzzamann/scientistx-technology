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
  return (
    <Parallax ref={parallaxRef} pages={6} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        factor={0.01}
        offset={0.1}
        speed={2}
        style={{ height: "100vh" }}>
        <div></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={2.5} style={{ height: "100vh" }}>
        <OurProject />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={3} style={{ height: "100vh" }}>
        <Technologies></Technologies>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1.5} style={{ height: "100vh" }}>
        <PreceduralAndTechnologies></PreceduralAndTechnologies>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={2.5} style={{ height: "100vh" }}>
        <Partners></Partners>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={1}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};
export default Home;
