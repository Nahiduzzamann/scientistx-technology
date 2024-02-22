"use client";
import Image from "next/image";
import React from "react";

import img1 from "../../public/img2.png";
import img2 from "../../public/java.png";
import img3 from "../../public/typescript-svgrepo-com.png";
import img4 from "../../public/python-svgrepo-com 1.png";
import img5 from "../../public/js-svgrepo-com.png";
import img6 from "../../public/mysql-logo-svgrepo-com.png";
import img7 from "../../public/mongodb-svgrepo-com.png";
import img8 from "../../public/postgresql-svgrepo-com.png";
import img9 from "../../public/Apple.png";
import img10 from "../../public/Redux.png";
import img11 from "../../public/Android.png";
import img12 from "../../public/React Native.png";
import img13 from "../../public/material-ui.png";
import img14 from "../../public/tailwind-svgrepo-com.png";
import img15 from "../../public/React Spring.png";
import img16 from "../../public/React.png";
import img17 from "../../public/next-js-svgrepo-com.png";
import img18 from "../../public/adobe-xd-svgrepo-com.png";
import img19 from "../../public/Adobe premiere pro.png";
import img20 from "../../public/Adobe After effect 1.png";
import img21 from "../../public/Adobe illustrator.png";
import img22 from "../../public/Firebase.png";
import img23 from "../../public/aws-svgrepo-com.png";
import img24 from "../../public/Firebase.png";
import img25 from "../../public/Windows.png";
import img26 from "../../public/socket-dot-io-svgrepo-com.png";
import img27 from "../../public/webrtc.png";
import img28 from "../../public/linux-svgrepo-com.png";


export default function Technologies() {
  return (
    <div className="md:px-10 px-2">
      <div className="md:flex text-white justify-between ">
        <div>
          <div>
            <p className="mb-2">Programming Languages</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4">
              <div className="">
                <Image className="h-10 md:h-17 w-10 md:w-17" src={img1} alt="technology"></Image>
                <p className="text-center ">Swift</p>
              </div>
              <div className="">
                <Image  className="h-10 md:h-17 w-10 md:w-17" src={img2} alt="technology"></Image>
                <p className="text-center ">JAVA</p>
              </div>
              <div className="">
                <Image  className="h-10 md:h-17 w-10 md:w-17" src={img3} alt="technology"></Image>
                <p className="text-center ">TypeScript</p>
              </div>
              <div className="">
                <Image  className="h-10 md:h-17 w-10 md:w-17" src={img4} alt="technology"></Image>
                <p className="text-center ">Python</p>
              </div>
              <div className="">
                <Image  className="h-10 md:h-17 w-10 md:w-17" src={img5} alt="technology"></Image>
                <p className="text-center ">JavaScript</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2">Databases</p>
            <div className="text-white flex flex-wrap gap-2 md:gap-5 border-t-2 border-t-[#1B75BC] py-4">
              <div className="">
                <Image src={img6} alt="technology"></Image>
                <p className="text-center ">MySQL</p>
              </div>
              <div className="">
                <Image src={img7} alt="technology"></Image>
                <p className="text-center ">MongoDB</p>
              </div>
              <div className="">
                <Image src={img8} alt="technology"></Image>
                <p className="text-center ">PostgreSQL</p>
              </div>
              
            </div>
          </div>
          <div>
            <p className="mb-2">Mobile Apps</p>
            <div className="text-white flex flex-wrap gap-2 md:gap-5 border-t-2 border-t-[#1B75BC] py-4">
              <div className="">
                <Image src={img9} alt="technology"></Image>
                <p className="text-center ">Apple</p>
              </div>
              <div className="">
                <Image src={img10} alt="technology"></Image>
                <p className="text-center ">Redux</p>
              </div>

              <div className="">
                <Image src={img11} alt="technology"></Image>
                <p className="text-center ">Android</p>
              </div>
              <div className="">
                <Image src={img12} alt="technology"></Image>
                <p className="text-center ">React Native</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2">Web Development Technologiess</p>
            <div className="text-white flex flex-wrap gap-2 md:gap-5 border-t-2 border-t-[#1B75BC] py-4">
              <div className="">
                <Image src={img13} alt="technology"></Image>
                <p className="text-center ">Material UI</p>
              </div>
              <div className="">
                <Image src={img14} alt="technology"></Image>
                <p className="text-center ">Tailwind CSS</p>
              </div>
              <div className="">
                <Image src={img15} alt="technology"></Image>
                <p className="text-center ">React Spring</p>
              </div>
              <div className="">
                <Image src={img16} alt="technology"></Image>
                <p className="text-center ">React</p>
              </div>
              <div className="">
                <Image src={img17} alt="technology"></Image>
                <p className="text-center ">Next JS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-10 mt-5">
          <div>
            <p className="mb-2 md:text-end">Design Tools</p>
            <div className="text-white flex flex-wrap gap-2 md:gap-5 border-t-2 border-t-[#1B75BC] py-4 md:justify-end">
              <div className="">
                <Image src={img18} alt="technology"></Image>
                <p className="text-center ">Adobe XD</p>
              </div>
              <div className="">
                <Image src={img19} alt="technology"></Image>
                <p className="text-center ">Adobe <br/> premiere pro</p>
              </div>
              <div className="">
                <Image src={img20} alt="technology"></Image>
                <p className="text-center ">Adobe <br/> After effect</p>
              </div>
              <div className="">
                <Image src={img21} alt="technology"></Image>
                <p className="text-center ">Adobe <br/> illustrator</p>
              </div>
              <div className="">
                <Image src={img22} alt="technology"></Image>
                <p className="text-center ">Figma</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 md:text-end">Server & Tools</p>
            <div className="text-white flex flex-wrap gap-2 md:gap-5 border-t-2 border-t-[#1B75BC] py-4 md:justify-end">
              <div className="">
                <Image src={img23} alt="technology"></Image>
                <p className="text-center ">AWS service</p>
              </div>
              <div className="">
                <Image src={img24} alt="technology"></Image>
                <p className="text-center ">Firebase <br/> Service</p>
              </div>
              <div className="">
                <Image src={img25} alt="technology"></Image>
                <p className="text-center ">Windows <br/> Server</p>
              </div>
              <div className="">
                <Image src={img26} alt="technology"></Image>
                <p className="text-center ">Socket <br/> Transport</p>
              </div>
              <div className="">
                <Image src={img27} alt="technology"></Image>
                <p className="text-center ">WebRTC</p>
              </div>
              <div className="">
                <Image src={img28} alt="technology"></Image>
                <p className="text-center ">Linux Server</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
