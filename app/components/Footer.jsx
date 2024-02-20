import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

  return (
    <div className="h-[100vh] flex items-end ">
      <div className=" bg-[#5500ff21] items-end  rounded-tl-[15vw] w-full  px-4 py-2 ">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3  mx-5 lg:grid-cols-5 items-end gap-4 max-w-[1500px]">
            <div className=" lg:mt-0 mt-8 col-span-2 sm:col-span-3 lg:col-span-2">
              <Image src='' className="w-[20vh]" />
              <div className="line-clamp-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing
              </div>
            </div>
            <div className="h-full ">
              <div className="font-semibold mb-2 text-start">POLICIES</div>
              <div className=" items-start flex flex-col gap-2">
                <Link href={"/"}>ABOUT</Link>
                <Link href={"/"}> SERVICES</Link>
                <Link href={"/"}>JOB OPPORTUNITIES</Link>
                <Link href={"/"}>CALENDER OF EVENTS</Link>
                <Link href={"/"}> TIME AND TIDES</Link>
                <Link href={"/"}> PROJECT PROPOSAL</Link>
                <Link href={"/"}> LOCATION</Link>
              </div>
            </div>
            <div className="h-full">
              <div className="font-semibold mb-2 sm:text-center lg:text-center text-end">
                NEWSLETTERS
              </div>
              <div className=" flex flex-col gap-2 sm:items-center lg:items-center items-end">
                <Link href={"/"}>LARGER PROJECT</Link>
                <Link href={"/"}> LESS DESTINATIONS</Link>
                <Link href={"/"}>CURRENT SUBJECTS</Link>
                <Link href={"/"}>MARKET VALUES</Link>
                <Link href={"/"}> ACCOUNT SETTINGS</Link>

                <Link href={"/"}> ACCOUNT LINKS</Link>
                <Link href={"/"}> LATEST NEWS</Link>
              </div>
            </div>
            <div className="h-full">
              <div className="font-semibold mb-2 sm:text-end lg:text-end text-start">
                EXTERNALS
              </div>
              <div className=" flex flex-col gap-2 sm:items-end lg:items-end items-start">
                <Link href={"/"}>MEMBER</Link>
                <Link href={"/"}> OPPORTUNITIES</Link>
                <Link href={"/"}>UNDERWORLDS</Link>
                <Link href={"/"}>EXTERNAL</Link>
                <Link href={"/"}> BACK MAGICS</Link>
                <Link href={"/"}> STORAGE BUCKET</Link>
                <Link href={"/"}> GREAT KNOWS</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t my-4 pt-4 ">
          <div className=" mx-auto flex justify-center gap-4 ">
            <div>
                icon
            </div>
            <div>
                icon
            </div>
            <div>
                icon
            </div>
            <div>
                icon
            </div>
          </div>
          <p className="text-center mt-2">
            @ {new Date().getFullYear()} - All right reserved by ScientistX
            Organization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
