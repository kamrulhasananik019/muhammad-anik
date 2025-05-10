'use client';

import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Github,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (

     <section className="p-3 pt-24 " >
          <div className=" flex  justify-center gap-5 md:gap-10 ">
            <div >
              <div className='w-5 h-5  rounded-full bg-[#e87913]' />
              <div className='w-1 mx-2 sm:h-80 h-40 violet-gradient' />
            </div>
            <div className="md:grid grid-cols-12 gap-5  pt-5">
              <div className="col-span-8">
                <h1 className="text-3xl md:text-4xl lg:text-6xl  font-extrabold">
                  Hi, Im  Kamrul Hasan <span className='text-[#ff9d42]'>ANIK</span>
                </h1>
                <p className="mt-3 md:mt-5 md:text-lg lg:text-3xl font-semibold">
                  <Typewriter words={['MERN Stack Developer', 'Full Stack Developer', 'ReactJs Developer','Web Developer']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
                <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 text-gray-600">
              <a
                href="https://www.linkedin.com/in/kamrulhasananik019"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="text-white hover:scale-125 transition duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/kamrulhasananik019"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="text-white hover:scale-125 transition duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/kamrulhasananik019"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="text-white hover:scale-125 transition duration-300 cursor-pointer" />
              </a>
              <a
                href="https://twitter.com/AnikKamrulhasan"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="text-white hover:scale-125 transition duration-300 cursor-pointer" />
              </a>
              <a
                href="https://github.com/kamrulhasananik019"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="text-white hover:scale-125 transition duration-300 cursor-pointer" />
              </a>
            </div>
    
            <div className="mt-10">
              <a
                href="https://drive.google.com/uc?export=download&id=1A0PKZBJG8naACSFi3DNXYK7Z8pMjq8Vr"
                className="relative ml-24 md:ml-0 px-5 py-2 font-medium text-white group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ffc942] group-hover:bg-[#ff8b43] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#ff8b43] group-hover:bg-[#ffc942] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#ffc942] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ffc942] -rotate-12"></span>
                <span className="relative">Resume</span>
              </a>
            </div>
              </div>
              <div className="mt-5 p-10 col-span-4">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLkmKSoo-uVVRR5LbVA-ymhVzn0gsLsvf0VbXyg5rhicy0=s288-c-no"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
  );
}
