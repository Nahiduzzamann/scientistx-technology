'use client'
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Viewer from "./Animation";
import ButterflyEffect, { ButterflyEffect2 } from "./asset/butterflyEffect";
import Svg2 from "./asset/svg2";
import Svg3 from "./asset/Svg3";
import Svg4 from "./asset/Svg4";

export default function StartBox() {
  const handleType = (count) => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div className="lg:flex w-full justify-between h-full md:px-10 px-2 ">
      <div className="w-full lg:hidden lg:h-[100vw] h-[50vh] ">
        <Viewer />
      </div>
      <div className=" max-w-[800px] py-2 h-full lg:flex items-center text-white">
        <div className="">
          <div className="lg:mb-20 mb-10 hidden md:block mt-20">
            <ButterflyEffect></ButterflyEffect>
          </div>
          <div className="lg:mb-20 mb-10 md:hidden flex justify-center">
            <Svg4></Svg4>
          </div>
          <div className="flex gap-2">
            <div>
              <Svg2></Svg2>
            </div>
            <div className="">
              <h1 className="text-xl text-justify tracking-wide">
                Our services{" "}
                <span className="font-bold text-pink-600">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "Web Security and Service",
                      "Web Design and Development",
                      "Live and Real world Games",
                      "Unique Graphics and 3D Models",
                      "Backend Service and Data Stores",
                      "Drag and Drop Design",
                      "Software and Tools",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h1>
              <br />
              <span className=" text-lg tracking-wide leading-8 line-clamp-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable.
              </span>
              <br />
              <div className="">
                <div className="flex  items-center gap-2 mt-6">
                  <button className="px-6 py-2 cursor-pointer rounded-sm  bg-[#1B75BC]">
                    Login/Registration
                  </button>
                  <Svg3></Svg3>
                </div>
              </div>
              <p>
                Only login and registration features are available for
                ScientistX Member’s
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[630px] hidden lg:flex">
        <Viewer />
      </div>
    </div>
  );
}
