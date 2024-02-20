"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {

  return (
    <div style={{ width: "100%", height: "100%" }}>
     
        {/* Background layers */}
        <ParallaxLayer offset={0} speed={0} factor={3}>
          empty
        </ParallaxLayer>

        {/* Other background layers */}
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        {/* Content layers */}
        <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 0.8 }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2em",
            }}
          >
            Content for the first page
          </div>
        </ParallaxLayer>

        {/* Other content layers */}
        <ParallaxLayer offset={1.5} speed={-0.5} style={{ opacity: 0.6 }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2em",
            }}
          >
            Content for the second page
          </div>
        </ParallaxLayer>

        {/* Navigation */}
        <ParallaxLayer
          offset={0.8}
          speed={-0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "10px",
              textAlign: "center",
              lineHeight: "50px",
              color: "white",
              fontSize: "1.2em",
            }}
          >
            Scroll to Page 2
          </div>
        </ParallaxLayer>

        {/* Other navigation */}
        <ParallaxLayer
          offset={1.8}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "10px",
              textAlign: "center",
              lineHeight: "50px",
              color: "white",
              fontSize: "1.2em",
            }}
          >
            Scroll to Page 3
          </div>
        </ParallaxLayer>
     
    </div>
  );
};
export default Home;
