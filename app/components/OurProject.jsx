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
const RivewCart = ({ img, name, post, email, text1, text2 }) => {

  return (
    <div
      className=" shadow-md bg-[#1B75BC] rounded-md flex-col justify-left items-center flex-wrap p-6"
    >
      <div className="flex-row">
        <div className="flex-shrink-0">
          <Image className="h-30 w-30 " src={img} alt='OurProject' />
        </div>

        <div className="ml-4">
          <p className="font-bold text-lg">{name}</p>
          <p className="">{post}</p>
          <p className="">{email}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-left">{text1}</p>
      </div>

      <div className="ml-auto flex items-center">
        <div className="mr-2">
          <Image className="h-30 w-30 " src={Icon} alt='OurProject' />
        </div>

        <p className="text-gray-600">{text2}</p>
      </div>
    </div>
  );
};
