"use client";
import React from "react";
import Svg5 from "./asset/Svg5";
import img5 from "../../public/img5.png"
import PartnerSlider from "./ReviewSlider";
import Image from "next/image";
export default function Partners() {

 const imgData =[
  {
    img:img5
  },
  {
    img:img5
  },
  {
    img:img5
  },
  {
    img:img5
  },
  {
    img:img5
  },
  {
    img:img5
  },
  {
    img:img5
  },
  {
    img:img5
  },
 ]

  return (
    <div className="container mx-auto px-2 ">
      <div className="flex flex-col w-full items-center py-10 md:py-16">
        <p className="text-[20px] font-medium text-[#ffffff]">Our Partner</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <PartnerSlider imgData={imgData}></PartnerSlider>
      <div className="flex flex-col w-full items-center py-10 md:py-16">
        <p className="text-[20px] font-medium text-[#ffffff]">Be A Partner</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:gap-10 gap-2 justify-center items-center">
        <div>
          <p className="text-white">Let’s Go for a deal</p>
        </div>
        <Svg5></Svg5>
      </div>
    </div>
  );
}
