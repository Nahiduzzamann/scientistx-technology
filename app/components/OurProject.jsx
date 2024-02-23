'use client'
import React, { useRef } from "react";
import CountUp from "react-countup";
import useIsInViewport from "../hooks/useIsInViewport";
import Link from "next/link";
import Image from "next/image";

import img1 from '../../public/image 22.png';

import Icon from '../../public/Group.png';

const OurProject = () => {
  return (
    <div className="text-white container mx-auto px-2 py-2">
      <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-center gap-2 mt-10">
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
      <div className="flex flex-col w-full items-center md:my-10 my-4">
        <p className="text-[20px] font-medium text-[#ffffff]">Client Satisfactions</p>
        <div className="h-1 my-2 w-full max-w-[500px] bg-[#1B75BC]"></div>
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 justify-center gap-2 mt-10">
        <RivewCart img={img1}
          name='Dr. Mazda Islam' 
          post='American business owner' 
          email='mazda@infotech.com' 
          text1='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim'
          text2='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim'
          ></RivewCart>
        <RivewCart img={img1}
          name='Dr. Mazda Islam' 
          post='American business owner' 
          email='mazda@infotech.com' 
          text1='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim'
          text2='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim'
          ></RivewCart>
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
      className="shadow-md bg-[#1B75BC] rounded-md flex justify-center flex-col items-center p-6"
      ref={ref}
    >
      <div className="w-full flex justify-center">
        <div className=" bg-[#275278] w-[40px] h-[40px] rounded-full flex justify-center items-center font-normal text-[16px] border-4 border-[#ffffff] ">
          {number}
        </div>
      </div>
      <div className="mt-4 font-normal text-[16px] w-full text-center">{title}</div>
      <CountUp start={0} end={count}>
        {({ countUpRef, start }) => (
          <div className="font-normal text-[16px] mt-4">
            <span onClick={inPort ? start() : null} ref={countUpRef} />
          </div>
        )}
      </CountUp>
      <div className="font-light text-[15px] mt-5 line-clamp-3 text-center">{description}</div>
      <div className="flex justify-center mt-3">
        <Link href='/' className="px-8 py-2 bg-white  text-black font-light text-[15px]">View</Link>
      </div>

    </div>
  );
};
const RivewCart = ({ img, name, post, email, text1, text2 }) => {

  return (
    <div
      className=" shadow-md bg-[#1B75BC] rounded-md flex-col justify-left items-center flex-wrap p-6 text-[#ffffff]"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Image className="h-30 w-30 " src={img} alt='OurProject' />
        </div>

        <div className="ml-4">
          <p className="text-[16px] font-medium ">{name}</p>
          <p className="text-[15px] font-normal">{post}</p>
          <p className="text-[15px] font-normal">{email}</p>
        </div>
      </div>

      <div className="mt-4 mt-30">
        <p className="text-left text-[15px] font-light line-clamp-2">{text1}</p>
      </div>

      <div className="pt-6 pl-[70px] relative">
        <div className=" absolute -left-8 top-0">
          <Image className="h-[60px] w-[100px]" src={Icon} alt='OurProject' />
        </div>

        <p className="text-[15px] font-light line-clamp-2">{text2}</p>
      </div>
    </div>
  );
};
