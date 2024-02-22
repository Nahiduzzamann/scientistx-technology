'use client'
import React, { useRef } from "react";
import CountUp from "react-countup";
import useIsInViewport from "../hooks/useIsInViewport";
import Link from "next/link";

const OurProject = () => {
  return (
    <div className="text-white px-5 py-2">
      <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-center gap-10 mt-11">
        <SimpleCart
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim"
          }
          count={100}
          number={1}
          title={"Recent Projects"}
        />
        <SimpleCart
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim"
          }
          count={100}
          number={1}
          title={"Recent Projects"}
        />
        <SimpleCart
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim"
          }
          count={100}
          number={1}
          title={"Recent Projects"}
        />
      </div>
      <div className="flex flex-col w-full items-center">
        <p className="">Client Satisfactions</p>
        <div className="h-1 w-full max-w-[500px] bg-[#1B75BC]"></div>
      </div>
      <div className="flex">
        <RivewCart></RivewCart>
        <RivewCart></RivewCart>
      </div>
    </div>
  );
};

export default OurProject;
const SimpleCart = ({ number, title, description, count }) => {
  const ref = useRef();
  const inPort = useIsInViewport(ref);
  return (
    <div
      className="shadow-md bg-[#1B75BC] rounded-md flex justify-center items-center flex-wrap p-6"
      ref={ref}
    >
      <div className="w-full flex justify-center">
        <div className=" bg-[#81428d] w-[40px] h-[40px] rounded-full flex justify-center items-center font-bold text-2xl border-4 border-[#c698d8] ">
          {number}
        </div>
      </div>
      <div className="mt-4 text-xl w-full text-center">{title}</div>
      <CountUp start={0} end={count}>
        {({ countUpRef, start }) => (
          <div className="text-3xl font-extrabold mt-4">
            <span onClick={inPort ? start() : null} ref={countUpRef} />
          </div>
        )}
      </CountUp>
      <div>{description}</div>
      <div className="flex justify-center">
        <Link href='/' className="px-4 py-2 bg-white  text-black">View</Link>
      </div>
      
    </div>
  );
};
const RivewCart = () => {

  return (
    <div
      className=""
    >
      review cart
    </div>
  );
};
