"use client";
import { ParallaxLayer } from "@react-spring/parallax";
import StartBox from "./components/StartBox";
import OurProject from "./components/OurProject";
import { useRef } from "react";
import Technologies from "./components/Technologies";
import Partners from "./components/Partners";
import PreceduralAndTechnologies from "./components/ProceduralAndTechnologies";

const Home = () => {
  const parallaxRef = useRef();

  return (
    <div ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={2}
        style={{ height: "100vh"}}
      >
        <div >
          <StartBox />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.99} speed={2.5} style={{ height: "100vh"}}>
        <OurProject />
      </ParallaxLayer>

      <ParallaxLayer offset={1.2} speed={2} style={{ height: "100vh"}}>
        <Technologies></Technologies>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.5}
        style={{ height: "100vh"}}
      >
        <PreceduralAndTechnologies></PreceduralAndTechnologies>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={2.5}
        style={{ height: "100vh"}}
      >
        <Partners></Partners>
      </ParallaxLayer>
    </div>
  );
};
export default Home;
