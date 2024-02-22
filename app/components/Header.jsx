'use client'
import React from "react";
import { Wave } from "react-animated-text";
import {
    SwipeableDrawer,
  } from "@mui/material";
import Link from "next/link";

const Header = ({ open, setOpen, header }) => {
  return (
    <div className=" ">
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          top: header ? 0 : -120,
          left: 0,
          overflow: "hidden",
          transition: " top 0.3s",
        }}
        className="bg-[#275278] w-full  py-2 hidden lg:block"
      >
        <div className="flex justify-between">
          <div className="flex font-thin text-[14px]">
            <div className="flex items-center">
              icon
              <p className="ml-2">+8801761143991</p>
            </div>
            <div className="flex items-center ml-2">
              icon
              <p className="ml-2">info@scientistx.com</p>
            </div>
            <div className="flex items-center ml-2">
              icon
              <p className="ml-2">SUN - THU 10:00 pm - 1:00 am</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div
            style={{
              fontSize: "34px",
              alignItems: "flex-start",
            }}
          >
            <Wave
              text="Scientistx"
              effect="stretch"
              effectDuration={0.9}
              effectDelay={0.9}
              effectChange={0.7}
            />
          </div>
          <div className="flex gap-6 mr-2 font-semibold ">
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
        className=" bg-[#5500ff21] w-full lg:hidden py-1 flex justify-between items-center"
      >
        <div
          style={{
            fontSize: "34px",
            alignItems: "flex-start",
            marginTop: "-5px",
          }}
        >
          <Wave
            text="Scientistx"
            effect="stretch"
            effectDuration={0.9}
            effectDelay={0.9}
            effectChange={0.7}
          />
        </div>
        <div onClick={() => setOpen(true)}>
        CgMenuGridO
        </div>
      </div>
    </div>
  );
};

export default Header;
export const BottomDrawer = ({ open, setOpen }) => {
  const drawerBleeding = 20;
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <SwipeableDrawer
      container={container}
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div className="absolute top-[-20px] flex justify-center items-center bg-white dark:bg-[#1b1b1b]  rounded-tl-[20px] rounded-tr-[20px] left-0 h-5 w-full">
        <div className="h-[7px] w-8 bg-gray-400 rounded-2xl" />
      </div>
      <div className="h-[65vh] overflow-y-scroll dark:text-white bg-white dark:bg-[#1b1b1b] px-4">
        <div className=" text-xl">Menus</div>
        <div className="flex flex-wrap gap-4 font-semibold mt-4">
           <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
        </div>
        <div className="flex justify-between flex-wrap border-t border-dashed mt-4">
          <div className="flex items-center">
            Icon set
            <div className="ml-4" />
          </div>
          <div className="flex flex-wrap gap-2  font-thin text-[14px]">
            <div className="flex items-center">
              icon
              <p className="ml-2">+8801761143991</p>
            </div>
            <div className="flex items-center ">
            icon
              <p className="ml-2">info@scientistx.com</p>
            </div>
            <div className="flex items-center">
            icon
              <p className="ml-2">SUN - THU 10:00 pm - 1:00 am</p>
            </div>
          </div>
        </div>
        <div className=" text-xl mt-4">About Us</div>
        <div className="text-xs mt-2 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing
        </div>
        <div className="text-sm my-4">@ Powered by ScientitX Organization</div>
      </div>
    </SwipeableDrawer>
  );
};
