"use client";

import React, { useRef, useState, FormEvent } from "react";
// import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import { EarthCanvas } from "./canvas";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import EarthCanvas from "./canvas/earthcanvas";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_0d1wcsy",
        "template_0aigd4r",
        formRef.current,
        "d1g-e_Twl-pXRlLV_"
      );

      toast.success("Thank you. I will get back to you as soon as possible.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 max-w-7xl mx-auto">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-10 text-center font-semibold text-3xl md:text-5xl"
      >
        Contact <span className="text-[#ff9d42]">Us</span>
      </h2>

      <div className="xl:mt-12 flex xl:flex-row flex-col gap-5 overflow-hidden pt-4 md:pt-12">
        <ToastContainer />

        <div className="flex-[0.75] p-8 rounded-2xl mx-auto w-11/12 bg-[#0B1727]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <div className="grid-cols-1 xl:flex gap-5">
              <label className="flex flex-col mb-8 md:mb-0 w-full">
                <span className="font-medium mb-4 mt-2">Your Name</span>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="What's your good name?"
                  className="bg-[#2c3036] py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <label className="flex flex-col w-full">
                <span className="font-medium mt-2 mb-4">Your Email</span>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  placeholder="What's your email address?"
                  className="bg-[#2c3036] py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="font-medium mb-4">Estimated Budget</span>
              <input
                type="text"
                name="from_budget"
                id="budget"
                placeholder="E.g $800"
                className="bg-[#2c3036] py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                placeholder="Anything you want to say"
                className="bg-[#2c3036] py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-[#ff9d42] hover:bg-[#e0ac7c] py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="md:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
