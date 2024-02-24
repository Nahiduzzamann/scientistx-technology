import React from 'react';
import Image from "next/image";

import Img1 from '../../../public/image 29.png';

function page() {
  return (
    <div className='text-white container mx-auto px-2 py-2'>

      <div className="flex flex-col w-full items-center justify-start md:my-20 my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">About The Company</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>

      <div className="flex flex-col w-full items-center justify-start md:my-20 my-10">
        <p className="text-[16px] font-normal text-[#ffffff]">The students from both Edexcel and Cambridge are being honoured for their outstanding results in O- and A-Level at the Mirpur indoor stadium. The Daily Star is awarding a total of 2,563 students, including 1,765 O-level and 656 A-level students, for their achievements.
          The awardees parents, families, teachers, friends, and special guests are also attending the event. The programme started with the rendition of the national anthem.
          Editor and Publisher of The Daily Star, Mahfuz Anam, welcomed all shortly after the programme began around 9:20am. By then, the indoor stadium was full to the brim.
          HSBC Bank is the title sponsor of the event titled 23rd The Daily Star HSBC O & A level Awards. Meanwhile, Pearson Edexcel and Cambridge are the academic partners.</p>
      </div>

      <div className="flex flex-col w-full items-center justify-start md:my-20 my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">Our Departments</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>

        <div className="flex flex-wrap justify-between p-4">
          <div className="flex items-center mb-4">
            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2">
            </div>
            <p className="text-lg text-[#ffffff]e text-center mr-[20px]">Department Of Development</p>

            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e text-center  mr-[20px]">Department Of Science & Information</p>

            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e text-center  mr-[20px]">Department Of Marketing</p>

            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e text-center  mr-[20px]">Department Of Content Creation and Film Direction</p>

          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-start md:my-20 my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">Our Valued Members</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between p-4'>
        <AboutCart img={Img1} 
        name='MD Saibur Rahman'
        post='Chief Executing Officer'
        email='saibur@scientistx.tech'
        text="Life is full of beautiful journey if you can handle your emotions"
        />
        <AboutCart img={Img1} 
        name='MD Saibur Rahman'
        post='Chief Executing Officer'
        email='saibur@scientistx.tech'
        text="Life is full of beautiful journey if you can handle your emotions"
        />
      </div>

      <div className='flex flex-col lg:flex-row justify-between p-4'> 
        <AboutCart img={Img1} 
        name='MD Saibur Rahman'
        post='Chief Executing Officer'
        email='saibur@scientistx.tech'
        text="Life is full of beautiful journey if you can handle your emotions"
        />
        <AboutCart img={Img1} 
        name='MD Saibur Rahman'
        post='Chief Executing Officer'
        email='saibur@scientistx.tech'
        text="Life is full of beautiful journey if you can handle your emotions"
        />
      </div>
    </div>
  )
}

export default page

const AboutCart = ({ img, name, post, email, text }) => {

  return (
    <div className="w-[454px] h-[111px] bg-[#1B75BC] text-[#fff] flex flex-col items-center justify-left  space-x-4">
      <div className='w-[454px] h-[111px] flex items-center justify-left mt-[10px]'>
        <div class="shrink-0">
          <Image className="h-30 w-30 ml-[5px]" src={img} alt="ChitChat Logo" />
        </div>
        <div className='ml-[10px]'>
          <p className='text-[16px]'>{name}</p>
          <p className='text-[14px]'>{post}</p>
          <p className='text-[14px]'>{email}</p>
        </div>
      </div>
      <p className='text-[14px] ml-[5px] mb-[10px]'>“{text}”</p>
    </div>
  );
};