"use client";
import React from "react";
import img1 from "../../public/img1.png";
import Image from "next/image";
import Svg5 from "./asset/Svg5";
export default function Partners() {
  return (
    <div className="md:px-10 px-2 py-2">
      <div className="flex flex-col w-full items-center py-10 md:py-16">
        <p className="text-[20px] font-medium text-[#ffffff]">Our Partner</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <div className="flex flex-wrap justify-center md:gap-10 gap-4 my-4 md:my-10">
        <Image src={img1} alt="partner" />
        <Image src={img1} alt="partner" />
        <Image src={img1} alt="partner" />
      </div>
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
