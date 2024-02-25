import React from "react";
import Svg23 from "./asset/Svg23";
import Svg24 from "./asset/Svg24";
import Svg25 from "./asset/Svg25";
import Svg26 from "./asset/Svg26";
import Svg27 from "./asset/Svg27";
import Svg28 from "./asset/Svg28";

function ProceduralAndTechnologies() {
  return (
    <div className="container mx-auto px-2 text-[#ffffff]">
      <p className="text-[20px] font-medium ">Procedural and Technologies</p>
      <div className="h-1 my-2 w-full max-w-[506px] bg-[#1B75BC]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-2   mt-4 md:mt-10">
        <div>
          <div className="flex flex-col items-center">
            <div className="flex md:gap-10 gap-2 ">
              <Svg23></Svg23>

              <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px]">
                Unlocking the potential at the nexus of innovation and humanity,
                we're on a mission to revolutionize how technology can drive
                positive change. Our focus is twofold: to develop cutting-edge
                solutions that address pressing humanitarian needs while
                creating sustainable revenue streams. Through a blend of
                creativity and strategic thinking, we pioneer ideas that empower
                communities and enrich lives. Join us in shaping a future where
                innovation not only serves humanity but also fuels prosperity.
              </p>
            </div>
            <Svg25></Svg25>
            <div className="flex md:gap-10 gap-2 items-center">
              <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isnt anything embarrassing
                hidden in the middle of text. All the{" "}
              </p>
              <Svg24></Svg24>
            </div>
            <Svg25></Svg25>
            <div className="flex md:gap-10 gap-2 items-center">
              <Svg24></Svg24>

              <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isnt anything embarrassing
                hidden in the middle of text. All the{" "}
              </p>
            </div>
            <div className="block lg:hidden">
              <Svg25></Svg25>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col flex-col-reverse lg:items-end items-center justify-between">
          <Svg26></Svg26>
          <div className="flex gap-2 items-end">
            <div className="hidden lg:block">
              <Svg27></Svg27>
            </div>
            <div>
              <div className="hidden lg:block">
                <Svg28></Svg28>
              </div>

              <div className="flex lg:flex-col flex-row-reverse items-center md:gap-10 gap-2">
                <Svg24></Svg24>

                <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px] mb-10 lg:mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. All the{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProceduralAndTechnologies;
