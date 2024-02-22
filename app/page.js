'use client'
import { ParallaxLayer } from "@react-spring/parallax";
import StartBox from "./components/StartBox";
import OurProject from "./components/OurProject";
import { useRef } from "react";

const Home = () => {
  const parallaxRef = useRef();

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }} ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{ height: "100vh", display: "flex", justifyContent: "center" }}
      >
        <div className="w-full">
          <StartBox />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ height: "100vh" }}
      >
        <OurProject />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{ height: "100vh", backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
      <ParallaxLayer
        offset={3}
        speed={1}
        style={{ height: "100vh", backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
      <ParallaxLayer
        offset={4}
        speed={1}
        style={{ height: "100vh", backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
    </div>
  );
};
export default Home;
