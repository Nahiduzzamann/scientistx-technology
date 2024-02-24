"use client";
import CardService from "../../components/CardService";

import Svg1 from "../../components/asset/Svg6";
import Svg2 from "../../components/asset/Svg10";
import Svg3 from "../../components/asset/Svg11";
import Svg4 from "../../components/asset/Svg12";
import Svg5 from "../../components/asset/Svg13";
import Svg6 from "../../components/asset/Svg14";
import Svg7 from "../../components/asset/Svg15";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import React, { useRef } from "react";

export default function Service() {
  const parallaxRef = useRef();
  return (
    <div className="">
      <Parallax ref={parallaxRef} pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={1} >
        <div className="container mx-auto">
          <div className="flex flex-col w-full items-center py-20 md:py-32">
            <p className="text-[20px] font-medium text-[#ffffff]">
            Services
            </p>
            <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
          </div>
          <div className=" text-white flex flex-wrap justify-center md:gap-10 gap-4">
            <CardService
              img={<Svg1></Svg1>}
              title="Apps Development"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
              img={<Svg2></Svg2>}
              title="Graphics Design & UI/UX"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
              img={<Svg3></Svg3>}
              title="Web Development"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
              img={<Svg4></Svg4>}
              title="Smart Device and IOT"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
              img={<Svg5></Svg5>}
              title="AI Assistant"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
              img={<Svg6></Svg6>}
              title="Digital Marketing"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
              img={<Svg7></Svg7>}
              title="SEO, Project research and Information"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          </div>
        </div>
      </ParallaxLayer>
      </Parallax>
     
    </div>
  );
}
