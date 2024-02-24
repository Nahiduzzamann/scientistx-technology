"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Svg29 from "../components/asset/Svg29";
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  const [formData, setFormData] = useState({
    number: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({ number: "", contact: "", message: "" });
  };
  return (
    <div className="container mx-auto px-2 ">
      <div className="border-b lg:border-b-2 border-b-[#1B75BC] mt-16 lg:mt-24 lg:py-4 py-2">
        <div className="flex gap-2 md:gap-10">
          <Svg29></Svg29>
          <div className="">
            <p className="text-[#ffffff] text-[20px] font-normal">
              ScientistX Technology
            </p>
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#ffffff] text-[16px] font-normal">
                info@scientistx.tech
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-[#ffffff] text-[16px] font-normal w-[250px] md:w-auto">
                8020 Broadway , Elmhurst, NY, United States, New York
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* form  */}
      <form
        onSubmit={handleSubmit}
        className="w-full border-b lg:border-b-2 border-b-[#1B75BC] lg:py-4 py-2 text-white md:mb-10"
      >
        <p className="text-[#ffffff] text-[16px] font-normal text-center lg:py-4 py-2">
          Contact Us
        </p>
        <div className="flex md:flex-row flex-col justify-between gap-4">
          <div className="mb-2 w-full">
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border bg-transparent border-white rounded-md py-2 px-4 focus:border-[#1B75BC] focus:outline-none"
              placeholder="Contact number"
              required
            />
          </div>
          <div className="mb-0 md:mb-2 w-full">
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border bg-transparent border-white rounded-md py-2 px-4 focus:border-[#1B75BC] focus:outline-none"
              placeholder="Contact Email"
              required
            />
          </div>
        </div>

        <div className="my-2">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-white bg-transparent rounded-md py-2 px-4 focus:outline-none focus:border-[#1B75BC]"
            placeholder="Enter your message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="border border-white text-white py-2 px-4 rounded-md hover:bg-[#1B75BC] transition duration-300"
        >
          <div className=" flex items-center gap-2">
            <p> Sent</p>
            <AiOutlineSend />
          </div>
        </button>
      </form>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full border-b lg:border-b-2 border-b-[#1B75BC] mt-2 lg:pb-4 pb-2">
        <div>
          <p className="text-[20px] text-[#ffffff] font-normal mt-[10px]">
            EXTERNAL LINKS
          </p>
          <Link href="/">
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
              Agreement Signing
            </p>
          </Link>
          <Link href="/">
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Recent News
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
              Scientistx for new generation
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
              Connect with tech
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
              New Idea Sharing
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
              Programming Contest
            </p>
          </Link>
        </div>
        <div>
          <p className="text-[20px] text-[#ffffff] font-normal mt-[10px]">
          SERVICES
          </p>
          <Link href="/">
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Mobile Apps Development
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Website Development
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Digital Marketing
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Smart Device & IOT
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Assistant and AI search engine
            </p>
          </Link>
          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Business Analysis
            </p>
          </Link>
        </div>
        <div  className="text-end">
          <p className="text-[20px] text-[#ffffff] font-normal mt-[10px]">
          COMPANY
          </p>
          <Link href="/">
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            About Us
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            FAQ
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Privacy Policy
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Customer Policy
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Order Policy
            </p>
          </Link>
        </div>
        <div className="text-end">
          <p className="text-[20px] text-[#ffffff] font-normal mt-[10px]">
          SOCIAL
          </p>
          <Link href="/">
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Facebook
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            LinkedIn
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            Twitter
            </p>
          </Link>

          <Link href="/">
            {" "}
            <p className="text-[16px] text-[#1B75BC] font-normal  mt-[10px]">
            YouTube
            </p>
          </Link>

          
        </div>
      </div>
      <p className="text-[16px] text-[#1B75BC] font-normal  my-[14px]">
        @ 2024 All rights reserved by ScientistX Compnay PLC
      </p>
    </div>
  );
};

export default Footer;
