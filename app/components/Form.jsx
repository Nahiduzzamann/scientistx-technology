'use client'
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

function Form() {
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
        alert("Success!")
        // Reset form fields
        setFormData({ number: "", contact: "", message: "" });
      };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-b lg:border-b-2 border-b-[#1B75BC] lg:py-4 py-2 text-white"
    >
      <p className="text-[#ffffff] text-[16px] font-normal text-center lg:py-4 py-2">
        Contact Us
      </p>
      <div className="flex md:flex-row flex-col justify-between md:gap-4">
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
  );
}

export default Form;
