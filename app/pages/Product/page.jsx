"use client";
import CardService from "../../components/CardService";
import Svg9 from "../../components/asset/Svg9";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

export default function Product() {
  return (
    <div className="">
      <ParallaxLayer offset={0} speed={2}>
        <div className="container mx-auto">
          <div className="flex flex-col w-full items-center py-20 md:py-32">
            <p className="text-[20px] font-medium text-[#ffffff]">Products</p>
            <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
          </div>
          <div className="text-white flex flex-wrap justify-center md:gap-10 gap-4">
          <CardService
            route="Service"
              isButton={true}
              img={<Svg9></Svg9>}
              title="Casino Gambling"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          <CardService
            route="Service"
              isButton={true}
              img={<Svg9></Svg9>}
              title="Casino Gambling"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          <CardService
            route="Service"
              isButton={true}
              img={<Svg9></Svg9>}
              title="Casino Gambling"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          <CardService
            route="Service"
              isButton={true}
              img={<Svg9></Svg9>}
              title="Casino Gambling"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
}
