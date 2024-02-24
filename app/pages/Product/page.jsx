"use client";
import CardService from "../../components/CardService";
import Svg9 from "../../components/asset/Svg9";
import Svg16 from "../../components/asset/Svg16";
import Svg17 from "../../components/asset/Svg17";
import Svg18 from "../../components/asset/Svg18";
import Svg19 from "../../components/asset/Svg19";
import Svg20 from "../../components/asset/Svg20";
import Svg21 from "../../components/asset/Svg21";
import Svg22 from "../../components/asset/Svg22";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";

export default function Product() {
  const parallaxRef = useRef();
  return (
    <div className="">
       
        <div className="container mx-auto">
          <div className="flex flex-col w-full items-center py-20 md:py-32">
            <p className="text-[20px] font-medium text-[#ffffff]">Products</p>
            <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
          </div>
          <div className="text-white flex flex-wrap justify-center md:gap-10 gap-4">
          <CardService
            route="Service"
              isButton={true}
              img={<Svg16></Svg16>}
              title="Casino Gambling"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          <CardService
            route="Service"
              isButton={true}
              img={<Svg9></Svg9>}
              title="Online Service Platform"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          <CardService
            route="Service"
              isButton={true}
              img={<Svg17></Svg17>}
              title="Online Education"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          <CardService
            route="Service"
              isButton={true}
              img={<Svg18></Svg18>}
              title="Online Hotel Booking"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
            route="Service"
              isButton={true}
              img={<Svg19></Svg19>}
              title="E-Commerce"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
            route="Service"
              isButton={true}
              img={<Svg20></Svg20>}
              title="Social Communication"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
            route="Service"
              isButton={true}
              img={<Svg21></Svg21>}
              title="Online Reading Content"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
            <CardService
            route="Service"
              isButton={true}
              img={<Svg22></Svg22>}
              title="Social Communication"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
            ></CardService>
          </div>
        </div>
    
     
    </div>
  );
}
